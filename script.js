/*i found the speech code at the following url
          i wrapped into a function*/

          function say(myMessage){
            var msg = new SpeechSynthesisUtterance(myMessage);
            window.speechSynthesis.speak(msg);
          }



        /* This is a simplified version of the game.
        The Computer ALWAYS picks ROCK.  
        Does the user's choose win,lose, or tie vs ROCK? */
        function play(user) {
            let result = "";
            if (user === 'rock') {
                result = "tie";
            }
            if (user === 'paper') {
                result = "win";
            }
            if (user === 'scissors') {
                result = "lose";
            }
            var themessage = "Computer chose rock, you" + result + "!";
            alert(theMessage);
            say(theMessage);
        }