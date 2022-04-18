
// var nom=document.getElementById("name");
// nom.addEventListener("blur", function(){
//     console.log(nom.value);
// });
// var prenom=document.getElementById("prenom");
// prenom.addEventListener("blur", function(){
//     console.log(prenom.value);
// });
// var utilisateur=document.getElementById("username");
// utilisateur.addEventListener("blur", function(){
//     console.log(utilisateur.value);
// });
var tab=[false, false, false, false, false, false];
const mdp1=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/;
var error=document.getElementById("error");
var mdp=document.getElementById("mdp");
mdp.addEventListener("input", function(){
    if(!mdp1.test(mdp.value))
    {
        error.textContent="Please enter a valid password";
        tab[4]=false;
    }else
    {
        tab[4]=true;
         error.textContent="";
         
    }
});
var lastname = document.getElementById("lastname");
lastname.addEventListener("input", function(){
    if (lastname.value !== "")                                  
    { 
        tab[0]=true;
        error.textContent="";
    }
    else{
        tab[0]=false;
        error.textContent("Please enter a valid name"); }
});
var prenom=document.getElementById("prenom");
prenom.addEventListener("input", function(){
if (prenom.value !== "")                                  
{ 
    error.textContent="";
    tab[1]=true;
}
else{
    tab[1]=false;
    error.textContent="Please enter a valid first name"; 
}  
});
    
    
    var birthdate=document.getElementById("birthdate");
    const date1=new RegExp("\\d{2}[\/]\\d{2}[\/]\\d{4}");
   // const date1=/\d{2}[\/]\d{2}[\/]\d{4}/;
    birthdate.addEventListener("input", function(){
        if (!date1.test(birthdate.value))                                  
        { 
            
            error.textContent="Please enter a valid date";
            tab[2]=false;
        }  
        else{
           
            error.textContent="";
            tab[2]=true;
        }
    });
    //const mail1=new RegExp(/^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/);
    const mail1=/^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
    var mail=document.getElementById("email");
    mail.addEventListener("input", function(){
    if(!mail1.test(mail.value))
    {
        error.textContent="Please enter a valid email adress";
        tab[5]=false;
    }
    else{
        error.textContent="";
        tab[5]=true;
        
    }
    });
    var username=document.getElementById("username");
    username.addEventListener("input", function(){
        if(username.value==="")
        {
             error.textContent="Please enter a valid username";
             tab[3]=false;
        }
        else
        {
            tab[3]=true;

        }
    });
var submit=document.getElementById("form-sub");
submit.addEventListener("submit",function(event){ 
    event.preventDefault();
    var verif=true;
    for (var i = 0; i<tab.length; i++) {
        if(tab[i] != true)
        {
            verif=false;
            break;
        }
    }
    if(verif == true)
    {
       var xhr; 
        try {  xhr = new ActiveXObject('Msxml2.XMLHTTP');   }
        catch (e) 
        {
            try {   xhr = new ActiveXObject('Microsoft.XMLHTTP'); }
            catch (e2) 
            {
               try {  xhr = new XMLHttpRequest();  }
               catch (e3) {  xhr = false;   }
             }
        }
      
        xhr.onreadystatechange  = function() 
        { 
           if(xhr.readyState  == 4)
           {
            if(xhr.status  == 200) 
            {   

                //document.ajax.dyn="Received:"  + xhr.responseText; 
                console.log(xhr.responseText); 
              
            }
            else

                document.ajax.dyn="Error code " + xhr.status;
            }
        }; 
        //  Assigner le fichier XML à une variable
        var data = "lastname=" + lastname.value +  "&firstname=" + prenom.value + "&birthdate="+birthdate.value+"&username="+username.value+"&userpwd="+mdp.value+"&useremail="+mail.value;
        xhr.open("GET", "htbin/register.py",  true);
        console.log(data);
        xhr.send(data);
    }else
    {
        error.textContent="Please enter a valid formulaire";
    }
});
var tab2=[false, false];
var error2=document.getElementById("error2");
var usernamec=document.getElementById("username2");
usernamec.addEventListener("input", function(){
    if(usernamec.value==="")
    {
         error2.textContent="Please enter a valid username";
         tab2[0]=false;
    }
    else
    {
        tab2[0]=true;

    }
});
var mdp2=document.getElementById("mdp2");
mdp2.addEventListener("input", function(){
    if(!mdp1.test(mdp2.value))
    {
         error2.textContent="Please enter a valid username";
         tab2[1]=false;
    }
    else
    {
        tab2[1]=true;

    }
});
var submit2=document.getElementById("form-sub2");
submit2.addEventListener("submit",function(event){ 
    event.preventDefault();
    var verif=true;
    for (var i = 0; i<tab2.length; i++) {
        if(tab2[i] != true)
        {
            verif=false;
            break;
        }
    }
    if(verif == true)
    {
       var xhr; 
        try {  xhr = new ActiveXObject('Msxml2.XMLHTTP');   }
        catch (e) 
        {
            try {   xhr = new ActiveXObject('Microsoft.XMLHTTP'); }
            catch (e2) 
            {
               try {  xhr = new XMLHttpRequest();  }
               catch (e3) {  xhr = false;   }
             }
        }
      
        xhr.onreadystatechange  = function() 
        { 
           if(xhr.readyState  == 4)
           {
            if(xhr.status  == 200) 
            {   

                //document.ajax.dyn="Received:"  + xhr.responseText; 
                console.log(xhr.responseText);
                error2.textContent=xhr.responseText; 
              
            }
            else

                document.ajax.dyn="Error code " + xhr.status;
            }
        }; 
        //  Assigner le fichier XML à une variable
        var data = "username="+usernamec.value+"&userpwd="+mdp2.value;
        xhr.open("GET", "htbin/login.py",  true);
        console.log(data);
        xhr.send(data);
    }else
    {
        error.textContent="Please enter a valid formulaire";
    }
}); 
    



