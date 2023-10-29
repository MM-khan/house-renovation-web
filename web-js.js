var myVar = setInterval(timeFunction,1000);

function timeFunction(){
    var d = new Date();
    document.getElementById("time").innerHTML=d.toLocaleTimeString();
}

var mydate = setInterval(dateFunction,1000)
function dateFunction(){
    var today_date = new Date();
    
    document.getElementById("date").innerHTML=today_date.toLocaleDateString();
    
}

var i = 0;
var txt = "fill the form and submettd to konsult Mehtab Ali Khan";
var speed = 80;

function typewriter(){
    if(i< txt.length){
        document.getElementById("writer").innerHTML+=txt.charAt(i);
        i++;

        setTimeout(typewriter,speed);
    }
}
//form validation

function validate(){
    var fullname = document.querySelector('.namn');
    var email = document.querySelector('.epost');
    var phone = document.querySelector('.telefon');

    var form = document.form1;

    if(form.fullname.value.trim().length < 7){
         fullname.innerHTML = 'Please enter a valid name.';
         fullname.className = 'error';
        form.fullname.className = 'error';
        return false;

    }else{

        document.querySelector('.namn').innerHTML = 'OK';
        document.querySelector('.namn').className = 'success';
        form.fullname.className = 'success';

    }
    if(form.email.value.indexOf('@') < 7){
        email.innerHTML = 'Invalid Eamil.';
        email.className = 'error';
        form.email.className = 'error';
        return false;

    }else{
        email.innerHTML = 'OK';
        email.className = 'success';
        form.email.className = 'success';
        
    }

    if(form.telefon.value.indexOf('0') > 0){
        phone.innerHTML = 'Invalid Number';
        phone.className = 'error';
        form.telefon.className = 'error';
        return false;

    }else{
        phone.innerHTML = 'OK';
        phone.className = 'success';
        form.telefon.className = 'success';
    }


    //return false;

    document.form1.submit();

}

