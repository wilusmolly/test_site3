/* 웹서버 구축시 클라이언트 요청한 파일을
해석하여 보내주려면, 해당 파일을 한줄 한줄 다
일일이 읽어들여 response.end() 메서드 안에
넣어줘야 한다...너무 비효율적이다...
해결책?? 인간의 손이 아닌, 코드로 한줄 한줄 읽어들여
그 결과를 출력하는 방법을 이용한다..
즉 스트림을 이용하자!!
*/
var fs=require("fs");//파일을 읽어들이는 모듈!!
//읽다가 실패하면 error 변수에 그 정보가 담겨짐
//읽기가 성공하면 읽어들이니 결과물은 data에 담겨짐
fs.readFile("index.html", function(error, data){
    if(error){//에러가 났다면..
        console.log(error);
    }else{
        console.log(data.toString());
    }    
});
