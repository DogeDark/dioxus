use dioxus::dioxus_core::Mutation::*;
use dioxus::prelude::*;
use dioxus_core::ElementId;
use pretty_assertions::assert_eq;

// A real-world usecase of templates at peak performance
// In react, this would be a lot of node creation.
//
// In Dioxus, we memoize the rsx! body and simplify it down to a few template loads
//
// Also note that the IDs increase linearly. This lets us drive a vec on the renderer for O(1) re-indexing
fn app() -> Element {
    rsx! {
        div {
            for i in 0..3 {
                div {
                    h1 { "hello world! "}
                    p { "{i}" }
                }
            }
        }
    }
}

#[test]
fn list_renders() {
    let mut dom = VirtualDom::new(app);

    let edits = dom.rebuild_to_vec();

    // note: we dont test template edits anymore
    // assert_eq!(
    //     edits.templates,
    //     [
    //         // Create the outer div
    //         CreateElement { name: "div" },
    //         // todo: since this is the only child, we should just use
    //         // append when modify the values (IE no need for a placeholder)
    //         CreateStaticPlaceholder,
    //         AppendChildren { m: 1 },
    //         SaveTemplate {  m: 1 },
    //         // Create the inner template div
    //         CreateElement { name: "div" },
    //         CreateElement { name: "h1" },
    //         CreateStaticText { value: "hello world! " },
    //         AppendChildren { m: 1 },
    //         CreateElement { name: "p" },
    //         CreateTextPlaceholder,
    //         AppendChildren { m: 1 },
    //         AppendChildren { m: 2 },
    //         SaveTemplate {  m: 1 }
    //     ],
    // );

    assert_eq!(
        edits.edits,
        [
            // Load the outer div
            LoadTemplate { index: 0, id: ElementId(1) },
            // Load each template one-by-one, rehydrating it
            LoadTemplate { index: 0, id: ElementId(2) },
            CreateTextNode { value: "0".to_string(), id: ElementId(3) },
            ReplacePlaceholder { path: &[1, 0], m: 1 },
            LoadTemplate { index: 0, id: ElementId(4) },
            CreateTextNode { value: "1".to_string(), id: ElementId(5) },
            ReplacePlaceholder { path: &[1, 0], m: 1 },
            LoadTemplate { index: 0, id: ElementId(6) },
            CreateTextNode { value: "2".to_string(), id: ElementId(7) },
            ReplacePlaceholder { path: &[1, 0], m: 1 },
            // Replace the 0th childn on the div with the 3 templates on the stack
            ReplacePlaceholder { m: 3, path: &[0] },
            // Append the container div to the dom
            AppendChildren { m: 1, id: ElementId(0) }
        ],
    )
}
