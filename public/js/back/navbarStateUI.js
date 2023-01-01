function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));

  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function navbarStateUI(){

  //최초 접속시 쿠키 생성
  // if (getCookie('FFlogin') === undefined) {
  //   setCookie('FFlogin', 'false');
  //   setCookie('u_email', 'null');
  // }    
    
  const signUpLi = document.querySelectorAll('.signUpLi');
  const myPageLi = document.querySelectorAll('.myPageLi');
  const logoutLi = document.querySelectorAll('.logoutLi');

  if(!getCookie('FFlogin')){
    myPageLi.forEach(element => {
      element.className += ' d-none';
    });
  
    logoutLi.forEach(element => {
      element.className += ' d-none';
    });
  
    signUpLi.forEach(element => {
      element.className += ' d-block';
    });   
  }

  else{
    signUpLi.forEach(element => {
      element.className += ' d-none';
    });
    
    myPageLi.forEach(element => {
      element.className += ' d-block';
    });

    logoutLi.forEach(element => {
      element.className += ' d-block';
    });
  } 
}

navbarStateUI();