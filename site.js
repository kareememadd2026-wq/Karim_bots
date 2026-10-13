/* كل محتوى الموقع بالعربي والإنجليزي هنا. عدّل النصوص من هنا بس. */
const NUMBER_DISPLAY = "01271028223";
const WA_NUMBER = "201271028223";

const T = {
  ar: {
    dir: "rtl", langBtn: "EN",
    brand: "كريم البشتامي",
    navHome: "الرئيسية", navServices: "الخدمات",
    role: "مبرمج بوتات تيليجرام",
    name: "المهندس كريم عماد البشتامي",
    tagline: "بوت تيليجرام يشتغل بدالك: يرد على عملاءك، ويستقبل الطلبات، ويدير الجروب.",
    waBtn: "تواصل واتساب", seeServices: "شوف الخدمات",
    chatUser: "/start",
    chatBot: "أهلاً بيك! اختار اللي تحتاجه:",
    keys: ["المنتجات", "تواصل معنا", "أسئلة شائعة"],
    aboutH: "من أنا",
    about1: "أنا كريم، مهندس بيبرمج بوتات تيليجرام لأصحاب المشاريع والجروبات والقنوات. بحوّل الشغل المتكرر، زي الرد على نفس الأسئلة أو استقبال الطلبات، لبوت بيعمله لوحده.",
    about2: "بكتب كل بوت على حسب شغلك إنت، وبسلّمه لك شغال ومعاه شرح بسيط لطريقة تشغيله.",
    whyH: "ليه تشتغل معايا",
    why: [
      { t: "بوت على مقاسك", d: "بنتفق على اللي محتاجه، وأبرمج البوت على طريقة شغلك." },
      { t: "بيتسلّم شغال", d: "بتستلم البوت جاهز للتشغيل مع شرح بسيط لطريقة استخدامه." },
      { t: "كلامنا مباشر", d: "بنتكلم على واتساب، من أول الفكرة لحد التسليم." },
      { t: "قابل للتطوير", d: "تقدر تضيف مميزات جديدة للبوت بعد ما تستلمه." }
    ],
    howH: "إزاي بنشتغل",
    steps: [
      "ابعتلي فكرتك على واتساب",
      "نتفق على المطلوب والسعر",
      "أبرمج البوت وتجرّبه معايا",
      "تستلمه وتشغّله"
    ],
    ctaH: "عندك فكرة بوت؟",
    ctaP: "ابعتلي على واتساب وقولي عايز البوت يعمل إيه.",
    servicesH: "الخدمات",
    servicesIntro: "دي أمثلة على البوتات اللي أبرمجها. أي بوت فيهم بيتظبط على شغلك.",
    services: [
      { cmd: "/contact", t: "بوت تواصل مع العملاء", d: "الناس بتكتب للبوت وتوصلك رسايلهم، وإنت ترد عليهم من تيليجرام نفسه." },
      { cmd: "/faq", t: "بوت ردود تلقائية", d: "يرد على الأسئلة المتكررة بالأزرار والقوائم من غير ما تتدخل." },
      { cmd: "/shop", t: "بوت متجر وطلبات", d: "يعرض منتجاتك ويستقبل الطلبات ويبلّغك بكل طلب جديد." },
      { cmd: "/pay", t: "بوت اشتراكات ودفع", d: "يدير اشتراكات الأعضاء ويفتح لهم الوصول، ويقفله لما الاشتراك يخلص." },
      { cmd: "/rules", t: "بوت إدارة الجروبات", d: "ترحيب بالأعضاء الجداد، وحذف الروابط، وحظر المخالفين تلقائياً." },
      { cmd: "/send", t: "بوت إذاعة وإعلانات", d: "تبعت رسالة واحدة ويوصلها لكل المشتركين مرة واحدة." },
      { cmd: "/book", t: "بوت حجوزات ومواعيد", d: "العميل يحجز ميعاده من الشات، ويوصلك تنبيه بكل حجز." },
      { cmd: "/ask", t: "بوت بالذكاء الاصطناعي", d: "يفهم أسئلة الناس ويرد عليها، وبيتربط بأداة ذكاء اصطناعي." },
      { cmd: "/custom", t: "بوت حسب طلبك", d: "عندك فكرة تانية؟ قولّي عليها وأظبطها على مقاسك." }
    ],
    priceNote: "السعر بيتحدد حسب المطلوب. كلّمني على واتساب وهقولك.",
    footerNum: "واتساب:",
    waMsg: "السلام عليكم، عايز أعمل بوت تيليجرام"
  },
  en: {
    dir: "ltr", langBtn: "عربي",
    brand: "Karim El‑Beshtami",
    navHome: "Home", navServices: "Services",
    role: "Telegram Bot Developer",
    name: "Eng. Karim Emad El‑Beshtami",
    tagline: "A Telegram bot that works for you: answers your customers, takes orders, and manages your group.",
    waBtn: "Chat on WhatsApp", seeServices: "See services",
    chatUser: "/start",
    chatBot: "Welcome! Pick what you need:",
    keys: ["Products", "Contact us", "FAQ"],
    aboutH: "About me",
    about1: "I'm Karim, an engineer who builds Telegram bots for business owners, groups, and channels. I turn repetitive work, like answering the same questions or taking orders, into a bot that does it on its own.",
    about2: "I build each bot around how you work, and hand it over running, with a simple guide on how to operate it.",
    whyH: "Why work with me",
    why: [
      { t: "A bot built for you", d: "We agree on what you need, and I build the bot around how you work." },
      { t: "Delivered and working", d: "You get the bot ready to run, with a simple guide on how to use it." },
      { t: "Direct line to me", d: "We talk on WhatsApp, from the first idea to delivery." },
      { t: "Room to grow", d: "You can add new features to the bot after you receive it." }
    ],
    howH: "How we work",
    steps: [
      "Send me your idea on WhatsApp",
      "We agree on scope and price",
      "I build the bot and you try it with me",
      "You get it and run it"
    ],
    ctaH: "Have a bot idea?",
    ctaP: "Message me on WhatsApp and tell me what you want the bot to do.",
    servicesH: "Services",
    servicesIntro: "These are examples of the bots I build. Any of them can be adjusted to fit your work.",
    services: [
      { cmd: "/contact", t: "Customer contact bot", d: "People write to the bot and their messages reach you. You reply from Telegram itself." },
      { cmd: "/faq", t: "Auto-reply bot", d: "Answers frequent questions with buttons and menus, without you stepping in." },
      { cmd: "/shop", t: "Store and orders bot", d: "Shows your products, takes orders, and notifies you of every new one." },
      { cmd: "/pay", t: "Subscriptions and payments bot", d: "Manages member subscriptions, grants access, and removes it when a subscription ends." },
      { cmd: "/rules", t: "Group management bot", d: "Welcomes new members, deletes links, and bans rule-breakers automatically." },
      { cmd: "/send", t: "Broadcast and announcements bot", d: "Write one message and it reaches all your subscribers at once." },
      { cmd: "/book", t: "Bookings and appointments bot", d: "Clients book their slot from the chat, and you get a notification for each booking." },
      { cmd: "/ask", t: "AI-powered bot", d: "Understands people's questions and replies, connected to an AI tool." },
      { cmd: "/custom", t: "Custom bot", d: "Have a different idea? Tell me about it and I'll build it to fit." }
    ],
    priceNote: "Pricing depends on what you need. Message me on WhatsApp and I'll tell you.",
    footerNum: "WhatsApp:",
    waMsg: "Hello, I'd like a Telegram bot built"
  }
};

