export function getTime(){
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  let now = new Date();
  let time = ['아침', '점심', '늦은 점심','저녁', '야식'];
  let time_value;
  let hour = now.getHours();
  const getNow = document.getElementById('getNow');
  
  if(hour>=6 && hour<=11){
    time_value = time[0];
  } 
  
  else if(hour>=12 && hour<=14){
    time_value = time[1];
  } 
  
  else if(hour>=15 && hour<=16){
    time_value = time[2];
  }
  
  else if(hour>=17 && hour<=21){
    time_value = time[3];
  }
  
  else if(hour<=5 || hour>=22){
    time_value = time[4];
  }               

  getNow.textContent = `${now.getUTCMonth()+1}월 ${now.getDate()}일 ${week[now.getUTCDay()]}, ${time_value}의 추천메뉴` 
}