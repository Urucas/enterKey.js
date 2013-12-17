enterKey.js
==========

Javacript simple Enter key press callback extension for HTMLInputElement["text"] elements

## Demo
<a href="http://urucas.github.io/enterKey.js/">http://urucas.github.io/enterKey.js/</a>

Usage
=====
enterKey.js is a DOM extension but it also provides a jQuery extension

``` javascript
document.getElementById("elementId").enterKey(function(value){
  // do something with the element value
  console.log(value);
});

// jQuery usage
$("#elementId").enterKey(function(value){
  // do something with the element value
  console.log(value);
});

```

## License

enterKey.js is released under the <a href="https://github.com/Urucas/enterKeyJS/blob/master/LICENSE">MIT license</a>.
