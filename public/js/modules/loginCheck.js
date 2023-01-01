export function loginCheck(){
  "use strict";

  const user_email = $('#user_email');
  const user_password = $('#user_password');
  const btn_login = $('#btn_login');
 

  function checkInput(){

    // 다 입력했으면
    if(user_email.val().length>0 && user_email.val().indexOf('@')!==-1 && user_password.val().length>=9){
      btn_login.removeClass('opacity-50');  
      btn_login.attr("disabled", false);   
    } 
    
    // 아직 입력해야 하면
    else{   
      btn_login.addClass('opacity-50');  
      btn_login.attr("disabled", true);  
    }  
  }

  // user_email.on('keyup', checkInput);
  // user_password.on('keyup', checkInput);
  user_email.on('propertychange change paste input', checkInput);
  user_password.on('propertychange change paste input', checkInput);
  btn_login.off('mouseenter mouseleave hover');
  window.addEventListener('load', checkInput);
}