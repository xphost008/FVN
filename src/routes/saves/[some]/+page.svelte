<script>
    import { onMount } from "svelte";
    import MyMessageBox from "../../../components/board/MyMessageBox.svelte";
    import { saveData } from "../../../store/store";
    import { showMessageBox } from "../../../utils/messagebox.ts";
    const { params } = $props();
    const thisname = (() => `save${params.some}`)();
    let o1 = $state(false);
    onMount(async () => {
        if ($saveData.saveInstance[thisname].name === "") {
            const name = await showMessageBox(
                "请输入主角名字",
                "请在下方输入主角名字，默认：小龙",
                "input",
            );
            saveData.set({
                ...$saveData,
                saveInstance: {
                    ...$saveData.saveInstance,
                    [thisname]: {
                        ...$saveData.saveInstance[thisname],
                        name: name === "" ? "小龙" : name,
                    },
                },
            });
        }
        console.log($saveData);
        o1 = true;
    });
</script>

{#if o1}
    <div class="container"></div>
{/if}
<MyMessageBox></MyMessageBox>

<style>
    .container {
        width: 100vw;
        height: 100vh;
    }
</style>
