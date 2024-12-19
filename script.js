// document.getElementById("myform").addEventListener("submit",validate);
// function validate(e){
//     e.preventDefault();
//     let first=document.getElementById("firstname").value;
//     let name=document.getElementById("lastname").value;
//     let mobile=document.getElementById("mobile").value;
//     let myemail=document.getElementById("email").value;
//     let mypsw=document.getElementById("psw").value;
//     let confirmpsw=document.getElementById("cnfpsw").value;
//     let photo=document.getElementById("upload")

//     console.log(first,name,mobile,myemail,mypsw,confirmpsw,upload);
//     if(first==""||name==""||mobile==""||myemail==""||mypsw==""||confirmpsw==""||upload=="")
//     {
//         alert("all fields are required");
//         return false;
//     }
//     if(mypsw!==confirmpsw){
//         alert("password does not match");
//     return false;
//     }
//     alert("successfull");
// }

document.getElementById("myform").addEventListener("submit",validate);
function validate(a){
    a.preventDefault();
    let firstName=document.getElementById("name").value;
    let lastName=document.getElementById("last").value;
    let mobile=document.getElementById("mobile").value;
    let email=document.getElementById("email").value;
    let amount=document.getElementById("amount").value;
    let date=document.getElementById("date").value;
    let password=document.getElementById("psw").value;
    let confirmpsw=document.getElementById("cnf").value;

    console.log(firstName,lastName,mobile,email,amount,date,password,confirmpsw);
    if(firstName==""||lastName==""||mobile==""||email==""||amount==""||date==""||password==""||confirmpsw==""){
        alert("all fields are required");
        return false;
    }
    if(password!=confirmpsw){
        alert("password does not match");
        return false;
    }
    alert("form is successfully submited");
}