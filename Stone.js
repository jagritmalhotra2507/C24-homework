class Stone{
	constructor(x,y)
	{
	// assign options to the rubber ball
	var options={

		'restitution':0.8,
		'friction':0.9,
		'density':12
	}
		this.width=120
		this.height=60
		this.body=Bodies.rectangle(x,y,120,60, options)
		World.add(world, this.body);

		

	}
	display()
	{
			var stonePos=this.body.position;		
			var angle=this.body.angle;
			push()
			translate(stonePos.x, stonePos.y);
			rectMode(CENTER)
		    rotate(angle);
			strokeWeight(4);
			stroke("blue");
			fill("black");
			rect(0,0,this.width,this.height)
			//draw the ellipse here to display the rubber ball

			pop()
	}

}