parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var o="js插入的元素",e=dom.create('<div class="red">'.concat(o,"-1</div>"));dom.after(p1,e);var l=dom.create('<div class="red">'.concat(o,"-2</div>"));dom.before(p2,l);var d=dom.create('<div class="red">'.concat(o,"-3</div>"));dom.append(p3,d);var s=dom.create('<div class="blue">'.concat(o,"-4</div>"));dom.wrap(test,s),dom.remove(p4),dom.empty(empty),dom.text(p5,"原本是「段落 5」这是js修改的内容"),dom.html(p6,'<div class="blue-bg">插入了一个div</div>'),dom.style(p7,"background","yellow"),dom.text(p7,"被 style 修改的段落 7"),dom.class.add(p8,"blue-bg"),console.log(dom.class.has(p8,"blue-bg")),dom.on(p9,"click",function(){return console.log("hi")}),dom.text(p9,'点击事件打印出"hi"');var c=dom.find("#p10")[0];console.log(c),console.log("parent ↓"),console.log(dom.parent(test)),console.log("child ↓"),console.log(dom.child(test)),console.log("siblings ↓"),console.log(dom.siblings(p2)),console.log("next ↓"),console.log(dom.next(p3)),console.log("previous ↓"),console.log(dom.previous(p5)),console.log("each ↓"),dom.each(dom.child(test),function(o){return dom.style(o,"font-size","17px")}),console.log("index ↓"),console.log(dom.index(p6));
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.59c8b895.js.map