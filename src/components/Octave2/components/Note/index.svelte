<script>
    export let isActive;
    export let isDisabled;
    export let isOctaveNote;
</script>

<style lang="scss">
    @import "./style.scss";
</style>

<div
    class="note {isActive ? 'active' : ''}
    {isDisabled ? 'disabled' : ''}
    {isOctaveNote ? 'octave-note' : ''}" />
