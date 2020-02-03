<script>
    import { NoteHelper } from "@Helpers";
    import { ctx, currentTwelve, startPlaying, stopPlaying } from "@Store";
</script>

<style lang="scss">
    @import "./style.scss";
</style>

<div class="base">
    <div class="base__line" />
    <div class="octave">
        <div class="octave__range">
            {#if $ctx}
                {#each $currentTwelve as tone, index}
                    <div
                        class="note {(index === 0 || index === 12) && 'octave-note'}
                        {!tone.isOpen && 'disabled'}">
                        <div
                            class="note__label"
                            on:mousedown={() => $startPlaying(tone.freq)}
                            on:mouseup={$stopPlaying}>
                            <div class="note__label__freq">{tone.freq}Hz</div>
                            <div class="note__label__key">{tone.key}</div>
                        </div>
                    </div>
                {/each}
            {/if}
        </div>
    </div>
</div>
