export function signUpCheck(){
  const signUp_form = document.getElementById('signUp_form');

  signUp_form.addEventListener('submit', (e) => {

  if(signUp_form.checkValidity() === false){
    e.preventDefault();
    e.stopPropagation();  
  }
  
  signUp_form.classList.add('was-validated');
   
  }, false); 
}


// 회원가입 폼 중간중간에 중복체크 버튼 만들어 확인하는 로직이지만 실패...
// export function checkOverlap(){
//   const user_email = document.getElementById('user_email');
//   const checkOverlap = document.getElementById('checkOverlap');
//   const overlapCheck_email = document.getElementById('overlapCheck_email');
//   const overlapCheck_form = document.getElementById('overlapCheck_form');

//   function onClickOverlap(){
//     if(user_email.value.length>0){   
//       overlapCheck_email.value = user_email.value;
//       overlapCheck_form.submit();  
//     }   
//   }

//   window.onload = () => checkOverlap.onclick = onClickOverlap;
// }


