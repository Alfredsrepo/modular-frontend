<!-- svelte-ignore tag-option-deprecated -->
<svelte:options customElement="alf-h1" />

<script lang="ts">
    import Button from "../lib/Button.svelte";
    import { onMount } from "svelte/internal";

    onMount(() => console.log("h1 mounted"));

    let label = "hello";
    let primary = true;
</script>

<Button primary={true} bind:label></Button>
<h1>
    <slot />
</h1>

<slot />
