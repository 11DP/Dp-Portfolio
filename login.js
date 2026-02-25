let loginpage = (e) =>{
    e.preventDefault()
    let email=e.target[0];
    let pswd=e.target[1];
    
    let credentials = {
         usermail :`dpdn1104@gmail.com`,
         userpswd :`1104`
    };
    if (email.value === credentials.usermail &&  pswd.value === credentials.userpswd){
        window.location.href="./phome.html";
    }else{
        email.style.border = `solid 2px red`;
        pswd.style.border = `solid 2px red`;
        alert("Invalid")
    }
}
