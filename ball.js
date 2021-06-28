class Ball {
    constructor(x, y, d) {
        var ballOptions = {
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }

        this.d = d;
        this.r = d/2;
        this.body = Bodies.circle(x, y, this.r, ballOptions);
        World.add(world, this.body);
    }

    show() {
        fill(255, 255, 255);
        ellipse(this.body.position.x, this.body.position.y, this.d, this.d);
    }
}