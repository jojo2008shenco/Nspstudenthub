const consentBox =
document.getElementById('consentBox');
const acceptBtn = 
document.querySelector('.consentButton');
const rejectBtn = 
document.querySelector('.rejectButton');

acceptBtn.onclick =() => {
    document.cookie = "CookiesBy=NspStudentHub: max-age=" + 60 * 60 *24;
    if (document.cookie){
        consentBox.classList.add('hide');

    } else{
        alert("Cookie Cant set! please" +"unblock this sitefrom the cookies"+"setting of your brower.");
    }
};
rejectBtn.onclick = () => {
    alert(
        "cookies Rejected. some Functionality may be limited."
    );
    consentBox.classList.add('.hide');
};

let checkCookie = 
document.cookie.indexOf("CookiesBy=NspStudentHub");
checkCookie !== -1 ? consentBox.classList.add('hide'):consentBox.classList.remove('hide');


