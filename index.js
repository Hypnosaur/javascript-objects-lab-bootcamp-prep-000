var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var recipes = object[key] = value;
  return object
}