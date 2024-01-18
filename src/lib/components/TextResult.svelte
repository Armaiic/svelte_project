<script lang="ts">

    import { choicebol, result} from "./store";
  


    function clickreturn() {
        const homereturn = document.querySelector(".result--container");
         choicebol.set(false);
         
         console.log($choicebol);
    
    }
      
</script>

<div class="result--container">
    <div class="result--content">
        <div class="result--content__text">
            <h1>{$result}</h1>
        </div>
        <div class="result--content__button">
            <button class="button--play" on:click={clickreturn}
                >PLAY AGAIN</button
            >
        </div>
    </div>
</div>

<style>

    .result--content__button  {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
    }
    .result--content__button button {
        background-color: white;
        color: red;
        font-size: 25px;
        font-weight: 700;

        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }
    .result--content__button button:hover {
        border-radius:  10px;
         border: px solid red;
        transform: matrix(1.1, 0, 0, 1.1, 0, 0);
    }
</style>
