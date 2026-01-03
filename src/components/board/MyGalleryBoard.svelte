<script lang="ts">
    import { fade } from "svelte/transition";
    import { galleryOpen } from "../../store/store";
    import { onMount } from "svelte";
    import { sleep } from "../../logic/all";
    import MyMenuButton from "../input/MyMenuButton.svelte";
    onMount(async () => {
        await sleep(400);

    })
</script>

{#if $galleryOpen}
    <div class="back" in:fade out:fade>
        <MyMenuButton onclick={() => {galleryOpen.set(false)}} style="position: absolute; bottom: 6px; right: 10px;">
            {#snippet children()}
                返回
            {/snippet}
        </MyMenuButton>
    </div>
{/if}

<style>
    .back {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-image: url("../../assets/Home/paper2.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>
