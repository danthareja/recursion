// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
  var results = [];
  
  var searchClass = function(node) {
    if (node.classList === undefined) {
      return;
    } else if (node.classList.contains(className)) {
      results.push(node);
    }
    _.each(node.children, function(child) {
      return searchClass(child);
    });
  };
  
  searchClass(document.body);
  return results;
};
