//game states
// "WIN" - player robot has defeated all enemy-robots
//  * fight all enemy-robots
//  * defeat each enemy-robt
// "LOSE" - player robot's health is zero or less
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//you can also long multiple values at once like this
console.log(playerName, playerAttack, playerHealth);
var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyAttack = 12;
var enemyHealth = 50;

// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

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
                playerMoney = Math.max(0, playerMoney - 10);
                console.log( "playerMoney after skip " + playerMoney)
                break;
            }
        }

         //remove enemy's health by subtracting the amount set in the playerAttack variable
         //generate random damage value based on player's attack power
        var damage = randomNumber(playerAttack - 3, playerAttack);

        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log("random damage on enemyHealth " + enemyHealth);
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
                console.log( "playerMoney after enemy is dead is ", playerMoney);
                //leave while() loop since enemy is dead
                break;

            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // remove player's health by subtracting the amount set in the enemyAttack variable

            var damage = randomNumber(enemyAttack - 3, enemyAttack);

            playerHealth = Math.max(0, playerHealth - damage);
            console.log("random damage on player health " + playerHealth);

            //Log a resulting message to the console so we know that it worked.
            console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            //check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                // leave while () loop if player is dead
                console.log(playerHealth)
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

            enemyHealth = randomNumber(40, 60);
            console.log("random enemyHealth " + enemyHealth)

            fight(pickedEnemyName);

            // if we're not the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, take them to the store() fuction
                if (storeConfirm){
                    shop();
                }
            }
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
    window.alert("The game has now ended. Let's see how you did!")
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + "." );
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

var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you ulike to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if (playerMoney >= 7){
                window.alert("Refilling player's health by 20 for 7 dollars.");

                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                console.log(playerHealth + " is new playerHealth after refill.");
                console.log(playerMoney + " is new playerMoney after refill.");
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7){
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                //increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
                console.log(playerAttack + " is new playerAttack after upgrade.");
                console.log(playerMoney + " is new playerMoney after upgrade.");
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");

            //do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

// start game when the page loads
startGame();
