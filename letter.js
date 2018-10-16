// Creating the letter constructor
function Letter (character, blank, guessed) {
    this.character = character,
    this.blank = blank,
    this.guessed = guessed,
    this.update = function () {
        if (guessed === true) {
            console.log(this.character);
        } else {
            console.log(this.blank)
        }
    },
    this.check = function () {
        if (this.guessed === this.character) {
            this.guessed = true,
            console.log("Correct!");
            update();
        }
    }
};

// Exporting the Letter constructor
module.exports = Letter;