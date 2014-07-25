// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
<<<<<<< HEAD

var getElementsByClassName = function(className){
  var results = [];
  
  var searchClass = function(node) {
    // Exit out of recurison if there are no classes to check
    if (node.classList === undefined) {
      return;
    } 
    // Push the node to the results array if className is found
    else if (node.classList.contains(className)) {
      results.push(node);
    }
    // Recurse through each child node
    _.each(node.children, function(child) {
      return searchClass(child);
    });
  };

  //Start the search on body
  searchClass(document.body);
=======
var getElementsByClassName = function(className,node){
  // your code here

  var results = [];

  //identify starting node
  node = node || document.body;

  //check if node contains className
  if (node.classList.contains(className)){
    results.push(node);
  }

  //check if node has children
  if (node.children.length) {
    //iterate over children
    for (var i =0,length=node.children.length; i<length; i++) {
      var child = node.children[i];
      //invoke recursive function
      results = results.concat(getElementsByClassName(className,child));
   }
  }

  //return array of results
>>>>>>> origin/practice
  return results;
};

