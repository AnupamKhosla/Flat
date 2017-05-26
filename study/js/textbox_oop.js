function Textbox(width, height, color, background, text) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.background = background;
    this.text = text;
    

    this.clear = function() {
        this.text = "";
    };
    this.copy = function() {
        //...
    };
    this.newColor = function(color) {
        this.color = color;
    };
    this.newText = function(newtext) {
        this.text = newtext;
    }
}
