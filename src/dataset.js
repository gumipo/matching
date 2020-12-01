const dataset = {
  init: {
    answers: [
      { content: "はじめましてuserNameです", nextId: "first" },
      { content: "Lineおしえて！！", nextId: "firstline" },
      {
        content: "めっちゃ可愛いですね付き合ってください！！！",
        nextId: "confession",
      },
    ],
  },
  first: {
    answers: [
      { content: "お仕事なにされてるんですか。", nextId: "job" },
      { content: "Line教えて下さい", nextId: "line" },
      { content: "今度デートでも行きませんか", nextId: "dinner" },
    ],
    girlanswer: "私はアミです。よろしくね😍",
  },
  firstline: {
    answers: [
      { content: "お願い！！", nextId: "press" },
      {
        content: "なら今度食事行かない？良いお店知ってるからどうかな？",
        nextId: "dinner",
      },
    ],
    girlanswer: "いきなりLine聞いてくる人とは仲良くできないな",
  },
  confession: {
    answers: [{ content: "", nextId: "" }],
    girlanswer: "無理です",
  },
  job: {
    answers: [
      { content: "エンジニアです", nextId: "engineer" },
      { content: "ニートで毎日家にいます", nextId: "neet" },
      { content: "ラブホのトイレ掃除の仕事してます", nextId: "lovehotel" },
    ],
    girlanswer: "私はキャバクラで今バイトしてます。userNameさんは?",
  },
  line: {
    answers: [{ content: "", nextId: "" }],
    girlanswer: "すみません。いきなりLine聞いてくる人とは仲良くなれません",
  },
  dinner: {
    answers: [
      { content: "ジョイフル", nextId: "joyfle" },
      { content: "ガスト", nextId: "gast" },
      { content: "サイゼリア", nextId: "saize" },
    ],
    girlanswer: "えー!どこ連れてってくれるんですか?",
  },
  press: {
    answers: [
      { content: "１日１０万でどう？", nextId: "again" },
      { content: "おお〜い(笑)", nextId: "mistake_modal" },
    ],
    girlanswer: "・・・・・・・・",
  },
  engineer: {
    answers: [{ content: "", nextId: "" }],
    girlanswer: "元カレエンジニアだったからエンジニアはちょっとないわ",
  },
  neet: {
    answers: [{ content: "", nextId: "" }],
    girlanswer: "働け",
  },
  lovehotel: {
    answers: [{ content: "トイレ巡りでもしませんか？", nextId: "correct_wc" }],
    girlanswer: "私もキャバクラのトイレ毎日洗ってるんです！",
  },
  gast: {
    answers: [{ content: "", nextId: "" }],
    girlanswer: "ジョイフル派なんで私",
  },
  saize: {
    answers: [{ content: "", nextId: "" }],
    girlanswer: "ガスト派なんで私",
  },
  joyfle: {
    answers: [{ content: "", nextId: "" }],
    girlanswer: "サイゼ派なんで私",
  },
  correct_wc: {
    girlanswer: "ぜひトイレデートに行きましょう！！！",
  },
  again: {
    answers: [
      {
        content: "君が魅力的すぎて諦められないんだよ！",
        nextId: "correct_again",
      },
      { content: "これ、俺の性格だから", nextId: "mistake_modal" },
    ],
    girlanswer: "しつこい人ですね",
  },
  correct_again: {
    girlanswer: "サキッポだけよ....",
  },
  mistake_modal: {
    answers: [{ content: "", nextId: "" }],
    girlanswer: "ウザいね君",
  },
};

export default dataset;
