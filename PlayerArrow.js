class PlayerArrow {

    constructor(x, y, width, height) {
        var options = {
            isStatic: false
        };

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/arrow.png");

        World.add(world, this.body);
    }

shoot() {

    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {x: 10, y: 0});
   
}

display () {
    var pos = this.body.position;

    push();
    rotate(playerArcher.angle);
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();

}
}