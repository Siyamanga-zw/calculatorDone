let result = document.querySelector('#screen')
let cnt = 0;
let output='' ;                             //two lines to help automatically clear after calculation
let resultsArray = [];

function display(value){
    if(resultsArray[0] === undefined){                      //two lines to help automatically clear after calculation
        result.value+=value;
    } else {
        result.value = '';                                   //two lines to help automatically clear after calculation
        resultsArray = [];
        result.value+=value;
    }
}
//backspace
document.querySelector('#backspace').addEventListener('click',()=>{
     output = result.value;
    result.value = output.slice(0, -1);
})
//CE
function clear(){
    result.value = '';
    cnt=0;
}
document.querySelector('#clearAll').addEventListener('click',()=>{
    clear();
})

//Operators

let operator = document.querySelectorAll('.operator')
operator.forEach((ops)=>{
    ops.addEventListener('click',(e)=>{
       result.value+= e.target.innerText;
       cnt=0;
    })
    
});

document.querySelector('#dot').addEventListener('click',()=>{
    if (cnt>=1) {
        document.querySelector('#dot').disabled=true;
    }else{
        display('.');
       
    }
    cnt++
})
//equal
document.querySelector('#Equal').addEventListener('click',()=>{
    resultsArray = [];
    let numb1,numb2, operators;
    for (let index = 0; index < result.value.length; index++) {
       if (result.value[index] == "/" ||result.value[index] == "+" ||result.value[index] == "-" ||result.value[index] == "*" ) {
           numb1=result.value.slice(0,index);
           numb2=result.value.slice(index+1,result.value.length);
           operators=result.value[index];
           console.log(operators);
       }
        
    } 
    let calculation = eval(numb1+operators+numb2).toFixed(2)                       //two lines to help automatically clear after calculation
    result.value = calculation;
    resultsArray.push(calculation);

})
