function sendMail(params){
    var tempParams = {
        email: document.getElementById("contact-email").value,
        from_name: document.getElementById("contact-name").value,
        subject: document.getElementById("contact-subject").value,
        message: document.getElementById("contact-message").value,
    };
    
    emailjs.send('service_ypz43i9','template_oyz67kl',tempParams)
    .then((message) => alert("Form filled in correctly, the message has arrived at its destination! Thanks!"))
}