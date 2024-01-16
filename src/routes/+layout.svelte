<script lang="ts">
    import Header from "../lib/components/Header.svelte";
    import Footer from "../lib/components/Footer.svelte";
    import Game from   "$lib/components/game.svelte";
   
   
</script>

<Header />
<Game />
<Footer />
<slot />
