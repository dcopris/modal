function validateForm(form) {
    var elems = form.elements;
    var str = '';
    var valid = true;

    elements = document.querySelectorAll('input, textarea, select, fieldset');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('err');
    }

    for(var i = 0; i < elems.length; i++){
        if(elems[i].type == 'text' && elems[i].value.length < 1 ){
            document.getElementById(elems[i].id).className += ' err';
            valid = false;
        }

        if(elems[i].id == 'description' && elems[i].value.length <5 ){
            document.getElementById(elems[i].id).className += ' err';
            valid = false;
        }

        if(elems[i].type == 'number' && isNaN(elems[i].value)){
            document.getElementById(elems[i].id).className += ' err';
            valid = false;
        }
    }

    if(isNaN(document.getElementById('mileage').value)){
        document.getElementById('mileage').className += ' err';
        valid = false;
    }

    if(    document.getElementById('diesel').checked
        || document.getElementById('gas').checked
        || document.getElementById('electric').checked
        || document.getElementById('hybrid').checked
        || document.getElementById('gpl').checked ){
        ;
    }else{
        document.getElementById('fuel_type').className += ' err';
        valid = false;
    }

    return valid;
}

var open_modal = document.getElementById('new_prod');
var modal = document.getElementById('aform');
var close_modal = document.getElementById('close_modal');
var damaged = document.getElementById('damaged');
var damaged_details_wrap = document.getElementById('damaged_details_wrap');
var submit_btn = document.getElementById('submit_btn');
var form = document.getElementById('add_prod_form');
var notification = document.getElementById('notification');
var color = document.getElementById('color');
var make = document.getElementById('make');

color.addEventListener("blur", function(){
    color.style.backgroundColor = color.value;
    if(color.value =='black'){
        color.style.color = '#ffffff';
    }else{
        color.style.color = '#000000';
    }
});

make.onchange = function(){
    document.getElementById('logo').src = 'http://www.autocarbrands.com/wp-content/uploads/2014/04/'+ make.options[make.selectedIndex].text.toLowerCase() +'.png';
};

open_modal.addEventListener("click", function(){

    modal.style.display = 'block';
});

close_modal.addEventListener("click", function(){
    modal.style.display = 'none';
});

submit_btn.addEventListener("click", function(){
    if(validateForm(form)){
        form.submit();
        notification.innerHTML = 'OK';
        notification.className +=' green';
    }else{
        notification.innerHTML = 'Please check the highlighted fields and try again!';
        notification.className +=' red';
    }

});

damaged.addEventListener("click", function(){
    if (damaged.checked){
        damaged_details_wrap.style.display = 'block';
    }else{
        damaged_details_wrap.style.display = 'none';
    }
});
