// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
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
    //invoke recursive function
    getElementsByClassName(className,node.children[i]);
   }
  }

  //return array of results
  return results;
};
