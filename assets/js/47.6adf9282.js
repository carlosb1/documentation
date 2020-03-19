(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{330:function(t,s,e){"use strict";e.r(s);var a=e(8),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),e("p",[t._v("Settings is a list of all the "),e("strong",[t._v("customization")]),t._v(" possible for an index.")]),t._v(" "),e("p",[t._v("It is possible to update all the settings in one go or individually with the dedicated routes.")]),t._v(" "),e("p",[t._v("These are the reference pages for the dedicated routes:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/references/synonyms.html"}},[t._v("Synonyms")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/references/stop_words.html"}},[t._v("Stop-words")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/references/ranking_rules.html"}},[t._v("Ranking rules")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/references/distinct_attribute.html"}},[t._v("Distinct attribute")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/references/searchable_attributes.html"}},[t._v("Searchable attributes")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/references/displayed_attributes.html"}},[t._v("Displayed attributes")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/references/accept_new_fields.html"}},[t._v("Accept new fields")])],1)]),t._v(" "),e("h2",{attrs:{id:"get-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-settings"}},[t._v("#")]),t._v(" Get settings")]),t._v(" "),e("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:uid/settings"}}),t._v(" "),e("p",[t._v("Get the settings of an index.")]),t._v(" "),e("h4",{attrs:{id:"path-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-variables"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("uid")])]),t._v(" "),e("td",[t._v("The index name")])])])]),t._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X GET "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/movies/settings'")]),t._v("\n")])])]),e("h4",{attrs:{id:"response-200-ok"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok"}},[t._v("#")]),t._v(" Response: "),e("code",[t._v("200 Ok")])]),t._v(" "),e("p",[t._v("List the settings.")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rankingRules"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"typo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"words"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proximity"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"attribute"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wordsPosition"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exactness"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dsc(release_date)"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rankingDistinct"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"searchableAttributes"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uid"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"displayedAttributes"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"release_date"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rank"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"poster"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stopWords"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"synonyms"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wolverine"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xmen"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logan"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"logan"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wolverine"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xmen"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"indexNewFields"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"update-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-settings"}},[t._v("#")]),t._v(" Update settings")]),t._v(" "),e("RouteHighlighter",{attrs:{method:"POST",route:"/indexes/:uid/settings"}}),t._v(" "),e("p",[t._v("Update the settings of an index.")]),t._v(" "),e("h4",{attrs:{id:"path-variables-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-2"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("uid")])]),t._v(" "),e("td",[t._v("The index name")])])])]),t._v(" "),e("h4",{attrs:{id:"body"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" Body")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Default value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("rankingRules")])]),t._v(" "),e("td",[t._v("[Strings]")]),t._v(" "),e("td",[t._v("Ranking rules in their order of importance")]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/guides/main_concepts/relevancy.html#order-of-the-rules"}},[t._v("built-in ranking rules list in order")])],1)]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("rankingDistinct")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("Returns only distinct (different) values of the given field")]),t._v(" "),e("td",[e("code",[t._v("null")])])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("searchableAttributes")])]),t._v(" "),e("td",[t._v("[Strings]")]),t._v(" "),e("td",[t._v("Fields in which to search for matching query words ("),e("em",[t._v("ordered by importance")]),t._v(")")]),t._v(" "),e("td",[t._v("All attributes found in the documents")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("displayedAttributes")])]),t._v(" "),e("td",[t._v("[Strings]")]),t._v(" "),e("td",[t._v("Fields present in the returned documents")]),t._v(" "),e("td",[t._v("All attributes found in the documents")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("stopWords")])]),t._v(" "),e("td",[t._v("[Strings]")]),t._v(" "),e("td",[t._v("Words in the search query that will be ignored")]),t._v(" "),e("td",[e("code",[t._v("[]")])])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("synonyms")])]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td",[t._v("List of associated words that are considered the same in a search query")]),t._v(" "),e("td",[e("code",[t._v("{}")])])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("indexNewFields")])]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("New fields in newly added document are/aren't added to MeiliSearch")]),t._v(" "),e("td",[e("code",[t._v("true")])])])])]),t._v(" "),e("p",[t._v("Any parameters not provided will be left unchanged.")]),t._v(" "),e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("h4",{attrs:{id:"add-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-settings"}},[t._v("#")]),t._v(" Add settings")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X GET "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/movies/settings'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n   "rankingRules": [\n            "typo",\n            "words",\n            "proximity",\n            "attribute",\n            "wordsPosition",\n            "exactness",\n            "dsc(release_date)",\n            "dsc(rank)",\n        ],\n        "rankingDistinct": "movie_id",\n        "searchableAttributes": [\n            "uid",\n            "movie_id",\n            "title",\n            "description",\n            "poster",\n            "release_date",\n            "rank",\n        ],\n        "displayedAttributes": [\n            "title",\n            "description",\n            "poster",\n            "release_date",\n            "rank",\n        ],\n        "stopWords": [\n            "the",\n            "a",\n            "an",\n        ],\n        "synonyms": {\n            "wolverine": ["xmen", "logan"],\n            "logan": ["wolverine"],\n        },\n        "indexNewFields": false,\n    }\'')]),t._v("\n")])])]),e("h4",{attrs:{id:"response-202-accepted"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted"}},[t._v("#")]),t._v(" Response: "),e("code",[t._v("202 Accepted")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This "),e("code",[t._v("updateId")]),t._v(" allows you to "),e("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"reset-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reset-settings"}},[t._v("#")]),t._v(" Reset settings")]),t._v(" "),e("RouteHighlighter",{attrs:{method:"DELETE",route:"/indexes/:index_uid/settings"}}),t._v(" "),e("p",[t._v("Reset the settings of an index.")]),t._v(" "),e("p",[t._v("All settings will be reset to their default value.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Default value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("rankingRules")])]),t._v(" "),e("td",[t._v("Ranking rules in their order of importance")]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/guides/main_concepts/relevancy.html#order-of-the-rules"}},[t._v("built-in ranking rules list in order")])],1)]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("rankingDistinct")])]),t._v(" "),e("td",[t._v("Returns only distinct (different) values of the given field")]),t._v(" "),e("td",[e("code",[t._v("null")])])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("searchableAttributes")])]),t._v(" "),e("td",[t._v("Fields in which to search for matching query words ("),e("em",[t._v("ordered by importance")]),t._v(")")]),t._v(" "),e("td",[t._v("All attributes found in the documents")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("displayedAttributes")])]),t._v(" "),e("td",[t._v("Fields present in the returned documents")]),t._v(" "),e("td",[t._v("All attributes found in the documents")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("stopWords")])]),t._v(" "),e("td",[t._v("Words in the search query that will be ignored")]),t._v(" "),e("td",[e("code",[t._v("[]")])])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("synonyms")])]),t._v(" "),e("td",[t._v("List of associated words that are considered the same in a search query")]),t._v(" "),e("td",[e("code",[t._v("{}")])])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("indexNewFields")])]),t._v(" "),e("td",[t._v("New fields in newly added document are/aren't added to MeiliSearch")]),t._v(" "),e("td",[e("code",[t._v("true")])])])])]),t._v(" "),e("h4",{attrs:{id:"path-variables-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-3"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("index_uid")])]),t._v(" "),e("td",[t._v("The index UID")])])])]),t._v(" "),e("h4",{attrs:{id:"example-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X DELETE "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/movies/settings'")]),t._v("\n")])])]),e("h4",{attrs:{id:"response-202-accepted-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-2"}},[t._v("#")]),t._v(" Response: "),e("code",[t._v("202 Accepted")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This "),e("code",[t._v("updateId")]),t._v(" allows you to "),e("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1)],1)}),[],!1,null,null,null);s.default=n.exports}}]);