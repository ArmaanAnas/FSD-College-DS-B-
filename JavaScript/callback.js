function sum(a,b){
    return a+b;
}
function sumWithMsg(msg, clbk){
    const result = clbk(20,30);
    const finalresult="Hi " + msg + ", Your score is " + result;
    console.log(finalresult);
}

sumWithMsg("Mr. Deepak", sum);