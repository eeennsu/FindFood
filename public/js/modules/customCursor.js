export function customCursor(){
  const cursor = document.querySelector(".cursor");
  const circle = cursor.getBoundingClientRect();
  // const width = cursor.offsetWidth;
  // const Hegiht = cursor.offsetHeight;

  function follow(e){     
    if(e.pageY<=document.body.scrollHeight/3 && e.pageX<=document.body.scrollWidth-(circle.width/2)){     //950이 좋음
      gsap.to(cursor, .3, {left: e.pageX - circle.width/2, top: e.pageY - circle.height/2});
    }        
  }

  window.addEventListener("mousemove", follow);
}