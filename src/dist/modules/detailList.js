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

	var __weex_template__ = __webpack_require__(89)
	var __weex_style__ = __webpack_require__(90)
	var __weex_script__ = __webpack_require__(91)

	__weex_define__('@weex-component/0b93a465ab9006ad23e91f5e0c6d2593', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/0b93a465ab9006ad23e91f5e0c6d2593',undefined,undefined)

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

/***/ 89:
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "classList": [
	    "search_res"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "children": [
	        {
	          "type": "text",
	          "shown": function () {return this.NotFoundThisItem},
	          "attr": {
	            "value": "该菜品尚未收录，请尝试其他。"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "search_item"
	      ],
	      "repeat": {
	        "expression": function () {return this.searchRes},
	        "value": "item"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "search-items"
	          ],
	          "events": {
	            "click": "onFoodItemClick"
	          },
	          "attr": {
	            "cid": function () {return this.item.title}
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "item-imgbox"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "item-img"
	                  ],
	                  "attr": {
	                    "src": function () {return this.item.albums[0]},
	                    "alt": ""
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "item-info"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "item-info-detail"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "title"
	                      ],
	                      "attr": {
	                        "value": function () {return this.item.title}
	                      }
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "detail-info"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "desc"
	                          ],
	                          "attr": {
	                            "value": function () {return this.item.imtro}
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
	      ]
	    }
	  ]
	}

/***/ },

/***/ 90:
/***/ function(module, exports) {

	module.exports = {
	  "search": {
	    "flexDirection": "row"
	  },
	  "search_box": {
	    "margin": 10,
	    "marginLeft": 35,
	    "padding": 10,
	    "width": 575,
	    "height": 85,
	    "borderRadius": 30,
	    "borderColor": "#1afa29",
	    "borderWidth": 1,
	    "borderStyle": "solid"
	  },
	  "search_box_s": {
	    "margin": 10,
	    "width": 85,
	    "height": 85
	  },
	  "bgPic": {
	    "top": 105,
	    "marginLeft": 5,
	    "marginRight": 5,
	    "position": "absolute"
	  },
	  "bgPicture": {
	    "width": 740,
	    "height": 1100
	  },
	  "his": {
	    "alignItems": "center"
	  },
	  "search_res": {
	    "flexDirection": "column",
	    "position": "absolute",
	    "marginLeft": 5,
	    "width": 740,
	    "marginRight": 5
	  },
	  "search_item": {
	    "flexDirection": "row",
	    "padding": 5,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#efefef",
	    "backgroundColor": "#F5DEB3"
	  },
	  "search-items": {
	    "flexDirection": "row"
	  },
	  "item-imgbox": {
	    "height": 250,
	    "width": 250,
	    "marginRight": 20
	  },
	  "item-img": {
	    "width": 250,
	    "height": 250,
	    "borderRadius": 50
	  },
	  "item-info": {
	    "height": 250,
	    "width": 410,
	    "justifyContent": "center",
	    "position": "relative"
	  },
	  "item-info-detail": {
	    "position": "relative",
	    "color": "#A2A2A2"
	  },
	  "title": {
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "fontSize": 32,
	    "color": "#2D2D2D",
	    "lineHeight": 40
	  },
	  "detail-info": {
	    "marginTop": 15
	  },
	  "desc": {
	    "lines": 5,
	    "textOverflow": "ellipsis",
	    "fontSize": 26,
	    "lineHeight": 30,
	    "color": "#A2A2A2"
	  }
	}

/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var storage = __weex_require__('@weex-module/storage');
	var dom = __weex_require__('@weex-module/dom') || {};
	var stream = __weex_require__('@weex-module/stream') || {};
	var modal = __weex_require__('@weex-module/modal') || {};
	var navigator = __weex_require__('@weex-module/navigator');
	var apis = __webpack_require__(85);
	var SEARCH_URL = 'http://apis.juhe.cn/cook/query?&pn=&rn=&albums=&=&key=02679548e0e9bbce015c132666f8ea9e';
	module.exports = {
	    data: function () {return {
	        NotFoundThisItem: false,
	        searchRes: [],
	        itemSteps: []
	    }},
	    created: function created() {
	        var self = this;
	        var bundleUrl = this.$getConfig().bundleUrl;
	        this.baseURL = apis.getBaseUrl(bundleUrl, true);

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
	                if (res.data.resultcode == 202) {
	                    modal.alert({
	                        'message': '很抱歉该菜品尚未收录，请尝试其他',
	                        'okTitle': 'YES'
	                    });
	                } else {
	                    var results = res.data.result.data || [];
	                    if (Array.isArray(results)) {
	                        self.searchRes = [];
	                        for (var i = 0; i < results.length; i++) {
	                            self.searchRes.push(results[i]);
	                        }
	                    }
	                }
	            }, function (res) {});
	        },
	        onFoodItemClick: function onFoodItemClick(e) {
	            var self = this;
	            var itemid = e.target.attr.cid;
	            var params = {
	                'url': this.baseURL + 'modules/step-detail.js?id=' + itemid,
	                'animated': 'true'
	            };
	            navigator.push(params, function (e) {});
	        },
	        getParameterByName: function getParameterByName(name, url) {
	            name = name.replace(/[\[\]]/g, "\\$&");
	            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
	            var answer = regex.exec(url);


	            switch (answer[2]) {
	                case '家常菜':
	                    return '家常';break;
	                case '私房菜':
	                    return '私房';break;
	                case '川菜':
	                    return '川';break;
	                case '热菜':
	                    return '热';break;
	                case '私房菜':
	                    return '私房';break;
	                case '肉类':
	                    return '肉';break;
	                case '面食':
	                    return '面';break;
	                case '夜宵':
	                    return '夜';break;
	                case '老年人':
	                    return '骨汤';break;
	                case '孕妇':
	                    return '孕妈';break;
	                case '产妇':
	                    return '补气';break;
	                case '青少年':
	                    return '蛋';break;
	                default:
	                    return answer[2];
	            }
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });