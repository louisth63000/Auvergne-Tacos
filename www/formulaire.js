
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
const mdp1=new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}');
var error=document.getElementById("error");
var mdp=document.getElementById("mdp");
mdp.addEventListener("input", function(){
    if(mdp1.test(mdp.value))
    {
        error.textContent="Please enter a valid password";
        tab[4]=true;
    }
});
    var lastname = document.getElementById("lastname");
    lastname.addEventListener("input", function(){
        if (lastname.value !== "")                                  
        { 
            tab[0]=true;
        }
        else{
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
        }
        else
        {
            tab[3]=true;
        }
    });

//function verif()
//{
    
    /*var name = document.forms["RegForm"]["Nom"];   
    var prenom = document.forms["RegForm"]["prenom"];          
    var email = document.forms["RegForm"]["Email"];    
    var date = document.forms["RegForm"]["DateNaissance"];  
    var username =  document.forms["RegForm"]["username"];  
    var password = document.forms["RegForm"]["Mot de passe"]; */
    
   
    



