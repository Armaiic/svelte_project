<script>
   import TextResult from "./TextResult.svelte";

   let showResult = false;

   setTimeout(() => {
      showResult = true;
   }, 400);
</script>

<div>
   <div class="choice--content">
      <div class="choice--content__text">
         <h1>YOU PICKED</h1>
      </div>
      <div class="choice--content__button"></div>
      <div>
         {#if showResult}
            <TextResult />
            <script>
               console.log("hello");
            </script>
         {/if}
      </div>
      <div class="choice--content">
         <div class="choice--content__text">
            <h1>THE HOUSE PICKED</h1>
         </div>
         <div class="choice--content__button"></div>
      </div>
   </div>
</div>

<style>
</style>
