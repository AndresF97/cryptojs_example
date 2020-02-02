$("form").on("submit",function(event){
    event.preventDefault()
    console.log($("#emailInput").val())
    //console.log($("#passwordInput").val())
    var user = $("#emailInput").val()
    var password = $("#passwordInput").val();
    console.log(password)
    var encrypted = CryptoJS.AES.encrypt(password,user);
    console.log(encrypted)
    var decrypt = CryptoJS.AES.decrypt(encrypted,user)
    console.log(decrypt.toString(CryptoJS.enc.Utf8))
})