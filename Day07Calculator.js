function isEven(){
    var number=document.getElementById("TextBox").value; //this is how i get the number from the scren
    if(number%2==0){
        alert(number +" is even number");
    }else{
        alert(number+ " is odd number");
    }
}
function addition(){
    var number1=document.getElementById("TextBox1").value; 
    var number2=document.getElementById("TextBox2").value;
    alert("Here is the addition of your numbers: "+(parseInt(number1)+parseInt(number2)));

}
function subtraction(){
    var number1=document.getElementById("TextBox1").value; 
    var number2=document.getElementById("TextBox2").value;
    alert("Here is the subtraction of your numbers: " +(parseInt(number1)-parseInt(number2)));

}
function multipication(){
    var number1=document.getElementById("TextBox1").value; 
    var number2=document.getElementById("TextBox2").value;
    alert("Here is the multipication of your numbers: " +(parseInt(number1)*parseInt(number2)));

}
function division(){
    var number1=document.getElementById("TextBox1").value; 
    var number2=document.getElementById("TextBox2").value;
    alert("Here is the division of your numbers: " +(parseInt(number1)/parseInt(number2)));

}