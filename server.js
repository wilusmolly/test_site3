/* 서버를 구축하자!!직접 만들지 말고,
다른 개발자들이 이미 만들어놓은 코드 단위인
모듈을 쓰자!! */
var http=require("http"); //모듈 호출!!
var fs=require("fs");//파일 읽기 모듈

//이 모듈로부터 서버객체를 생성하자!!
var server=http.createServer();

//server 객체의 이벤트 중 접속을 감지하는 이벤트
server.on("connection", function(){
    console.log("접속자 발견!!");
});

//클라이언트측에 메세지를 출력!!
server.on("request", function(request, response){
    fs.readFile("index.html", function(error, data){
        if(error){
            console.log(error);
        }else{
            response.end(data);
        }
    });
});

server.on("close", function(){
    console.log("접속해제!!");
});

//서버 가동!!
server.listen(8888, function(){
    console.log("웹서버가 8888포트에서 가동중...");
});

