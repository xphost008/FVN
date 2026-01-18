<script lang="ts">
    let { class: className = "", style = "", children, onclick } = $props();
</script>

<button class={["mybutton", "bg-img-full", className]} {style} {onclick}>
    <span>{@render children?.()}</span>
</button>

<style>
    .mybutton {
        width: 120px;
        height: 35px;
        background-image: url("../../assets/Home/mybutton-normal.png");
        background-color: transparent;
        border: none;
        transition: box-shadow 0.2s;
        cursor: pointer;
    }
    .mybutton:hover {
        background-image: url("../../assets/Home/mybutton-hover.png");
        box-shadow: 0 0 10px #ffc148;
    }
    .mybutton:active {
        background-image: url("../../assets/Home/mybutton-active.png");
        box-shadow: 0 0 10px #ffc148;
    }
    .mybutton > span {
        font-family: Silver !important;
        color: black;
        font-weight: bold;
        position: relative;
        top: -2px;
    }
    .mybutton:active > span {
        top: 1px;
    }
</style>
