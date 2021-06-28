class Bin {
    constructor() {
       var x1 = 600;
       var y1 = 300;
       var w1 = 10;
       var h1 = 70;
       var options1 = {isStatic: true}
       var x2 = 670;
       var y2 = 300;
       var w2 = 10;
       var h2 = 70;
       var options2 = {isStatic: true}

       this.body1 = Bodies.rectangle(x1, y1, w1, h1, options1);
       this.body2 = Bodies.rectangle(x2, y2, w2, h2 ,options2);
       World.add(world, this.body1)
       World.add(world, this.body2);
    }

    show() {
        fill(255, 255, 0);
        noStroke();
        rect(this.body1.position.x, this.body1.position.y, 10, 70);
        rect(this.body2.position.x, this.body2.position.y, 10, 70);
    }
}