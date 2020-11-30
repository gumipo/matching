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
      { content: "お願い！！", nextId: "Please" },
      {
        content: "なら今度食事行かない？良いお店知ってるからどうかな？",
        nextId: "dinner",
      },
    ],
    girlanswer: "いきなりLine聞いてくる人とは仲良くできないな",
  },
  confession: {
    answers: [{ content: "", nextId: "modal" }],
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
    answers: [{ content: "", nextId: "modal" }],
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
  Please: {
    answers: [{ content: "もう一度連絡してみる", nextId: "again" }],
    grilanswer: "音信不通になった",
  },
  engineer: {
    answers: [{ content: "", nextId: "modal" }],
    girlanswer: "元カレエンジニアだったからエンジニアはちょっとないわ",
  },
  neet: {
    answers: [{ content: "", nextId: "modal" }],
    girlanswer: "働け",
  },
  lovehotel: {
    answers: [{ content: "トイレ巡りでもしませんか？", nextId: "wc" }],
    girlanswer: "私もキャバクラのトイレ毎日洗ってるんです！",
  },
  gast: {
    answers: [{ content: "", nextId: "modal" }],
    girlanswer: "ジョイフル派なんで私",
  },
  saize: {
    answers: [{ content: "", nextId: "modal" }],
    girlanswer: "ガスト派なんで私",
  },
  joyfle: {
    answers: [{ content: "", nextId: "modal" }],
    girlanswer: "サイゼ派なんで私",
  },
  wc: {
    answers: [{ content: "", nextId: "correctmodal" }],
  },
  again: {
    answers: [
      { content: "ごめん諦められない！", nextId: "correctmodal" },
      { content: "これは俺の性格なんだ", nextId: "modal" },
    ],
  },
};

export default dataset;
