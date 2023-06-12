function test()
{
    var username = document.getElementById("name").value
    var useremail = document.getElementById("email").value
    var usermessage = document.getElementById("message").value

    if(username == "")
    {
        // alert("Name zarori hei!!!!")
        document.getElementById("span").innerHTML = "Name Zarori hei!!"
    }
    else if(useremail == "")
    {
        document.getElementById("span1").innerHTML = "Email Zarori hei!!"
    }
}