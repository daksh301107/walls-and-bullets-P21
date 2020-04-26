class bullet{
    constructor(x,y,width,height,weight,speed){
       // this.velocityx=29;
        this.x=x;
        this.y=200;
        this.width=width;
        this.height=height;
        this.weight=random(30,52);
        this.speed=random(223,321);
    }
    display()
    {
        rectMode(CENTER);
        rect(mouseX,mouseY, this.width, this.height,this.speed);
        fill (255,255,255);
    }

     
}