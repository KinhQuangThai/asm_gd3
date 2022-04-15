function validate(){
    const tenCtrl = document.getElementById("ten");
    const EmailCtrl = document.getElementById("Email");
    const sdtCtrl = document.getElementById("sdt"); 
    const diachiCtrl = document.getElementById("diachi");
    const genderCtrlS = document.getElementsByName("gender");
    const ytCtrlS = document.getElementsByName("yt[]");
    const quoctichCtrl = document.getElementById("quoctich");
    let isValid = true;
    if(isEmpty(tenCtrl.value)){
        tenCtrl.classList.remove("valid");
        tenCtrl.classList.add("invalid");
        isValid = false;
    }
    else{
        tenCtrl.classList.remove("invalid");
        tenCtrl.classList.add("valid");
    }
    //emailcheck
    if(isEmpty(EmailCtrl.value) || !isEmail(EmailCtrl.value)){
        EmailCtrl.classList.remove("valid");
        EmailCtrl.classList.add("invalid");
        isValid = false;
    }else{
        EmailCtrl.classList.remove("invalid");
        EmailCtrl.classList.add("valid");
    }
    if(isEmpty(sdtCtrl.value)){
        sdtCtrl.classList.remove("valid");
        sdtCtrl.classList.add("invalid");
    }
    else{
        sdtCtrl.classList.remove("invalid");
        sdtCtrl.classList.add("valid");
    }   
    if(isEmpty(diachiCtrl.value)){
        diachiCtrl.classList.remove("valid");
        diachiCtrl.classList.add("invalid");
        isValid = false;
    }else{
        diachiCtrl.classList.remove("invalid");
        diachiCtrl.classList.add("valid");
    }
    if(isChecked(genderCtrlS)){
        for(const element of genderCtrlS){
            element.classList.remove("invalid-rc");
            element.classList.add("valid");
        }
        isValid = false;
    }else{
        genderCtrlS.forEach((element)=>{
            element.classList.remove("valid");
            element.classList.add("invalid-rc");
        });
    }
     if(isChecked(ytCtrlS)){
        for(const element of ytCtrlS){
            element.classList.remove("invalid-rc");
            element.classList.add("valid");
        }
        isValid = false;
    }else{
        ytCtrlS.forEach((element)=>{
            element.classList.remove("valid");
            element.classList.add("invalid-rc");
        });
    }
    if(isEmpty(quoctichCtrl.value)){
        quoctichCtrl.classList.remove("valid");
        quoctichCtrl.classList.add("invalid");
        isValid = false;
    }else{
        quoctichCtrl.classList.remove("invalid");
        quoctichCtrl.classList.add("valid");
    }
    if(isValid){
        alert('hú hú')
    }
}

function isEmpty(value){
    if (!!!value || value.length <= 0){
        return true;
    }
    return false;
}

function isEmail(value){
    return value.match(/^\S+\@\S+\.\S+$/);
}

function isChecked(ctrls){
    for(const ctrl of ctrls){
        if(ctrl.checked){
            return true;
        }
    }
    return false;
}
// function isNumber(value){}
  