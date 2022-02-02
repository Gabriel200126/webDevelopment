function valido()
{
    var username=document.getElementById("username").Value;
    var password=document.getElementById("password").Value;
    if(username=="admin" && password=="user")
    {
        alert("personale.html");
        return false;
        
    }
    else{
        alert("failed");
    }
}