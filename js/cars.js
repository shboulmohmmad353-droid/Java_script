function calculetr(){
    number1=Number(prompt("enter the first number"));
    number2=Number(prompt("enter the second number"));
    operator=String(prompt("enter the operator"));
    if(operator=="+"){
        result=number1+number2;
        alert(result);
    }   else if(operator=="-"){
        result=number1-number2;
        alert(result);
    }   else if(operator=="*"){
        result=number1*number2;
        alert(result);
    }   else if(operator=="/"){
        result=number1/number2;
        alert(result);
    }   else{
        alert("invalid operator");
    }               
}
calculetr();