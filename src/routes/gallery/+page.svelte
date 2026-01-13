<script lang="ts">
    import { fade } from "svelte/transition";
    import { sleep } from "../../utils/all";
    import { galleryLock } from "../../store/store";
    import MyMenuButton from "../../components/input/MyMenuButton.svelte";
    import { quadInOut } from "svelte/easing";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import GalleryBack from "../../assets/gallery/galleryback.png";
    let galleryTrans1 = $state(new Array($galleryLock.length).fill(false));
    let galleryTrans2 = $state(new Array($galleryLock.length).fill(false));
    let o1 = $state(false);
    const pageLength = 6;
    const galleryPageLength = Math.ceil($galleryLock.length / pageLength);
    let page = $state(1);
    // true 为 上一页，false 为 下一页
    async function changePages(pageControl: boolean) {
        page = pageControl
            ? page <= 1
                ? 1
                : page - 1
            : page >= galleryPageLength
              ? galleryPageLength
              : page + 1;
        if (
            (page !== 1 && pageControl) ||
            (page !== galleryPageLength && !pageControl)
        ) {
            await load();
        }
    }
    async function load() {
        galleryTrans1 = new Array(pageLength).fill(false);
        galleryTrans2 = new Array(pageLength).fill(false);
        for (let i = 0; i < $galleryLock.length; i++) {
            galleryTrans1[i] = true;
            await sleep(200);
            galleryTrans2[i] = true;
        }
    }
    onMount(async () => {
        o1 = true;
        await sleep(400);
        await load();
    });
    function rot1(node: HTMLElement) {
        return {
            delay: 0,
            duration: 1500,
            easing: quadInOut,
            css: (t: number, n: number) =>
                `opacity: ${t}; transform: rotate(${n * 20 + 10}deg)`,
        };
    }
    function rot2(node: HTMLElement) {
        return {
            delay: 0,
            duration: 1500,
            easing: quadInOut,
            css: (t: number, n: number) => {
                return `opacity: ${t}; transform: rotate(${n * 20}deg)`;
            },
        };
    }
</script>

{#if o1}
    <div style="width: 100vw; height: 100vh;" in:fade={{ duration: 1500 }}>
        <div class="back">
            {#each $galleryLock.filter((_, index) => {
                const pm = page - 1;
                return index >= pm * pageLength && index < pm * pageLength + pageLength;
            }) as item, index}
                <div style="position: relative;">
                    {#if galleryTrans2[index]}
                        <button
                            in:rot2
                            class="trans trans2"
                            style={{
                                backgroundImage: !item.lock
                                    ? (item.images[0] ?? GalleryBack)
                                    : GalleryBack,
                            }}
                            onclick={() => {
                                if (!item.lock) goto(`/gallery/${item.id}`);
                            }}
                            aria-labelledby="Click me!"
                        ></button>
                    {/if}
                    {#if galleryTrans1[index]}
                        <button
                            in:rot1
                            class="trans"
                            onclick={() => {
                                if (!item.lock) goto(`/gallery/${item.id}`);
                            }}
                            aria-labelledby="Click me!"
                        ></button>
                    {/if}
                </div>
            {/each}
        </div>
        <div
            style="position: absolute; bottom: 14px; right: 460px; z-index: 10000; font-size: 20px; font-weight: bold"
        >
            页码：{page} / {galleryPageLength}
        </div>
        <MyMenuButton
            onclick={() => {
                changePages(true);
            }}
            style="position: absolute; bottom: 6px; right: 290px; z-index: 10000;"
        >
            {#snippet children()}
                上一页
            {/snippet}
        </MyMenuButton>
        <MyMenuButton
            onclick={() => {
                changePages(false);
            }}
            style="position: absolute; bottom: 6px; right: 150px; z-index: 10000;"
        >
            {#snippet children()}
                下一页
            {/snippet}
        </MyMenuButton>
        <MyMenuButton
            onclick={() => {
                goto("/");
            }}
            style="position: absolute; bottom: 6px; right: 10px; z-index: 10000;"
        >
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
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-template-rows: repeat(2, minmax(0, 1fr));
    }
    .trans {
        width: 20vw;
        height: 30vh;
        background-color: white;
        transform-origin: 80% 80%;
        transform: rotate(10deg);
        position: absolute;
        top: calc(50% - 15vh);
        left: calc(50% - 10vw);
        background-color: gray;
        transition: box-shadow 0.2s;
        border: none;
        cursor: pointer;
    }
    .trans2 {
        transform: rotate(0);
        background-image: url("../../assets/gallery/galleryback.png");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 10;
        cursor: pointer;
    }
    .trans2:hover {
        box-shadow: 0 0 12px purple;
    }
    .trans2:hover + .trans {
        box-shadow: 0 0 12px gray;
    }
</style>
