//game states
// "WIN" - player robot has defeated all enemy-robots
//  * fight all enemy-robots
//  * defeat each enemy-robt
// "LOSE" - player robot's health is zero or less

window.alert("Welcome to Robot Gladiators!");

var playerName = window.prompt("What is your robot's name");

var playerHealth = 100;

var playerAttack = 10;

var playerMoney = 10;

//you can also long multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];

var enemyAttack = 12;

var fight = function(enemyName) {
    
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
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }//end of while loop
    };// end of fight function

for (var i = 0; i < enemyNames.length; i++) {
    
    var pickedEnemyName = enemyNames[i];
        
    enemyHealth = 50;
    
    fight(pickedEnemyName);
}