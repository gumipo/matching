const thirdDataset = {
  init: {
    answers: [
      { content: "はじめましてuserNameです", nextId: "first" },
      { content: "葉書を使って文通しませんか？", nextId: "firstline" },
      {
        content: "なごちんってよんでいいですか？",
        nextId: "nickname",
      },
    ],
  },
  first: {
    answers: [
      { content: "知らないです。", nextId: "dont_know" },
      { content: "春はあけぼの...", nextId: "spring" },
      { content: "そんなことより鬼滅の刃みましたか?", nextId: "kimetsu" },
    ],
    girlanswer: "はじめて我は清少納言と言ふ。枕草子はご存知なりや？",
  },
  firstline: {
    answers: [
      { content: "何を言っているのか意味がわかりませんが…", nextId: "unknown" },
      {
        content: "雪が積もると文書の運搬もできなくなりますからね！",
        nextId: "no_transported",
      },
      { content: "ありがとう清少納言さん", nextId: "thanks" },
    ],
    girlanswer:
      "良きぞ。何についてお話しするかはまかせたてまつる。文通せば葉書ならず、お主らの使へるLINEとやらにやり取りすべきぞ。",
  },
  nickname: {
    answers: [
      { content: "なごちん鬼滅の刃みたー？？", nextId: "kimetsu" },
      {
        content: "なごちん本書いてるのー？",
        nextId: "unknown",
      },
      {
        content: "UserNameさんのことはなんて読んだらいい？",
        nextId: "your_name",
      },
    ],
    girlanswer: "え...なごちん......我はなごちんならず",
  },
  dont_know: {
    answers: [
      { content: "枕草子を読む", nextId: "engineer" },
      { content: "読みました！！い づ れの 御時にか...", nextId: "neet" },
      { content: "は？源氏物語もよめ", nextId: "lovehotel" },
    ],
    girlanswer: "は？枕草子読んで出直してこい",
  },
  spring: {
    answers: [
      { content: "日本酒には...", nextId: "japan" },
      {
        content: "夏は夜。月の頃はさらなり。闇もなほ。",
        nextId: "summer_night",
      },
      { content: "い づ れの 御時にか...", nextId: "genji" },
    ],
    girlanswer:
      "やうやう白くなりゆく、山際少し明かりて、紫だちたる雲の細くたなびきたる。",
  },
  kimetsu: {
    answers: [
      { content: "ちょっと何言ってるかわからない", nextId: "" },
      {
        content: "一緒にもっかい映画見に行かないー？？",
        nextId: "again_movie",
      },
      { content: "LINE教えてー", nextId: "line_teach" },
    ],
    girlanswer:
      "見ﾅﾆ見ﾅﾆ！！めっちゃ感重力ιﾅﾆ！！っτｶゝ炭シ台良卩めっちゃ勺ｨ┐°ﾅょωﾅﾆ″ﾚﾅー⊂″─",
  },
  unknown: {
    answers: [
      { content: "枕草子ってなんですか？", nextId: "makuranosoushi" },
      { content: "僕、外国後なら得意なんですよ！", nextId: "language" },
    ],
    grilanswer: "ha?枕草子読みて古語の学問ししよりいで直しゆきたまへ",
  },
  no_transported: {
    answers: [{ content: "部屋の中に行きましょう", nextId: "room_in" }],
    girlanswer:
      "今はさほど雪ぞ積もらずなりける。されど刺さらむ寒さなり。一筆取らまほしくなりきよ",
  },
  thanks: {
    answers: [
      { content: "では本名はなんと？", nextId: "realname" },
      { content: "清さん！", nextId: "kiyo" },
      { content: "少納言さん！", nextId: "shounagonn" },
    ],
    girlanswer: "清少納言といふ名は我が本名ならぬぞかし",
  },
  japan: {
    answers: [
      { content: "二日酔いには", nextId: "hutsukayoi" },
      { content: "い づ れの 御時にか...", nextId: "genji" },
      { content: "では飲みに行きましょう", nextId: "" },
    ],
    girlanswer: "アサリの酒蒸しを食ふ",
  },
  summer_night: {
    answers: [{ content: "", nextId: "modal" }],
    girlanswer: "ごめん続き覚えてないわ",
  },
  genji: {
    answers: [{ content: "", nextId: "modal" }],
    girlanswer: "節子それ源氏物語や",
  },
  again_movie: {
    answers: [
      {
        content: "僕も枕草子を読む",
        nextId:
          "https://ja.wikipedia.org/wiki/%E6%9E%95%E8%8D%89%E5%AD%90#%E6%9B%B8%E5%90%8D%E3%81%AE%E7%94%B1%E6%9D%A5",
      },
      { content: "僕も鬼滅の刃を見直す", nextId: "https://kimetsu.com/anime/" },
    ],
    girlanswer: "ﾚヽ＜ﾚヽ＜─ﾅﾆ＠ιゐ─ぁﾚﾆめまﾅﾆ全部見直す─",
  },
  line_teach: {
    answers: [{ content: "", nextId: "modal" }],
    girlanswer: "ごめωﾗｨ･/ゃっτﾅょﾚヽ─ヵヵ才ﾅょらﾚヽﾚヽょ─",
  },

  makuranosoushi: {
    answers: [
      {
        content: "枕の草子を知る",
        nextId:
          "https://ja.wikipedia.org/wiki/%E6%9E%95%E8%8D%89%E5%AD%90#%E6%9B%B8%E5%90%8D%E3%81%AE%E7%94%B1%E6%9D%A5",
      },
    ],
    girlanswer: "お主、日本人ならずな？",
  },
  language: {
    answers: [
      { content: "堪能ですね！それはベラルーシ語ですね！", nextId: "modal" },
      { content: "堪能ですね！それはヘブライ語ですね！", nextId: "finish" },
      { content: "堪能ですね！それはアルメリア語ですね！", nextId: "modal" },
    ],
    girlanswer: "?האמנם.אז אתה יודע עברית",
  },
  room_in: {
    answers: [
      { content: "今はファンヒーターがあります", nextId: "heater" },
      { content: "今は床暖があります", nextId: "floor_heater" },
      { content: "薪ストーブもいいです", nextId: "firewood" },
    ],
    girlanswer:
      "冬はつとめて。雪の降りたるは、言ふべきにもあらず。霜のいと白きも、またさらでも、いと寒きに、火など急ぎおこして、炭持てわたるも、いとつきづきし。",
  },
  realname: {
    answers: [
      { content: "タイムスリップ", nextId: "init" },
      {
        content: "我、美男子のほかに興なければ",
        nextId: "https://www.youtube.com/watch?v=CyY2aoc68qo",
      },
    ],
    girlanswer: "諾子（なぎこ）ぞ。されど、その記憶も既に定かにはあらず",
  },
  kiyo: {
    answers: [{ content: "Youtubeで学習する", nextId: "" }],
    girlanswer: "さりかし。清原家生まれかな",
  },
  shounagonn: {
    answers: [
      { content: "もう一度挑戦する", nextId: "modal" },
      {
        content: "Youtubeで学習する",
        nextId: "https://www.youtube.com/watch?v=CyY2aoc68qo",
      },
      { content: "", nextId: "" },
    ],
    girlanswer: "少納言は位につきての呼称なれば好かず",
  },
  your_name: {
    answers: [{ content: "", nextId: "" }],
    girlanswer: "かれぴっぴって呼んでくだちゃい",
  },
};

export default thirdDataset;