const express = require('express');
const router = express.Router();
const connection = require('../public/js/back/mysql.js');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// 쿠키와 관련된 옵션 : 문자열로 인코딩, 쿠키의 생존 기간은 생성 후 부터 하루
const cookieOptions = { 
    encode: String,
    expires: new Date(Date.now() + 1000 * 3600 * 24),  
};

// 정적파일을 사용할 수 있도록 폴더 로드해주기 (해주지 않으면 css, js파일과 연결 x)
router.use(express.static('public'));


router.use(cookieParser());

router.use(session({
    secret: 'keyboard cat',        // 필수 옵션, 다른 사람들한테 노출되면 안되는 옵션이다.
    resave: false,                 // 세션데이터가 바뀌기 전까지 세션 저장소에 저장하지 않는다는 뜻이다. true이면 바뀌었건 아니건 저장한다는 뜻이다.
    saveUninitialized: true,       // 세션이 필요하기 전까지 세션을 구동하지 않는다는 뜻이다.
    store: new FileStore(),
}));

router.get('/login', (req, res) => {
   if(!req.session.FFlogin){
        res.render('login', {'data': false});
   }

   else{  
        res.render('login', {'data': true});
   }    
}); 

router.post('/signUp_process', (req, res, cb) => {
  const { u_name, u_nickname, u_email, u_pw, u_addr, u_path } = req.body;

  // 이메일 중복 체크
  connection.query('select * from user where u_email=?', 
  [u_email],
  (err, results, fields) => {
      if(err) cb(err);

      // 결과가 0이면 중복값이 없다는 뜻이다.
      if(results.length === 0){
          connection.query('select * from user where u_nickname=?',
            [u_nickname],
            (err, results, fields) => {
              if(err) cb(err);

              else{
                  // 닉네임 중복체크
                  if(results.length === 0){                        
                      connection.query('insert into user (u_name, u_nickname, u_email, u_pw, u_addr, u_path) values (?, ?, ?, ?, ?, ?)',
                          [u_name, u_nickname, u_email, u_pw, u_addr, u_path],
                          (err, results, fields) => {
                              if(err){                        
                                  res.send('<script> alert("실패하였습니다. 올바르게 작성해주세요"); window.location.replace("/page/signUp")</script>');
                              }
                  
                              else{      
                                  res.send('<script> window.location.replace("/"); alert("회원가입에 성공하였습니다!");</script>');
                              }           
                          }
                      );
                  }

                  else{
                      res.send('<script> alert("중복된 닉네임입니다. 다른 닉네임을 입력해주세요"); window.location.replace("/page/signUp"); </script>');
                  }
              }
          });        
      }

      else{
          res.send('<script> alert("중복된 이메일입니다. 다른 이메일을 입력해주세요"); window.location.replace("/page/signUp"); </script>');
      }
  }); 
});


router.post('/login_process', (req, res, cb) => {
  const { u_email, u_pw } = req.body;
  let FFlogin = req.session.FFlogin; 
  if(!FFlogin){
      connection.query('select * from user where u_email=?', 
          [u_email],
          (err, results, fields) => {
              if(err){                                   
                  res.send('<script> alert("오류가 발생하였습니다! 다시 접속해주세요"); window.location.replace("/user/login"); </script>');
              }
      
              else{                     
                  try{
                    if(results.length != 0){
                        let checkUser = results[0];
                        if(checkUser?.u_pw === u_pw){    
                            req.session.FFlogin = true;
                            req.session.u_email = u_email;
                            req.session.save(() => {
                                 res.cookie('FFlogin', true, cookieOptions)                                      
                                    .send(`<script> alert('${checkUser.u_nickname}님 환영합니다'); window.location.replace("/user/login") </script>`);
                            });                               
                        }           
                        
                        else{
                            res.send(`<script> alert('비밀번호가 일치하지 않습니다.'); window.location.replace("/user/login") </script>`);
                        }
                    }

                    else{
                        res.send(`<script> alert('아이디가 존재하지 않습니다. 다시 시도해주세요'); window.location.replace("/user/login") </script>`);
                    }       

                  } catch(e){
                    res.send('<script> alert("오류가 발생하였습니다! 다시 접속해주세요"); window.location.replace("/user/login"); </script>');
                  }                                      
              }
        });
  }
  
  // 혹시 모를 버그를 대비
  else if(FFlogin === true || FFlogin === 'true'){
      res.send('<script> alert("이미 로그인이 되어있습니다."); window.location.replace("/"); </script>');
  }  

    // 혹시 모를 버그를 대비
  else{
    res.send('<script> alert("오류가 발생하였습니다! 다시 접속해주세요"); window.location.replace("/user/login"); </script>');
  }
});


router.get('/logout_process', (req, res) => {
    if(req.session.FFlogin === true){
        req.session.destroy(() => {
            res.clearCookie('FFlogin')
                .send('<script> alert("로그아웃 되었습니다."); window.location.replace("/"); </script>');                 
        });     
    }

  // 혹시 모를 버그 대비
    else if(!req.session.FFlogin){
        req.session.destroy(() => {
            res.send('<script> alert("로그인 되어있지 않습니다. 종료 후 다시 접속해주세요"); window.location.replace("/"); </script>');      
        });                 
    }  

    else{
        res.send('<script> alert("오류가 발생하였습니다. 관리자에게 문의 바랍니다."); window.location.replace("/"); </script>');      
    }
});


router.get('/myPage', (req, res) => {
    let { FFlogin, u_email } = req.session;

    if(FFlogin && u_email){        
        connection.query('select * from user where u_email=?', 
            [u_email],
            (err, results, fields) => {
                if(err) throw err;
  
                else{             
                    res.render('myPage', {'data': results});
                }
        });    
        
    } else{
        res.send('<script> alert("로그인을 진행해주세요"); window.location.replace("/user/login")</script>');
    }
});



router.post('/update_process', (req, res, cb) => {
  const { u_nickname, u_pw, u_addr } = req.body;
  connection.query('select * from user where u_nickname=?',
      [u_nickname],
      (err, results, fields) => {
          if(err) cb(err);

          else{
              if(results.length === 0){
                  connection.query('update user set u_nickname=?, u_pw=?, u_addr=? where u_email=?',
                      [u_nickname, u_pw, u_addr, req.session.u_email],
                      (err) => {
                          if(err) cb(err);
              
                          else{
                              res.send(`<script> alert("${u_nickname}님 환영합니다! 변경이 완료되었습니다."); window.location.replace("/");</script>`);
                          }
                  });
              }

              else{
                  res.send('<script> alert("중복된 닉네임입니다. 다른 닉네임을 입력해주세요"); window.location.replace("/");</script>');
              }
          }
    }); 
});

module.exports = router;