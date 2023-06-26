let button = document.querySelector("#btn");
let messige = document.getElementById("error");
let messigeText = document.getElementById("error-text");
let text3 = document.querySelector("#cvv");
let klasi = document.querySelector(".w");
let ss = document.querySelector(".s");
let expyearsClass = document.querySelector(".expyears");
let monthsClass = document.querySelector(".months");
let CvvClass = document.querySelector(".cvvs");
let messigeYear = document.querySelector("#error2");
let messigemonths = document.querySelector("#error3");
let messigecvc = document.querySelector("#error4");
 function send(){
    let cardNumber = document.querySelector("#num").value;
    let text2 = document.querySelector("#txts").value;
    let ExpYear = document.querySelector("#expyear").value;
    let Month = document.querySelector("#month").value;
    let Cvv = document.querySelector("#cvv").value;
var pattern = /^[0-9]+$/;
var re = /^[A-Z  ]{2,70}$/i;
var Exp= /^[0-9/]{5}$/i;
var ExpM= /^[0-9/]{4}$/i;
var cvc= /^[0-9]{3}$/i;

    //ვამოწმებ Card Number
    if(!cardNumber.match(pattern)){
        messige.classList.add("error");
        messige.innerHTML="Woops! wrong format, numbers only.";
        //messige.innerHTML=" ";
        klasi.classList.add("input3");
        
    }
    else  {
        klasi.classList.remove("input3");
        klasi.classList.add("input2");
        messige.innerHTML=" ";
    }
    //ვამოწმებ Card Name
    if(!text2.match(re))
    {
        messigeText.classList.add("error");
        messigeText.innerHTML="Woops! wrong format, simbols only.";
        ss.classList.add("input3");
    }
    else{
        messigeText.innerHTML=" ";
        ss.classList.remove("input3");
        ss.classList.add("input2");
    }

    //ვამოწმებ Exp Date
    if(!ExpYear.match(Exp)){
        expyearsClass.classList.add("input3");
        messigeYear.innerHTML="xx/xx"
        messigeYear.classList.add("error");
    }else{
        expyearsClass.classList.remove("input3")
        expyearsClass.classList.add("input2")
        messigeYear.innerHTML=" "
    }
    if(!Month.match(ExpM)){
        monthsClass.classList.add("input3");
        messigemonths.innerHTML="numbers only";
        messigemonths.classList.add("error");
    }else{
        monthsClass.classList.remove("input3")
        monthsClass.classList.add("input2");
        messigemonths.innerHTML=" ";
       
    }
    //ვამოწმებ cvc
    if(!Cvv.match(cvc)){
        CvvClass.classList.add("input3");
        messigecvc.classList.add("error")
        messigecvc.innerHTML="3 numbers only";
    }else{
        CvvClass.classList.remove("input3")
        CvvClass.classList.add("input2");
        CvvClass.classList.remove("input3");
        messigecvc.innerHTML=" ";
    }

    return false;
}


   