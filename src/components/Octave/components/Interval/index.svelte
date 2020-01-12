<script>
    import { start, stop } from "@Store";
    export let key;
    export let freq;
</script>

<style src="./style.scss">

</style>

<div class="interval" on:mousedown={() => $start(freq)} on:mouseup={$stop}>
    {key}
</div>
