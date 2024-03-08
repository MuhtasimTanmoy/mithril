"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[8089],{62326:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=n(85893),o=n(11151);const i={slug:6,title:"6. Errors implementation Standard\n",authors:[{name:"Mithril Team"}],tags:["Accepted"],date:new Date("2023-09-27T00:00:00.000Z")},s=void 0,a={permalink:"/doc/adr/6",source:"@site/adr/006-errors-implementation.md",title:"6. Errors implementation Standard\n",description:"Status",date:"2023-09-27T00:00:00.000Z",formattedDate:"September 27, 2023",tags:[{label:"Accepted",permalink:"/doc/adr/tags/accepted"}],readingTime:5.37,hasTruncateMarker:!1,authors:[{name:"Mithril Team"}],frontMatter:{slug:"6",title:"6. Errors implementation Standard\n",authors:[{name:"Mithril Team"}],tags:["Accepted"],date:"2023-09-27T00:00:00.000Z"},unlisted:!1,prevItem:{title:"7. Standardize log output\n",permalink:"/doc/adr/7"},nextItem:{title:"5. Use rfc3339 for date formatting \n",permalink:"/doc/adr/5"}},d={authorsImageUrls:[void 0]},c=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}];function h(r){const e={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...r.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"status",children:"Status"}),"\n",(0,t.jsx)(e.p,{children:"Accepted"}),"\n",(0,t.jsx)(e.h2,{id:"context",children:"Context"}),"\n",(0,t.jsx)(e.p,{children:"Error handling is difficult with Rust:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Many ways of implementing them with different crates (",(0,t.jsx)(e.a,{href:"https://crates.io/crates/thiserror",children:(0,t.jsx)(e.code,{children:"thiserror"})}),", ",(0,t.jsx)(e.a,{href:"https://crates.io/crates/anyhow",children:(0,t.jsx)(e.code,{children:"anyhow"})}),", ...)"]}),"\n",(0,t.jsx)(e.li,{children:"No exception like handling of errors"}),"\n",(0,t.jsx)(e.li,{children:"No stack trace or context available by default"}),"\n",(0,t.jsxs)(e.li,{children:["Backtrace uniquely when a panic occurs and if ",(0,t.jsx)(e.code,{children:"RUST_BACKTRACE"})," environment variable is set to ",(0,t.jsx)(e.code,{children:"1"})," or ",(0,t.jsx)(e.code,{children:"full"})]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"We think the errors handling should be done in a consistent way in the project.\nThus we have worked on a standardization of their implementation and tried to apply it to the whole repository.\nThis has enabled us to have a clear vision of the do and don't that we intend to summarize in this ADR."}),"\n",(0,t.jsx)(e.h2,{id:"decision",children:"Decision"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.em,{children:"Therefore"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["We have decided to use ",(0,t.jsx)(e.code,{children:"thiserror"})," and ",(0,t.jsx)(e.code,{children:"anyhow"})," crates to implement the errors:","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://crates.io/crates/thiserror",children:(0,t.jsx)(e.code,{children:"thiserror"})})," is used to create module or domain errors that come from our developments and can be easily identified (as they are strongly typed)."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://crates.io/crates/anyhow",children:(0,t.jsx)(e.code,{children:"anyhow"})})," is used to add a context to an error triggered by a sub-system. The context is a convenient way to get 'stack trace' like debug information."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["Here is a ",(0,t.jsx)(e.a,{href:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=bf667c443696beb90106f6ae627a57b9",children:"Rust playground"})," that summarizes the usage of ",(0,t.jsx)(e.code,{children:"thiserror"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:'#[allow(unused_imports)]\nuse anyhow::{anyhow, Context, Result}; // 1.0.71\nuse thiserror::Error; // 1.0.43\n\n#[derive(Error, Debug)]\n#[error("Codec error: {msg}")]\npub struct CodecError {\n    msg: String,\n    #[source] // optional if field name is `source`\n    source: anyhow::Error,\n}\n\n#[derive(Error, Debug)]\npub enum DomainError {\n    #[error("Error with codec: {0:?}")]\n    CodecWithOnlyDebug(CodecError),\n\n    #[error("Error with codec")]\n    CodecWithSource(#[source] CodecError),\n\n    #[error("Error with codec: {0}")]\n    CodecWithoutAnything(CodecError),\n\n    #[error("Anyhow error: {0:?}")]\n    AnyhowWrapWithOnlyDebug(anyhow::Error),\n\n    #[error("Anyhow error")]\n    AnyhowWrapWithSource(#[source] anyhow::Error),\n\n    #[error("Anyhow error: {0}")]\n    AnyhowWrapWithoutAnything(anyhow::Error),\n}\n\nfn anyhow_result() -> Result<()> {\n    "invalid_number"\n        .parse::<u64>()\n        .map(|_| ())\n        .with_context(|| "Reading database failure")\n}\n\nfn thiserror_struct() -> Result<(), CodecError> {\n    Err(CodecError {\n        msg: "My message".to_string(),\n        source: anyhow!("Could not decode config"),\n    })?;\n    Ok(())\n}\n\nfn print_error(title: &str, error: anyhow::Error) {\n    println!("{title:-^80}");\n    println!("{error:?}\\n",);\n}\n\nfn main() {\n    println!("1 - Printing errors from enum variant that contains a error struct\\n");\n    // Debug the inner error struct: "normal" debug without the anyhow touch\n    print_error(\n        "DomainError::CodecWithOnlyDebug",\n        anyhow!(DomainError::CodecWithOnlyDebug(\n            thiserror_struct().unwrap_err()\n        )),\n    );\n    // marking the inner error struct as source: anyhow will be able to make a\n    // stacktrace out of this error. Nice !\n    print_error(\n        "DomainError::CodecWithSource",\n        anyhow!(DomainError::CodecWithSource(\n            thiserror_struct().unwrap_err()\n        )),\n    );\n    // without debugging the inner error: only show the error text\n    print_error(\n        "DomainError::CodecWithoutAnything",\n        anyhow!(DomainError::CodecWithoutAnything(\n            thiserror_struct().unwrap_err()\n        )),\n    );\n\n    println!("\\n2 - Printing errors from enum variant that contains a anyhow error\\n");\n    // using only debug: the first two errors of the stack will be merged\n    print_error(\n        "DomainError::AnyhowWrapWithOnlyDebug",\n        anyhow!(DomainError::AnyhowWrapWithOnlyDebug(\n            anyhow_result().with_context(|| "context").unwrap_err()\n        )),\n    );\n    // using #[source] attribute: each error of the stack will have a line\n    print_error(\n        "DomainError::AnyhowWrapWithSource",\n        anyhow!(DomainError::AnyhowWrapWithSource(\n            anyhow_result().with_context(|| "context").unwrap_err()\n        )),\n    );\n    // without debug nor source: only the uppermost error is print\n    print_error(\n        "DomainError::AnyhowWrapWithoutAnything",\n        anyhow!(DomainError::AnyhowWrapWithoutAnything(\n            anyhow_result().with_context(|| "context").unwrap_err()\n        )),\n    );\n}\n\n'})}),"\n",(0,t.jsx)(e.p,{children:"Which will output errors this way:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'1 - Printing errors from enum variant that contains a error struct\n\n------------------------DomainError::CodecWithOnlyDebug-------------------------\nError with codec: CodecError { msg: "My message", source: Could not decode config }\n\n--------------------------DomainError::CodecWithSource--------------------------\nError with codec\n\nCaused by:\n    0: Codec error: My message\n    1: Could not decode config\n\n-----------------------DomainError::CodecWithoutAnything------------------------\nError with codec: Codec error: My message\n\n\n2 - Printing errors from enum variant that contains a anyhow error\n\n----------------------DomainError::AnyhowWrapWithOnlyDebug----------------------\nAnyhow error: context\n\nCaused by:\n    0: Reading database failure\n    1: invalid digit found in string\n\n-----------------------DomainError::AnyhowWrapWithSource------------------------\nAnyhow error\n\nCaused by:\n    0: context\n    1: Reading database failure\n    2: invalid digit found in string\n\n---------------------DomainError::AnyhowWrapWithoutAnything---------------------\nAnyhow error: context\n'})}),"\n",(0,t.jsxs)(e.p,{children:["Here is a ",(0,t.jsx)(e.a,{href:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=90f962ab001d2ea0321fc5da0d4ec0f1",children:"Rust playground"})," that summarizes the usage of the ",(0,t.jsx)(e.code,{children:"context"})," feature form ",(0,t.jsx)(e.code,{children:"anyhow"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:'#[allow(unused_imports)]\nuse anyhow::{anyhow, Context, Result}; // 1.0.71\n\nfn read_db() -> Result<()> {\n    "invalid_number"\n        .parse::<u64>()\n        .map(|_| ())\n        .with_context(|| "Reading database failure")\n}\n\nfn do_work() -> Result<()> {\n    read_db().with_context(|| "Important work failed while reading database")\n}\n\nfn do_service_work() -> Result<()> {\n    do_work().with_context(|| "Service could not do the important work")\n}\n\nfn main() {\n    let error = do_service_work().unwrap_err();\n\n    println!("Error string:\\n {error}\\n\\n");\n    println!("Error debug:\\n {error:?}\\n\\n");\n    println!("Error pretty:\\n {error:#?}\\n\\n");\n}\n\n'})}),"\n",(0,t.jsx)(e.p,{children:"Which will output errors this way:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'Error string:\n Service could not do the important work\n\n\nError debug:\n Service could not do the important work\n\nCaused by:\n    0: Important work failed while reading database\n    1: Reading database failure\n    2: invalid digit found in string\n\n\nError pretty:\n Error {\n    context: "Service could not do the important work",\n    source: Error {\n        context: "Important work failed while reading database",\n        source: Error {\n            context: "Reading database failure",\n            source: ParseIntError {\n                kind: InvalidDigit,\n            },\n        },\n    },\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"consequences",children:"Consequences"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["We have defined the following aliases that should be used by default:","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"StdResult"}),": the default result that should be returned by a function (unless a more specific type is required)."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"StdError"}),": the default error that should be used (unless a more specific type is required)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:"/* Code extracted from mithril-common::lib.rs */\n/// Generic error type\npub type StdError = anyhow::Error;\n\n/// Generic result type\npub type StdResult<T> = anyhow::Result<T, StdError>;\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["The function that returns an error from a sub-system should systematically add a context to the error with the ",(0,t.jsx)(e.code,{children:"with_context"})," method, in order to provide clear stack traces and ease debugging."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["When printing an ",(0,t.jsx)(e.code,{children:"StdError"})," we should use the debug format without the pretty modifier, ie:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:'println!("Error debug:\\n {error:?}\\n\\n");\n'})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["When wrapping an error in a ",(0,t.jsx)(e.code,{children:"thiserror"})," enum variant we should use the ",(0,t.jsx)(e.code,{children:"source"})," attribute that will provide a clearer stack trace:"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:'/// Correct usage with `source` attribute\n#[derive(Error, Debug)]\npub enum DomainError {\n    #[error("Anyhow error")]\n    AnyhowWrapWithSource(#[source] StdError),\n}\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:'/// Incorrect usage without `source` attribute\n#[derive(Error, Debug)]\npub enum DomainError {\n    #[error("Anyhow error: {0}")]\n    AnyhowWrapWithoutAnything(StdError),\n}\n'})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Here are some tips on how to discriminate between creating a new error using ",(0,t.jsx)(e.code,{children:"thiserror"})," or using an ",(0,t.jsx)(e.code,{children:"StdResult"}),":","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["If you raise an anyhow error which only contains a string this means that you are creating a new error that doesn't come from a sub-system. In that case you should create a type using ",(0,t.jsx)(e.code,{children:"thiserror"})," intead, ie:"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:'// Avoid\nreturn Err(anyhow!("my new error"));\n\n// Prefer\n#[derive(Debug,Error)]\npub enum MyError {\n  MyNewError\n}\nreturn Err(MyError::MyNewError);\n'})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["(",(0,t.jsx)(e.em,{children:"Still undecided"}),") You should avoid wrapping a ",(0,t.jsx)(e.code,{children:"StdError"})," in a ",(0,t.jsx)(e.code,{children:"thiserror"})," type. This ",(0,t.jsx)(e.strong,{children:"breaks"})," the stack trace and makes it really difficult to retrieve the innermost errors using ",(0,t.jsx)(e.code,{children:"downcast_ref"}),". When the ",(0,t.jsx)(e.code,{children:"thiserror"})," type is itself wrapped in a ",(0,t.jsx)(e.code,{children:"StdError"})," afterward, you would have to ",(0,t.jsx)(e.code,{children:"downcast_ref"})," twice: first to get the ",(0,t.jsx)(e.code,{children:"thiserror"})," type and then to get the innermost error.\nThis should be restricted to the topmost errors of our system (ie the state machine errors)."]}),"\n"]})]})}function l(r={}){const{wrapper:e}={...(0,o.a)(),...r.components};return e?(0,t.jsx)(e,{...r,children:(0,t.jsx)(h,{...r})}):h(r)}},11151:(r,e,n)=>{n.d(e,{Z:()=>a,a:()=>s});var t=n(67294);const o={},i=t.createContext(o);function s(r){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function a(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(o):r.components||o:s(r.components),t.createElement(i.Provider,{value:e},r.children)}}}]);