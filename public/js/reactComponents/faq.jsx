function AccordionHeader(props){
  
  return(
    <h2 className="accordion-header" id={props.ah_id}>
     <button className={`accordion-button ${props.isCollapse}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${props.ab_id}`} aria-expanded={props.expanded} aria-controls={props.ab_id}>
        {props.title}
     </button>
    </h2>
  );
}


function AccordionBody(props){

  return(
   <div id={props.ab_id} className={`accordion-collapse collapse ${props.isShow}`} aria-labelledby={props.ah_id} >
    <div className="accordion-body">
      <strong>{props.strongSpan}</strong>
      {props.text}
    </div>
   </div>
  );
}


function AccordionItem(props){

  return(
    <div className="accordion-item">
      <AccordionHeader isCollapse={props.isCollapse} ah_id={props.ah_id} ab_id={props.ab_id} title={props.title} expanded={props.expanded}/>
      <AccordionBody isShow={props.isShow} ab_id={props.ab_id} text={props.text} strongSpan={props.strongSpan}/>
    </div>
  );
}


function Accordion(props){

  return(
    <div className="accordion my-3 my-lg-5" id="accordionPanelsStayOpenExample">
      <AccordionItem ah_id="panelsStayOpen-headingOne" ab_id="panelsStayOpen-collapseOne" isCollapse={''} isShow={'show'} expanded="true" title="위치 정보 기반 시스템은 어떻게 이용되나요?" strongSpan={'여러분의 컴퓨터 or 디바이스의 위치정보 제공 기능의 동의'} text={'하에 이루어집니다! 이 기능에 동의하지 않으시면 gps기능을 이용하실 수 없습니다! 여러분의 위치 정보 기능은 주변 음식점 제공 용도 이외에 사용되지 않습니다.'}/>
      <AccordionItem ah_id="panelsStayOpen-headingTwo" ab_id="panelsStayOpen-collapseTwo" isCollapse={'collapsed'} isShow='' expanded="false" title="룰렛에는 어떤 음식들이 있을까요?" strongSpan={'한식, 양식, 중식, 일식'} text={'의 분류별로 각각의 15가지 이상의 대표적인 음식들이 준비되어 있습니다. 매니악한 음식은 음식점이 미비하기 때문에 추가되지 않았습니다.'}/>
      <AccordionItem ah_id="panelsStayOpen-headingThree" ab_id="panelsStayOpen-collapseThree" isCollapse={'collapsed'} isShow='' expanded="false" title="앞으로 어떤 기능들이 추가될 예정인가요?" strongSpan={'커뮤니티 게시판, 회원 세부 기능, 지도 api 유틸리티 기능'} text={'등이 추가될 예정입니다! 아직 회원상태에서는 비회원과 다름없이 회원 전용 기능이 존재하지 않습니다. 때문에 추후 유저 여러분들의 다양한 소통이 이루어지도록 커뮤니티 게시판제작과, 회원 아이디 찾기, 비밀번호 찾기, 회원 탈퇴 기능의 추가와 마지막으로 다양한 FindFood관련 유틸리티 기능을 제작할 예정입니다. 많은 관심 부탁드립니다. '} />
    </div>
  );
}

ReactDOM.render(<Accordion/>, document.querySelector('#faq'));