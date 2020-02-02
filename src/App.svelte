<script>
    import { ScalesPage } from "@Pages";
    import { useAudioContext } from "@Hooks";
    import { ctx } from "@Store";
</script>

<style>
    .app {
        width: 100vw;
        height: 100vh;

        background-color: black;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>

<div class="app">
    {#if $ctx}
        <ScalesPage />
    {:else}
        <button on:click={useAudioContext}>GO</button>
        <!-- <div>
            <small>
                This project is influenced by Casey Connor's YouTube series
                called
                <a
                    href="https://www.youtube.com/playlist?list=PL618khw0A-t4q9AEsgmfHjqklmkx-PGKq"
                    target="_blank">
                    Music Theory Distilled
                </a>
            </small>
        </div> -->
    {/if}
</div>
