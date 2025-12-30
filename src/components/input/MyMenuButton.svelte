<script lang="ts">
    let { class: className = '', style: style = '', children, onclick } = $props();
</script>
<button class={['mybutton', className]} style={style} onclick={onclick}>
    {@render children?.()}
</button>
<style>
    .mybutton {
        width: 120px;
        height: 35px;
        border-radius: 9999px;
        border: 1px solid #008CFF;
        background: linear-gradient(135deg, #008C33, #008CFF99);
        font-weight: bold;
        color: white;
        transition: box-shadow 0.2s;
        cursor: pointer;
    }
    .mybutton:hover {
        box-shadow: 0 0 10px #008C33;
    }
</style>