(function() {var type_impls = {
"dioxus_native_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-View%3C'a,+T%3E\" class=\"impl\"><a href=\"#impl-View%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T&gt; View&lt;'a, T&gt;<div class=\"where\">where\n    T: Component,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_inserted\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">is_inserted</a>(&amp;self, entity: <a class=\"struct\" href=\"dioxus_native_core/struct.NodeId.html\" title=\"struct dioxus_native_core::NodeId\">EntityId</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Inside a workload returns <code>true</code> if <code>entity</code>’s component was inserted since the last run of this system.<br />\nOutside workloads returns <code>true</code> if <code>entity</code>’s component was inserted since the last call to <a href=\"ViewMut::clear_all_inserted\"><code>clear_all_inserted</code></a>.<br />\nReturns <code>false</code> if <code>entity</code> does not have a component in this storage.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_modified\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">is_modified</a>(&amp;self, entity: <a class=\"struct\" href=\"dioxus_native_core/struct.NodeId.html\" title=\"struct dioxus_native_core::NodeId\">EntityId</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Inside a workload returns <code>true</code> if <code>entity</code>’s component was modified since the last run of this system.<br />\nOutside workloads returns <code>true</code> if <code>entity</code>’s component was modified since the last call to <a href=\"ViewMut::clear_all_modified\"><code>clear_all_modified</code></a>.<br />\nReturns <code>false</code> if <code>entity</code> does not have a component in this storage.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_inserted_or_modified\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">is_inserted_or_modified</a>(&amp;self, entity: <a class=\"struct\" href=\"dioxus_native_core/struct.NodeId.html\" title=\"struct dioxus_native_core::NodeId\">EntityId</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Inside a workload returns <code>true</code> if <code>entity</code>’s component was inserted or modified since the last run of this system.<br />\nOutside workloads returns <code>true</code> if <code>entity</code>’s component was inserted or modified since the last clear call.<br />\nReturns <code>false</code> if <code>entity</code> does not have a component in this storage.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_deleted\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">is_deleted</a>(&amp;self, entity: <a class=\"struct\" href=\"dioxus_native_core/struct.NodeId.html\" title=\"struct dioxus_native_core::NodeId\">EntityId</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Inside a workload returns <code>true</code> if <code>entity</code>’s component was deleted since the last run of this system.<br />\nOutside workloads returns <code>true</code> if <code>entity</code>’s component was deleted since the last call to <a href=\"SparseSet::clear_all_deleted\"><code>clear_all_deleted</code></a>.<br />\nReturns <code>false</code> if <code>entity</code> does not have a component in this storage.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_removed\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">is_removed</a>(&amp;self, entity: <a class=\"struct\" href=\"dioxus_native_core/struct.NodeId.html\" title=\"struct dioxus_native_core::NodeId\">EntityId</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Inside a workload returns <code>true</code> if <code>entity</code>’s component was removed since the last run of this system.<br />\nOutside workloads returns <code>true</code> if <code>entity</code>’s component was removed since the last call to <a href=\"SparseSet::clear_all_removed\"><code>clear_all_removed</code></a>.<br />\nReturns <code>false</code> if <code>entity</code> does not have a component in this storage.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_removed_or_deleted\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">is_removed_or_deleted</a>(&amp;self, entity: <a class=\"struct\" href=\"dioxus_native_core/struct.NodeId.html\" title=\"struct dioxus_native_core::NodeId\">EntityId</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Inside a workload returns <code>true</code> if <code>entity</code>’s component was deleted or removed since the last run of this system.<br />\nOutside workloads returns <code>true</code> if <code>entity</code>’s component was deleted or removed since the last clear call.<br />\nReturns <code>false</code> if <code>entity</code> does not have a component in this storage.</p>\n</div></details></div></details>",0,"dioxus_native_core::tree::TreeRefView"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-View%3C'a,+T,+Untracked%3E\" class=\"impl\"><a href=\"#impl-View%3C'a,+T,+Untracked%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T&gt; View&lt;'a, T, Untracked&gt;<div class=\"where\">where\n    T: Component&lt;Tracking = Untracked&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_for_custom_storage\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new_for_custom_storage</a>(\n    storage_id: StorageId,\n    all_storages: Ref&lt;'a, &amp;'a AllStorages&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;View&lt;'a, T, Untracked&gt;, CustomStorageView&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new [<code>View</code>] for custom [<code>SparseSet</code>] storage.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>shipyard::{track, Component, SparseSet, StorageId, View, World};\n\n<span class=\"kw\">struct </span>ScriptingComponent(Vec&lt;u8&gt;);\n<span class=\"kw\">impl </span>Component <span class=\"kw\">for </span>ScriptingComponent {\n    <span class=\"kw\">type </span>Tracking = track::Untracked;\n}\n\n<span class=\"kw\">let </span>world = World::new();\n\nworld.add_custom_storage(\n    StorageId::Custom(<span class=\"number\">0</span>),\n    SparseSet::&lt;ScriptingComponent&gt;::new_custom_storage(),\n).unwrap();\n\n<span class=\"kw\">let </span>all_storages = world.all_storages().unwrap();\n<span class=\"kw\">let </span>scripting_storage =\n    View::&lt;ScriptingComponent&gt;::new_for_custom_storage(StorageId::Custom(<span class=\"number\">0</span>), all_storages)\n        .unwrap();</code></pre></div>\n</div></details></div></details>",0,"dioxus_native_core::tree::TreeRefView"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-View%3C'_,+T,+Insertion%3E\" class=\"impl\"><a href=\"#impl-View%3C'_,+T,+Insertion%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; View&lt;'_, T, Insertion&gt;<div class=\"where\">where\n    T: Component&lt;Tracking = Insertion&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.inserted\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">inserted</a>(&amp;self) -&gt; Inserted&lt;&amp;View&lt;'_, T, Insertion&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Wraps this view to be able to iterate <em>inserted</em> components.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inserted_or_modified\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">inserted_or_modified</a>(\n    &amp;self\n) -&gt; InsertedOrModified&lt;&amp;View&lt;'_, T, Insertion&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Wraps this view to be able to iterate <em>inserted</em> and <em>modified</em> components.</p>\n</div></details></div></details>",0,"dioxus_native_core::tree::TreeRefView"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-View%3C'_,+T,+Modification%3E\" class=\"impl\"><a href=\"#impl-View%3C'_,+T,+Modification%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; View&lt;'_, T, Modification&gt;<div class=\"where\">where\n    T: Component&lt;Tracking = Modification&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.modified\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">modified</a>(&amp;self) -&gt; Modified&lt;&amp;View&lt;'_, T, Modification&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Wraps this view to be able to iterate <em>modified</em> components.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inserted_or_modified\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">inserted_or_modified</a>(\n    &amp;self\n) -&gt; InsertedOrModified&lt;&amp;View&lt;'_, T, Modification&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Wraps this view to be able to iterate <em>inserted</em> and <em>modified</em> components.</p>\n</div></details></div></details>",0,"dioxus_native_core::tree::TreeRefView"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-View%3C'_,+T,+Deletion%3E\" class=\"impl\"><a href=\"#impl-View%3C'_,+T,+Deletion%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; View&lt;'_, T, Deletion&gt;<div class=\"where\">where\n    T: Component&lt;Tracking = Deletion&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deleted\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">deleted</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = (<a class=\"struct\" href=\"dioxus_native_core/struct.NodeId.html\" title=\"struct dioxus_native_core::NodeId\">EntityId</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;T</a>)&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the <em>deleted</em> components of a storage tracking deletion.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.removed_or_deleted\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">removed_or_deleted</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"struct\" href=\"dioxus_native_core/struct.NodeId.html\" title=\"struct dioxus_native_core::NodeId\">EntityId</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the ids of <em>removed</em> or <em>deleted</em> components of a storage tracking removal and/or deletion.</p>\n</div></details></div></details>",0,"dioxus_native_core::tree::TreeRefView"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-View%3C'_,+T,+Removal%3E\" class=\"impl\"><a href=\"#impl-View%3C'_,+T,+Removal%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; View&lt;'_, T, Removal&gt;<div class=\"where\">where\n    T: Component&lt;Tracking = Removal&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.removed\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">removed</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"struct\" href=\"dioxus_native_core/struct.NodeId.html\" title=\"struct dioxus_native_core::NodeId\">EntityId</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the ids of <em>removed</em> components of a storage tracking removal.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.removed_or_deleted\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">removed_or_deleted</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"struct\" href=\"dioxus_native_core/struct.NodeId.html\" title=\"struct dioxus_native_core::NodeId\">EntityId</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the ids of <em>removed</em> or <em>deleted</em> components of a storage tracking removal and/or deletion.</p>\n</div></details></div></details>",0,"dioxus_native_core::tree::TreeRefView"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-View%3C'_,+T,+All%3E\" class=\"impl\"><a href=\"#impl-View%3C'_,+T,+All%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; View&lt;'_, T, All&gt;<div class=\"where\">where\n    T: Component&lt;Tracking = All&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.inserted\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">inserted</a>(&amp;self) -&gt; Inserted&lt;&amp;View&lt;'_, T, All&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Wraps this view to be able to iterate <em>inserted</em> components.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.modified\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">modified</a>(&amp;self) -&gt; Modified&lt;&amp;View&lt;'_, T, All&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Wraps this view to be able to iterate <em>modified</em> components.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inserted_or_modified\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">inserted_or_modified</a>(&amp;self) -&gt; InsertedOrModified&lt;&amp;View&lt;'_, T, All&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Wraps this view to be able to iterate <em>inserted</em> and <em>modified</em> components.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deleted\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">deleted</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = (<a class=\"struct\" href=\"dioxus_native_core/struct.NodeId.html\" title=\"struct dioxus_native_core::NodeId\">EntityId</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;T</a>)&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the <em>deleted</em> components of a storage tracking deletion.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.removed\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">removed</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"struct\" href=\"dioxus_native_core/struct.NodeId.html\" title=\"struct dioxus_native_core::NodeId\">EntityId</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the ids of <em>removed</em> components of a storage tracking removal.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.removed_or_deleted\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">removed_or_deleted</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"struct\" href=\"dioxus_native_core/struct.NodeId.html\" title=\"struct dioxus_native_core::NodeId\">EntityId</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the ids of <em>removed</em> or <em>deleted</em> components of a storage tracking removal and/or deletion.</p>\n</div></details></div></details>",0,"dioxus_native_core::tree::TreeRefView"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Index%3CEntityId%3E-for-View%3C'_,+T%3E\" class=\"impl\"><a href=\"#impl-Index%3CEntityId%3E-for-View%3C'_,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/ops/index/trait.Index.html\" title=\"trait core::ops::index::Index\">Index</a>&lt;<a class=\"struct\" href=\"dioxus_native_core/struct.NodeId.html\" title=\"struct dioxus_native_core::NodeId\">EntityId</a>&gt; for View&lt;'_, T&gt;<div class=\"where\">where\n    T: Component,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.76.0/core/ops/index/trait.Index.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = T</h4></section></summary><div class='docblock'>The returned type after indexing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.index\" class=\"method trait-impl\"><a href=\"#method.index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/ops/index/trait.Index.html#tymethod.index\" class=\"fn\">index</a>(&amp;self, entity: <a class=\"struct\" href=\"dioxus_native_core/struct.NodeId.html\" title=\"struct dioxus_native_core::NodeId\">EntityId</a>) -&gt; &amp;&lt;View&lt;'_, T&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/ops/index/trait.Index.html\" title=\"trait core::ops::index::Index\">Index</a>&lt;<a class=\"struct\" href=\"dioxus_native_core/struct.NodeId.html\" title=\"struct dioxus_native_core::NodeId\">EntityId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.76.0/core/ops/index/trait.Index.html#associatedtype.Output\" title=\"type core::ops::index::Index::Output\">Output</a></h4></section></summary><div class='docblock'>Performs the indexing (<code>container[index]</code>) operation. <a href=\"https://doc.rust-lang.org/1.76.0/core/ops/index/trait.Index.html#tymethod.index\">Read more</a></div></details></div></details>","Index<EntityId>","dioxus_native_core::tree::TreeRefView"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsRef%3CSparseSet%3CT%3E%3E-for-View%3C'a,+T%3E\" class=\"impl\"><a href=\"#impl-AsRef%3CSparseSet%3CT%3E%3E-for-View%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;SparseSet&lt;T&gt;&gt; for View&lt;'a, T&gt;<div class=\"where\">where\n    T: Component,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ref\" class=\"method trait-impl\"><a href=\"#method.as_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.AsRef.html#tymethod.as_ref\" class=\"fn\">as_ref</a>(&amp;self) -&gt; &amp;SparseSet&lt;T&gt;</h4></section></summary><div class='docblock'>Converts this type into a shared reference of the (usually inferred) input type.</div></details></div></details>","AsRef<SparseSet<T>>","dioxus_native_core::tree::TreeRefView"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-View%3C'_,+T%3E\" class=\"impl\"><a href=\"#impl-Debug-for-View%3C'_,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for View&lt;'_, T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + Component,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","dioxus_native_core::tree::TreeRefView"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-View%3C'a,+T%3E\" class=\"impl\"><a href=\"#impl-Clone-for-View%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for View&lt;'a, T&gt;<div class=\"where\">where\n    T: Component,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; View&lt;'a, T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","dioxus_native_core::tree::TreeRefView"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-View%3C'a,+T%3E\" class=\"impl\"><a href=\"#impl-Deref-for-View%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for View&lt;'a, T&gt;<div class=\"where\">where\n    T: Component,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.76.0/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = SparseSet&lt;T&gt;</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; &amp;&lt;View&lt;'a, T&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.76.0/core/ops/deref/trait.Deref.html#associatedtype.Target\" title=\"type core::ops::deref::Deref::Target\">Target</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","dioxus_native_core::tree::TreeRefView"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoBorrow-for-View%3C'_,+T%3E\" class=\"impl\"><a href=\"#impl-IntoBorrow-for-View%3C'_,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; IntoBorrow for View&lt;'_, T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + Component,\n    &lt;T as Component&gt;::Tracking: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Borrow\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Borrow\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Borrow</a> = ViewBorrower&lt;T&gt;</h4></section></summary><div class='docblock'>Helper type almost allowing GAT on stable.</div></details></div></details>","IntoBorrow","dioxus_native_core::tree::TreeRefView"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BorrowInfo-for-View%3C'a,+T%3E\" class=\"impl\"><a href=\"#impl-BorrowInfo-for-View%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T&gt; BorrowInfo for View&lt;'a, T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + Component,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.borrow_info\" class=\"method trait-impl\"><a href=\"#method.borrow_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">borrow_info</a>(info: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;TypeInfo&gt;)</h4></section></summary><div class='docblock'>This information is used during workload creation to determine which systems can run in parallel. <a>Read more</a></div></details></div></details>","BorrowInfo","dioxus_native_core::tree::TreeRefView"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()