/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(101)
	var __weex_style__ = __webpack_require__(102)
	var __weex_script__ = __webpack_require__(103)

	__weex_define__('@weex-component/2125b9900dec1a410dc248e90b970d7e', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/2125b9900dec1a410dc248e90b970d7e',undefined,undefined)

/***/ },

/***/ 85:
/***/ function(module, exports) {

	
	exports.getBaseUrl = function (bundleUrl, isnav) {
	    bundleUrl = new String(bundleUrl);
	    var nativeBase;
	    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

	    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	    if (isAndroidAssets) {
	        nativeBase = 'file://assets/dist/';
	    }
	    else if (isiOSAssets) {
	        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	    }
	    else {
	        var host = 'localhost:12580';
	        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	        if (matches && matches.length >= 2) {
	            host = matches[1];
	        }

	        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
	        if (typeof window === 'object') {
	            nativeBase = isnav ? 'http://' + host + '/index.html?page=./dist/' : '/dist/';
	        } else {
	            nativeBase = 'http://' + host + '/dist/';
	        }
	    }

	    return nativeBase;
	};

/***/ },

/***/ 101:
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "classList": [
	    "box"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "header"
	      ],
	      "repeat": {
	        "expression": function () {return this.items},
	        "value": "item"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "header-foodName-style"
	          ],
	          "attr": {
	            "value": function () {return this.item.title}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "meal"
	      ],
	      "repeat": {
	        "expression": function () {return this.items},
	        "value": "item"
	      },
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "photoWIthName-image"
	          ],
	          "attr": {
	            "src": function () {return this.item.albums[0]}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "ingre"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "header-foodName-style"
	          ],
	          "attr": {
	            "value": "食材"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "ingredients"
	      ],
	      "repeat": {
	        "expression": function () {return this.items},
	        "value": "item"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "ingredients-text"
	          ],
	          "attr": {
	            "value": function () {return (this.item.ingredients) + ';' + (this.item.burden)}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "method"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "header-foodName-style"
	          ],
	          "attr": {
	            "value": "方法步骤"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "mealList"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "mealListContnet"
	          ],
	          "repeat": {
	            "expression": function () {return this.itemSteps},
	            "value": "item"
	          },
	          "children": [
	            {
	              "type": "div",
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "mealListContnet-step-text"
	                  ],
	                  "attr": {
	                    "value": function () {return this.item.step}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "mealListContnet-img"
	                  ],
	                  "attr": {
	                    "src": function () {return this.item.img}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 102:
/***/ function(module, exports) {

	module.exports = {
	  "box": {
	    "flexDirection": "column",
	    "backgroundColor": "#F5DEB3"
	  },
	  "header": {
	    "height": 80,
	    "width": 750,
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "backgroundColor": "#FFFFFF",
	    "alignItems": "center"
	  },
	  "header-foodName-style": {
	    "fontSize": 40,
	    "paddingTop": 15,
	    "fontFamily": "STKaiti"
	  },
	  "meal": {
	    "alignItems": "center",
	    "position": "relative",
	    "marginTop": 100
	  },
	  "photoWIthName-image": {
	    "width": 400,
	    "height": 400,
	    "borderRadius": 200
	  },
	  "ingre": {
	    "position": "relative",
	    "padding": 20
	  },
	  "ingredients": {
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#efefef",
	    "borderTopWidth": 1,
	    "borderTopColor": "#efefef",
	    "width": 750,
	    "padding": 20
	  },
	  "ingredients-text": {
	    "marginLeft": 20,
	    "lines": 4,
	    "fontSize": 35,
	    "lineHeight": 50,
	    "fontFamily": "STKaiti"
	  },
	  "method": {
	    "position": "relative",
	    "padding": 20
	  },
	  "mealList": {
	    "width": 750,
	    "padding": 10
	  },
	  "mealListContnet": {
	    "flexDirection": "column",
	    "padding": 30,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#efefef",
	    "borderTopWidth": 1,
	    "borderTopColor": "#efefef"
	  },
	  "mealListContnet-step-text": {
	    "fontSize": 35,
	    "lineHeight": 50,
	    "fontFamily": "STKaiti"
	  },
	  "mealListContnet-img": {
	    "width": 620,
	    "margin": 20,
	    "height": 400,
	    "borderRadius": 50
	  }
	}

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var dom = __weex_require__('@weex-module/dom') || {};
	var stream = __weex_require__('@weex-module/stream') || {};
	var modal = __weex_require__('@weex-module/modal') || {};
	var apis = __webpack_require__(85);
	var SEARCH_URL = 'http://apis.juhe.cn/cook/query?&pn=&rn=&albums=&=&key=02679548e0e9bbce015c132666f8ea9e';
	module.exports = {
	  data: function () {return {
	    foodMenu: [],
	    loadingDisplay: 'show',
	    loadingText: 'Loading...',
	    itemSteps: [],
	    items: []
	  }},
	  created: function created() {

	    var self = this;
	    var bundleUrl = this.$getConfig().bundleUrl;
	    var contentId = self.getParameterByName('id', bundleUrl);
	    var urlForTran = SEARCH_URL + '&menu=' + contentId;
	    self.renderData(urlForTran);
	  },
	  methods: {
	    renderData: function renderData(url) {
	      var self = this;
	      stream.fetch({
	        method: 'GET',
	        url: url,
	        type: 'json'
	      }, function (res) {
	        var results = res.data.result.data || [];

	        if (Array.isArray(results)) {
	          self.items.push(results[0]);
	        }
	        if (Array.isArray(results[0].steps)) {
	          for (var i = 0; i < results[0].steps.length; i++) {
	            self.itemSteps.push(results[0].steps[i]);
	          }
	        }
	      }, function (res) {});
	    },
	    getParameterByName: function getParameterByName(name, url) {
	      name = name.replace(/[\[\]]/g, "\\$&");
	      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
	      var answer = regex.exec(url);

	      return answer[2];
	    }

	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });