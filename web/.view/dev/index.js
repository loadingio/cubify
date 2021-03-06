 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (JSON, b64img, blockLoader, cssLoader, decache, escape, scriptLoader, version) {
      ;pug_debug_line = 1;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
if(!decache) { decache = (version? "?v=" + version : ""); }
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
scriptLoader.config = (config ? config : {});
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
if (!scriptLoader.url[url]) {
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
scriptLoader.url[url] = true;
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
if(!cssLoader) { cssLoader = {url: {}}; }
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
cssLoader.config = (config ? config : {});
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
if (!cssLoader.url[url]) {
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
cssLoader.url[url] = true;
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";










;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";









;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
var b64img = {};
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAQAICRAEAOw=="
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
var loremtext = {
  zh: "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";







;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fcubify\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";













;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_mixins["css"]("/assets/lib/bootstrap/main/css/bootstrap.min.css");
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_mixins["css"]("/assets/lib/@loadingio/bootstrap.ext/main/index.min.css");
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "html,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex align-items-center justify-content-center w-100 h-100\" id=\"root\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex\" style=\"gap:1em\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Csvg class=\"d-block rounded shadow-sm bg-light border\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"300\" height=\"300\" viewBox=\"0 0 100 100\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cpath ld=\"path1\" fill=\"#f00\"\u003E\u003C\u002Fpath\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cpath ld=\"path2\" fill=\"#00f\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"rounded shadow-sm border\" ld=\"lottie\" style=\"width:300px;height:300px\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_mixins["script"]("/assets/lib/@loadingio/ldquery/main/ldq.min.js");
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_mixins["script"]("/assets/lib/ldview/main/index.min.js");
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_mixins["script"]("/assets/lib/ldcover/main/index.min.js");
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_mixins["script"]("/assets/lib/ldloader/main/index.min.js");
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_mixins["script"]("/assets/lib/cubify/dev/index.min.js");
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_mixins["script"]("/assets/lib/lottie-web/main/build/player/lottie.min.js");
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "var path, view, x$, y$, q, paths, json;\npath = \"M23.5,1C35.90654,1,46,11.09346,46,23.5S35.90654,46,23.5,46S1,35.90654,1,23.5S11.09346,1,23.5,1 M23.5,0C10.52131,0,0,10.52131,0,23.5S10.52131,47,23.5,47S47,36.47869,47,23.5S36.47869,0,23.5,0L23.5,0z\";\nview = new ldview({\n  root: document.body\n});\nx$ = view.get('path1');\nx$.setAttribute('d', path);\nx$.setAttribute('stroke', '#000');\nx$.setAttribute('stroke-width', 5);\nx$.setAttribute('transform', \"translate(20,20)\");\ny$ = view.get('path2');\ny$.setAttribute('d', q = cubify.d(path));\ny$.setAttribute('stroke', '#000');\ny$.setAttribute('stroke-width', 5);\ny$.setAttribute('transform', \"translate(20,20)\");\npaths = path.split(\u002FM\u002F).map(function(it){\n  return \"M\" + it;\n});\npaths = paths.map(function(path){\n  var pts;\n  pts = cubify(path);\n  return path = {\n    ty: 'sh',\n    ks: {\n      k: {\n        c: false,\n        v: pts.map(function(it){\n          return [it[1], -it[2]];\n        }),\n        i: pts.map(function(it){\n          return [it[3] - it[1], -(it[4] - it[2])];\n        }),\n        o: pts.map(function(it){\n          return [it[5] - it[1], -(it[6] - it[2])];\n        })\n      }\n    }\n  };\n});\njson = {\n  nm: \"Bouncy Ball\",\n  v: \"5.5.2\",\n  ip: 0,\n  op: 120,\n  fr: 60,\n  w: 100,\n  h: 100,\n  layers: [{\n    ddd: 0,\n    ty: 4,\n    st: 0,\n    ip: 0,\n    op: 120,\n    ks: {\n      o: {\n        a: 0,\n        k: 100\n      }\n    },\n    shapes: [{\n      ty: 'gr',\n      it: paths.concat([\n        {\n          ty: 'st',\n          o: {\n            a: 0,\n            k: 100\n          },\n          w: {\n            a: 0,\n            k: 5\n          },\n          c: {\n            a: 0,\n            k: [1, 0, 0]\n          }\n        }, {\n          ty: \"tr\",\n          o: {\n            a: 0,\n            k: 100\n          },\n          p: {\n            a: 0,\n            k: [20, 20]\n          }\n        }\n      ])\n    }]\n  }]\n};\nlottie.loadAnimation({\n  container: view.get('lottie'),\n  path: URL.createObjectURL(new Blob([JSON.stringify(json)], {\n    type: \"application\u002Fjson\"\n  })),\n  render: \"svg\u002Fcanvas\u002Fhtml\",\n  loop: true,\n  autoplay: true,\n  name: \"hello world\"\n});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "JSON" in locals_for_with ?
        locals_for_with.JSON :
        typeof JSON !== 'undefined' ? JSON : undefined, "b64img" in locals_for_with ?
        locals_for_with.b64img :
        typeof b64img !== 'undefined' ? b64img : undefined, "blockLoader" in locals_for_with ?
        locals_for_with.blockLoader :
        typeof blockLoader !== 'undefined' ? blockLoader : undefined, "cssLoader" in locals_for_with ?
        locals_for_with.cssLoader :
        typeof cssLoader !== 'undefined' ? cssLoader : undefined, "decache" in locals_for_with ?
        locals_for_with.decache :
        typeof decache !== 'undefined' ? decache : undefined, "escape" in locals_for_with ?
        locals_for_with.escape :
        typeof escape !== 'undefined' ? escape : undefined, "scriptLoader" in locals_for_with ?
        locals_for_with.scriptLoader :
        typeof scriptLoader !== 'undefined' ? scriptLoader : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 