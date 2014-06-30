// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
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
};
