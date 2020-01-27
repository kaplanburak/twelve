<script>
    import { Octave, Octave2 } from "@Components";
    import { useAudioContext } from "@Hooks";
    import { ctx, selectedComponent } from "@Store";
</script>

<style src="./style.scss">

</style>

<div class="main-page">
    {#if $ctx}
        {#if $selectedComponent === 1}
            <Octave />
        {:else}
            <Octave2 />
        {/if}
    {:else}
        <button
            on:click={() => {
                useAudioContext();
                selectedComponent.set(1);
            }}>
            COMPONENT 1
        </button>
        <button
            on:click={() => {
                useAudioContext();
                selectedComponent.set(2);
            }}>
            COMPONENT 2
        </button>
    {/if}
</div>
