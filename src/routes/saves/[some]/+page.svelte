<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import MyMessageBox from "../../../components/board/MyMessageBox.svelte";
    import { saveData, saveInstance } from "../../../store/store";
    import { showMessageBox } from "../../../utils/messagebox.ts";
    import { sleep, router } from "../../../utils/all";
    import { invoke } from "@tauri-apps/api/core";
    import Dragon from "../../../assets/illustration/dragon_dressed.png";
    import html2canvas from "html2canvas";
    import piano from "../../../assets/music/mp3/piano.mp3";
    import experience from "../../../assets/music/ogg/experience.ogg";
    const pianoIns = new Audio(piano);
    const experienceIns = new Audio(experience);
    const { params } = $props();
    const thisname = (() => `save${params.some}`)();
    let o1 = $state(false);
    let currentText = $state("");
    let lockText = $state(false);
    let exitText = $state(false);
    let keyLock = $state(false);
    let quickCurrent = $state(false);
    let liveStyle = $state("");
    function setSaveMeta(key: string, value: string) {
        saveData.set({
            ...$saveData,
            saveObject: {
                ...$saveData.saveObject,
                [thisname]: {
                    ...$saveData.saveObject[thisname],
                    [key]: value,
                },
            },
        });
    }
    function setGalleryMeta(id: number) {
        saveData.set({
            ...$saveData,
            gallery: {
                ...$saveData.gallery,
                [`gallery${id}`]: true,
            },
        });
    }
    function setSaveInfo(key: string, value: string) {
        saveData.set({
            ...$saveData,
            saveInstance: {
                ...$saveData.saveInstance,
                [thisname]: {
                    ...$saveData.saveInstance[thisname],
                    [key]: value,
                },
            },
        });
    }
    async function unlockGallery(id: number) {
        await invoke("update_gallery", { id });
        setGalleryMeta(id);
    }
    function getSaveInfo(key: string) {
        return $saveData.saveInstance[thisname][key];
    }
    function plusOne() {
        setSaveInfo("current", parseInt(getSaveInfo("current")) + 1);
    }
    function doStyle(current: number) {
        if (current === 6) {
            liveStyle = "animation: run 2s infinite;";
        } else if (current === 7) {
            liveStyle = "transform: rotateY(180deg);";
        } else if (current === 8) {
            liveStyle = "scale: 1.2;";
        } else if (current === 9) {
            liveStyle = "animation: vibration 0.2s infinite;";
        } else if (current === 10) {
            unlockGallery(1);
            liveStyle = "";
        } else if (current === 11) {
            liveStyle = "";
            experienceIns.play();
        } else if (current === 12) {
            liveStyle = "";
            pianoIns.play();
        } else {
            pianoIns.pause();
            pianoIns.currentTime = 0;
            experienceIns.pause();
            experienceIns.currentTime = 0;
            liveStyle = "";
        }
    }
    onMount(async () => {
        if (getSaveInfo("name") === "") {
            let name = "";
            while (true) {
                name = await showMessageBox(
                    "请输入主角名字",
                    "请在下方输入主角名字，默认：小龙",
                    "input",
                );
                name = name === "" ? "小龙" : name;
                if (
                    (await showMessageBox(
                        "你的名字是",
                        `你的名字是：${name}，是否确定？`,
                        "info",
                        ["ok", "cancel"],
                    )) === "0"
                ) {
                    break;
                }
            }
            setSaveInfo("name", name);
        }
        o1 = true;
        await sleep(500);
        next(false);
    });
    async function next(plus: boolean = true) {
        if (getSaveInfo("current") >= $saveInstance.length) {
            return;
        }
        if (lockText) {
            exitText = true;
            currentText = $saveInstance[
                parseInt(getSaveInfo("current"))
            ]?.message?.replace("%self", getSaveInfo("name"));
            return;
        }
        lockText = true;
        currentText = "";
        if (plus) plusOne();
        doStyle(parseInt(getSaveInfo("current")));
        let ct = $saveInstance[
            parseInt(getSaveInfo("current"))
        ]?.message?.replace("%self", getSaveInfo("name"));
        for (let i = 0; i < ct?.length ?? 0; i++) {
            if (exitText) {
                break;
            }
            await sleep(20);
            if (exitText) {
                break;
            }
            currentText += ct[i];
            if (exitText) {
                break;
            }
        }
        exitText = false;
        lockText = false;
    }
    function prev() {
        if (parseInt(getSaveInfo("current")) <= 0) return;
        setSaveInfo("current", parseInt(getSaveInfo("current")) - 1);
        doStyle(parseInt(getSaveInfo("current")));
        currentText = $saveInstance[
            parseInt(getSaveInfo("current"))
        ]?.message?.replace("%self", getSaveInfo("name"));
    }
    async function quick() {
        quickCurrent = !quickCurrent;
        while (true) {
            if (
                !quickCurrent ||
                parseInt(getSaveInfo("current")) >= $saveInstance.length
            )
                return;
            await sleep(50);
            setSaveInfo("current", parseInt(getSaveInfo("current")) + 1);
            doStyle(parseInt(getSaveInfo("current")));
            currentText = $saveInstance[
                parseInt(getSaveInfo("current"))
            ]?.message?.replace("%self", getSaveInfo("name"));
        }
    }
    function spaceDown(e: KeyboardEvent) {
        e.preventDefault();
        e.stopPropagation();
        if (e.code === "Space") {
            if (!keyLock) {
                keyLock = true;
                next();
            }
        }
    }
    function spaceUp(e: KeyboardEvent) {
        e.preventDefault();
        e.stopPropagation();
        if (e.code === "Space") {
            keyLock = false;
        }
    }
    async function updateSave(name: string, current: number) {
        const date = new Date();
        const image = (
            await html2canvas(document.querySelector(".container2")!)
        ).toDataURL("image/png");
        const updateTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        setSaveMeta("image", image);
        setSaveMeta("remark", "");
        setSaveMeta("updateTime", updateTime);
        await invoke("update_save", {
            id: params.some,
            name,
            current,
            updateTime,
            image,
        });
        console.log($saveData);
    }
