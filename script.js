function sendMail(){
    var parms={
         name: document.getElementById("name").value,
         email: document.getElementById("email").value,
         subject: document.getElementById("subject").value,
         message: document.getElementById("message").value,
    };

    emailjs.send("service_vvl67zc","template_96vzqer",parms).then(function (res) )
    {
        alert("sucess!!"+res.status);
    }
}