(function () {
  const page = document.body.dataset.page;
  let lang = new URLSearchParams(location.search).get("lang") === "en" ? "en" : "ar";

  function el(tag, cls, txt) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt !== undefined) e.textContent = txt;
    return e;
  }
  function fill(id, items, make) {
    const box = document.getElementById(id);
    if (!box) return;
    box.replaceChildren(...items.map(make));
  }

  function render() {
    const t = T[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    document.title = (page === "services" ? t.navServices : t.navHome) + " | " + t.brand;

    document.querySelectorAll("[data-i]").forEach((n) => { n.textContent = t[n.dataset.i]; });
    document.querySelectorAll("[data-num]").forEach((n) => { n.textContent = NUMBER_DISPLAY; });

    const wa = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(t.waMsg);
    document.querySelectorAll("[data-wa]").forEach((a) => { a.href = wa; a.target = "_blank"; a.rel = "noopener"; });
    document.querySelectorAll("a[data-page]").forEach((a) => { a.href = a.dataset.page + "?lang=" + lang; });

    fill("chat-keys", t.keys, (k) => { const s = el("span", "key", k); s.dir = "auto"; return s; });
    fill("why-list", t.why, (w) => { const d = el("div", "row"); d.append(el("h3", null, w.t), el("p", null, w.d)); return d; });
    fill("steps", t.steps, (s) => el("li", null, s));
    fill("services-list", t.services, (s) => {
      const d = el("div", "svc");
      const head = el("div", "svc-head");
      head.append(el("h3", null, s.t), el("span", "cmd", s.cmd));
      d.append(head, el("p", null, s.d));
      return d;
    });

    const btn = document.getElementById("lang");
    if (btn) btn.textContent = t.langBtn;
  }

  const btn = document.getElementById("lang");
  if (btn) btn.addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    history.replaceState(null, "", "?lang=" + lang);
    render();
  });

  render();
})();
