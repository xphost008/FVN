<script lang="ts">
  import { onMount } from "svelte";
  import MyMenuButton from "../components/input/MyMenuButton.svelte";
  import { sleep } from "../logic/all";
  import { boardText } from "../store/store";
  import { window } from "@tauri-apps/api";
  import MyBlackBoard from "../components/board/MyBlackBoard.svelte";
  import { quadInOut } from "svelte/easing";
  let o1 = false;
  let o2 = false;
  let o3 = false;
  let o4 = false;
  let o5 = false;
  let o6 = false;
  // let opacity1 = $state(0);
  // let opacity2 = $state(0);
  // let opacity3 = $state(0);
  // let bottom1 = $state("");
  onMount(async () => {
    o1 = true;
    await sleep(1500);
    o2 = true;
    await sleep(1500);
    o3 = true;
    await sleep(300);
    o4 = true;
    await sleep(300);
    o5 = true;
    await sleep(300);
    o6 = true;
    // for (let i = 0.01; i <= 1; i += 0.01) {
    //   await sleep(15);
    //   opacity1 = i;
    // }
    // for (let i = 0.01; i <= 1; i += 0.01) {
    //   await sleep(15);
    //   opacity2 = i;
    // }
    // for (let i = 0.01; i <= 1; i += 0.01) {
    //   await sleep(15);
    //   opacity3 = i;
    //   bottom1 = i * 100 - 100 + "px";
    // }
  });
  function fadeHome(node: HTMLElement) {
    return {
      delay: 0,
      duration: 1500,
      easing: quadInOut,
      css: (t: number) => `opacity: ${t}`,
    };
  }
  function fadeHomeButton(node: HTMLElement) {
    return {
      delay: 0,
      duration: 1500,
      easing: quadInOut,
      css: (t: number) =>
        `opacity: ${t}; transform: translateX(${t * 30 - 30}px)`,
    };
  }
</script>

{#if o1}
  <main class="container" in:fadeHome>
    {#if o2}
      <img
        src="/src/assets/Home/title.png"
        class="titleImage"
        alt="标题文字"
        in:fadeHome
      />
    {/if}
    <div class="main-div">
      {#if o3}
        <div in:fadeHomeButton>
          <MyMenuButton onclick={() => {}}>
            {#snippet children()}
              开始游戏
            {/snippet}
          </MyMenuButton>
        </div>
      {:else}
        <div style="width: 120px; height: 35px;"></div>
      {/if}
      {#if o4}
        <div in:fadeHomeButton>
          <MyMenuButton onclick={() => {}}>
            {#snippet children()}
              画廊
            {/snippet}
          </MyMenuButton>
        </div>
      {:else}
        <div style="width: 120px; height: 35px;"></div>
      {/if}
      {#if o5}
        <div in:fadeHomeButton>
          <MyMenuButton
            onclick={() => {
              boardText.set(`
        <div style="font-family: ShanHaiZhongXiaYe; color: white;"><center style="font-size: 24px;">关于与鸣谢：</center>
        非常感谢每一位支持我的玩家！在这里着重感谢：<br>
        <!-- <span style="color: red;">秋风残叶</span> 谢谢你的陪伴，让我在游戏生涯中少走了很多弯路。<br>
        <span style="color: orange">迟暮の夜莺</span> 也同样感谢你的陪伴！<br>
        如果没有上述两位，我可能无法制作出这款游戏！接下来是游戏设计、美术和编程的各位。<br> -->
        <span style="color: yellow"></span>
        </div>
        `);
            }}
          >
            {#snippet children()}
              关于
            {/snippet}
          </MyMenuButton>
        </div>
      {:else}
        <div style="width: 120px; height: 35px;"></div>
      {/if}
      {#if o6}
        <div in:fadeHomeButton>
          <MyMenuButton
            onclick={() => {
              window.getCurrentWindow().close();
            }}
          >
            {#snippet children()}
              退出游戏
            {/snippet}
          </MyMenuButton>
        </div>
      {:else}
        <div style="width: 120px; height: 35px;"></div>
      {/if}
    </div>
  </main>
{/if}
<MyBlackBoard></MyBlackBoard>

<style>
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    background: url(/src/assets/Home/back.png);
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  .titleImage {
    position: absolute;
    width: 315px;
    height: 214px;
    top: 0;
    right: 0;
  }
  .main-div {
    position: absolute;
    width: 315px;
    height: calc(100% - 214px);
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
</style>
