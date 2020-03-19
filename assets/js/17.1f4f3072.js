(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{299:function(t,e,s){"use strict";s.r(e);var a=s(8),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"asynchronous-updates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous-updates"}},[t._v("#")]),t._v(" Asynchronous Updates")]),t._v(" "),s("p",[t._v("MeiliSearch is an "),s("strong",[t._v("asynchronous API")]),t._v(". It means that the API does not behave as you would typically expect when handling the request's responses.")]),t._v(" "),s("p",[t._v("Some operations are put in a queue and will be executed in turn (asynchronously). In this case, the server response contains the identifier to track the execution of the operation.")]),t._v(" "),s("h3",{attrs:{id:"async-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#async-flow"}},[t._v("#")]),t._v(" Async flow")]),t._v(" "),s("ul",[s("li",[t._v("When making a write request ("),s("em",[t._v("create/update/delete")]),t._v(") against the search engine, it stores the operation received in a queue and returns an "),s("code",[t._v("updateId")]),t._v(". With this id, the operation update is trackable.")]),t._v(" "),s("li",[t._v("Each update received is treated following the order it has been received.")]),t._v(" "),s("li",[t._v("You can get the update status on the "),s("RouterLink",{attrs:{to:"/references/updates.html"}},[s("code",[t._v("/updates")])]),t._v(" route.")],1)]),t._v(" "),s("mermaid",[t._v("\nsequenceDiagram\n  participant C as Client\n  participant Q as Queue\n  participant M as MeiliSearch\n  C->>Q: enqueue first update\n  Q--\x3e>C: return updateId: 1\n  Q--\x3e>+M: begin update 1\n  C->>Q: enqueue second update\n  Q--\x3e>C: return updateId: 2\n  M->>-Q: dequeue update 1\n  Q--\x3e>+M: begin update 2\n  M->>-Q: dequeue update 2\n")]),t._v(" "),s("h3",{attrs:{id:"which-operations-are-async"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#which-operations-are-async"}},[t._v("#")]),t._v(" Which operations are async?")]),t._v(" "),s("p",[t._v("Every operation which could be compute-expensive is asynchronous. These include:")]),t._v(" "),s("ul",[s("li",[t._v("Update index settings")]),t._v(" "),s("li",[t._v("Add/update/delete documents")])]),t._v(" "),s("h3",{attrs:{id:"understanding-updates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#understanding-updates"}},[t._v("#")]),t._v(" Understanding updates")]),t._v(" "),s("p",[t._v("Updates returns the following information:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("status")]),t._v(": The state of the operation (enqueued, processed, or failed).")]),t._v(" "),s("li",[s("strong",[t._v("updateId")]),t._v(": The id of the update.")]),t._v(" "),s("li",[s("strong",[t._v("type")]),t._v(": The type of the operation.")]),t._v(" "),s("li",[s("strong",[t._v("enqueuedAt")]),t._v(": The date at which the operation has been added to the queue.")]),t._v(" "),s("li",[s("strong",[t._v("processedAt")]),t._v(": The date at which the operation has been processed.")])]),t._v(" "),s("h3",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("p",[t._v("Adding documents:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"processed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DocumentsAddition"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"number"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19653")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"duration"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.757581815")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enqueuedAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-12-07T21:10:07.607581330Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"processedAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-12-07T21:10:20.511525620Z"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Failing to upload document:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"failed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DocumentsAddition"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"number"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"document id is missing"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"duration"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.000048524")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enqueuedAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-12-07T20:23:50.156433207Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"processedAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-12-07T20:23:50.157436246Z"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);