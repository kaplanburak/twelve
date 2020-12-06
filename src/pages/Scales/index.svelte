<script>
    import { onMount } from "svelte";
    import { Octave } from "@Components";
    import { NoteHelper, AudioHelper } from "@Helpers";
    import PlayIcon from "@Icons/play.svg";
    import {
        selectedScale,
        currentPitch,
        currentKey,
        currentTwelve,
        pitchRange,
        playingSequence,
        playingFreq,
    } from "@Store";

    const scales = NoteHelper.scales.diatonic;
    const keys = Object.keys(NoteHelper.notes);

    const handleSelectScale = (e) => {
        const i = parseInt(e.target.value, 10);
        selectedScale.set(scales[i].notes);
        setTwelveNotes();
    };

    const handleSelectKey = (e) => {
        currentKey.set(e.target.value);
        setTwelveNotes();
    };

    const handleSelectPitch = (e) => {
        const pitch = parseInt(e.target.value, 10);
        currentPitch.set(pitch);
        setTwelveNotes();
    };

    const setTwelveNotes = () => {
        const twelve = NoteHelper.getTwelveNotes(
            $currentKey,
            $currentPitch,
            $selectedScale
        );
        currentTwelve.set(twelve);
    };

    const playSelectedScale = () => {
        const scaleUpDown = NoteHelper.getScaleUpAndDown($selectedScale);
        const freqs = scaleUpDown.map((i) => $currentTwelve[i].freq);
        AudioHelper.playSequence(freqs);
    };

    onMount(() => {
        selectedScale.set(scales[0].notes);
        setTwelveNotes();
    });
</script>

<style src="./style.scss">
</style>

<div class="page">
    <div class="page__selector">
        <select on:change={handleSelectKey}>
            <option value={null} disabled>Key</option>
            {#each keys as key}
                <option value={key} selected={key === $currentKey}>
                    {key}
                </option>
            {/each}
        </select>
        <select on:change={handleSelectPitch}>
            <option value={null} disabled>Pitch</option>
            {#each $pitchRange as pitch}
                <option value={pitch} selected={pitch === $currentPitch}>
                    {pitch}
                </option>
            {/each}
        </select>
        <select on:change={handleSelectScale}>
            <option value={null} disabled>Diatonic Scales</option>
            {#each scales as scale}
                <option
                    value={scales.indexOf(scale)}
                    selected={!scales.indexOf(scale)}>
                    {scale.name}
                </option>
            {/each}
        </select>
        <div
            class="page__icon-wrapper {(!$selectedScale.length || $playingSequence || $playingFreq) && 'disabled'}"
            on:click={() => !$selectedScale.length || $playingSequence || $playingFreq || playSelectedScale()}>
            {@html PlayIcon}
        </div>
    </div>
    <Octave scale={[]} />
</div>
