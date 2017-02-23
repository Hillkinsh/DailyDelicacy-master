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

	var __weex_template__ = __webpack_require__(98)
	var __weex_style__ = __webpack_require__(99)
	var __weex_script__ = __webpack_require__(100)

	__weex_define__('@weex-component/8028f6fa54209aaaf119dbba9639794b', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/8028f6fa54209aaaf119dbba9639794b',undefined,undefined)

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

/***/ 98:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "search"
	      ],
	      "children": [
	        {
	          "type": "input",
	          "attr": {
	            "type": "text",
	            "autofocus": "false",
	            "placeholder": "Search"
	          },
	          "classList": [
	            "search_box"
	          ],
	          "events": {
	            "input": "oninput"
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "search_box_s"
	          ],
	          "events": {
	            "click": "search"
	          },
	          "attr": {
	            "alt": "Search",
	            "src": "http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/V**tgjWnxcsZIxBGT*kSISNqXSxhL6Rl8djgtrUcDoo!/r/dKkAAAAAAAAA",
	            "title": "Search"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "id": "history",
	      "classList": [
	        "his"
	      ]
	    },
	    {
	      "type": "scroller",
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "classtitle"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "text"
	              ],
	              "attr": {
	                "value": "热门分类"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "showLogo"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "showarea"
	              ],
	              "repeat": {
	                "expression": function () {return this.hotList},
	                "value": "item"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "logo"
	                  ],
	                  "attr": {
	                    "src": function () {return this.item.tagurl},
	                    "cid": function () {return this.item.tags}
	                  },
	                  "events": {
	                    "click": "detailList"
	                  }
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "namearea"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "classname"
	                      ],
	                      "attr": {
	                        "value": function () {return this.item.tags}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "classtitle"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "text"
	              ],
	              "attr": {
	                "value": "烹饪方式"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "showLogo"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "showarea"
	              ],
	              "repeat": {
	                "expression": function () {return this.methodList},
	                "value": "item"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "logo"
	                  ],
	                  "attr": {
	                    "src": function () {return this.item.tagurl},
	                    "cid": function () {return this.item.tags}
	                  },
	                  "events": {
	                    "click": "detailList"
	                  }
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "namearea"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "classname"
	                      ],
	                      "attr": {
	                        "value": function () {return this.item.tags}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "classtitle"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "text"
	              ],
	              "attr": {
	                "value": "季节分类"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "showLogo"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "showarea"
	              ],
	              "repeat": {
	                "expression": function () {return this.seasonList},
	                "value": "item"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "logo"
	                  ],
	                  "attr": {
	                    "src": function () {return this.item.tagurl},
	                    "cid": function () {return this.item.tags}
	                  },
	                  "events": {
	                    "click": "detailList"
	                  }
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "namearea"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "classname"
	                      ],
	                      "attr": {
	                        "value": function () {return this.item.tags}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "classtitle"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "text"
	              ],
	              "attr": {
	                "value": "场景分类"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "showLogo"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "showarea"
	              ],
	              "repeat": {
	                "expression": function () {return this.sceneList},
	                "value": "item"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "logo"
	                  ],
	                  "attr": {
	                    "src": function () {return this.item.tagurl},
	                    "cid": function () {return this.item.tags}
	                  },
	                  "events": {
	                    "click": "detailList"
	                  }
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "namearea"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "classname"
	                      ],
	                      "attr": {
	                        "value": function () {return this.item.tags}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "classtitle"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "text"
	              ],
	              "attr": {
	                "value": "人群分类"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "showLogo"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "showarea"
	              ],
	              "repeat": {
	                "expression": function () {return this.personList},
	                "value": "item"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "logo"
	                  ],
	                  "attr": {
	                    "src": function () {return this.item.tagurl},
	                    "cid": function () {return this.item.tags}
	                  },
	                  "events": {
	                    "click": "detailList"
	                  }
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "namearea"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "classname"
	                      ],
	                      "attr": {
	                        "value": function () {return this.item.tags}
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

/***/ },

