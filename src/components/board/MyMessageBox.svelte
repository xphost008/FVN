<script lang="ts">
    import { messagebox } from "../../utils/messagebox";
    import { fade } from "svelte/transition";
    import MyMenuButton from "../input/MyMenuButton.svelte";
    let inputText = $state("");
    function resol(content: string) {
        messagebox.set({
            show: false,
            title: "",
            content: "",
            type: "info",
            buttons: [],
            result: $messagebox.type === "input" ? inputText : content,
        });
        inputText = "";
    }
</script>

{#if $messagebox.show}
    <div
        class="message-back"
        in:fade={{ duration: 300 }}
        out:fade={{ duration: 300 }}
    >
        <div class="message bg-img-full">
            <div class="message-title">
                {$messagebox.title}
            </div>
            <div class="message-content">
                {@html $messagebox.content}
            </div>
            {#if $messagebox.type === "input"}
                <input
                    type="text"
                    placeholder="请输入内容"
                    class="input"
                    bind:value={inputText}
                />
            {/if}
            <div class="message-buttons">
                {#each $messagebox.type === "input" ? ["ok", "cancel"] : $messagebox.buttons as button, index}
                    <MyMenuButton onclick={() => resol(index.toString())}>
                        {#snippet children()}
                            {{
                                ok: "确认",
                                cancel: "取消",
                                yes: "是",
                                no: "否",
                            }[button] ?? button}
                        {/snippet}
                    </MyMenuButton>
                {/each}
            </div>
        </div>
    </div>
{/if}

<style>
    .message-back {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        z-index: 999;
    }
    .message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: auto;
        min-width: 400px;
        height: 300px;
        background-color: #fff;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url("../../assets/Home/messageback.png");
        justify-content: space-around;
    }
    .message-title {
        color: white;
        font-weight: bold;
        font-size: 20px;
        margin-top: 30px;
    }
    .message-content {
        width: 90%;
        flex: 1;
        overflow: hidden;
        white-space: wrap;
        color: white;
    }
    .input {
        color: white;
        border: none;
        outline: none;
        background-color: gray;
        width: 90%;
        height: 30px;
        border-radius: 5px;
        padding: 5px;
        margin-top: 10px;
    }
    .message-buttons {
        display: flex;
        margin: 10px 20px 20px 20px;
        height: 30px;
        width: auto;
        gap: 10px;
        justify-content: space-between;
    }
</style>
