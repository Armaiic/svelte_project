<script lang="ts">
  
   export  let type = "";
    let playerChoice = "";
    let computerChoice = ""; 
    let result = "";
    const choices = ["rock", "paper", "scissors"];
    function handleClick() {
        console.log(type); // Replace with your desired logic
        playerSelect(type);
        console.log(computerChoice)
        console.log(result);
        return type;
        

     function playerSelect(choice: string) {
            playerChoice = choice;
            console.log(playerChoice);
            computerChoice =
                choices[Math.floor(Math.random() * choices.length)];
            determineWinner();
        }

        function determineWinner() {
            if (playerChoice === computerChoice) {
                result = "It's a tie!";
            } else if (
                (playerChoice === "rock" && computerChoice === "scissors") ||
                (playerChoice === "paper" && computerChoice === "rock") ||
                (playerChoice === "scissors" && computerChoice === "paper")
            ) {
                result = "You win!";
            } else {
                result = "You lose!";
            }
        }
    }
</script>

<div class="button--container">
    <button
        class="button-choice"
        class:rock={type == "rock"}
        class:paper={type == "paper"}
        class:scissors={type == "scissors"}
        on:click={handleClick}
    >
        <div class="button__content">
            <img src="./src/lib/icons/icon-{type}.svg" alt="icon" />
        </div>
    </button>
</div>

<style>
    .button--container {
        width: 100%;
        max-width: 150px;
        height: 100%;
        max-height: 150px;
        border-radius: 50%;
        background-color: transparent;
    }
    .button-choice {
        width: 100%;
        max-width: 150px;
        height: 100%;
        max-height: 150px;
        border: 1.5px solid white;
        border-radius: 50%;
        padding: 0.7em;

        background-color: transparent;
    }

    .button-choice:hover {
        background-color: white;
    }

    .button__content {
        width: 100%;
        max-width: 100px;
        height: 100%;
        max-height: 100px;
        border-radius: 50%;
        background-color: white;
    }

    .button__content img {
        border-radius: 30%;
        background-color: white;
        width: 100%;
        height: 100%;
    }

    .rock {
        border: 15px solid red;

        background-color: white;
    }
    .rock:hover {
        border: 15px solid red;
        transform: matrix(1.1, 0, 0, 1.1, 0, 0);
    }

    .paper {
        border: 15px solid blue;
        border-radius: 50%;
        background-color: white;
    }
    .paper:hover {
        transform: matrix(1.1, 0, 0, 1.1, 0, 0);
        border: 20px solid blue;
    }
    .scissors {
        border: 15px solid green;
        background-color: white;
    }
    .scissors:hover {
        border: 15px solid green;
        transform: matrix(1.1, 0, 0, 1.1, 0, 0);
    }
</style>
