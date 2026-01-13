<script lang="ts">
    import { galleryLock } from "../../../store/store";
    const { params } = $props();
    const images = $galleryLock.find((item) => item.id === params.some).images;
    let page = $state(0);
    console.log(images[0]);
</script>

<div class="gallery" style={`background-image: url(${images[page]})`}>
    <button
        class="lrbutton"
        style="left: 10px"
        onclick={() => {
            if (page > 0) page--;
        }}
        aria-label="点我"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
        >
            <path
                fill="none"
                stroke="white"
                stroke-dasharray="12"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12l7 -7M8 12l7 7"
            />
        </svg>
    </button>
    <button
        class="lrbutton"
        style="right: 10px"
        onclick={() => {
            if (page < images.length - 1) page++;
        }}
        aria-label="点我"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
        >
            <path
                fill="none"
                stroke-dasharray="12"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="white"
                d="M16 12l-7 -7M16 12l-7 7"
            />
        </svg>
    </button>
</div>

<style>
    .gallery {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
    }
    .lrbutton {
        position: absolute;
        width: 50px;
        height: 50px;
        top: calc(50% - 16px);
        border-radius: 50%;
        border: none;
        outline: none;
        cursor: pointer;
        background: linear-gradient(to bottom, skyblue, green 70%);
    }
</style>
