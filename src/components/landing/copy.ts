export type Lang = "en" | "rw";

type Link = { label: string; href: string };

export type Copy = {
  nav: Link[];
  navCta: string;
  heroEyebrow: string;
  heroA: string;
  heroB: string;
  heroSub: string;
  gpSmall: string;
  asSmall: string;
  heroPoints: string[];
  chip1a: string;
  chip2a: string;
  featH: string;
  featSub: string;
  features: { tag: string; title: string; text: string }[];
  howH: string;
  steps: { n: string; title: string; text: string }[];
  offTag: string;
  offH: string;
  offText: string;
  offPoints: string[];
  quoteH: string;
  quotes: { text: string; name: string; role: string }[];
  priceH: string;
  priceSub: string;
  plans: { name: string; desc: string; price: string; per: string; items: string[]; cta: string }[];
  faqH: string;
  faqSub: string;
  faq: { q: string; a: string }[];
  dlH: string;
  dlSub: string;
  footTag: string;
  footProduct: string;
  footCompany: string;
  footContact: string;
  company: Link[];
  rights: string;
  made: string;
};

export const COPY: Record<Lang, Copy> = {
  en: {
    nav: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    navCta: "Download",
    heroEyebrow: "Made for shops in Rwanda",
    heroA: "Your shop,",
    heroB: "in your pocket.",
    heroSub:
      "Track stock, record sales and keep a clear list of who owes you. Dukani runs on your phone, even without internet.",
    gpSmall: "GET IT ON",
    asSmall: "Download on the",
    heroPoints: ["Free to start", "Works offline", "English and Kinyarwanda"],
    chip1a: "Sale recorded",
    chip2a: "Low stock",
    featH: "Everything the counter needs",
    featSub: "Four tools in one app, each a tap away from the tab bar.",
    features: [
      { tag: "Stock", title: "Know what’s on the shelf", text: "See every product, its price and how many are left. Dukani warns you before something runs out." },
      { tag: "Sales", title: "Sell in a few taps", text: "Pick items, take payment and share a receipt. Totals and change are worked out for you." },
      { tag: "Credit", title: "Keep track of who owes you", text: "Record credit sales and payments for each customer, with limits so debts don’t get out of hand." },
      { tag: "Insights", title: "See how the shop is doing", text: "Daily, weekly and monthly revenue, your best sellers and average sale, without a spreadsheet." },
    ],
    howH: "Set up in minutes",
    steps: [
      { n: "1", title: "Download and register", text: "Create your account with your phone number and choose your type of business." },
      { n: "2", title: "Add your products", text: "Add items with prices and stock counts, or start from ready-made categories." },
      { n: "3", title: "Start selling", text: "Record sales and credit from day one. Your dashboard updates as you go." },
    ],
    offTag: "Works offline",
    offH: "No signal? Keep selling.",
    offText:
      "Sales, stock changes and payments are saved on your phone first. When you’re back online, Dukani syncs them and flags anything that needs a second look.",
    offPoints: [
      "Every change is saved on the phone",
      "Syncs on its own when you reconnect",
      "Conflicts are shown clearly, so nothing is lost",
    ],
    quoteH: "From shop owners",
    quotes: [
      { text: "I used to count stock every Sunday. Now I check the app and reorder before things run out.", name: "Aline M.", role: "Mini market, Kimironko" },
      { text: "The credit list changed everything. Customers see what they owe and they pay sooner.", name: "Jean Bosco H.", role: "Boutique, Musanze" },
      { text: "Our area loses network often. Dukani keeps working and catches up later.", name: "Diane U.", role: "Pharmacy, Huye" },
    ],
    priceH: "Simple pricing",
    priceSub: "Start free. Upgrade when the shop grows.",
    plans: [
      { name: "Starter", desc: "For getting started", price: "RWF 0", per: "forever", items: ["Up to 100 products", "Sales and credit tracking", "Works offline", "One user"], cta: "Start free" },
      { name: "Pro", desc: "For growing shops", price: "RWF 5,000", per: "per month", items: ["Unlimited products", "Insights and reports", "Staff profiles with their own PIN", "Priority support"], cta: "Try Pro" },
    ],
    faqH: "Questions, answered",
    faqSub: "Can’t find what you need? Call or WhatsApp us.",
    faq: [
      { q: "Does Dukani work without internet?", a: "Yes. Everything you record is saved on your phone and syncs when you reconnect." },
      { q: "Which phones does it work on?", a: "Android phones and iPhones. Download it from Google Play or the App Store." },
      { q: "Is my shop’s data safe?", a: "Your account is protected by a PIN, and your data is backed up each time it syncs, so you won’t lose it if you change phones." },
      { q: "Can my staff use it too?", a: "Yes. Add staff profiles so each person signs in with their own PIN." },
      { q: "Is it available in Kinyarwanda?", a: "Yes. Switch between English and Kinyarwanda at any time in settings." },
      { q: "How do I get help?", a: "Call or WhatsApp our team, or send us an email. Our details are at the bottom of this page." },
    ],
    dlH: "Start with Dukani today",
    dlSub: "Free to download. Set up your shop in minutes.",
    footTag: "Your shop, in your pocket.",
    footProduct: "Product",
    footCompany: "Company",
    footContact: "Contact",
    company: [
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Delete account", href: "/delete-account" },
    ],
    rights: "© 2026 Dukani. All rights reserved.",
    made: "Made in Kigali",
  },
  rw: {
    nav: [
      { label: "Ibiranga", href: "#features" },
      { label: "Uko ikora", href: "#how" },
      { label: "Ibiciro", href: "#pricing" },
      { label: "Ibibazo", href: "#faq" },
    ],
    navCta: "Kuramo",
    heroEyebrow: "Yakorewe amaduka yo mu Rwanda",
    heroA: "Iduka ryawe,",
    heroB: "mu mufuka wawe.",
    heroSub:
      "Kurikirana ibicuruzwa, andika ibyo wagurishije kandi umenye neza abakurimo amadeni. Dukani ikora kuri telefoni yawe, nubwo nta interineti ihari.",
    gpSmall: "IBONEKA KURI",
    asSmall: "Kuramo kuri",
    heroPoints: ["Gutangira ni ubuntu", "Ikora nta interineti", "Icyongereza n’Ikinyarwanda"],
    chip1a: "Igurisha ryanditswe",
    chip2a: "Bigiye gushira",
    featH: "Ibyo iduka rikenera byose",
    featSub: "Ibikoresho bine muri porogaramu imwe, buri kimwe kiri hafi.",
    features: [
      { tag: "Ibicuruzwa", title: "Menya ibiri ku gipangu", text: "Reba buri gicuruzwa, igiciro cyacyo n’ibisigaye. Dukani ikuburira mbere y’uko gishira." },
      { tag: "Igurisha", title: "Gurisha mu kanya gato", text: "Hitamo ibicuruzwa, wakire ubwishyu kandi usangize inyemezabuguzi. Igiteranyo n’amafaranga asubizwa bibarwa ku bwawe." },
      { tag: "Amadeni", title: "Menya abakurimo amadeni", text: "Andika ibyatanzwe ku ideni n’ubwishyu bwa buri mukiriya, ushyireho imbibi kugira ngo amadeni adakabya." },
      { tag: "Isesengura", title: "Reba uko iduka rihagaze", text: "Amafaranga yinjiye buri munsi, buri cyumweru n’ukwezi, ibigurwa cyane n’impuzandengo y’igurisha." },
    ],
    howH: "Tangira mu minota mike",
    steps: [
      { n: "1", title: "Kuramo wiyandikishe", text: "Fungura konti ukoresheje nimero ya telefoni, uhitemo ubwoko bw’ubucuruzi bwawe." },
      { n: "2", title: "Ongeramo ibicuruzwa", text: "Andika ibicuruzwa, ibiciro n’umubare uhari, cyangwa uhere ku byiciro byateguwe." },
      { n: "3", title: "Tangira kugurisha", text: "Andika ibyagurishijwe n’amadeni kuva ku munsi wa mbere. Imbonerahamwe yawe ihita ivugururwa." },
    ],
    offTag: "Ikora nta interineti",
    offH: "Nta rezo? Komeza ucuruze.",
    offText:
      "Ibyagurishijwe, impinduka ku bicuruzwa n’ubwishyu bibikwa kuri telefoni mbere. Iyo interineti igarutse, Dukani irabihuza ikakwereka ibikeneye kongera kurebwa.",
    offPoints: [
      "Buri mpinduka ibikwa kuri telefoni",
      "Ihuza yonyine iyo interineti igarutse",
      "Ibivuguruzanya bigaragara neza, nta kintu gitakara",
    ],
    quoteH: "Icyo abacuruzi bavuga",
    quotes: [
      { text: "Nabaraga ibicuruzwa buri cyumweru. Ubu ndeba muri porogaramu nkarangura mbere y’uko bishira.", name: "Aline M.", role: "Iduka, Kimironko" },
      { text: "Urutonde rw’amadeni rwahinduye byinshi. Abakiriya babona ibyo bambereyemo bakishyura vuba.", name: "Jean Bosco H.", role: "Butike, Musanze" },
      { text: "Iwacu rezo ikunze kubura. Dukani ikomeza gukora ikazahuza nyuma.", name: "Diane U.", role: "Farumasi, Huye" },
    ],
    priceH: "Ibiciro byoroshye",
    priceSub: "Tangira ku buntu. Uzamure iyo iduka rikuze.",
    plans: [
      { name: "Ibanze", desc: "Kugira ngo utangire", price: "RWF 0", per: "burundu", items: ["Kugeza ku bicuruzwa 100", "Gukurikirana igurisha n’amadeni", "Ikora nta interineti", "Ukoresha umwe"], cta: "Tangira ku buntu" },
      { name: "Pro", desc: "Ku maduka akura", price: "RWF 5,000", per: "ku kwezi", items: ["Ibicuruzwa bitagira umubare", "Isesengura na raporo", "Abakozi bafite PIN zabo", "Ubufasha bwihuse"], cta: "Gerageza Pro" },
    ],
    faqH: "Ibibazo bikunze kubazwa",
    faqSub: "Ntubonye igisubizo? Duhamagare cyangwa utwandikire kuri WhatsApp.",
    faq: [
      { q: "Dukani ikora nta interineti?", a: "Yego. Ibyo wanditse byose bibikwa kuri telefoni yawe kandi bigahuzwa iyo wongeye kubona interineti." },
      { q: "Ikora kuri telefoni zihe?", a: "Android na iPhone. Yikure kuri Google Play cyangwa App Store." },
      { q: "Amakuru y’iduka ryanjye arinzwe?", a: "Konti yawe irinzwe na PIN, kandi amakuru yawe abikwa buri gihe ahujwe, bityo ntuyatakaza uhinduye telefoni." },
      { q: "Abakozi banjye nabo bayikoresha?", a: "Yego. Ongeramo abakozi, buri wese yinjire akoresheje PIN ye." },
      { q: "Iboneka mu Kinyarwanda?", a: "Yego. Hindura hagati y’Icyongereza n’Ikinyarwanda igihe cyose muri igenamiterere." },
      { q: "Nabona ubufasha nte?", a: "Hamagara cyangwa wandikire itsinda ryacu kuri WhatsApp, cyangwa utwoherereze imeri. Aho mutubona hari hasi kuri uru rupapuro." },
    ],
    dlH: "Tangira na Dukani uyu munsi",
    dlSub: "Kuyikuramo ni ubuntu. Tegura iduka ryawe mu minota mike.",
    footTag: "Iduka ryawe, mu mufuka wawe.",
    footProduct: "Porogaramu",
    footCompany: "Ikigo",
    footContact: "Twandikire",
    company: [
      { label: "Ubuzima bwite", href: "/privacy-policy" },
      { label: "Gusiba konti", href: "/delete-account" },
    ],
    rights: "© 2026 Dukani. Uburenganzira bwose burubahirijwe.",
    made: "Byakorewe i Kigali",
  },
};
