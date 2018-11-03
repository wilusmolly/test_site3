/* 현실에 존재하는 사물을 대량으로 생성하려면
사물을 만들어 낼수 잇는 틀(거푸집)을 이용하면 된다.
이러한 단위를 전산에서는 클래스라 한다!!

ES6 버전부터 객체지향 적 클래스가 강력하게 지원됨
OOP 언어란? Object Orieneted Programming
객체지향 

*/
class Arrow {
    /*현실의 사물은 상태 와 동작으로 밖에는 
    표현할 수 없기 때문에 클래스 안에 올수 있는
    코드 또한 상태와 동작을 표현하는 코드이다..
    상태 는 값이므로, 변수로 표현
    동작은 값의 변경 로직이므로 함수로 표현..
    */

    //ES6부터 자바나 C#처럼 생성자 함수를 지원한다..
   constructor(y) {
       this.span;
       this.x = 0;
       this.y = y;
       this.span = document.createElement("span");
       this.span.innerText = "→";
       this.span.style.position = "absolute";
       this.span.style.left = this.x + "px";
       this.span.style.top = this.y + "px";
       document.body.appendChild(this.span);
   }

    //움직이기
    move() {
        this.x += 10; //x = x + 10;
        this.span.style.left = this.x + "px";
        this.span.style.top = this.y + "px";
    }
}