<script lang="ts">
    import { fade } from "svelte/transition";
    import { boardText } from "../../store/store";
    import MyMenuButton from "../input/MyMenuButton.svelte";

    const { style = "" } = $props();
</script>

{#if $boardText !== ""}
    <div class="back" in:fade out:fade>
        <div class="myboard" {style}>
            {@html $boardText}
            <MyMenuButton
                onclick={() => boardText.set("")}
                style="position: absolute; bottom: 60px; right: 60px;"
            >
                {#snippet children()}返回{/snippet}
            </MyMenuButton>
        </div>
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
        width: 600px;
        height: 480px;
        position: fixed;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 80px 110px;
        border-radius: 10px;
        background-image: url("../../assets/Home/board.png");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>
