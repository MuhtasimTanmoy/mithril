(function() {var type_impls = {
"mithril_common":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-StmParameters\" class=\"impl\"><a href=\"#impl-StmParameters\" class=\"anchor\">§</a><h3 class=\"code-header\">impl StmParameters</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_bytes\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">to_bytes</a>(&amp;self) -&gt; [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.array.html\">24</a>]</h4></section></summary><div class=\"docblock\"><p>Convert to bytes</p>\n<h5 id=\"layout\"><a href=\"#layout\">Layout</a></h5>\n<ul>\n<li>Security parameter, <code>m</code> (as u64)</li>\n<li>Quorum parameter, <code>k</code> (as u64)</li>\n<li>Phi f, as (f64)</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_bytes\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">from_bytes</a>(bytes: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;StmParameters, RegisterError&gt;</h4></section></summary><div class=\"docblock\"><p>Extract the <code>StmParameters</code> from a byte slice.</p>\n<h5 id=\"error\"><a href=\"#error\">Error</a></h5>\n<p>The function fails if the given string of bytes is not of required size.</p>\n</div></details></div></details>",0,"mithril_common::crypto_helper::types::alias::ProtocolParameters"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-StmParameters\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-StmParameters\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for StmParameters</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;StmParameters, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","mithril_common::crypto_helper::types::alias::ProtocolParameters"],["<section id=\"impl-StructuralPartialEq-for-StmParameters\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-StmParameters\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for StmParameters</h3></section>","StructuralPartialEq","mithril_common::crypto_helper::types::alias::ProtocolParameters"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-StmParameters\" class=\"impl\"><a href=\"#impl-Clone-for-StmParameters\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for StmParameters</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; StmParameters</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","mithril_common::crypto_helper::types::alias::ProtocolParameters"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-StmParameters\" class=\"impl\"><a href=\"#impl-Serialize-for-StmParameters\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for StmParameters</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","mithril_common::crypto_helper::types::alias::ProtocolParameters"],["<section id=\"impl-Copy-for-StmParameters\" class=\"impl\"><a href=\"#impl-Copy-for-StmParameters\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for StmParameters</h3></section>","Copy","mithril_common::crypto_helper::types::alias::ProtocolParameters"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-StmParameters\" class=\"impl\"><a href=\"#impl-Debug-for-StmParameters\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for StmParameters</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","mithril_common::crypto_helper::types::alias::ProtocolParameters"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-StmParameters\" class=\"impl\"><a href=\"#impl-PartialEq-for-StmParameters\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for StmParameters</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;StmParameters) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","mithril_common::crypto_helper::types::alias::ProtocolParameters"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()