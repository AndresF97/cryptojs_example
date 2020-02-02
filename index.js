$("form").on("submit",function(event){
    event.preventDefault()
    var user = $("#emailInput").val()
    var password = $("#passwordInput").val();
    console.log(password)
    var encrypted = CryptoJS.AES.encrypt(password,user);
    console.log(encrypted)
    var decrypt = CryptoJS.AES.decrypt(encrypted,user)
    console.log(decrypt.toString(CryptoJS.enc.Utf8))
})