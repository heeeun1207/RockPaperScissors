//가위바위보 알고리즘 작성하기 
//가위 ga 
//바위 ju
//보  bo
// 먼저 생각을 써보면서 설계하기 
// 1. 함수명 이름을 만들고 시작하기 
function gamBamBo( na, you ) {
  //생각 정리해보기 
  //2. 실행해야할 규칙을 적어보자  -> 불변전제
  // 가위바위보의 불변전제는?
  //가위는 바위에게 지고 , 보자기에게 이긴다.
  //바위는 보자기에게 지고, 가위에게 이긴다.
  //보는 가위에게 지고 , 바위에게 이긴다.
  var rules = ["가위","바위","보"];
  var a,b,c;
  a ="ga";//가위
  b ="ju";//바위
  c ="bo";//보
  var result =false;
  try {
  //에러처리
    if(na !== a && na !== b && na !== c){
      throw new Error("가위바위보에서 다른 거 내지 마!");
    }else if(na !== a && na !== b && na !== c){
      throw new Error("가위바위보에서 다른 거 내지 마!");
  }
  //비긴 경우
  if( na === you) {
    console.log("비겼습니다. 다시한번 하십시오.");
    result = "패배";
  }
  else {
    //1차 내가 가위인 경우 , 
    //가위 vs 바위
    if( na === a && you === b ){
      result = "패배";
    //가위 vs 보 
    }else if (na === a && you === c){
      result = "승리";
    }
    //2차 내가 바위인 경우 ,
    //바위 vs 가위
    if (na === b && you === a) {
        result = "승리";
    //바위 vs 보
    }else if (na === b && you === c) {
        result = "패배";
    }
    //3차 내가 보를 낸 경우 ,
    if (na === c && you === a) {
        result = "패배";
      //보 vs 바위
      }
      else if (na === c && you === b) {
        result = "승리";
    }
  }
  }
  catch(err) {
    console.log("가위바위보에 다른 거 내지마!");
  }
  return result;
  }
console.log(gamBamBo("ju","ga"));