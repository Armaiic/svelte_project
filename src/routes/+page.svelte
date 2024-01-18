<script>
  import Game from "$lib/components/game.svelte";
  import Resultgame from "../lib/components/resultgame.svelte";
  import { choicebol } from "../lib/components/store";
</script>

{#if $choicebol === false}
  <Game />
{/if}

{#if $choicebol === true}
  <Resultgame />
{/if}
