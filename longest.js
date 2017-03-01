var v1 = [ 9, 0, 5, 7, 8, 10, 14, 35];
var v2 = [8, 7, 5, 6];

function longest(v1, v2){
    if( v1.length > v2.length ){
        return v1;
    }
    else if (v1.length < v2.length ){
        return v2;
    }
    else{
        return false;
    }
}

var arr1 = v1;
var arr2 = v2;

var rVal = longest(v1, v2);

console.log(rVal);
