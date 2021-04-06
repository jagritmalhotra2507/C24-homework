class Iron{
	constructor(x,y)
	{
	// assign options to the rubber ball
	var options={

		restitution:0.8,
		friction:3,
		'density':30
	}
		this.width=80
		this.height=50
		this.body=Bodies.rectangle(x,y,80,50, options)
		World.add(world, this.body);

		

	}
	display()
	{
			var ironPos=this.body.position;		
			var angle=this.body.angle;
			push()
			translate(ironPos.x, ironPos.y);
			rectMode(CENTER)
		    rotate(angle);
			strokeWeight(4);
			stroke("black");
			fill("brown");
			rect(0,0,this.width,this.height)
			//draw the ellipse here to display the rubber ball

			pop()
	}

}