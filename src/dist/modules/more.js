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

	var __weex_template__ = __webpack_require__(92)
	var __weex_style__ = __webpack_require__(93)
	var __weex_script__ = __webpack_require__(94)

	__weex_define__('@weex-component/4b828aed62374186842577837cdb5e57', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/4b828aed62374186842577837cdb5e57',undefined,undefined)

/***/ },

/***/ 92:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "title"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "text"
	          ],
	          "attr": {
	            "value": "美食网址"
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
	          "repeat": {
	            "expression": function () {return this.itemList},
	            "value": "item"
	          },
	          "children": [
	            {
	              "type": "a",
	              "attr": {
	                "href": function () {return this.item.siteUrl}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "logo"
	                  ],
	                  "attr": {
	                    "src": function () {return this.item.logoURL}
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
	        "title"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "text"
	          ],
	          "attr": {
	            "value": "美食公众号"
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
	          "repeat": {
	            "expression": function () {return this.accountsList},
	            "value": "item"
	          },
	          "children": [
	            {
	              "type": "a",
	              "attr": {
	                "href": function () {return this.item.accounts}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "alogo"
	                  ],
	                  "attr": {
	                    "src": function () {return this.item.logo}
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

/***/ 93:
/***/ function(module, exports) {

	module.exports = {
	  "title": {
	    "padding": 22
	  },
	  "text": {
	    "fontSize": 40,
	    "color": "#2D2D2D",
	    "fontWeight": "bold",
	    "fontFamily": "STKaiti"
	  },
	  "showAccounts": {
	    "flexDirection": "row",
	    "flexWrap": "wrap",
	    "width": 750
	  },
	  "showLogo": {
	    "flexDirection": "row",
	    "flexWrap": "wrap",
	    "width": 750
	  },
	  "logo": {
	    "width": 210,
	    "height": 88,
	    "marginTop": 25,
	    "marginRight": 20,
	    "marginBottom": 25,
	    "marginLeft": 20,
	    "borderRadius": 20
	  },
	  "alogo": {
	    "width": 210,
	    "height": 80,
	    "marginLeft": 20,
	    "marginRight": 20,
	    "marginTop": 30,
	    "borderRadius": 20
	  }
	}

/***/ },

/***/ 94:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var PAGE_URL = 'http://dotwe.org/raw/dist/f1fa0895d0fa0fd80896e02a589443dd.js';
	module.exports = {
	    data: function () {return {
	        itemList: [],
	        accountsList: []
	    }},
	    created: function created() {
	        var self = this;
	        var origionUrl = [{ logoURL: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/5Mxw*RghBkbzJTqubu04FXMDxtqbMRRsACCf8Qh4d3A!/r/dCABAAAAAAAA', siteUrl: 'http://m.meishij.net/html5/' }, { logoURL: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/nz8kjkiWK1rbmiQ8nh9FwoETT*GtmHxcAcYrwe06BHQ!/r/dPYAAAAAAAAA', siteUrl: 'http://m.zhms.cn/' }, { logoURL: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/rxW6h6VOaSzlRzK8WumfIZ5AI3uoV2sWHQTEQj7dbdo!/r/dPYAAAAAAAAA', siteUrl: 'http://m.haodou.com/' }, { logoURL: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/FysP6TxTqV9OOEFZs*4V1v.NNFKzl5K7ALHQdv2FcJc!/r/dLAAAAAAAAAA', siteUrl: 'http://www.xinshipu.com/' }, { logoURL: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/1j.C83sCq.DGl7gTcXyniJtjwKfNlNLD2sS9NQuEYZg!/r/dCABAAAAAAAA', siteUrl: 'http://m.xiangha.com/' }, { logoURL: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/ju1Kh1QwrBdyo3k6zRbxSLaayE4NgWvMwFkV2RJrUVU!/r/dCABAAAAAAAA', siteUrl: 'http://m.chinacaipu.com/' }, { logoURL: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/MkE8*e0DsKCCeWGFyJVybHkiaFPXRn7Z1DEB6bOqMyo!/r/dCABAAAAAAAA', siteUrl: 'http://m.meishic.com/' }, { logoURL: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/Tja7qTOKOhLcxUW91gIyN3hPVkQl1BJNU6W1kPTqJkI!/r/dB8BAAAAAAAA', siteUrl: 'http://m.xiachufang.com/' }, { logoURL: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/O8sD8ixo*pjtP0vT3PH0W0HO4l0W56Otf7lglWQRMjA!/r/dPYAAAAAAAAA', siteUrl: 'http://m.fancai.com/' }, { logoURL: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/h9ZeEq1pjWGkFFjD8CqmVYImRgVx1rF3zqm1a36f8xg!/r/dB8BAAAAAAAA', siteUrl: 'http://m.haochi123.com/' }, { logoURL: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/YGwsT9JhcRgy8JmI2RtkuoO.TCpX.KkGcCBJaIGOTFg!/r/dB8BAAAAAAAA', siteUrl: 'http://m.douguo.com/?f=www' }, { logoURL: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/5lefXWIylGLpSQYpYYyXlScPsDJd41u1p.g3K44NpNU!/r/dB8BAAAAAAAA', siteUrl: 'http://m.meishichina.com/' }];

	        self.itemList = origionUrl;
	        for (var i = 0; i < self.itemList.length; i++) {
	            console.log(self.itemList[i].logoURL);
	            console.log(self.itemList[i].siteUrl);
	            self.itemList[i].siteUrl = PAGE_URL + '?weburl=' + encodeURIComponent(origionUrl[i].siteUrl);
	        }
	        var origionLink = [{ logo: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/Ri3eCqP3Kl719WxPk1ZM8PBDCZwKgpbwghyTGL1JAXA!/r/dB8BAAAAAAAA', accounts: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/cSBv9yqTWVzdym9wauISYcYBhA.t6HW8*ZYsiQ8uRg4!/r/dPYAAAAAAAAA' }, { logo: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/KmEarcH3h1HmyVImxXOiQwGPPTdb5o9PySHFbetpNN8!/r/dB8BAAAAAAAA', accounts: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/WJsES7vP29IGktgC1WjhwQZ5.CfNraqGMfrZVXSu0jM!/r/dB8BAAAAAAAA' }, { logo: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/1tx4orEdQ9xIeyPDtW*seI7I3V9.lmunXc.Jv1yfirA!/r/dB8BAAAAAAAA', accounts: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/.O7afpnLKBKSfwtuwmjVYt9oY4Pqcb.QfC3WTDqXwhI!/r/dCABAAAAAAAA' }, { logo: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/2aOp8VukDCfe6oNmUaUb4Udevj7BCxrOB63OCUV3Nk8!/r/dB8BAAAAAAAA', accounts: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/nDkIXMrnSlYa2jbpAZzTwNCkrACe6Nv93b5h16UNzw0!/r/dK0AAAAAAAAA' }, { logo: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/tnnw1jdckCR3eOQjcw.tg4CvtI7YZYNLJVuXpz73Ejs!/r/dPgAAAAAAAAA', accounts: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/oexD.uZLhG0e.5faRJKTtmiBK07VhRe5Q6VBURGSwK8!/r/dCABAAAAAAAA' }, { logo: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/Tkxhppbtujvg2t3ghoRxVBQhMZs.LN01Z.Z0xMsBb2Q!/r/dB8BAAAAAAAA', accounts: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/7wAFQ8g7hMwFjCTT4iPNXkovql0Q6LSOItnsB.eDNEw!/r/dB8BAAAAAAAA' }, { logo: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/d3Nos5Pfn8QGZNxq9Ln88b47ZVUEfrL8TnmTwMpkgRk!/r/dPYAAAAAAAAA', accounts: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/hSXf4C.zE8EKFN5MaHMkalJaIT2urYp0vsTuk3QN8HE!/r/dCABAAAAAAAA' }, { logo: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/Ygi3I.YipSys5FcknNcNRd56Yd3AyUcChPJnFPcMGKE!/r/dB8BAAAAAAAA', accounts: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/CVtiV3cO48vl.nljQ2SGxdPTSjBh4vl9CI23zji74Hs!/r/dPYAAAAAAAAA' }, { logo: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/qvqxd7LX7CuUIGYJDvWmtEthPYCeI6pxW*90J4k*ZGU!/r/dCABAAAAAAAA', accounts: 'http://r.photo.store.qq.com/psb?/V10fxxpZ03oqxO/qKB8rLSQOVHZOx6g1MjTDNNka8PeOTenKSRNPrKEjjE!/r/dB8BAAAAAAAA' }];
	        self.accountsList = origionLink;
	        for (var j = 0; j < origionLink.length; j++) {
	            console.log(self.accountsList[j].logo);
	            console.log(self.accountsList[j].accounts);
	            self.accountsList[j].accounts = PAGE_URL + '?weburl=' + encodeURIComponent(origionLink[j].accounts);
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });