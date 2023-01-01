export function shadow(){
  const shadowBoxes = document.querySelectorAll('#shadow-box');

  shadowBoxes.forEach((box)=>{
    box.addEventListener('mouseenter', ()=>{
      box.classList.add('shadow-lg');
      box.classList.add('bg-light');
    });
  });

  shadowBoxes.forEach((box)=>{
    box.addEventListener('mouseleave', ()=>{
    box.classList.remove('shadow-lg');
    box.classList.add('bg-light');
    });
  });

  //js를 활용한 스타일 적용법
  shadowBoxes.forEach((box)=>{
    box.style.transition = '0.5s ease';
  });  
  
}