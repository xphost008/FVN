import { writable, readable } from "svelte/store";
import Gallery1 from "../assets/gallery/gallery1.png";
import Gallery2 from "../assets/gallery/gallery2.png";
import Gallery3 from "../assets/gallery/gallery3.png";
import Gallery4 from "../assets/gallery/gallery4.png";
export const saveData = writable({});
export const boardText = writable("");
export const mounted = writable(false);
export const galleryPage = writable(1);
export const galleryLock = readable([
  {
    id: "1",
    images: [Gallery1, Gallery2, Gallery3, Gallery4],
  },
  {
    id: "2",
    images: [Gallery1, Gallery2, Gallery3, Gallery4],
  },
  {
    id: "3",
    images: [Gallery1, Gallery2, Gallery3, Gallery4],
  },
  {
    id: "4",
    images: [Gallery1, Gallery2, Gallery3, Gallery4],
  },
  {
    id: "5",
    images: [Gallery1, Gallery2, Gallery3, Gallery4],
  },
  {
    id: "6",
    images: [Gallery1, Gallery2, Gallery3, Gallery4],
  },
  {
    id: "7",
    images: [Gallery1, Gallery2, Gallery3, Gallery4],
  },
  {
    id: "8",
    images: [Gallery2, Gallery3, Gallery4, Gallery1],
  },
  {
    id: "9",
    images: [Gallery3, Gallery4, Gallery1, Gallery2],
  },
  {
    id: "10",
    images: [Gallery4, Gallery1, Gallery2, Gallery3],
  },
]);
export const saveInstance = readable([
  {
    name: "%self",
    avatar: "",
    message: "你好，我是%self，很高兴你来玩这个demo小游戏！",
  },
  {
    name: "%self",
    avatar: "",
    message: "各位可以自行点击下面的所有按钮，目前都做好啦！",
  },
  {
    name: "%self",
    avatar: "",
    message:
      '此次文字可以<b>粗</b><i>斜体</i><u>下划线</u><s>删除线</s>以及<b><i><u><s>嵌套</s></u></i></b>，以及调整<span style="font-size: 20px; color: red;">大小和颜色</span>！',
  },
  {
    name: "%self",
    avatar: "",
    message:
      "存档即为将数据文件导出到本地文件，随后，在下一次进入游戏时，自动导入存档文件！",
  },
  {
    name: "%self",
    avatar: "",
    message:
      "如果你但凡没有对任何一个存档进行储存的话，存档将保存在你的内存中，如果在此期间你要是关闭了游戏，存档将丢失！",
  },
  {
    name: "%self",
    avatar: "",
    message: "随后，让我们来看看人物立绘是怎么动的吧！",
  },
  {
    name: "%self",
    avatar: "",
    message: "在我这行剧情触发时，人物将左右跑动！",
  },
  {
    name: "%self",
    avatar: "",
    message: "在我这行剧情触发时，人物将镜像翻转！",
  },
  {
    name: "%self",
    avatar: "",
    message: "在我这行剧情触发时，人物将变大1.2倍！",
  },
  {
    name: "%self",
    avatar: "",
    message: "在我这行剧情触发时，人物将开始振动！",
  },
  {
    name: "%self",
    avatar: "",
    message: "在我这行剧情触发时，画廊1将解锁！",
  },
  {
    name: "%self",
    avatar: "",
    message: "在我这行剧情触发时，将播放一段音效！",
  },
  {
    name: "%self",
    avatar: "",
    message: "在我这行剧情触发时，将播放一段音乐！",
  },
  {
    name: "%self",
    avatar: "",
    message:
      "所有画廊解锁都是永久性解锁的！一旦解锁直接放入游戏本地目录，基本上不会存在你忘记存档了画廊就没解锁。。",
  },
  {
    name: "%self",
    avatar: "",
    message:
      "接下来会循环生成【10个由100个啊】组成的片段！可以点击下列快进按钮进行快进！",
  },
  ...new Array(10).fill(null).map((_, index) => ({
    name: "%self",
    avatar: "",
    message: index + "啊".repeat(100),
  })),
  {
    name: "%self",
    avatar: "",
    message:
      "接下来是选择分支结构！在过掉本剧情之后，会出现两个分支！<br>两个分支均不会影响剧情，但是会影响我们的下一句对话！<br>比如说我问你：你最喜欢做什么运动？",
  },
  {
    type: "choice",
    id: "branch1",
    choice: ["跑步", "游泳", "打篮球"],
    next: [
      {
        name: "%self",
        avatar: "",
        message: "你选择了跑步！",
      },
      {
        name: "%self",
        avatar: "",
        message: "你选择了游泳！",
      },
      {
        name: "%self",
        avatar: "",
        message: "你选择了打篮球！",
      },
    ],
  },
  {
    name: "%self",
    avatar: "",
    message: "每一个分支都会影响最终结局，比如说上述你的选择我将会记住！",
  },
  {
    name: "%self",
    avatar: "",
    message: "emm，让我想想，上一步你选择的是%branch1！我猜对了吗？",
  },
]);
