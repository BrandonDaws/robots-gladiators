
var playerName= window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "DOMO";
var enmyHealth = 50;
var enemyAttack = 100;

var fight = function(){
    //alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators");
    //subtract the value of "player attack" from the value of the "enemy health" and use that result to update the value in the enemy health
    enmyHealth = enmyHealth - playerAttack;

    //log a resultingmessage to the console so we know that it worked. 
    console.log(
        playerName + "attacked" + enemyName + "." + enemyName + "now has" + enmyHealth + "health remaining!"
    );
     if(enmyHealth <= 0){
         window.alert(enemyName + "has died!")
     }
     else{
         window.alert(enemyName + " still has " + enmyHealth + "Health Remaining!");
     }
    //subtract the value of the "enemy attack" from the value of "Playerhealth" and use that to update the value in the "playerhealth" variable.
   playerHealth = playerHealth - enemyAttack;
   if(playerHealth <= 0){
       window.alert(playerName + "Died! How Could You?!")
   }
   else{
       window.alert(playerName + " Now Has " + playerHealth + "health Remaining");
   }

    //log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + "has attacked" + playerName + "!" + playerName + "now has" + playerHealth + "Health points remaing!"
    );

};

 



fight();