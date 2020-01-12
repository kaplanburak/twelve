<script>
    import { Octave } from "@Components";
    import { useAudioContext } from "@Hooks";
    import { ctx } from "../../store";
</script>

<style src="./style.scss">

</style>

<div class="main-page">
    {#if $ctx}
        <Octave />
    {:else}
        <button on:click={useAudioContext}>START</button>
    {/if}
</div>
