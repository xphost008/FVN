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
export const branchs = writable({
  branch1: "",
  branch2: "",
});
export const dialogInstanceR = readable([
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message: "你昨晚睡得好吗？",
  },
  {
    type: "choice",
    id: "main",
    choice: [
      "睡得很好",
      "睡得不好",
      "怎么说呢，其实昨晚我一闭上眼就梦到了一个美人儿，她风情万种，樱唇如蜜，唯一美中不足的是她和你妈妈长得一模一样。",
      "什么是昨晚？",
    ],
  },
  {
    name: '<span style="color: red;">%name</span>',
    if: [
      {
        key: "main",
        value: "睡得很好",
      },
    ],
    avatar: "",
    message: "哈哈我也是",
  },
  {
    name: '<span style="color: red;">%name</span>',
    if: [
      {
        key: "main",
        value: "睡得不好",
      },
    ],
    avatar: "",
    message: "诶？这样的话今天的行动会不会很辛苦？我会注意给你留出午休时间的。",
  },
  {
    type: "choice",
    id: "branch_b",
    if: [
      {
        key: "main",
        value: "睡得不好",
      },
    ],
    choice: ["谢谢，你真贴心", "别小看我，我是永不停歇的发条人！"],
  },
  {
    name: '<span style="color: red;">%name</span>',
    if: [
      {
        key: "branch_b",
        value: "谢谢，你真贴心",
      },
    ],
    avatar: "",
    message: "加油发条人！",
  },
  {
    name: '<span style="color: red;">%name</span>',
    if: [
      {
        key: "main",
        value:
          "怎么说呢，其实昨晚我一闭上眼就梦到了一个美人儿，她风情万种，樱唇如蜜，唯一美中不足的是她和你妈妈长得一模一样。",
      },
    ],
    avatar: "",
    message:
      "真……真的吗？唉，你很可能不是在做梦，你这种确实是她喜欢的类型，发生这种事，我很抱歉",
  },
  {
    type: "choice",
    id: "branch_c",
    if: [
      {
        key: "main",
        value:
          "怎么说呢，其实昨晚我一闭上眼就梦到了一个美人儿，她风情万种，樱唇如蜜，唯一美中不足的是她和你妈妈长得一模一样。",
      },
    ],
    choice: ["没事，其实刚刚我在骗你", "其实我还挺期待再来一次的"],
  },
  {
    name: '<span style="color: red;">%name</span>',
    if: [
      {
        key: "branch_c",
        value: "没事，其实刚刚我在骗你",
      },
    ],
    avatar: "",
    message: "下次不要开这种玩笑",
  },
  {
    name: '<span style="color: red;">%name</span>',
    if: [
      {
        key: "branch_c",
        value: "其实我还挺期待再来一次的",
      },
    ],
    avatar: "",
    message: "我会替你转达",
  },
  {
    name: '<span style="color: red;">%name</span>',
    if: [
      {
        key: "main",
        value: "什么是昨晚？",
      },
    ],
    avatar: "",
    message: "……？",
  },
  {
    type: "choice",
    id: "branch_d",
    if: [
      {
        key: "main",
        value: "什么是昨晚？",
      },
    ],
    choice: [
      "时间只是我们的一种错觉，因与果皆存于这世上，你的目光盯着这页书时看不见上一页，但它就在那里，并没有昨晚，不要再提这个词了。",
      "我是今日的新我，在今晨出生，朝生暮死是我注定的命运，你所谓的睡眠即是我的终焉，抱歉，我没法理解什么是昨晚。",
    ],
  },
  {
    name: '<span style="color: red;">%name</span>',
    if: [
      {
        key: "branch_d",
        value:
          "时间只是我们的一种错觉，因与果皆存于这世上，你的目光盯着这页书时看不见上一页，但它就在那里，并没有昨晚，不要再提这个词了。",
      },
    ],
    avatar: "",
    message: "虽然不太清楚你在说什么，但你很酷",
  },
  {
    name: '<span style="color: red;">%name</span>',
    if: [
      {
        key: "branch_d",
        value:
          "我是今日的新我，在今晨出生，朝生暮死是我注定的命运，你所谓的睡眠即是我的终焉，抱歉，我没法理解什么是昨晚。",
      },
    ],
    avatar: "",
    message: "那么为了方便我还是继续用上一个你的名字来称呼你",
  },
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message: "接下来让我讲讲今天的行动，我们要去村子外面挖草药。",
  },
]);
interface IfInterface {
  key: string;
  value: string | ((branch_value: string) => boolean);
}
interface ScoreInterface {
  targetId: string;
  action: (branch: string, rawValue: string) => string;
}
interface DialogInterface {
  type?: string;
  id?: string;
  name?: string;
  avatar?: string;
  message?: string;
  choice?: Array<string>;
  score?: ScoreInterface;
  if?: Array<IfInterface>;
}
export const dialogInstance = readable<DialogInterface[]>([
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message:
      '你好，我是<span style="color: red;">%name</span>，很高兴你来玩这个demo小游戏！',
  },
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message: "各位可以自行点击下面的所有按钮，目前都做好啦！",
  },
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message:
      '此次文字可以<b>粗</b><i>斜体</i><u>下划线</u><s>删除线</s>以及<b><i><u><s>嵌套</s></u></i></b>，以及调整<span style="font-size: 20px; color: red;">大小和颜色</span>！',
  },
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message:
      "存档即为将数据文件导出到本地文件，随后，在下一次进入游戏时，自动导入存档文件！",
  },
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message:
      "如果你但凡没有对任何一个存档进行储存的话，存档将保存在你的内存中，如果在此期间你要是关闭了游戏，存档将丢失！",
  },
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message: "随后，让我们来看看人物立绘是怎么动的吧！",
  },
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message: "在我这行剧情触发时，人物将左右跑动！",
  },
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message: "在我这行剧情触发时，人物将镜像翻转！",
  },
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message: "在我这行剧情触发时，人物将变大1.2倍！",
  },
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message: "在我这行剧情触发时，人物将开始振动！",
  },
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message: "在我这行剧情触发时，画廊1将解锁！",
  },
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message: "在我这行剧情触发时，将播放一段音效！",
  },
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message: "在我这行剧情触发时，将播放一段音乐！",
  },
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message:
      "所有画廊解锁都是永久性解锁的！一旦解锁直接放入游戏本地目录，基本上不会存在你忘记存档了画廊就没解锁。。",
  },
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message:
      "接下来会循环生成【10个由100个啊】组成的片段！可以点击下列快进按钮进行快进！",
  },
  ...new Array(10).fill(null).map((_, index: number) => ({
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message: index + "啊".repeat(100),
  })),
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message:
      "接下来是选择分支结构！在过掉本剧情之后，会出现两个分支！<br>两个分支均不会影响剧情，但是会影响我们的下一句对话！<br>比如说我问你：你最喜欢做什么运动？",
  },
  {
    type: "choice",
    id: "branch1",
    choice: ["跑步", "游泳", "打篮球"],
  },
  // 警告：这句话无论前面选没选游泳，到了下面之后再回退，则永远回退不到这句话！
  {
    name: '<span style="color: red;">%name</span>',
    if: [
      {
        key: "branch1",
        value: "游泳",
      },
    ],
    avatar: "",
    message: "你喜欢游泳？我也喜欢！",
  },
  {
    type: "choice",
    id: "branch1",
    choice: ["睡觉", "喝水", "喝牛奶"],
  },
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message:
      "每一个分支都会影响最终结局，比如说上述你的选择我将会记住！让我想想，上一步你选择的是%branch1！我猜对了吗？",
  },
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message:
      "还有另外一种情况，就是根据你选择的内容输出一句完整的话，比如我现在问你：<br>你今天喝了牛奶吗？",
  },
  {
    type: "choice",
    id: "branch2",
    choice: ["喝了", "没喝", "你猜"],
  },
  {
    name: '<span style="color: red;">%name</span>',
    if: [
      {
        key: "branch2",
        value: "喝了",
      },
    ],
    avatar: "",
    message: "哇，牛奶很香很好喝吧！我觉得也是。",
  },
  {
    name: '<span style="color: red;">%name</span>',
    if: [
      {
        key: "branch2",
        value: "没喝",
      },
    ],
    avatar: "",
    message: "天哪，你今天居然没喝牛奶！快去喝一杯吧！",
  },
  {
    name: '<span style="color: red;">%name</span>',
    if: [
      {
        key: "branch2",
        value: "你猜",
      },
    ],
    avatar: "",
    message: "我猜？我才不想猜呢！一看你就是没有喝啦……",
  },
  {
    name: '<span style="color: red;">%name</span>',
    avatar: "",
    message:
      '下面演示一下场景切换！接下来邀请我的朋友：<span style="color: orange;">小虎</span>，来为各位作解释！',
  },
  {
    name: '<span style="color: orange;">小虎</span>',
    avatar: "",
    message: 'Hi，我是<span style="color: orange;">小虎</span>！',
  },
  {
    name: '<span style="color: orange;">小虎</span>',
    avatar: "",
    message:
      "我们可以调整背景图片/比如说目前是纯黑的，我们可以安插一个背景图上去。就用我办公室的模糊图吧！",
  },
  {
    name: '<span style="color: orange;">小虎</span>',
    avatar: "",
    message:
      "在执行到我这一句时，背景会以 500ms 的速度加载完毕。随后，我们便可以正常切换背景了。",
  },
  {
    name: '<span style="color: orange;">小虎</span>',
    avatar: "",
    message:
      "下面还有一个问题，那就是心理测试问题！这个问题通过计算你的加分减分来运行最后的分支选项！这个有必要给各位介绍一下！",
  },
  {
    name: '<span style="color: orange;">小虎</span>',
    avatar: "",
    message:
      "首先，下列会显示一大堆的选项，这些选项会影响最终我对你的分数考核。你可以在下列选择不同的分支~",
  },
  // score 的介绍！这是个不同于 简单 choice 的分支，choice 分支一般用于一些不太重要的选项。而 score 则代表了一个加分项！
  // score 与 choice 的唯一不同之处在于，它的 targetId 可以重复！
  // 它的 action 是一个非常棒的键值对，是一个函数，有两个参数，第一个参数是当前选取的 choice，第二个参数是上一次选取的相同 id 的值！
  {
    type: "choice",
    id: "branch3",
    choice: ["1", "2", "3"],
    score: {
      targetId: "branch7",
      action: (branch: string, rawValue: string) => {
        if (branch === "1") {
          return ((parseInt(rawValue) || 0) + 1).toString();
        } else if (branch === "2") {
          return ((parseInt(rawValue) || 0) + 2).toString();
        } else {
          return ((parseInt(rawValue) || 0) + 3).toString();
        }
      },
    },
  },
  {
    type: "choice",
    id: "branch4",
    choice: ["8", "4", "-2"],
    score: {
      targetId: "branch7",
      action: (branch: string, rawValue: string) => {
        if (branch === "8") {
          return ((parseInt(rawValue) || 0) + 8).toString();
        } else if (branch === "4") {
          return ((parseInt(rawValue) || 0) + 4).toString();
        } else {
          return ((parseInt(rawValue) || 0) - 2).toString();
        }
      },
    },
  },
  {
    type: "choice",
    id: "branch5",
    choice: ["19", "0", "-7", "-99"],
    score: {
      targetId: "branch7",
      action: (branch: string, rawValue: string) => {
        if (branch === "19") {
          return ((parseInt(rawValue) || 0) + 19).toString();
        } else if (branch === "0") {
          return rawValue;
        } else if (branch === "-7") {
          return ((parseInt(rawValue) || 0) - 7).toString();
        } else {
          return ((parseInt(rawValue) || 0) - 99).toString();
        }
      },
    },
  },
  {
    type: "choice",
    id: "branch6",
    choice: ["145", "51", "-76", "-233"],
    score: {
      targetId: "branch7",
      action: (branch: string, rawValue: string) => {
        if (branch === "145") {
          return ((parseInt(rawValue) || 0) + 145).toString();
        } else if (branch === "51") {
          return ((parseInt(rawValue) || 0) + 51).toString();
        } else if (branch === "-76") {
          return ((parseInt(rawValue) || 0) - 76).toString();
        } else {
          return ((parseInt(rawValue) || 0) - 233).toString();
        }
      },
    },
  },
  // 接下来的 if 分支是对 score 的判断！可以看见它的 value 所接收的是一个函数！！函数返回一个布尔值，传入的 branch_value 就是我们的 key 里面的 branch 内容！
  // 请尽量确保你的 if 覆盖了所有的范围，或者请按照剧本的规定来走！
  {
    name: '<span style="color: orange;">小虎</span>',
    avatar: "",
    if: [
      {
        key: "branch7",
        value: (branch_value: string) => {
          return (parseInt(branch_value) || 0) >= 100;
        },
      },
    ],
    message: "哇哦，你的分数居然达到了惊人的%branch7，真是不可思议！！",
  },
  {
    name: '<span style="color: orange;">小虎</span>',
    avatar: "",
    if: [
      {
        key: "branch7",
        value: (branch_value: string) => {
          let bv = parseInt(branch_value) || 0;
          return bv < 100 && bv > -100;
        },
      },
    ],
    message: "好吧，你的分数是：%branch7，平平无奇，你当然还可以发挥得更好",
  },
  {
    name: '<span style="color: orange;">小虎</span>',
    avatar: "",
    if: [
      {
        key: "branch7",
        value: (branch_value: string) => {
          return (parseInt(branch_value) || 0) <= -100;
        },
      },
    ],
    message:
      "噢我的上帝，你在干什么？你的分数居然达到了%branch7！真是太令人吃惊了！",
  },
]);
