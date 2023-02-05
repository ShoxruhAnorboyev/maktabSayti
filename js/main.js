'use strict'
// Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "username",
//     Password : "password",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );

function sendEmail(){
    Email.send({
            Host : "smtp.gmail.com",
            Username : "shoxruhanorboyev0708@gmail.com",
            Password : "shox*0708",
            To : 'shoxruhanorboyev9707@gmail.com',
            From : document.getElementById("email").value,
            Subject : "Endi so'rov orqali bog'laning",
            Body : "Name: " + document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Phone no:" + document.getElementById("phone").value
                + "<br> Message:" + document.getElementById("message").value
        }).then(
          message => alert("Message Sent Succesfully")
        );
}
sendEmail();
