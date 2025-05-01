
console.log(result); //undefined 타입의 참조를 하려 해서 에러가 남
var result = {
    name: "소연",
    0:"",
}; //객체인거 할당도 나중에 됨. 
console.log(result);
result[''] = 0;
console.log(result);

var r = result;
r["0"] = "1";
console.log(result, r);