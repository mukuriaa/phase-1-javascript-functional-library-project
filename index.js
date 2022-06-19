const myEach = (collection, callback) =>{
    Object.values(collection).forEach(callback)
    return collection;
}

const myMap =(collection, callback) =>
     Object.values(collection).map(callback);

const myReduce =(collection, callback, acc=0) =>
    Object.values(collection).reduce(callback, acc)


const myFind = (collection, callback) =>
    Object.values(collection).find(callback);


const myFilter =(collection, callback) =>
    Object.values(collection).filter(callback);


const mySize = (collection)=>
    Object.values(collection).length;


const myFirst = (array, [n]) =>
    array.slice(0,n);

const myLast =( array, [n])=>
    array.slice (-n);

const myKeys = collection =>
    Object.keys(collection);

const myValues = collection =>
    Object.myValues(collection);