</script>

{#if o1}
    <div
        class="container2"
        in:fade={{ duration: 500 }}
        onclick={() => {
            if (quickCurrent) quickCurrent = false;
            next();
        }}
        onkeydown={spaceDown}
        onkeyup={spaceUp}
        tabindex="0"
        role="button"
    >
        <img
            src={Dragon}
            alt="Dragon Avatar"
            class="dragon"
            style={liveStyle}
        />
        <div class="dialog">
            <div class="avatar" style="grid-row: 1 / 3;"></div>
            <div class="title">
                {$saveInstance[parseInt(getSaveInfo("current"))]?.name?.replace(
                    "%self",
                    getSaveInfo("name"),
                )}
            </div>
            <div class="content">
                {@html currentText}
            </div>
            <div class="control" style="grid-column: 1 / 3;">
                <button
                    onclick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        prev();
                    }}
                    aria-label="后退">后退</button
                >
                <button
                    style={`color: ${quickCurrent ? "red" : "darkorange"}`}
                    onclick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        quick();
                    }}
                    aria-label="快进">快进</button
                >
                <button
                    onclick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        updateSave(
                            getSaveInfo("name"),
                            parseInt(getSaveInfo("current")),
                        );
                    }}
                    aria-label="存档">存档</button
                >
                <button
                    onclick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.back();
                    }}
                    aria-label="返回">返回</button
                >
            </div>
        </div>
    </div>
{/if}
<MyMessageBox></MyMessageBox>

<style>
    .container2 {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        width: 111.5vh;
        height: 100vh;
        border: none;
        outline: none;
        overflow: hidden;
    }
    .dragon {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 90vh;
        width: auto;
    }
    .dialog {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 30%;
        background-image: linear-gradient(to left bottom, #88888833, #44444433);
        display: grid;
        grid-template-columns: minmax(0, 0.3fr) minmax(0, 1fr);
        grid-template-rows: minmax(0, 0.2fr) minmax(0, 1fr) minmax(0, 0.2fr);
    }
    .control {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .control button {
        border: none;
        background-color: transparent;
        color: darkorange;
        cursor: pointer;
        border: none;
        outline: none;
    }
    .title {
        display: flex;
        align-items: center;
        padding-left: 10px;
        font-size: 1.2rem;
        font-weight: bold;
        color: red;
    }
    .content {
        padding: 10px;
        color: white;
    }
</style>
