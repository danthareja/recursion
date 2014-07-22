// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  if (obj === null) {
    return "null";
  }
  else if (typeof obj !== 'object' && typeof obj !== 'string') {
    return '' + obj;
  }
  else if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  else if (Array.isArray(obj)) {
    var result = "";
    for (var i = 0; i < obj.length; i++) {
      var value = obj[i];
      if (typeof value === 'function' || value === undefined){
        continue;
      }
      result = result + stringifyJSON(value) + ",";
    }
    return "[" + result.slice(0, result.length-1) + "]";
  }
  else if (typeof obj === "object") {
   var resultObj = "";
   for (var key in obj) {
      var value = obj[key];
      if (typeof value === 'function' || value === undefined){
        continue;
      }
     resultObj = resultObj + stringifyJSON(key) + ":" + stringifyJSON(value) + ",";
   }
   return "{" + resultObj.slice(0, resultObj.length-1) + "}";
  }

};
