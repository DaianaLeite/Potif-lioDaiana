   
 function aboutMe(){
     document.querySelector("#skill").style='display:none;';
     document.querySelector("#sobre").style='display:block;';
     document.querySelector("#contact").style='display:none;';
 }
   function skills(){
    document.querySelector("#skill").style='display:block;';
    document.querySelector("#sobre").style='display:none;';
    document.querySelector("#contact").style='display:none;';   
}

   function contatos(){
     document.querySelector("#skill").style='display:none;';
     document.querySelector("#contact").style='display:block;';
    document.querySelector("#sobre").style='display:none;';
     
}


 document.querySelector("#about").addEventListener('click', aboutMe);   
 document.querySelector("#skillsMenu").addEventListener('click', skills);   
 document.querySelector("#contacts").addEventListener('click', contatos);   
 