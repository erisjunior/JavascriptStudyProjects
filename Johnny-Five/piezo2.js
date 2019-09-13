var five = require("johnny-five"),
board = new five.Board();

board.on("ready", function() {
    // Creates a piezo object and defines the pin to be used for the signal

    var piezo = new five.Piezo({
        pin: 3
    });

    // Injects the piezo into the repl
    board.repl.inject({
    piezo: piezo
    });

    // Plays a song
    piezo.play({
    // song is composed by an array of pairs of notes and beats
    // The first argument is the note (null means "no note")
    // The second argument is the length of time (beat) of the note (or non-note)
    song: [
      [110, 1],
      [220, 1],
      [330, 1],
      [440, 1],
      [550, 1],
      [660, 1],
      [770, 1],
      [880, 1],
      [990, 1],
    ],
    tempo: 100
    });

    // Plays the same song with a string representation
    
});