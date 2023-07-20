use fern::colors::{Color, ColoredLevelConfig};
use indicatif::{ProgressBar, ProgressStyle};

pub fn set_up_logging() {
    // configure colors for the whole line
    let colors_line = ColoredLevelConfig::new()
        .error(Color::Red)
        .warn(Color::Yellow)
        // we actually don't need to specify the color for debug and info, they are white by default
        .info(Color::White)
        .debug(Color::White)
        // depending on the terminals color scheme, this is the same as the background color
        .trace(Color::BrightBlack);

    // configure colors for the name of the level.
    // since almost all of them are the same as the color for the whole line, we
    // just clone `colors_line` and overwrite our changes
    let colors_level = colors_line.info(Color::Green);
    // here we set up our fern Dispatch
    fern::Dispatch::new()
        .format(move |out, message, record| {
            out.finish(format_args!(
                "{color_line}[{level}{color_line}] {message}\x1B[0m",
                color_line = format_args!(
                    "\x1B[{}m",
                    colors_line.get_color(&record.level()).to_fg_str()
                ),
                level = colors_level.color(record.level()),
                message = message,
            ));
        })
        .level(log::LevelFilter::Info)
        .chain(std::io::stdout())
        .apply()
        .unwrap();
}

/// A progress 'spinner'
#[derive(Clone)]
pub struct ProgressSpinner(ProgressBar);

impl ProgressSpinner {
    pub fn new<S: ToString>(message: S) -> Self {
        let message = message.to_string();
        let pb = ProgressBar::new_spinner();
        pb.set_message(message.to_string());
        pb.set_style(
            ProgressStyle::default_spinner()
                .tick_strings(&["[.   ]", "[ .  ]", "[  . ]", "[   .]", "[  . ]", "[ .  ]"]),
        );
        pb.enable_steady_tick(std::time::Duration::from_millis(50));
        Self(pb)
    }

    pub fn set_message<S: ToString>(&self, message: S) {
        let message = message.to_string();
        self.0.set_message(message);
    }

    pub fn done(&self) {
        self.done_and_clear();
        log::info!("{}", self.0.message());
    }

    pub fn done_and_clear(&self) {
        self.0.finish_and_clear();
    }
}

impl Drop for ProgressSpinner {
    fn drop(&mut self) {
        self.done_and_clear();
    }
}
