// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// Returns an array-like object of all child elements which have all of the given class names.


var walkTheDOM = function(node, func) {
  func(node);
  node = node.firstElementChild;
  while (node) {
    walkTheDOM(node, func);
    node = node.nextElementSibling;
  }
};


var getElementsByClassName = function(className){
  var results = [];
  walkTheDOM(document.body, function(node) {
    if (node.classList.contains(className)) {
      results.push(node);
    }
  });
  return results;
};
