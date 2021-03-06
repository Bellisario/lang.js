/*
lang.js by @Bellisario, GitHub
https://github.com/Bellisario/lang.js
         ____   
        |  _ \  
        | |_| | 
        |  _ <  
        | |_| | 
        |____/  
           _
       .__(.)<
        \___)   

*/
(function () {
    navigator.lang = navigator.language.substr(0, 2).toLowerCase();
    navigator.islang = function (_lang) {
        return navigator.lang == _lang;
    };
    navigator.iflang = function (_lang, callback) {
        if (navigator.lang == _lang.toString()) {
            if (typeof callback != "function") {
                return console.error("navigator.iflang needs a callback function to work correctly.");
            };
            return callback();
        };
    };
    lang_js_version = function () {
        return "0.1";
    };
    return true;
})();
