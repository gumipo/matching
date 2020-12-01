const secondDataset = {
  init: {
    answers: [
      { content: "Line教えて", nextId: "first" },
      { content: "お付き合いしませんか？", nextId: "dating" },
      { content: "僕ブラック派です", nextId: "isBlack" },
    ],
  },
  first: {
    answers: [
      { content: "Lineも知らないんですか？", nextId: "line" },
      {
        content:
          "それはもう！！これからの時代はこういうツールを使ってうまく稼いでいくんですよ！！",
        nextId: "era",
      },
      {
        content:
          "線(line)で牛乳移送ができていつでもどこでも注ぎ放題になるんです！",
        nextId: "transfer",
      },
    ],
    girlanswer: "Lineてなんですの？牛乳注ぐのに役に立つのかしら？",
  },
  isBlack: {
    answers: [
      { content: "僕はブラック派です", nextId: "isBlack" },
      { content: "牛乳って何にかけるんですか", nextId: "SprinkleMilk" },
      {
        content: "僕にも牛乳かけてマイルドにしてほしい",
        nextId: "mistake",
      },
    ],
    girlanswer: "私はマイルドにしたい",
  },
  dating: {
    answers: [
      {
        content: "牛乳を注ぐYou tubeを見る",
        nextId: "https://www.youtube.com/watch?v=pia0iJLqzmA&t=13s",
      },
      {
        content: "なんにでも牛乳注ぐとか頭イカれてますね",
        nextId: "mistake",
      },
    ],
    girlanswer: "牛乳注ぐのに忙しいからそんな暇ありません",
  },

  line: {
    answers: [{ content: "", nextId: "mistake" }],
    girlanswer: "バカにしてますの？ひどいお方",
  },
  era: {
    answers: [
      {
        content: "僕が教えるので一緒に頑張りましょうよ！",
        nextId: "LowerHeart",
      },
      { content: "そんなことないですよ？", nextId: "evidence" },
    ],
    girlanswer: "なんか怪しいですね…",
  },
  transfer: {
    answers: [
      {
        content: "You tubeを見る",
        nextId: "https://www.youtube.com/watch?v=pia0iJLqzmA&t=13s",
      },
      {
        content: "犬の飯食ってるのと変わらないですね",
        nextId: "mistake",
      },
    ],
    girlanswer:
      "それはいいですわ〜。わたし、注ぐの大好きなの。こんな感じで注ぎたいわ〜",
  },

  SprinkleMilk: {
    answers: [
      {
        content: "You tubeを見る",
        nextId: "https://www.youtube.com/watch?v=pia0iJLqzmA&t=13s",
      },
      { content: "見ました。気持ち悪いですね", nextId: "mistake" },
    ],
    girlanswer: "You tubeあげたので見てください",
  },

  LowerHeart: {
    answers: [
      { content: "一生寄り添いますよ！！", nextId: "correct_modal" },
      { content: "", nextId: "mistake" },
    ],
    girlanswer: "それは頼もしいわ",
  },
  evidence: {
    answers: [{ content: "証拠と言われましても…", nextId: "angryGirl" }],
    girlanswer: "証拠を見せてくださる？",
  },

  chatEnd: {
    answers: [{ content: "", nextId: "mistake" }],
    girlanswer: "その想いは重いわ…",
  },
  angryGirl: {
    answers: [{ content: "", nextId: "mistake" }],
    girlanswer: "もういいわ！！",
  },
};

export default secondDataset;
