class Ground {
    constructor(x, y, w, h) {
        var groundOptions = {
            isStatic: true
        }
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, w, h, groundOptions);
        World.add(world, this.body);
    }

    show() {
        fill(255, 255, 0);
        rect(this.body.position.x, this.body.position.y, this.w, this.h);
    }
}