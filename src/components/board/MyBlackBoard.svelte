<script lang="ts">
    import { fade } from "svelte/transition";
    import { boardText } from "../../store/store";
    import MyMenuButton from "../input/MyMenuButton.svelte";

    const { style = "" } = $props();
</script>

{#if $boardText !== ""}
    <div class="back" in:fade out:fade></div>
    <div class="myboard" {style} in:fade out:fade>
        {@html $boardText}
        <MyMenuButton
            onclick={() => boardText.set("")}
            style="position: absolute; bottom: 4px; right: 4px;"
        >
            {#snippet children()}返回{/snippet}
        </MyMenuButton>
    </div>
{/if}

<style>
    .back {
        backdrop-filter: blur(5px);
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0px;
        left: 0px;
    }
    .myboard {
        width: calc(100vw - 300px);
        height: calc(100vh - 200px);
        position: fixed;
        top: 100px;
        left: 150px;
        right: 150px;
        bottom: 100px;
        border: 4px solid brown;
        border-radius: 10px;
        padding: 10px;
        background-color: rgb(17, 111, 81);
    }
</style>
