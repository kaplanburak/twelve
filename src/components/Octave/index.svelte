<script>
    import { NoteHelper } from "@Helpers";
    import { Interval } from "./components";
    import { ctx } from "@Store";

    const notes = NoteHelper.notes;
    const keys = Object.keys(notes);
</script>

<style src="./style.scss">

</style>

<div class="octave">
    {#if $ctx}
        {#each keys as key}
            <Interval {key} freq={notes[key][4]} />
        {/each}
        <Interval key="C" freq={notes.C[5]} />
    {/if}
</div>
