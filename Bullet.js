/* 
예전에 만든 클래스를 또 써먹을 수 있나?
있다!!! 상속!!!
*/
//총알을 정의하되 움직임이나 특징이 기존에 만들어놓은
//화살과 별로 차이가 없다면, 화살을 상속받으면 된다.
//화살을 부모로 두자!!
class Bullet extends Arrow{
                /* is a */
    constructor(y){
        super(y);//부모의 초기화 보다 앞서는 코드는
        //허용되지 않는다!!
        this.span.innerText = "●";        
    }
    //상속받는 자식이 부모의 기능보다 더 개선된 코드
    //가 있거나 변경될 경우 부모가 가진 메서드를 재정의
    //해버릴 수 잇는 메서드 정의 기법 = 오버라이드
    move() {
        this.x += 10; //x = x + 10;
        this.y +=2;
        
        this.span.style.left = this.x + "px";
        this.span.style.top = this.y + "px";
    }

}