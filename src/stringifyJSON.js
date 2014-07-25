// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
<<<<<<< HEAD
  // Initialize temporary array to hold stringified arrays or objects
  var values = [];

  // Stringify null values
  if (obj === null) {
    return "null";
  } 

  // Stringifies numbers or booleans
  else if (typeof obj === "number" || typeof obj === "boolean") {
    return obj.toString();
  }

  // Stringify strings
  else if (typeof obj === "string") {
    return '"' + obj + '"';
  }

  // Stringify arrays by recursively calling itself on each item of the array
  else if (Array.isArray(obj)) {
    _.each(obj, function(item) {
      values.push(stringifyJSON(item));
    });

    return "[" + values.join(",") + "]";
  }

  // Stringify objects by recursively calling itself on each value of the object while skipping over functions and undefined values
  else if (typeof obj === "object") {
    _.each(obj, function(value, key) {
      if (typeof value !== "function" && value !== undefined) {
        var str = '"' + key + '":';
        str += stringifyJSON(value);
        values.push(str);
      }
    });

    return "{" + values.join(",") + "}";
  }
=======
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

>>>>>>> origin/practice
};
