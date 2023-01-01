function CompanyInfo(props){

  return(
    <p>
      <i className={props.icon}></i>{props.children}
    </p>
  );
} 

function OurSocials(props){

  return(
    <a href={props.clickLink} className="mx-1 text-decoration-none social" target="_blank">
      <img src={props.src} alt={props.alt} />
    </a>
  );
}

function Footer(props){

  return(
    <div className="section-content-footer">
      <hr className="hr-white"/>
      <div className="container">
        <div className="row justify-content-around text-center text-lg-start">
         <div className="col-lg-4 infos">  
          <CompanyInfo icon="fa-solid fa-file-signature">  상호명 : FindFood</CompanyInfo>
          <CompanyInfo icon="fa-solid fa-person-cane">  대표 : 김윤관</CompanyInfo>
          <CompanyInfo icon="fa-solid fa-briefcase">  사업자 등록 번호: 000-00-00000</CompanyInfo>
          <CompanyInfo icon="fa-sharp fa-solid fa-location-dot">  주소: 서울특별시 서대문구 가좌로 134 </CompanyInfo>
          <CompanyInfo icon="fa-solid fa-file-lines">  개인정보 처리방침</CompanyInfo>
         </div>
         <div className="col-lg-4 text-center my-2">
          <div className="row justify-content-center">
            <div className="social-icons" data-bs-toggle="tooltip" data-bs-placement="bottom" title="A variety of social content from FindFood. Please feel free to visit!">
              <OurSocials src={'images/icon-kakao-channel.png'} alt="kakao" clickLink="https://accounts.kakao.com/login?continue=https%3A%2F%2Fsharer.kakao.com%2Fpicker%2Flink%3Fapp_key%3D4e0f02e43248fed6c5850431ea527a61%26short_key%3D28f1999a-a953-4a57-b909-d13c0243c5c7','kakao-login','resizable, left=750, top=250, height=550, width=400'); return false;"/>
              <OurSocials src={'images/icon-youtube.png'} alt="youtube" clickLink={"https://www.youtube.com/"}/>
              <OurSocials src={'images/icon-facebook.png'} alt="facebook" clickLink={"https://www.facebook.com/"}/>
              <OurSocials src={'images/icon-twitter.png'} alt="twitter" clickLink={"https://twitter.com/?lang=ko"}/>
            </div>
            <div className="mt-2">
                저희 웹 사이트는 대학교 프로젝트 과목의 작품으로 제작되었습니다.
                비 영리 사이트이며 웹 사이트 이용 규약을 준수합니다.
            </div>
          </div>
         </div>         
        </div>  
        <div className="copyright text-center mt-lg-2">
          Copyright © 2022-12-x
          All rights Reserved.<br />
          Hosting By /FF
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Footer/>, document.querySelector('#footer'));