<script>
    export let type = "";

    const handleClick = () => {
        console.log("click");
    };

</script>


<div class="button--container">
    <button
        on:click={handleClick}
        class="button-choice"
        class:rock={type == "rock"}
        class:paper={type == "paper"}
        class:scissors={type == "scissors"}
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

    .paper {
       
        border: 15px solid blue;
        border-radius: 50% ;
        background-color: white;
    }

    .scissors {
     
        border: 15px solid green;
        background-color: white;
    }
</style>
