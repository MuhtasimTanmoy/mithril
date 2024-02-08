(function() {var type_impls = {
"mithril_stm":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-VerificationKey\" class=\"impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#97-132\">source</a><a href=\"#impl-VerificationKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"mithril_stm/multi_sig/struct.VerificationKey.html\" title=\"struct mithril_stm::multi_sig::VerificationKey\">VerificationKey</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_bytes\" class=\"method\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#99-101\">source</a><h4 class=\"code-header\">pub fn <a href=\"mithril_stm/multi_sig/struct.VerificationKey.html#tymethod.to_bytes\" class=\"fn\">to_bytes</a>(self) -&gt; [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.array.html\">96</a>]</h4></section></summary><div class=\"docblock\"><p>Convert an <code>VerificationKey</code> to its compressed byte representation.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_bytes\" class=\"method\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#108-114\">source</a><h4 class=\"code-header\">pub fn <a href=\"mithril_stm/multi_sig/struct.VerificationKey.html#tymethod.from_bytes\" class=\"fn\">from_bytes</a>(bytes: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, MultiSignatureError&gt;</h4></section></summary><div class=\"docblock\"><p>Convert a compressed byte string into a <code>VerificationKey</code>.</p>\n<h5 id=\"error\"><a href=\"#error\">Error</a></h5>\n<p>This function fails if the bytes do not represent a compressed point of the prime\norder subgroup of the curve Bls12-381.</p>\n</div></details></div></details>",0,"mithril_stm::stm::StmVerificationKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialOrd-for-VerificationKey\" class=\"impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#154-158\">source</a><a href=\"#impl-PartialOrd-for-VerificationKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> for <a class=\"struct\" href=\"mithril_stm/multi_sig/struct.VerificationKey.html\" title=\"struct mithril_stm::multi_sig::VerificationKey\">VerificationKey</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.partial_cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#155-157\">source</a><a href=\"#method.partial_cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\" class=\"fn\">partial_cmp</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a>&gt;</h4></section></summary><div class='docblock'>This method returns an ordering between <code>self</code> and <code>other</code> values if one exists. <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/cmp.rs.html#1125\">source</a></span><a href=\"#method.lt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialOrd.html#method.lt\" class=\"fn\">lt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;</code> operator. <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialOrd.html#method.lt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.le\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/cmp.rs.html#1142\">source</a></span><a href=\"#method.le\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialOrd.html#method.le\" class=\"fn\">le</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialOrd.html#method.le\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/cmp.rs.html#1158\">source</a></span><a href=\"#method.gt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialOrd.html#method.gt\" class=\"fn\">gt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;</code> operator. <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialOrd.html#method.gt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ge\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/cmp.rs.html#1175\">source</a></span><a href=\"#method.ge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialOrd.html#method.ge\" class=\"fn\">ge</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialOrd.html#method.ge\">Read more</a></div></details></div></details>","PartialOrd","mithril_stm::stm::StmVerificationKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Sum%3C%26VerificationKey%3E-for-VerificationKey\" class=\"impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#166-180\">source</a><a href=\"#impl-Sum%3C%26VerificationKey%3E-for-VerificationKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"mithril_stm/multi_sig/struct.VerificationKey.html\" title=\"struct mithril_stm::multi_sig::VerificationKey\">VerificationKey</a>&gt; for <a class=\"struct\" href=\"mithril_stm/multi_sig/struct.VerificationKey.html\" title=\"struct mithril_stm::multi_sig::VerificationKey\">VerificationKey</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.sum\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#167-179\">source</a><a href=\"#method.sum\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/iter/traits/accum/trait.Sum.html#tymethod.sum\" class=\"fn\">sum</a>&lt;I&gt;(iter: I) -&gt; Self<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;'a Self</a>&gt;,</div></h4></section></summary><div class='docblock'>Method which takes an iterator and generates <code>Self</code> from the elements by\n“summing up” the items.</div></details></div></details>","Sum<&'a VerificationKey>","mithril_stm::stm::StmVerificationKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-VerificationKey\" class=\"impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#146-150\">source</a><a href=\"#impl-PartialEq-for-VerificationKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"mithril_stm/multi_sig/struct.VerificationKey.html\" title=\"struct mithril_stm::multi_sig::VerificationKey\">VerificationKey</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#147-149\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","mithril_stm::stm::StmVerificationKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-VerificationKey\" class=\"impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#526\">source</a><a href=\"#impl-Serialize-for-VerificationKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"mithril_stm/multi_sig/struct.VerificationKey.html\" title=\"struct mithril_stm::multi_sig::VerificationKey\">VerificationKey</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#526\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;S&gt;(&amp;self, serializer: S) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","mithril_stm::stm::StmVerificationKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-VerificationKey\" class=\"impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#36\">source</a><a href=\"#impl-Debug-for-VerificationKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"mithril_stm/multi_sig/struct.VerificationKey.html\" title=\"struct mithril_stm::multi_sig::VerificationKey\">VerificationKey</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#36\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","mithril_stm::stm::StmVerificationKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-VerificationKey\" class=\"impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#526\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-VerificationKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"mithril_stm/multi_sig/struct.VerificationKey.html\" title=\"struct mithril_stm::multi_sig::VerificationKey\">VerificationKey</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#526\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;D&gt;(deserializer: D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, D::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","mithril_stm::stm::StmVerificationKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-VerificationKey\" class=\"impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#134-138\">source</a><a href=\"#impl-Display-for-VerificationKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"mithril_stm/multi_sig/struct.VerificationKey.html\" title=\"struct mithril_stm::multi_sig::VerificationKey\">VerificationKey</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#135-137\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","mithril_stm::stm::StmVerificationKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-VerificationKey\" class=\"impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#36\">source</a><a href=\"#impl-Default-for-VerificationKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"mithril_stm/multi_sig/struct.VerificationKey.html\" title=\"struct mithril_stm::multi_sig::VerificationKey\">VerificationKey</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#36\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"mithril_stm/multi_sig/struct.VerificationKey.html\" title=\"struct mithril_stm::multi_sig::VerificationKey\">VerificationKey</a></h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.76.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","mithril_stm::stm::StmVerificationKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-VerificationKey\" class=\"impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#140-144\">source</a><a href=\"#impl-Hash-for-VerificationKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"mithril_stm/multi_sig/struct.VerificationKey.html\" title=\"struct mithril_stm::multi_sig::VerificationKey\">VerificationKey</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#141-143\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;mut H</a>)</h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.76.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.76.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.76.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.76.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","mithril_stm::stm::StmVerificationKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Ord-for-VerificationKey\" class=\"impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#160-164\">source</a><a href=\"#impl-Ord-for-VerificationKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"mithril_stm/multi_sig/struct.VerificationKey.html\" title=\"struct mithril_stm::multi_sig::VerificationKey\">VerificationKey</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#161-163\">source</a><a href=\"#method.cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.Ord.html#tymethod.cmp\" class=\"fn\">cmp</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a></h4></section></summary><div class='docblock'>This method returns an <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\"><code>Ordering</code></a> between <code>self</code> and <code>other</code>. <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.Ord.html#tymethod.cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/cmp.rs.html#829-831\">source</a></span><a href=\"#method.max\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.Ord.html#method.max\" class=\"fn\">max</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the maximum of two values. <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.Ord.html#method.max\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/cmp.rs.html#849-851\">source</a></span><a href=\"#method.min\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.Ord.html#method.min\" class=\"fn\">min</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the minimum of two values. <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.Ord.html#method.min\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clamp\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.50.0\">1.50.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/cmp.rs.html#874-877\">source</a></span><a href=\"#method.clamp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.Ord.html#method.clamp\" class=\"fn\">clamp</a>(self, min: Self, max: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</div></h4></section></summary><div class='docblock'>Restrict a value to a certain interval. <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.Ord.html#method.clamp\">Read more</a></div></details></div></details>","Ord","mithril_stm::stm::StmVerificationKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C%26SigningKey%3E-for-VerificationKey\" class=\"impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#182-189\">source</a><a href=\"#impl-From%3C%26SigningKey%3E-for-VerificationKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"mithril_stm/multi_sig/struct.SigningKey.html\" title=\"struct mithril_stm::multi_sig::SigningKey\">SigningKey</a>&gt; for <a class=\"struct\" href=\"mithril_stm/multi_sig/struct.VerificationKey.html\" title=\"struct mithril_stm::multi_sig::VerificationKey\">VerificationKey</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#186-188\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(sk: &amp;<a class=\"struct\" href=\"mithril_stm/multi_sig/struct.SigningKey.html\" title=\"struct mithril_stm::multi_sig::SigningKey\">SigningKey</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Convert a secret key into an <code>MspMvk</code>. This is performed by computing\n<code>MspMvk = g2 * sk</code>, where <code>g2</code> is the generator in G2. We can use the\nblst built-in function <code>sk_to_pk</code>.</p>\n</div></details></div></details>","From<&SigningKey>","mithril_stm::stm::StmVerificationKey"],["<section id=\"impl-Copy-for-VerificationKey\" class=\"impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#36\">source</a><a href=\"#impl-Copy-for-VerificationKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"mithril_stm/multi_sig/struct.VerificationKey.html\" title=\"struct mithril_stm::multi_sig::VerificationKey\">VerificationKey</a></h3></section>","Copy","mithril_stm::stm::StmVerificationKey"],["<section id=\"impl-Eq-for-VerificationKey\" class=\"impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#152\">source</a><a href=\"#impl-Eq-for-VerificationKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"mithril_stm/multi_sig/struct.VerificationKey.html\" title=\"struct mithril_stm::multi_sig::VerificationKey\">VerificationKey</a></h3></section>","Eq","mithril_stm::stm::StmVerificationKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-VerificationKey\" class=\"impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#36\">source</a><a href=\"#impl-Clone-for-VerificationKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"mithril_stm/multi_sig/struct.VerificationKey.html\" title=\"struct mithril_stm::multi_sig::VerificationKey\">VerificationKey</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mithril_stm/multi_sig.rs.html#36\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"mithril_stm/multi_sig/struct.VerificationKey.html\" title=\"struct mithril_stm::multi_sig::VerificationKey\">VerificationKey</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","mithril_stm::stm::StmVerificationKey"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()