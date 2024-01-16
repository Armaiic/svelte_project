<script>
  import Button from "./Button.svelte";
</script>

<div class="game--container">
 
  <div class="gridtop-container">
    <div class="grid-item-top-left">
      <Button type="paper" />
    </div>
    <div class="grid-item-top-right">
      <Button type="scissors" />
    </div>
    
  </div>
  <div class="grid-item-center">
    <Button type="rock" />
  </div>
</div>

<style>
 .game--container {
  background-image: url('./src/lib/icons/bg-triangle.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  margin-bottom: 20rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  height: 700px;
}

.gridtop-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 9em;
  margin-top: 1em;
  background-color: transparent;
}

.grid-item-top-left {
  display: flex;
  justify-content: center;
  transform: translateY(-50%);
  background-color: transparent;
}

.grid-item-top-right {
  display: flex;
  
  transform: translateY(-50%);
  background-color: transparent;
}



.grid-item-center {
  display: flex;
  justify-content: center;
  background-color: transparent;
}

</style>


  


