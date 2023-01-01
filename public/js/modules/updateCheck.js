export function updateCheck(){
    "use strict";
    const updateForm = document.getElementById('update_form');
  
    updateForm.addEventListener('submit', (e) => {
  
    if(updateForm.checkValidity() === false){
      e.preventDefault();
      e.stopPropagation();  
    }
    
    updateForm.classList.add('was-validated');
     
    }, false); 
  }
  
  