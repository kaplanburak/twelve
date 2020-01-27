<script>
    import { NoteHelper } from "@Helpers";
    import { Note } from "./components";
    import { ctx } from "@Store";

    const notes = NoteHelper.notes;
    const keys = Object.keys(notes);

    const majorScale = [0, 2, 4, 5, 7, 8, 10, 12];
</script>

<style lang="scss">
    @import "./style.scss";
</style>

<div class="base">
    <div class="base__line" />
    <div class="octave">
        <div class="octave__range">
            {#if $ctx}
                {#each keys as key, index}
                    <Note
                        {index}
                        isOctaveNote={index === 0}
                        {key}
                        freq={notes[key][4]}
                        isDisabled={!majorScale.includes(index)} />
                {/each}
                <Note
                    index={12}
                    isOctaveNote
                    isDisabled={!majorScale.includes(12)}
                    key="C"
                    1
                    freq={notes.C[5]}
                    isActive />
            {/if}
        </div>
    </div>
</div>
