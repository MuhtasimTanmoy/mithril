"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[7598],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>m});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),p=o,m=c["".concat(s,".").concat(p)]||c[p]||h[p]||a;return n?t.createElement(m,i(i({ref:r},d),{},{components:n})):t.createElement(m,i({ref:r},d))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},30516:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=n(87462),o=(n(67294),n(3905));const a={slug:6,title:"6. Errors implementation Standard\n",authors:[{name:"Mithril Team"}],tags:["Draft"],date:new Date("2023-09-27T00:00:00.000Z")},i=void 0,l={permalink:"/doc/adr/6",source:"@site/adr/006-errors-implementation.md",title:"6. Errors implementation Standard\n",description:"Status",date:"2023-09-27T00:00:00.000Z",formattedDate:"September 27, 2023",tags:[{label:"Draft",permalink:"/doc/adr/tags/draft"}],readingTime:5.37,hasTruncateMarker:!1,authors:[{name:"Mithril Team"}],frontMatter:{slug:"6",title:"6. Errors implementation Standard\n",authors:[{name:"Mithril Team"}],tags:["Draft"],date:"2023-09-27T00:00:00.000Z"},nextItem:{title:"5. Use rfc3339 for date formatting \n",permalink:"/doc/adr/5"}},s={authorsImageUrls:[void 0]},u=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],d={toc:u},c="wrapper";function h(e){let{components:r,...n}=e;return(0,o.kt)(c,(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"Draft"),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"Error handling is difficult with Rust:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Many ways of implementing them with different crates (",(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/thiserror"},(0,o.kt)("inlineCode",{parentName:"a"},"thiserror")),", ",(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/anyhow"},(0,o.kt)("inlineCode",{parentName:"a"},"anyhow")),", ...)"),(0,o.kt)("li",{parentName:"ul"},"No exception like handling of errors"),(0,o.kt)("li",{parentName:"ul"},"No stack trace or context available by default"),(0,o.kt)("li",{parentName:"ul"},"Backtrace uniquely when a panic occurs and if ",(0,o.kt)("inlineCode",{parentName:"li"},"RUST_BACKTRACE")," environment variable is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"full"))),(0,o.kt)("p",null,"We think the errors handling should be done in a consistent way in the project.\nThus we have worked on a standardization of their implementation and tried to apply it to the whole repository.\nThis has enabled us to have a clear vision of the do and don't that we intend to summarize in this ADR."),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Therefore")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We have decided to use ",(0,o.kt)("inlineCode",{parentName:"li"},"thiserror")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"anyhow")," crates to implement the errors:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/thiserror"},(0,o.kt)("inlineCode",{parentName:"a"},"thiserror"))," is used to create module or domain errors that come from our developments and can be easily identified (as they are strongly typed)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/anyhow"},(0,o.kt)("inlineCode",{parentName:"a"},"anyhow"))," is used to add a context to an error triggered by a sub-system. The context is a convenient way to get 'stack trace' like debug information.")))),(0,o.kt)("p",null,"Here is a ",(0,o.kt)("a",{parentName:"p",href:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=bf667c443696beb90106f6ae627a57b9"},"Rust playground")," that summarizes the usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"thiserror"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[allow(unused_imports)]\nuse anyhow::{anyhow, Context, Result}; // 1.0.71\nuse thiserror::Error; // 1.0.43\n\n#[derive(Error, Debug)]\n#[error("Codec error: {msg}")]\npub struct CodecError {\n    msg: String,\n    #[source] // optional if field name is `source`\n    source: anyhow::Error,\n}\n\n#[derive(Error, Debug)]\npub enum DomainError {\n    #[error("Error with codec: {0:?}")]\n    CodecWithOnlyDebug(CodecError),\n\n    #[error("Error with codec")]\n    CodecWithSource(#[source] CodecError),\n\n    #[error("Error with codec: {0}")]\n    CodecWithoutAnything(CodecError),\n\n    #[error("Anyhow error: {0:?}")]\n    AnyhowWrapWithOnlyDebug(anyhow::Error),\n\n    #[error("Anyhow error")]\n    AnyhowWrapWithSource(#[source] anyhow::Error),\n\n    #[error("Anyhow error: {0}")]\n    AnyhowWrapWithoutAnything(anyhow::Error),\n}\n\nfn anyhow_result() -> Result<()> {\n    "invalid_number"\n        .parse::<u64>()\n        .map(|_| ())\n        .with_context(|| "Reading database failure")\n}\n\nfn thiserror_struct() -> Result<(), CodecError> {\n    Err(CodecError {\n        msg: "My message".to_string(),\n        source: anyhow!("Could not decode config"),\n    })?;\n    Ok(())\n}\n\nfn print_error(title: &str, error: anyhow::Error) {\n    println!("{title:-^80}");\n    println!("{error:?}\\n",);\n}\n\nfn main() {\n    println!("1 - Printing errors from enum variant that contains a error struct\\n");\n    // Debug the inner error struct: "normal" debug without the anyhow touch\n    print_error(\n        "DomainError::CodecWithOnlyDebug",\n        anyhow!(DomainError::CodecWithOnlyDebug(\n            thiserror_struct().unwrap_err()\n        )),\n    );\n    // marking the inner error struct as source: anyhow will be able to make a\n    // stacktrace out of this error. Nice !\n    print_error(\n        "DomainError::CodecWithSource",\n        anyhow!(DomainError::CodecWithSource(\n            thiserror_struct().unwrap_err()\n        )),\n    );\n    // without debugging the inner error: only show the error text\n    print_error(\n        "DomainError::CodecWithoutAnything",\n        anyhow!(DomainError::CodecWithoutAnything(\n            thiserror_struct().unwrap_err()\n        )),\n    );\n\n    println!("\\n2 - Printing errors from enum variant that contains a anyhow error\\n");\n    // using only debug: the first two errors of the stack will be merged\n    print_error(\n        "DomainError::AnyhowWrapWithOnlyDebug",\n        anyhow!(DomainError::AnyhowWrapWithOnlyDebug(\n            anyhow_result().with_context(|| "context").unwrap_err()\n        )),\n    );\n    // using #[source] attribute: each error of the stack will have a line\n    print_error(\n        "DomainError::AnyhowWrapWithSource",\n        anyhow!(DomainError::AnyhowWrapWithSource(\n            anyhow_result().with_context(|| "context").unwrap_err()\n        )),\n    );\n    // without debug nor source: only the uppermost error is print\n    print_error(\n        "DomainError::AnyhowWrapWithoutAnything",\n        anyhow!(DomainError::AnyhowWrapWithoutAnything(\n            anyhow_result().with_context(|| "context").unwrap_err()\n        )),\n    );\n}\n\n')),(0,o.kt)("p",null,"Which will output errors this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'1 - Printing errors from enum variant that contains a error struct\n\n------------------------DomainError::CodecWithOnlyDebug-------------------------\nError with codec: CodecError { msg: "My message", source: Could not decode config }\n\n--------------------------DomainError::CodecWithSource--------------------------\nError with codec\n\nCaused by:\n    0: Codec error: My message\n    1: Could not decode config\n\n-----------------------DomainError::CodecWithoutAnything------------------------\nError with codec: Codec error: My message\n\n\n2 - Printing errors from enum variant that contains a anyhow error\n\n----------------------DomainError::AnyhowWrapWithOnlyDebug----------------------\nAnyhow error: context\n\nCaused by:\n    0: Reading database failure\n    1: invalid digit found in string\n\n-----------------------DomainError::AnyhowWrapWithSource------------------------\nAnyhow error\n\nCaused by:\n    0: context\n    1: Reading database failure\n    2: invalid digit found in string\n\n---------------------DomainError::AnyhowWrapWithoutAnything---------------------\nAnyhow error: context\n')),(0,o.kt)("p",null,"Here is a ",(0,o.kt)("a",{parentName:"p",href:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=90f962ab001d2ea0321fc5da0d4ec0f1"},"Rust playground")," that summarizes the usage of the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," feature form ",(0,o.kt)("inlineCode",{parentName:"p"},"anyhow"),": "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[allow(unused_imports)]\nuse anyhow::{anyhow, Context, Result}; // 1.0.71\n\nfn read_db() -> Result<()> {\n    "invalid_number"\n        .parse::<u64>()\n        .map(|_| ())\n        .with_context(|| "Reading database failure")\n}\n\nfn do_work() -> Result<()> {\n    read_db().with_context(|| "Important work failed while reading database")\n}\n\nfn do_service_work() -> Result<()> {\n    do_work().with_context(|| "Service could not do the important work")\n}\n\nfn main() {\n    let error = do_service_work().unwrap_err();\n\n    println!("Error string:\\n {error}\\n\\n");\n    println!("Error debug:\\n {error:?}\\n\\n");\n    println!("Error pretty:\\n {error:#?}\\n\\n");\n}\n\n')),(0,o.kt)("p",null,"Which will output errors this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Error string:\n Service could not do the important work\n\n\nError debug:\n Service could not do the important work\n\nCaused by:\n    0: Important work failed while reading database\n    1: Reading database failure\n    2: invalid digit found in string\n\n\nError pretty:\n Error {\n    context: "Service could not do the important work",\n    source: Error {\n        context: "Important work failed while reading database",\n        source: Error {\n            context: "Reading database failure",\n            source: ParseIntError {\n                kind: InvalidDigit,\n            },\n        },\n    },\n}\n')),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We have defined the following aliases that should be used by default:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"StdResult"),": the default result that should be returned by a function (unless a more specific type is required)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"StdError"),": the default error that should be used (unless a more specific type is required).")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"/* Code extracted from mithril-common::lib.rs */\n/// Generic error type\npub type StdError = anyhow::Error;\n\n/// Generic result type\npub type StdResult<T> = anyhow::Result<T, StdError>;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The function that returns an error from a sub-system should systematically add a context to the error with the ",(0,o.kt)("inlineCode",{parentName:"p"},"with_context")," method, in order to provide clear stack traces and ease debugging.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When printing an ",(0,o.kt)("inlineCode",{parentName:"p"},"StdError")," we should use the debug format without the pretty modifier, ie: "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'println!("Error debug:\\n {error:?}\\n\\n");\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When wrapping an error in a ",(0,o.kt)("inlineCode",{parentName:"li"},"thiserror")," enum variant we should use the ",(0,o.kt)("inlineCode",{parentName:"li"},"source")," attribute that will provide a clearer stack trace:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'/// Correct usage with `source` attribute\n#[derive(Error, Debug)]\npub enum DomainError {\n    #[error("Anyhow error")]\n    AnyhowWrapWithSource(#[source] StdError),\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'/// Incorrect usage without `source` attribute\n#[derive(Error, Debug)]\npub enum DomainError {\n    #[error("Anyhow error: {0}")]\n    AnyhowWrapWithoutAnything(StdError),\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Here are some tips on how to discriminate between creating a new error using ",(0,o.kt)("inlineCode",{parentName:"li"},"thiserror")," or using an ",(0,o.kt)("inlineCode",{parentName:"li"},"StdResult"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you raise an anyhow error which only contains a string this means that you are creating a new error that doesn't come from a sub-system. In that case you should create a type using ",(0,o.kt)("inlineCode",{parentName:"li"},"thiserror")," intead, ie:")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'// Avoid\nreturn Err(anyhow!("my new error"));\n\n// Prefer\n#[derive(Debug,Error)]\npub enum MyError {\n  MyNewError\n}\nreturn Err(MyError::MyNewError);\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(",(0,o.kt)("em",{parentName:"li"},"Still undecided"),") You should avoid wrapping a ",(0,o.kt)("inlineCode",{parentName:"li"},"StdError")," in a ",(0,o.kt)("inlineCode",{parentName:"li"},"thiserror")," type. This ",(0,o.kt)("strong",{parentName:"li"},"breaks")," the stack trace and makes it really difficult to retrieve the innermost errors using ",(0,o.kt)("inlineCode",{parentName:"li"},"downcast_ref"),". When the ",(0,o.kt)("inlineCode",{parentName:"li"},"thiserror")," type is itself wrapped in a ",(0,o.kt)("inlineCode",{parentName:"li"},"StdError")," afterward, you would have to ",(0,o.kt)("inlineCode",{parentName:"li"},"downcast_ref")," twice: first to get the ",(0,o.kt)("inlineCode",{parentName:"li"},"thiserror")," type and then to get the innermost error.\nThis should be restricted to the topmost errors of our system (ie the state machine errors).")))}h.isMDXComponent=!0}}]);