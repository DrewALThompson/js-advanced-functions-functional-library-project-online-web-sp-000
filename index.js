const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
        let newCol = collection.isArray ? collection.slice() : Object.values(collection);
        for(const i in newCol){
          callback(newCol[i]);
        }
        return collection;
    },

    map: function(collection, callback) {
        collection = !collection.isArray ? collection : Object.values(collection);
        let arr = [];
        for(const i in collection){
          arr.push(callback(collection[i]));
        }
        return arr;
    },

    reduce: function(collection, callback, acc) {
        collection = !collection.isArray ? collection : Object.values(collection);
        acc = acc? acc : 0;
        for(const i in collection){
          acc = callback(acc, collection[i], collection);
        }
        return acc;
    },
    
    filter: function(collection, predicate) {
        collection = !collection.isArray ? collection : Object.values(collection);
        for(const i in collection){
          if (predicate(collection[i])) return true;
        }
        return false;
    },
    
    size: function(collection){
      
    },
    
    first: function(array, [n]){
      
    },
    
    last: function(array, [n]){
      
    },
    
    compact: function(array){
      
    },
    
    sortBy: function(array, callback){
      
    },
    
    flatten: function(array, [shallow]){
      
    },
    
    uniq: function(array, [isSorted], [callback]){
      
    },
    
    keys: function(object){
      
    },
    
    values: function(object){
      
    },

    functions: function(object) {

    },


  }
})()

fi.libraryMethod()
