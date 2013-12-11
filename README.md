enterKeyJS
==========

Javacript simple Enter key press callback extension for HTMLInputElement["text"] elements

Usage
=====
enterKeyJS is a DOM extension but it also provides a jQuery extension

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

enterKeyJS is released under the <a href="https://github.com/Urucas/enterKeyJS/blob/master/LICENSE">MIT license</a>.
