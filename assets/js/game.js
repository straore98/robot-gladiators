//game states
// "WIN" - player robot has defeated all enemy-robots
//  * fight all enemy-robots
//  * defeat each enemy-robt
// "LOSE" - player robot's health is zero or less
var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//you can also long multiple values at once like this
console.log(playerName, playerAttack, playerHealth);
var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyAttack = 12;
var enemyHealth = 50;

var fight = function(enemyName) {

    window.alert("Welcome to Robot Gladiators!");
    //repeat and execute as long as the enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {
        //ask player to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log( "playerMoney", playerMoney);
                break;
            }
        }

         //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        //Log a resulting message to the console so we know that it worked.
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
            );

            //check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");

                //award player money for winning
                playerMoney = playerMoney + 20;
                //console log player money
                console.log( "playerMoney after enemy is dead", playerMoney)
                //leave while() loop since enemy is dead
                break;

            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;

            //Log a resulting message to the console so we know that it worked.
            console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            //check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                // leave while () loop if player is dead
                console.log(playerHealth);
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }//end of while loop
    };// end of fight function

var startGame = function () {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    
    for (var i = 0; i < enemyNames.length; i++) {
            
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyName = enemyNames[i];

            enemyHealth = 50;

            fight(pickedEnemyName);
        }

        else {
            window.alert("You have lost your robot in battle! Game Over!");
                
            break;
        }
    }
 // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
 endGame();
};

var endGame = function() {
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of" + playerMoney + "." );
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// start game when the page loads
startGame();
