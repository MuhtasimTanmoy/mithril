(function() {var type_impls = {
"mithril_common":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-StmClerk%3CD%3E\" class=\"impl\"><a href=\"#impl-StmClerk%3CD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D&gt; StmClerk&lt;D&gt;<div class=\"where\">where\n    D: Digest + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FixedOutput,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_registration\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">from_registration</a>(\n    params: &amp;StmParameters,\n    closed_reg: &amp;ClosedKeyReg&lt;D&gt;\n) -&gt; StmClerk&lt;D&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new <code>Clerk</code> from a closed registration instance.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_signer\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">from_signer</a>(signer: &amp;StmSigner&lt;D&gt;) -&gt; StmClerk&lt;D&gt;</h4></section></summary><div class=\"docblock\"><p>Create a Clerk from a signer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.aggregate\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">aggregate</a>(\n    &amp;self,\n    sigs: &amp;[StmSig],\n    msg: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u8.html\">u8</a>]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;StmAggrSig&lt;D&gt;, AggregationError&gt;</h4></section></summary><div class=\"docblock\"><p>Aggregate a set of signatures for their corresponding indices.</p>\n<p>This function first deduplicates the repeated signatures, and if there are enough signatures, it collects the merkle tree indexes of unique signatures.\nThe list of merkle tree indexes is used to create a batch proof, to prove that all signatures are from eligible signers.</p>\n<p>It returns an instance of <code>StmAggrSig</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.compute_avk\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">compute_avk</a>(&amp;self) -&gt; StmAggrVerificationKey&lt;D&gt;</h4></section></summary><div class=\"docblock\"><p>Compute the <code>StmAggrVerificationKey</code> related to the used registration.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_reg_party\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">get_reg_party</a>(&amp;self, party_index: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;(VerificationKey, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a>)&gt;</h4></section></summary><div class=\"docblock\"><p>Get the (VK, stake) of a party given its index.</p>\n</div></details></div></details>",0,"mithril_common::crypto_helper::types::alias::ProtocolClerk"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-StmClerk%3CD%3E\" class=\"impl\"><a href=\"#impl-Clone-for-StmClerk%3CD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for StmClerk&lt;D&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Digest,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; StmClerk&lt;D&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","mithril_common::crypto_helper::types::alias::ProtocolClerk"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-StmClerk%3CD%3E\" class=\"impl\"><a href=\"#impl-Debug-for-StmClerk%3CD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for StmClerk&lt;D&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Digest,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","mithril_common::crypto_helper::types::alias::ProtocolClerk"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()