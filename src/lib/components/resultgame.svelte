<script>
   import Button from "./Button.svelte";
   import TextResult from "./TextResult.svelte";
   
</script>

<div>
   <div class="choice--content">
      <div class="choice--content__text">
         <h1>YOU PICKED</h1>
      </div>
      <div class="choice--content__button"></div>
      <div> 
         <TextResult />
      </div>
      <div class="choice--content">
         <div class="choice--content__text">
            <h1>THE HOUSE PICKED</h1>
         </div>
         <div class="choice--content__button">
         </div>
      </div>
   </div>
</div>

<style>

</style>
