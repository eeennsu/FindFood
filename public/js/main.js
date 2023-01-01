import { customCursor }  from './modules/customCursor.js';
import { bs }            from './modules//bsComponent.js';
import { shadow }        from './modules//shadow.js';
import { wowAnimate }    from './modules/wowAnimate.js';
import { scroll }        from './modules/scroll.js';
import { signUpCheck }   from './modules/signUpCheck.js';
import { loginCheck }    from './modules/loginCheck.js';
import { getTime }       from './modules/getTime.js';
import { ranRecFood }    from './modules/ranRecFood.js';
import { updateCheck }   from './modules/updateCheck.js';
// 툴팁 실행
bs();


// customCursor 실행
if(document.querySelector('#main-home')){
  customCursor();
}


// shadow 효과 실행
if(document.querySelector('#shadow-box')){
  shadow();
}


// wow animation 실행
if(document.querySelector('.wow')){
  wowAnimate();
}


// scroll 올라가는 효과
if(document.querySelector('#scrolltoTop')){
  scroll();
}


// 메인 페이지 랜덤으로 3개 음식 추천해주는 함수
if(document.querySelector('#recommend-section')){
  ranRecFood();
}


// 메인 페이지 시간/날짜 알려주는 효과
if(document.querySelector('#getNow')){
  getTime();
}


// 회원가입 페이지 폼체크
if(document.querySelector("#signUp_form")){
  signUpCheck();
}

// 로그인 폼체크
if(document.querySelector('#login-form')){
  loginCheck();
}


if(document.querySelector('#update_form')){
  updateCheck();
}