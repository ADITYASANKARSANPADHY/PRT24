class Dustbin{
    constructor(x,y){
       
       this.x= x;
       this.y= y;
       this.dustbinWidth=200;
       this.dustbinHeight=100;
       this.wallThickness=20;
       this.angle=0;	

        this.boxLeftBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness,{isStatic:true} );
        World.add(world,this.boxLeftBody);
    
      
    
        this. boxBottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness,{isStatic:true} );
        World.add(world, this.boxBottomBody);
    
        
    
        this.boxRightBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness,{isStatic:true});
        World.add(world, this.boxRightBody);
    
    }

    display(){
        var pp=this.boxLeftBody.position;
			var pp=this.boxBottomBody.position;
			var pp=this.boxRightBody.position;
        push();
        translate(pp.x,pp.y);
        rectMode(CENTER);
        pop()
        
    }

}
