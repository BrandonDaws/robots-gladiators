
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roboto", "amy Android", "Robo Trumble"];
var enemyHealth = Math.floor(Math.random() * 21) + 40;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[2]);

var fight = function (enemyName) {
 while (playerHealth > 0 && enemyHealth > 0) {
     var promptFight = window.prompt(" Would You like to 'SKIP or 'FIGHT'? type 'skip' or 'fight' to choose");

    if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("are you sure you'd like to skip?");
      if (confirmSkip) {
        window.alert(playerName + " Has decided to skip this fight... Good Bye!");
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney",playerMoney);
        break;
      }
    }
      // if player choses to fight, then fight

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = Math.max(0, enemyHealth - playerAttack);
        console.log(
          playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
          window.alert(enemyName + " has died!");

          //reward player for winningsamplecod
          playerMoney=playerMoney +10;

          break;

        } else {
          window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = Math.max(0, playerHealth - enemyAttack);
        console.log(
          enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
          window.alert(playerName + " has died!");
          break;
        } else {
          window.alert(playerName + " still has " + playerHealth + " health left.");
      }
    }
  };

//create start game function
 var startGame= function () {

  //reset player stats 
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  //create a loop so that player can fight each robot, one at a time by looping through them. 
  for (var i = 0; i < enemyNames.length; i++) {

     //tell the system to keep going until player dies. 
     if(playerHealth > 0){

       //create a round annoucement 
       window.alert("Welcome To Robot Gladiators! Round " + (i+1));

       //tell system to pick a new fighter from index array
       var pickedEnemyName = enemyNames[i];

       //reset enemy health after each fight 
       enemyHealth = randomNumber();

      fight(pickedEnemyName);

    // if pplayer is still player is stil alive and not at last enemy in array
     if (playerHealth > 0 && i < enemyNames.length - 1){

      //ask player if they want to use store
      var storeConfirm = window.confirm("The Fight is over, Visit the store before next round?");

      //if yes take to store 
      if(storeConfirm){
        shop();
      }
     }
     //if player is not alive, break out of loop and let end agem funct run
    } else{
      window.alert("You have lost your Robot in Battle. Game Over!");
      break;
    }
    }
    
    // after loop ends, we are either dead or out of robots to fight
    endGame();
  }

    //function to end game
  var endGame = function(){
    window.alert("The Game has now ended! Lets see how you did!");


      // if player is still alive, player wins!
      if(playerHealth > 0){
        window.alert("Great Job, you've survived the game! You now Have a Scoe of" + playerMoney + ".");
      }else{
        window.alert("You've lost your robot in battle");
      }
        
      //ask player uf they'd like to play again
      var playAgainConfirm = window.confirm("Would you like to play again?");

      if (playAgainConfirm){
        startGame();
    }else{
      window.alert("thanks you for playing Robot Gladiators! Come back soon!");
    }
  };

  //go to shop batween battles
  var shop = function(){
    //ask player what they want to do
    var shopOptionPrompt = window.prompt(
      "Would you like to REFILL your health, UPGRADE your attack, oe LEAVE the store? Please enter one 'REFILL' 'UPGRADE', 'LEAVE' ");

    //Use switch case to carry out action
    switch(shopOptionPrompt){
      case 'REFILL':
        case 'refill':
          if(playerMoney >=7 ){
            window.alert("Refill player health by 20 points for 7 dollars.");

            //increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;

          }else {
            window.alert("You dont have enough money!");
          }
          break;
          case 'UPGRADE':
            case 'upgrade':
              if(playerMoney >= 7){
                window.alert("uprading player attack by 6 for 7 dollars");

                //increase attack and decrease money
                playerAttack =playerAttack +6;
                playerMoney = playerMoney -7;

              }else{
                window.alert("you dont have enough money");
              }
              break;
              case 'LEAVE':
                case 'leave':
                  window.alert("leaving the store");

                  //do nothing, so funct will end
                  break;
                  default:
                    window.alert("You did not pick a valid option. try again");

                    //call shop again to force player to pick a option
                    shop();
                    break;
    }
  }

  //function to generate random numric values
  var randomNumber = function(){
  
    Math.floor(Math.random() * 21) +40;

    return IDBCursorWithValue;
  };

 fight();