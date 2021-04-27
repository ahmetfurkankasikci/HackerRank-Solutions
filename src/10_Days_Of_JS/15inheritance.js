Rectangle.prototype.area=function(){
    return this.h*this.w;
}

class Square extends Rectangle{
    constructor(s){
        super(s,s)
    }   
}