<script>
   import TextResult from "./TextResult.svelte";
   import { displaychoiceplay, displaychoicecomp } from "./store";
   let showResult = false;
   import { fade,fly } from "svelte/transition";

   setTimeout(() => {
      showResult = true;
   }, 400);
</script>

<div  class="resultgame">
   <div  class="player">
      <h1>YOU PICKED</h1>
      <div class="choice--content">
         <div class="button__display_{$displaychoiceplay}">
            <img
               src="./src/lib/icons/icon-{$displaychoiceplay}.svg"
               alt="icon"
            />
         </div>
      </div>
   </div>

   <div >
      {#if showResult}
         <TextResult />
         <script>
            console.log("hello");
         </script>
      {/if}
   </div>
   <div class="computer">
      <h1>THE HOUSE PICKED</h1>
      <div class="choice--content">
         <div class="button__display_{$displaychoicecomp}">
            <img
               src="./src/lib/icons/icon-{$displaychoicecomp}.svg"
               alt="icon"
            />
         </div>
      </div>
   </div>
</div>

<style>
   .choice--content {
      margin-top: 50px;
      width: 100%;
      height: 100%;
   }
   .resultgame {
      display: flex;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      justify-content: space-evenly;
      align-items: center;
   }
  
   .computer,
   .player {
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
   .computer h1, .player h1{
      margin-top: 2rem;
      color: white;
      
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
   }
    
   .button__display_rock {
      
      border: 15px solid red;

      box-shadow: 0 0 20px darkred;
      background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 63%, rgba(206,206,206,1) 67%, rgba(202,202,202,1) 69%, rgba(112,112,112,1) 96%);
      border-radius: 50%;
      width: 250px;
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .button__display_paper {
      border: 15px solid blue;

      box-shadow: 0 0 20px darkblue;
      background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 63%, rgba(206,206,206,1) 67%, rgba(202,202,202,1) 69%, rgba(112,112,112,1) 96%);
      border-radius: 50%;
      width: 250px;
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .button__display_scissors {
      border: 15px solid green;

      box-shadow: 0 0 20px darkgreen;
      background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 63%, rgba(206,206,206,1) 67%, rgba(202,202,202,1) 69%, rgba(112,112,112,1) 96%);
      border-radius: 50%;
      width: 250px;
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .button__display_rock img,
   .button__display_paper img,
   .button__display_scissors img {
      background: rgb(255,255,255);
background: linear-gradient(52deg, rgba(255,255,255,1) 37%, rgba(255,255,255,0) 75%);
      width: 90px;
      height: 90px;
   }
</style>
