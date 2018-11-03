/* 게임에 등장하는 모든 ~~~ 오브젝트의 공통적
특징을 갖는 최상위 객체를 정의한다.. */
class GameObject{
    constructor(container,x, y, width,height,velX, velY,src){
        this.container=container;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;//x축의 움직임 속도
        this.velY=velY;//y축의 움직임 속도
        this.img;

        this.img=document.createElement("img");
        this.img.src=src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.container.appendChild(this.img);
    }
    move(){
        this.x=this.x+this.velX;//움직임 증가값을 변수로...
        this.y=this.y+this.velY;

        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}