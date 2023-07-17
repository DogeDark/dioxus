use crate::{Error, Result};
use std::path::PathBuf;

use self::util::File;

pub mod index_file;
pub mod pull_assets;
pub mod util;
pub mod wasm_build;

/// Represents a pipeline with it's own config and steps.
pub struct Pipeline {
    config: PipelineConfig,
    steps: Vec<Box<dyn PipelineStep>>,
}

impl Pipeline {
    /// Build a new pipeline.
    pub fn new(config: PipelineConfig) -> Self {
        Self {
            config,
            steps: Vec::new(),
        }
    }

    /// Add a step to the pipeline.
    /// Steps run in the order they are added.
    pub fn with_step(mut self, step: Box<dyn PipelineStep>) -> Self {
        self.steps.push(step);
        self
    }

    /// Run the pipeline and all steps with it.
    pub fn run(mut self) -> Result<()> {
        // Collect src input files
        let mut files = util::from_dir(PathBuf::from("./src"))?;
        self.config.input_files.append(&mut files);

        // In the future we could add multithreaded support
        for mut step in self.steps {
            step.run(&mut self.config)?;
        }

        Ok(())
    }
}

/// Configures the pipeline with the information it needs to complete.
pub struct PipelineConfig {
    /// Information related to the pipeline's target crate.
    crate_info: CrateInfo,
    /// Information related to how the pipeline should build the target crate.
    build_config: BuildConfig,
    /// Represents the raw source files.
    input_files: Vec<File>,
    /// Represents either a completed or processed artifact from the pipeline.
    output_files: Vec<File>,
}

impl PipelineConfig {
    /// Create a new PipelineConfig
    pub fn new(crate_info: CrateInfo, build_config: BuildConfig) -> Self {
        Self {
            crate_info,
            build_config,
            input_files: Vec::new(),
            output_files: Vec::new(),
        }
    }
}

/// Represents information about a crate.
pub struct CrateInfo {
    /// If the crate is in a workspace this value will point to the workspace root.
    workspace_path: Option<PathBuf>,
    /// The path to the crate itself.
    path: PathBuf,
    /// The name of the crate.
    name: String,
}

impl CrateInfo {
    /// Creates a new CrateInfo
    pub fn new(workspace_path: Option<PathBuf>, path: PathBuf, name: String) -> Self {
        Self {
            workspace_path,
            path,
            name,
        }
    }

    /// Automagically get the crate config from ``Cargo.toml``.
    pub fn from_toml(target_bin: Option<PathBuf>) -> Result<Self> {
        let mut workspace_path = PathBuf::from("../");
        let mut crate_path = PathBuf::from("./");

        // If target bin, we should already be in a workspace
        if let Some(bin) = target_bin {
            workspace_path = PathBuf::from("./");
            crate_path = bin
        }

        // Check if workspace is actually a workspace
        let workspace_path = if let Ok(manifest) =
            cargo_toml::Manifest::from_path(workspace_path.join("Cargo.toml"))
        {
            if manifest.workspace.is_some() {
                Some(workspace_path)
            } else {
                None
            }
        } else {
            None
        };

        // Get target crate's Cargo.toml
        let manifest = cargo_toml::Manifest::from_path(crate_path.join("Cargo.toml"))
            .map_err(|e| Error::CargoError(e.to_string()))?;

        // Get package name
        let name = if let Some(package) = manifest.package {
            package.name
        } else {
            return Err(Error::CargoError(
                "No buildable crates found. Are you running this from the correct path?\nIf this is a workspace, use the --bin flag.".to_string(),
            ));
        };

        Ok(Self::new(workspace_path, crate_path, name))
    }
}

/// Describes how the pipeline should build the target crate.
pub struct BuildConfig {
    /// Whether the pipeline should run for release mode.
    release: bool,
    /// Whether the pipeline should emit more verbose information.
    verbose: bool,
    /// The features the pipeline should build for.
    features: Vec<String>,
}

impl BuildConfig {
    /// Create a new BuildConfig
    pub fn new(release: bool, verbose: bool, features: Vec<String>) -> Self {
        Self {
            release,
            verbose,
            features,
        }
    }
}

/// Represents a step in the pipeline.
pub trait PipelineStep {
    fn run(&mut self, config: &mut PipelineConfig) -> Result<()>;
}