/***/ 99:
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
	    "top": 105,
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
	  },
	  "classtitle": {
	    "marginTop": 30,
	    "marginLeft": 30
	  },
	  "text": {
	    "fontSize": 40,
	    "color": "#2D2D2D",
	    "fontFamily": "STKaiti"
	  },
	  "showLogo": {
	    "flexDirection": "row",
	    "flexWrap": "wrap",
	    "width": 750,
	    "marginLeft": 20
	  },
	  "showarea": {
	    "width": 180,
	    "height": 170
	  },
	  "logo": {
	    "width": 150,
	    "height": 150,
	    "marginTop": 25,
	    "marginRight": 10,
	    "marginBottom": 25,
	    "marginLeft": 10,
	    "borderRadius": 20
	  },
	  "namearea": {
	    "left": 10,
	    "top": 140,
	    "width": 150,
	    "position": "absolute",
	    "backgroundColor": "#008000",
	    "opacity": 0.5,
	    "alignItems": "center",
	    "borderBottomRightRadius": 15,
	    "borderBottomLeftRadius": 15
	  },
	  "classname": {
	    "fontWeight": "bold",
	    "color": "#FFFFFF",
	    "fontFamily": "STKaiti"
	  }
	}

/***/ },

/***/ 100:
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
	        NoFoodList: true,
	        items: [],
	        searchRes: [],
	        keywords: '',
	        hotList: [],
	        methodList: [],
	        seasonList: [],
	        sceneList: [],
	        personList: []
	    }},
	    created: function created() {
	        var self = this;
	        var bundleUrl = this.$getConfig().bundleUrl;
	        this.baseURL = apis.getBaseUrl(bundleUrl, true);

	        storage.getAllKeys(function (e) {
	            if (e.result == 'success' && e.data.length) {
	                e.data.forEach(function (item) {
	                    if (item.indexOf('search_') > -1) {
	                        self.items.push(item.split('search_')[1]);
	                    }
	                });
	            }
	        });

	        var hotClass = [{ tags: '家常菜',
	            tagurl: 'http://www.photophoto.cn/m77/161/005/1610059394.jpg' }, { tags: '私房菜',
	            tagurl: 'http://res.fashion.ifeng.com/attachments/2010/02/05/rd_rs_dbb85fab1290f9e1762e2ccffb6dcb7c.jpg' }, { tags: '快手菜',
	            tagurl: 'http://sh.sinaimg.cn/2015/0923/U10201P18DT20150923102501.png' }, { tags: '香辣',
	            tagurl: 'http://img3.redocn.com/tupian/20141029/qincairousi_3341515.jpg' }, { tags: '热',
	            tagurl: 'http://npic7.edushi.com/cn/zixun/zh-chs/2016-01/16/e-2733900-s32-160114094056.png' }, { tags: '凉菜',
	            tagurl: 'http://www.photophoto.cn/m77/161/003/1610030289.jpg' }, { tags: '肉',
	            tagurl: 'http://tupian.enterdesk.com/uploadfile/2013/0912/20130912054939364.jpg' }, { tags: '素食',
	            tagurl: 'http://i3.meishichina.com/attachment/201211/2/258077_1351829158nN82.jpg' }, { tags: '烘焙',
	            tagurl: 'http://photocdn.sohu.com/20130630/Img380263657.jpg' }, { tags: '小吃',
	            tagurl: 'http://henan.sinaimg.cn/2010/0906/20109614196.jpg' }, { tags: '面',
	            tagurl: 'http://a2.att.hudong.com/21/81/01300534143102134578819707735.jpg' }, { tags: '汤',
	            tagurl: 'http://baotang.tfysw.com/uploadfile/201106/20110626121939516.jpg' }];
	        self.hotList = hotClass;
	        var methodClass = [{ tags: '煎',
	            tagurl: 'http://food.lady8844.com/upload/20130919/dcd423b3be5219d73995884bf59202cd.jpg' }, { tags: '炸',
	            tagurl: 'http://a3.att.hudong.com/66/61/01300000245029126983612250268.jpg' }, { tags: '烧',
	            tagurl: 'http://img3.redocn.com/tupian/20141103/taijiaoshaofeichang_3380471.jpg' }, { tags: '烤',
	            tagurl: 'http://res.benchengwang.cn/uploads/member/goods/65424/20140921101957997.jpg' }, { tags: '蒸',
	            tagurl: 'http://img3.cache.netease.com/house/2014/4/19/2014041909524688ede.jpg' }, { tags: '炒',
	            tagurl: 'http://recipe0.hoto.cn/pic/recipe/l/20/d2/184864_02c6ce.jpg' }, { tags: '煮',
	            tagurl: 'http://i.weather.com.cn/images/trip/rmzt/wz/2013/02/21/48BB74A187FA2FDF09AB5E7F79C177B4.jpg' }, { tags: '炖',
	            tagurl: 'http://i3.dpfile.com/2009-03-26/1772161_b.jpg(700x700)/thumb.jpg' }];
	        self.methodList = methodClass;
	        var seasonClass = [{ tags: '春季',
	            tagurl: 'http://hebei.sinaimg.cn/2013/0204/U7465P1275DT20130204155457.jpg' }, { tags: '夏季',
	            tagurl: 'http://static.i3.xywy.com/cms/20150523/4bed6bc11b187e79ebc2069d7953aa4921923.jpg' }, { tags: '秋季',
	            tagurl: 'http://files.bbs.e23.cn/forum/201209/10/153838szkgicshcibkspig.jpg' }, { tags: '冬季',
	            tagurl: 'http://pic.baike.soso.com/p/20101215/20101215130742-212301247.jpg' }];
	        self.seasonList = seasonClass;
	        var sceneClass = [{ tags: '早餐',
	            tagurl: 'http://cate.cnr.cn/sytj/201108/W020110805381616473663.jpg' }, { tags: '午餐',
	            tagurl: 'http://tw.tranews.com/Show/images/News/3255904_1.jpg' }, { tags: '晚餐',
	            tagurl: 'http://pic12.nipic.com/20110225/2531170_100358053345_2.jpg' }, { tags: '夜宵',
	            tagurl: 'http://i1.douguo.net/upload/diet/1/7/c/17c525dedba59b353d6694bc0000d67c.jpg' }];
	        self.sceneList = sceneClass;
	        var personClass = [{ tags: '老年人',
	            tagurl: 'http://img.ishuo.cn/1609/1474170312.jpg' }, { tags: '孕妇',
	            tagurl: 'http://img.taopic.com/uploads/allimg/130516/235105-1305160HQ446.jpg' }, { tags: '产妇',
	            tagurl: 'http://img.99.com.cn/uploads/151008/400_171015_1.jpg' }, { tags: '儿童',
	            tagurl: 'http://i3.dpfile.com/pc/0f7df3c37b823be79e13abc331351e5a(700x700)/thumb.jpg' }];
	        self.personList = personClass;
	    },
	    methods: {
	        search: function search(e) {
	            var that = this;
	            if (!this.keywords) return;
	            storage.setItem('search_' + that.keywords, that.keywords, function (e) {
	                that.items.push(this.keywords);
	            });
	            var params = {
	                'url': this.baseURL + 'modules/detailList.js?id=' + this.keywords,
	                'animated': 'true'
	            };
	            navigator.push(params, function (e) {});
	        },
	        oninput: function oninput(event) {
	            this.keywords = event.value;
	            console.log('oninput', event.value);
	        },
	        change: function change(e) {
	            if (!e.value) return;
	            this.keywords = e.value;
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
	        detailList: function detailList(e) {
	            var self = this;
	            var itemid = e.target.attr.cid;
	            var params = {
	                'url': this.baseURL + 'modules/detailList.js?id=' + itemid,
	                'animated': 'true'
	            };
	            navigator.push(params, function (e) {});
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });