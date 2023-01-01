export function scroll(){
  const scrollTop = document.querySelector('#scrolltoTop');
  const limitHeight = 50;
  const settings = {
    top: 0,
    behavior: 'smooth',
  };

  const primaryNavbar = document.querySelector('#primaryNavbar');


  scrollTop.addEventListener('click', ()=>{
    window.scroll(settings);     // 페이지 맨 위로 이동
  });

  window.onscroll = ()=>{
    if(document.body.scrollTop> limitHeight || document.documentElement.scrollTop> limitHeight){
      scrollTop.style.display = 'block';
      primaryNavbar.classList.add('rgba-black-strong');
      primaryNavbar.classList.remove('rgba-black-light');
    }

    else{
      scrollTop.style.display = 'none';
      primaryNavbar.classList.remove('rgba-black-strong');
      primaryNavbar.classList.add('rgba-black-light');
    }
  }
}