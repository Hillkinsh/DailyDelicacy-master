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

	var __weex_template__ = __webpack_require__(95)
	var __weex_style__ = __webpack_require__(96)
	var __weex_script__ = __webpack_require__(97)

	__weex_define__('@weex-component/9120fb10cd304e30c3c5962a1ae2efa0', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/9120fb10cd304e30c3c5962a1ae2efa0',undefined,undefined)

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

/***/ 95:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "slider",
	      "classList": [
	        "slider"
	      ],
	      "attr": {
	        "interval": "3000",
	        "autoPlay": "true"
	      },
	      "children": [
	        {
	          "type": "div",
	          "repeat": {
	            "expression": function () {return this.sliderList},
	            "value": "item"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "img"
	              ],
	              "attr": {
	                "src": function () {return this.item}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "style": {
	        "textAlign": "center"
	      },
	      "children": [
	        {
	          "type": "text",
	          "style": {
	            "textAlign": "center"
	          },
	          "classList": [
	            "title"
	          ],
	          "attr": {
	            "value": "今日推荐"
	          }
	        }
	      ]
	    },
	    {
	      "type": "scroller",
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "box"
	          ],
	          "append": "tree",
	          "children": [
	            {
	              "type": "div",
	              "repeat": {
	                "expression": function () {return this.items},
	                "value": "item"
	              },
	              "id": function () {return 'item-' + (this.$index)},
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
	                        "alt": "",
	                        "cid": function () {return this.item.title}
	                      },
	                      "events": {
	                        "click": "onFoodItemClick"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "style": {
	                        "textAlign": "center",
	                        "marginTop": 10
	                      },
	                      "attr": {
	                        "value": function () {return this.item.title}
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

/***/ 96:
/***/ function(module, exports) {

	module.exports = {
	  "slider": {
	    "flexDirection": "row",
	    "padding": 20,
	    "width": 750,
	    "height": 350
	  },
	  "img": {
	    "width": 710,
	    "height": 350
	  },
	  "title": {
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "fontSize": 40,
	    "color": "#2D2D2D",
	    "lineHeight": 40,
	    "fontFamily": "STKaiti"
	  },
	  "box": {
	    "flexDirection": "row",
	    "flexWrap": "wrap"
	  },
	  "item-imgbox": {
	    "height": 310,
	    "width": 280,
	    "marginLeft": 57,
	    "marginTop": 25,
	    "marginRight": 38
	  },
	  "item-img": {
	    "width": 255,
	    "height": 255,
	    "borderRadius": 50
	  }
	}

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var dom = __weex_require__('@weex-module/dom') || {};
	var stream = __weex_require__('@weex-module/stream') || {};
	var modal = __weex_require__('@weex-module/modal') || {};
	var apis = __webpack_require__(85);
	var navigator = __weex_require__('@weex-module/navigator');
	var SEARCH_URL = 'http://apis.juhe.cn/cook/query?&pn=&rn=&albums=&=&key=02679548e0e9bbce015c132666f8ea9e';
	module.exports = {
	  data: function () {return {
	    foodMenu: [],
	    loadingDisplay: 'show',
	    loadingText: 'Loading...',
	    items: [],
	    sliderList: []
	  }},
	  created: function created() {
	    var self = this;
	    var dateToday = new Date();
	    var bundleUrl = this.$getConfig().bundleUrl;
	    this.baseURL = apis.getBaseUrl(bundleUrl, true);

	    var sliderUrl = [['http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/MNiBcvZma7aZCEddtUl1wqsbensn7KsLoODZbqZ7meI!/r/dK4AAAAAAAAA', 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/5KPTIJoSbMD9NaMjQhXDZOvf1yZhBYjlFuEufTSNqbU!/r/dPYAAAAAAAAA', 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/T*lu9M.6QwqUyySpKrAnprPmMxZBosYld1kB6NPD5ks!/r/dCABAAAAAAAA'], ['http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/Z6ZeGASrgcgWtZVq6D1LhbYwLoUnQw7FE6FzNW.rPOs!/r/dB8BAAAAAAAA', 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/DfzetJwWE83H99cOHSPPneX1Gg*NntCN03o0asBVNEQ!/r/dCABAAAAAAAA', 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/Z6aqWWbWwmWFKD8UU9Ka*gOIfblgusSd2rYqFJ.0Elg!/r/dCABAAAAAAAA'], ['http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/dAI2MBC6NUzOjbO7mtpAKi5arce6e8s*kv2KM6ngKxQ!/r/dPwAAAAAAAAA', 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/139msVXahS*pcziRl0ffXGE3Ci6Z4.AyhXhCct3dT8I!/r/dK4AAAAAAAAA', 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/a9LPu6Wu8be4CGjuPiEon*7j8qOdDRljz7IviiXPFxY!/r/dB8BAAAAAAAA'], ['http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/cGQuzhu106gi8XOiTfD24Yt1ybeU4oD6ckhrWUQ6G8M!/r/dCABAAAAAAAA', 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/PHgiSCtbiLQ.01*SSqS54QKk5X59NBcgHyMrVk*1NLM!/r/dK0AAAAAAAAA', 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/K3b0q8q*bO7UALhdqsGUoz9Bpao9UIcUyM5fOjwo448!/r/dPgAAAAAAAAA'], ['http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/hGmajiG8.Hp9.3pJz2MQY6Qa9mBYFd44Ux5mKoa7d5w!/r/dLIAAAAAAAAA', 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/WGYLyRskJmUlTcBJEfZ76g8DjkK4tGWbQJ9wvYMRktw!/r/dPgAAAAAAAAA', 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/kuKBd7jXRS2mRXdgHvILoAKcQ*AFMZiAKa0TpV7u1Cg!/r/dPsAAAAAAAAA'], ['http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/Xrbm9.L3kTSJMX*is.qSt.vSuYDQvuUARc5tiTXX7Q4!/r/dB8BAAAAAAAA', 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/IzzQOg81qfpfHaNU7oe7RBPtOFM7yDV0N0w6wTHtn2Y!/r/dLAAAAAAAAAA', 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/JQ5RWzhx3MCMjSaijz6tw7gK4aW9ZS9XGOo9JCYJSYc!/r/dLAAAAAAAAAA'], ['http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/I.i.pfZi0jmfHecPcXtQYyuSDch4F96kbIqqH0mPNig!/r/dCABAAAAAAAA', 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/mpHghszojX0uSTQC5D8SrZAJAEldlxrlU7NMnfovHWU!/r/dPYAAAAAAAAA', 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/d4qyP.baYsZBZ425P97F.6gXDoJFBlUxgzQun9Jx9to!/r/dKYAAAAAAAAA']];
	    var foodData = [['番茄炒西兰花', '红烧肉', '酸辣汤', '小鸡炖蘑菇'], ['清炒', '糖醋排骨', '猪蹄汤', '水煮肉片'], ['红豆薏米粥', '清蒸鱼', '五美汤', '剁椒鱼头'], ['清炒山药西兰花', '西红柿炒鸡蛋', '菠菜粉丝', '荷包蛋'], ['泡菜饼', '蒜香排骨', '香煎菠菜蛋饼', '香辣虾'], ['莴笋炒鸡蛋', '鱼香茄子', '酸辣黄瓜', '糖醋莲菜'], ['香酥炸南瓜', '土豆炖牛肉', '粉蒸土豆丝', '豆角茄子'], ['荷塘小炒', '板栗红烧肉', '番茄汤', '炸酱面'], ['番茄菜花', '红烧鲫鱼', '白斩鸡', '南瓜饼'], ['番茄豆腐', '红烧土豆', '糖醋三丝', '红豆糕'], ['韭菜鸡蛋', '酱烧茄子', '奶香红豆糕', '咖喱饭'], ['酸辣土豆丝', '辣炒花蛤', '狮子头', '蛋包饭'], ['红烧茄子', '辣子鸡', '拔丝苹果', '春卷'], ['丝瓜炒蛋', '可乐鸡翅', '番茄汤', '馄饨'], ['地三鲜', '剁椒鱼头', '鱼头豆腐汤', '肠粉'], ['蒜香荷兰豆', '麻婆豆腐', '上汤娃娃菜', '烧麦'], ['清炒土豆丝', '红烧狮子头', '山药排骨汤', '沙拉'], ['凉拌金针菇', '蒜苔炒腊肉', '银耳羹', '披萨'], ['醋溜白菜', '韭菜炒鸡蛋', '莲藕炖鸡汤', '海带排骨汤'], ['清炒南瓜丝', '木耳炒山药', '豆腐汤', '绿豆粥'], ['西芹百合', '酱排骨', '丝瓜汤', '山药粥'], ['红烧冬瓜', '家常红烧猪蹄', '小米银耳羹', '糍粑'], ['山药萝卜汤', '家常红烧排骨', '紫菜汤', '水饺'], ['香椿拌豆腐', '咖喱鸡翅', '海参汤', '叉烧包'], ['蒜蓉蒸丝瓜', '蜜汁鸡翅', '萝卜汤', '手抓饼'], ['拔丝地瓜', '锅塌豆腐', '苹果汤', '玉米饼'], ['家常豆腐', '芋头糕', '祛湿汤', '糖醋鱼'], ['香辣海带丝', '电饭煲焖鸡', '基础高汤', '青椒肉丝'], ['丝瓜炒豆腐', '黄瓜炒猪肝', '家常三宝汤', '梅菜扣肉'], ['酸辣土豆丝', '苹果汤', '木耳炒山药', '红烧牛肉'], ['牛仔骨烧土豆', '酱大骨', '猪肝土豆片', '手撕包菜'], ['黄瓜卷', '油饼', '胡辣汤', '香菇炒肉']];
	    for (var i = 0; i < sliderUrl[dateToday.getDay()].length; i++) {
	      self.sliderList.push(sliderUrl[dateToday.getDay()][i]);
	      console.log(sliderUrl[dateToday.getDay()][i]);
	    }
	    for (var i = 0; i < foodData[dateToday.getDate() - 1].length; i++) {
	      self.foodMenu.push(foodData[dateToday.getDate() - 1][i]);
	      console.log(foodData[dateToday.getDate() - 1][i]);
	    }
	    var url0 = SEARCH_URL + '&menu=' + self.foodMenu[0];
	    var url1 = SEARCH_URL + '&menu=' + self.foodMenu[1];
	    var url2 = SEARCH_URL + '&menu=' + self.foodMenu[2];
	    var url3 = SEARCH_URL + '&menu=' + self.foodMenu[3];
	    self.renderData(url0);
	    self.renderData(url1);
	    self.renderData(url2);
	    self.renderData(url3);
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
	          console.log("results is ok!");
	          console.log(results[0].albums[0]);
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
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });