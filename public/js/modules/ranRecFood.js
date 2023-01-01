export function ranRecFood(){                       // random recommend food
   
    const ran1_img = document.querySelectorAll('.ran1');          // img 태그들1 가져오기
    const ran2_img = document.querySelectorAll('.ran2');          // img 태그들2 가져오기
    const ran3_img = document.querySelectorAll('.ran3');          // img 태그들3 가져오기
    const ran1_name = document.querySelectorAll('.ran1name');     // 음식 네임태그들1 가져오기
    const ran2_name = document.querySelectorAll('.ran2name');     // 음식 네임태그들2 가져오기
    const ran3_name = document.querySelectorAll('.ran3name');     // 음식 네임태그들3 가져오기

    function FoodInfos(name, src){
        this.name = name;
        this.src = src;
    }

    // 이미지, 이름 담기
    const Images = [
        // 한식
        new FoodInfos('비빔면', 'images/food/none_copyright/kr/bibimneangmyeon.jpg'),
        new FoodInfos('부대찌개', 'images/food/none_copyright/kr/boodaeggigae.png'),
        new FoodInfos('닭갈비', 'images/food/none_copyright/kr/darkgalbi.png'),
        new FoodInfos('떡볶이', 'images/food/none_copyright/kr/bibimneangmyeon.jpg'),
        new FoodInfos('갈비탕', 'images/food/none_copyright/kr/galbitang.png'),
        new FoodInfos('김밥', 'images/food/none_copyright/kr/gimbap.png'),
        new FoodInfos('김치찌개', 'images/food/none_copyright/kr/kimchiStew.png'),
        new FoodInfos('잔치국수', 'images/food/none_copyright/kr/janchigooksu.jpg'),
        new FoodInfos('칼국수', 'images/food/none_copyright/kr/kalgooksu.jpg'),
        new FoodInfos('라면', 'images/food/none_copyright/kr/lamyeon.png'),
        new FoodInfos('물냉면', 'images/food/none_copyright/kr/moolneangmyeon.jpg'),
        new FoodInfos('곱창', 'images/food/none_copyright/kr/gobchang.png'),
        new FoodInfos('삼겹살', 'images/food/none_copyright/kr/samgyupsal.png'),
        new FoodInfos('불고기', 'images/food/none_copyright/kr/bulgogi.jpg'),
        new FoodInfos('설렁탕', 'images/food/none_copyright/kr/sullungtang.jpg'),
        new FoodInfos('순대', 'images/food/none_copyright/kr/sundae.png'), 

        // 양식
        new FoodInfos('리소토', 'images/food/none_copyright/wt/risotto.png'),
        new FoodInfos('샐러드', 'images/food/none_copyright/wt/salad.png'),
        new FoodInfos('스프', 'images/food/none_copyright/wt/soup.png'),
        new FoodInfos('핫도그', 'images/food/none_copyright/wt/hotDog.png'),
        new FoodInfos('연어 스테이크', 'images/food/none_copyright/wt/steak.png'),
        new FoodInfos('맥엔치즈', 'images/food/none_copyright/wt/macAndCheese.png'),
        new FoodInfos('감바스', 'images/food/none_copyright/wt/gambasAlAjillo.png'),
        new FoodInfos('감자튀김', 'images/food/none_copyright/wt/frenchFries.png'),
        new FoodInfos('파스타', 'images/food/none_copyright/wt/pasta.png'),
        new FoodInfos('피자', 'images/food/none_copyright/wt/pizza.png'),
        new FoodInfos('햄버거', 'images/food/none_copyright/wt/burger.png'),
        new FoodInfos('스테이크', 'images/food/none_copyright/wt/steak.png'),
        new FoodInfos('케밥', 'images/food/none_copyright/wt/kebab.png'),
        new FoodInfos('소시지', 'images/food/none_copyright/wt/sausage.png'),
        new FoodInfos('치킨', 'images/food/none_copyright/wt/chicken.png'),
        new FoodInfos('샌드위치', 'images/food/none_copyright/wt/sandwich.png'),

        // 중식
        new FoodInfos('짜장면', 'images/food/none_copyright/ch/jajangmyeon.png'),
        new FoodInfos('짬뽕', 'images/food/none_copyright/ch/jjambbong.png'),
        new FoodInfos('마라탕', 'images/food/none_copyright/ch/spicyNumbingSoup.png'),
        new FoodInfos('탕수육', 'images/food/none_copyright/ch/sweetAndSourPork.png'),
        new FoodInfos('유린기', 'images/food/none_copyright/ch/youlinji.png'),
        new FoodInfos('양꼬치', 'images/food/none_copyright/ch/lambSkewers.png'),
        new FoodInfos('북경 오리구이', 'images/food/none_copyright/ch/pekingDuck.png'),
        new FoodInfos('마라샹궈', 'images/food/none_copyright/ch/maraXiangguo.png'),
        new FoodInfos('볶음밥', 'images/food/none_copyright/ch/chaofan.png'),
        new FoodInfos('마파두부', 'images/food/none_copyright/ch/mapoTofu.png'),
        new FoodInfos('멘보샤', 'images/food/none_copyright/ch/shrimpToast.png'),
        new FoodInfos('훠궈', 'images/food/none_copyright/ch/hotPot.png'),
        new FoodInfos('동파육', 'images/food/none_copyright/ch/dongporou.png'),
        new FoodInfos('칠리새우', 'images/food/none_copyright/ch/chiliShrimp.png'),
        new FoodInfos('딤섬', 'images/food/none_copyright/ch/dimSum.png'),
        new FoodInfos('냉채', 'images/food/none_copyright/ch/coldDishes.png'),

        // 일식
        new FoodInfos('초밥', 'images/food/none_copyright/jp/sushi.png'),
        new FoodInfos('회', 'images/food/none_copyright/jp/sliceOfRawFish.png'),
        new FoodInfos('회덮밥', 'images/food/none_copyright/jp/sushiBowl.png'),
        new FoodInfos('타코야키', 'images/food/none_copyright/jp/takoyaki.png'),
        new FoodInfos('소바', 'images/food/none_copyright/jp/soba.png'),
        new FoodInfos('라멘', 'images/food/none_copyright/jp/ramen.png'),
        new FoodInfos('우동', 'images/food/none_copyright/jp/udon.png'),
        new FoodInfos('나가사키 짬뽕', 'images/food/none_copyright/jp/nagasakiNoodles.png'),
        new FoodInfos('가츠동', 'images/food/none_copyright/jp/gacheudong.png'),
        new FoodInfos('규동', 'images/food/none_copyright/jp/gyudong.png'),
        new FoodInfos('새우튀김', 'images/food/none_copyright/jp/ebiFurai.png'),
        new FoodInfos('오야코동', 'images/food/none_copyright/jp/oyakodon.png'),
        new FoodInfos('텐동', 'images/food/none_copyright/jp/tempuraRiceBowl.png'),
        new FoodInfos('가라아게', 'images/food/none_copyright/jp/karaage.png'),
        new FoodInfos('고로케', 'images/food/none_copyright/jp/korokke.png'),
        new FoodInfos('유부', 'images/food/none_copyright/jp/yubu.png'),
    ];
 
    // ***  중복없이 랜덤으로 3개 음식을 골라주는 로직 ***
    let ranIndexArray = [];
    let copyArray = [...Images];

    for(let i=0; i<3; i++){
        let ranIndex = Math.floor(Math.random() * copyArray.length);
        ranIndexArray.push(copyArray[ranIndex]);
        copyArray.splice(ranIndex,1);    
    }

    // 첫번째 음식
    ran1_img.forEach((food) => {
        food.src = ranIndexArray[0].src;
    });

    ran1_name.forEach((food) => {
        food.textContent =  ranIndexArray[0].name;
    }); 

    // 두번째 음식
    ran2_img.forEach((food) => {
        food.src =  ranIndexArray[1].src;
    }); 

    ran2_name.forEach((food) => {
        food.textContent =  ranIndexArray[1].name;
    }); 

    // 세번째 음식
    ran3_img.forEach((food) => {
        food.src =  ranIndexArray[2].src;
    }); 
    
    ran3_name.forEach((food) => {
        food.textContent =  ranIndexArray[2].name;
    }); 
}