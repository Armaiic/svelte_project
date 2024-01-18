<script lang="ts">
    import Header from "../lib/components/Header.svelte";
    import Footer from "../lib/components/Footer.svelte";
    import Game from   "$lib/components/game.svelte";
    import Resultgame from "../lib/components/resultgame.svelte"
    import {choicebol,playBol} from "../lib/components/store";

</script>

<Header />  
{#if $choicebol == false || $playBol == true}
<Game />
{/if}
    
{#if $choicebol == true && $playBol == false}
    <Resultgame />     
{/if}
<Footer />
<slot />
