<!-- 使用 svelte:options 設定或者在 main.ts + vite.config 設定皆可 -->
<svelte:options customElement="alf-counter" />

<script lang="ts">
    import { onMount } from "svelte/internal";

    onMount(() => console.log("mounted"));

    export let count = 0;
    function increment() {
        count += 1;
    }
</script>

<button on:click={increment}>Clicked {count} times <slot /></button>
<slot />
