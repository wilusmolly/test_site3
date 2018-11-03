/* http 모듈만으로드는 서버의 모든 기능을 구현하기
엔 부족한 점이 많다..따라서 기본 서버의 기능을 
보완한 모듈인 express 모듈을 사용해보자!! */
var http=require("http");
var express=require("express");
var mysql=require("mysql");

//주의: express 모듈은 단독으로 존재할수 없고
//기본 서버모듈을 업그레이드 하기 때문에 http모듈을
//필요로 한다..
var app=express();//express 객체 생성!!
var server=http.createServer(app);//업그레이드된 서버 탄생

//html, image, 동영상 등의 자원들을 가리켜 정적자원이라
//하며, 이러한 정적 자원의 요청이 들어왔을때 일일이 
//요청을 처리하는 메서드를 둔다면, 개발의 효율성이 떨어진다
//따라서 완제품서버들 처럼, 로직이 아니라 서버 자체적으로
//알아서 정적 자원을 클라이언트에 전송해주는 기능을 이용..

//express 모듈은 미들웨어 불리는 각종 기능들을 제공해주는데
//미들웨어를 사용할때는 use() 메서드를 사용할 수 있다
//static 미들웨어에 정확한 하드경로를 넣는것은 올바르긴 하나
//문제점은 하드코딩하여 고정시키지 말자, 외부환경변화에 의해
//유지보수성이 떨어진다...
//해결책? 프로그래밍적으로 경로를 구해와서 동적으로 넣어주자
//노드 자체적으로 전역변수가 지원되며 그 중 __dirname 이용
//__dirname : 현재 실행중인 파일의 풀경로를 반환...
console.log("현재실행중인 파일의 폴더는 ", __dirname);
app.use(express.static(__dirname));

//mysql에 데이터 1건 넣기!!
//url의 끝에 /regist로 요청이 들어오면...
app.get("/regist", function(request, response){
    console.log("등록 요청 들어옴!!");
    response.end("regist 원해?");

    //mysql 접속 
    var pool=mysql.createPool({
        url:"localhost",
        user:"root",
        password:"",
        database:"front"
    });

    //생성된 풀로 부터 커넥션 객체 1개 얻어오기
    //얻기실패한 경우엔 error 객체 생성되고,
    //성공한 경우엔 con 변수에 접속객체가 받아진다.. 
    pool.getConnection(function(error, con){
        if(error){
            console.log(error);
        }else{
            //얻기 성공했으므로, 쿼리문 수행시키자!!
            var sql="insert into test(name) values('민진호')";

            con.query(sql, function(err, result){
               if(err){
                    console.log(err);
               }else{
                    console.log(result);
                    if(result.affectedRows==0){
                        console.log("등록실패");    
                    }else{
                        console.log("등록성공");    
                    }
               } 
               //접속 객체 반납!!! (풀로 돌려보내기..)
               pool.releaseConnection(function(e){});
            });
        }
    });

});


server.listen(8888, function(){
    console.log("웹서버가 8888포트에서 가동중...");
});

