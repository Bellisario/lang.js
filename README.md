# lang.js

lang.js is a simple library that help you with multilanguage sites.

<a href="#"><img src="https://raw.githubusercontent.com/Bellisario/lang.js/main/.github/images/navigator-lang.png" width="500"/></a>

## View user language

Use this to view the main user language
```javascript
navigator.lang
// Console returns your favourite language
```

## Check user language

Use this to check if the input language is the main language
```javascript
navigator.islang("en")
// Console returns true if user use english
```

## Callback function if user use a specific language

Use this for callback functions that require a specific user language
```javascript
navigator.iflang("en", callback)
// For example, if user use english and callback returns true, the console returns true, too.
```

## Watch out

This library is useful only if you want to know user language, not user nationality: for example, you can't know if a user is American or British, you can only know if they speak English.

## Test lang.js

If you want test this library, click [here](https://bellisario.github.io/lang.js/test/).
