function Marquee(speed, direction, color, background, text) {

    this.speed = speed;
    this.direction = direction;
    this.color = color;
    this.background = background;


    this.forward = function() {
        if (this.direction == "down") {
            //go down
        } else if (this.direction == "up") {
            //go up
        }
    };

    this.backward = function() {
        if (this.direction == "down") {
            //go up
        } else if (this.direction == "up") {
            //go down
        }
    };
    this.newtext = function(newtext) {
        this.text = newtext;
    }
}
