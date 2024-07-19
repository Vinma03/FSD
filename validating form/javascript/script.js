//codepen website -->to run js programs
function validateForm(){
    //get form inputs
    var name=document.getElementById('name').value
    var email=document.getElementById('email').value
//reset error messages
document.getElementById('nameerror').innerHTML='';
document.getElementById('emailerror').innerHTML='';
//validate name
if(name===''){
    document.getElementById('nameerror').innerHTML='Name is required';
    return false;//prevent form submission
}
//validate email
var emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailRegex.test(email)){
    document.getElementById('emailerror').innerHTML='Invalid email format';
    return false;//prevent form submission
}
//if validation passes, the form will be submitted
alert('Form submitted successfully !');
return true;

}