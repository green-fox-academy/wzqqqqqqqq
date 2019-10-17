// Post-it
// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

class PostIt{
    constructor(backgroundColor,textColor,text){
        this.backgroundColor = backgroundColor;
        this.text= text;
        this.textColor =textColor;
    }
}

var object_1 = new PostIt('orange','blue','Idea 1');
var object_2 = new PostIt('pink','black','Awesome');
var object_3 = new PostIt('yellow','green','Superb!');