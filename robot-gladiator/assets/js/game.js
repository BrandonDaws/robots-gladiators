
var playerName= window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "DOMO";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
    var promptFight = window.prompt(" Would You like to 'SKIP or 'FIGHT'? type 'skip' or 'fight' to choose")
    // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("are you sure you'd like to skip?");
    if(confirmSkip){
      window.alert(playerName + " Has decided to skip this fight... Good Bye!");
      playerMoney = playerMoney - 2;
      console.log(playerName + " Had 2 Dollars removed for fleeing!" + playerName + " Now has" + playerMoney + " Dollars Remaing!");
    }
    else{
      fight();
    }
  }
   else {
    window.alert("You need to choose a valid option. Try again!");
  }
  

};





fight();