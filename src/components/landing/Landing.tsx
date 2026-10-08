import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import { COPY, type Lang } from "./copy";
import Icon from "./Icon";

const PLAY_URL = "https://play.google.com/store/apps/details?id=rw.dukani.app";
// Set once the iOS app is live; the App Store button stays hidden until then.
const APP_STORE_URL: string | null = null;

// TODO: placeholder contact details carried over from the design.
const CONTACT = {
  phone: "+250 788 000 000",
  whatsapp: "https://wa.me/250788000000",
  email: "hello@dukani.rw",
};

const SHOW_TESTIMONIALS = true;
const SHOW_PRICING = true;

const FEATURES = [
  { bg: "bg-sky", img: "/landing/inventory.png", icon: "solar:shop-2-bold" },
  { bg: "bg-pink", img: "/landing/sale.png", icon: "solar:add-circle-bold" },
  { bg: "bg-mint", img: "/landing/debts.png", icon: "solar:wallet-money-bold" },
  { bg: "bg-lilac", img: "/landing/insights.png", icon: "solar:chart-square-bold" },
] as const;

const OFF_ICONS = ["solar:smartphone-2-bold", "solar:refresh-circle-bold", "solar:shield-check-bold"] as const;

const AVATAR_BG = ["bg-pink", "bg-sky", "bg-mint"];

const PLANS = [
  { card: "bg-white text-ink", sub: "text-muted", check: "text-brand", line: "border-line-soft", btn: "bg-canvas text-brand hover:bg-line" },
  { card: "bg-brand text-white", sub: "text-sky", check: "text-mint", line: "border-white/18", btn: "bg-white text-brand hover:bg-sky" },
];

const H2 = "font-display text-[clamp(36px,4.4vw,56px)] leading-[1.04] font-semibold text-balance";
const SECTION = "mx-auto w-full max-w-[1240px] px-6 pt-32";

function Phone({ className, alt, ...img }: { className: string } & Omit<ComponentProps<typeof Image>, "width" | "height" | "className">) {
  return (
    <div className={`absolute left-1/2 -translate-x-1/2 bg-ink ${className}`}>
      <Image {...img} alt={alt} width={780} height={1688} className="block w-full" />
    </div>
  );
}

function StoreButtons({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const stores = [
    { href: PLAY_URL, icon: "ri:google-play-fill", small: t.gpSmall, label: "Google Play" } as const,
    ...(APP_STORE_URL ? [{ href: APP_STORE_URL, icon: "ri:apple-fill", small: t.asSmall, label: "App Store" } as const] : []),
  ];
  return (
    <div className="flex flex-wrap gap-3">
      {stores.map((s) => (
        <a
          key={s.label}
          href={s.href}
          className="flex h-[62px] items-center gap-3 rounded-full bg-ink pr-6 pl-[18px] text-white transition-colors hover:bg-brand"
        >
          <Icon icon={s.icon} size={26} />
          <span className="flex flex-col leading-[1.1]">
            <span className="text-[11px] font-medium opacity-85">{s.small}</span>
            <span className="text-[19px] font-semibold">{s.label}</span>
          </span>
        </a>
      ))}
    </div>
  );
}

function Logo() {
  return <Image src="/dukani_logo_v2.svg" alt="Dukani" width={158} height={30} className="block h-[30px] w-auto" />;
}

export default function Landing({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const home = lang === "en" ? "/" : "/rw";

  return (
    <div lang={lang} className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-20 bg-canvas/86 backdrop-blur-[14px]">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-4">
          <Link href={home} className="flex items-center">
            <Logo />
          </Link>
          <nav className="hidden gap-1.5 text-base font-medium min-[980px]:flex">
            {t.nav.map((n) => (
              <a key={n.href} href={n.href} className="rounded-full px-4 py-2.5 text-ink-soft transition-colors hover:bg-white hover:text-ink">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2.5">
            <div className="flex rounded-full bg-white p-1 text-sm font-semibold">
              {(["en", "rw"] as const).map((l) => (
                <Link
                  key={l}
                  href={l === "en" ? "/" : "/rw"}
                  hrefLang={l}
                  aria-current={l === lang ? "page" : undefined}
                  className={`flex h-9 items-center rounded-full px-3.5 ${l === lang ? "bg-brand text-white" : "text-ink-soft hover:text-ink"}`}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
            <a
              href="#download"
              className="hidden h-11 items-center rounded-full bg-brand px-5 text-[15px] font-semibold text-white transition-colors hover:bg-ink sm:flex"
            >
              {t.navCta}
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1">
        <section className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(100%,480px),1fr))] items-center gap-10 px-6 pt-8">
          <div className="flex flex-col gap-7 py-6">
            <div className="flex h-[38px] items-center gap-2 self-start rounded-full bg-white px-4 text-sm font-semibold text-ink-soft">
              <span className="size-2 rounded-full bg-go" />
              {t.heroEyebrow}
            </div>
            <h1 className="font-display text-[clamp(48px,6.4vw,84px)] leading-[0.98] tracking-[-0.01em] text-balance text-ink">
              <span className="block font-light">{t.heroA}</span>
              <span className="block font-semibold text-brand">{t.heroB}</span>
            </h1>
            <p className="max-w-[500px] text-xl leading-normal text-pretty text-ink-soft">{t.heroSub}</p>
            <StoreButtons lang={lang} />
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[15px] font-medium text-ink-soft">
              {t.heroPoints.map((p) => (
                <span key={p} className="flex items-center gap-1.5">
                  <Icon icon="solar:check-circle-bold" size={18} className="text-brand" />
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-[640px] overflow-hidden rounded-[48px] bg-pink">
            <div className="absolute -top-[60px] -right-[90px] size-[420px] rounded-full bg-pink-deep" />
            <Phone
              src="/landing/dashboard.png"
              alt="Dukani dashboard"
              sizes="300px"
              loading="eager"
              fetchPriority="high"
              className="top-[72px] w-[316px] rounded-[54px] p-2 shadow-[0_40px_80px_rgba(13,77,95,0.28)] [&_img]:rounded-[46px]"
            />
            <div className="absolute top-[150px] left-6 flex items-center gap-3 rounded-full bg-white py-3 pr-[18px] pl-3 shadow-[0_16px_36px_rgba(13,77,95,0.14)]">
              <div className="flex size-10 items-center justify-center rounded-full bg-mint">
                <Icon icon="solar:check-read-linear" size={22} className="text-brand" />
              </div>
              <div className="flex flex-col leading-[1.2]">
                <span className="text-[13px] text-muted">{t.chip1a}</span>
                <span className="text-base font-semibold">RWF 6,400</span>
              </div>
            </div>
            <div className="absolute right-6 bottom-24 flex items-center gap-3 rounded-full bg-white py-3 pr-[18px] pl-3 shadow-[0_16px_36px_rgba(13,77,95,0.14)]">
              <div className="flex size-10 items-center justify-center rounded-full bg-pink">
                <Image src="/illo/milk.svg" alt="" width={26} height={26} />
              </div>
              <div className="flex flex-col leading-[1.2]">
                <span className="text-[13px] text-muted">{t.chip2a}</span>
                <span className="text-base font-semibold">Inyange Milk 500ml</span>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className={`${SECTION} flex flex-col gap-12`}>
          <div className="flex max-w-[640px] flex-col gap-3.5">
            <h2 className={H2}>{t.featH}</h2>
            <p className="text-[19px] leading-normal text-ink-soft">{t.featSub}</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-5">
            {t.features.map((f, i) => (
              <div key={f.tag} className={`flex flex-col gap-3.5 overflow-hidden rounded-[44px] px-10 pt-10 ${FEATURES[i].bg}`}>
                <div className="flex h-10 items-center gap-2 self-start rounded-full bg-white pr-4 pl-1.5 text-sm font-semibold">
                  <span className="flex size-[30px] items-center justify-center rounded-full bg-brand">
                    <Icon icon={FEATURES[i].icon} size={17} className="text-white" />
                  </span>
                  {f.tag}
                </div>
                <h3 className="mt-2 font-display text-[34px] leading-[1.08] font-semibold text-balance">{f.title}</h3>
                <p className="max-w-[440px] text-[17px] leading-normal text-pretty text-ink-soft">{f.text}</p>
                <div className="relative mt-[22px] h-[360px]">
                  <Phone
                    src={FEATURES[i].img}
                    alt={f.tag}
                    sizes="276px"
                    className="top-0 w-[290px] rounded-[50px] p-[7px] shadow-[0_30px_60px_rgba(13,77,95,0.22)] [&_img]:rounded-[43px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className={`${SECTION} flex flex-col gap-12`}>
          <h2 className={H2}>{t.howH}</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
            {t.steps.map((s) => (
              <div key={s.n} className="flex flex-col gap-3 rounded-[36px] bg-white p-8">
                <div className="mb-3 flex size-14 items-center justify-center rounded-full bg-brand font-display text-2xl font-semibold text-white">
                  {s.n}
                </div>
                <h3 className="font-display text-[26px] leading-[1.15] font-semibold">{s.title}</h3>
                <p className="text-[17px] leading-normal text-pretty text-ink-soft">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="offline" className={SECTION}>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] overflow-hidden rounded-[48px] bg-brand text-white">
            <div className="flex flex-col justify-center gap-5 px-7 py-12 sm:px-16 sm:py-[72px]">
              <div className="flex h-9 items-center gap-2 self-start rounded-full bg-sky px-3.5 text-sm font-semibold text-brand">
                <Icon icon="solar:cloud-check-bold" size={18} />
                {t.offTag}
              </div>
              <h2 className={H2}>{t.offH}</h2>
              <p className="max-w-[480px] text-[19px] leading-normal text-pretty text-fog">{t.offText}</p>
              <div className="mt-2 flex flex-col gap-3.5">
                {t.offPoints.map((text, i) => (
                  <div key={text} className="flex items-center gap-3.5 text-[17px] font-medium">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/12">
                      <Icon icon={OFF_ICONS[i]} size={20} className="text-mint" />
                    </span>
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[560px]">
              <Phone
                src="/landing/sync.png"
                alt="Sync details"
                sizes="294px"
                className="top-16 w-[310px] rounded-[54px] p-2 shadow-[0_40px_80px_rgba(0,0,0,0.3)] [&_img]:rounded-[46px]"
              />
            </div>
          </div>
        </section>

        {SHOW_TESTIMONIALS && (
          <section className={`${SECTION} flex flex-col gap-12`}>
            <h2 className={H2}>{t.quoteH}</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
              {t.quotes.map((q, i) => (
                <figure key={q.name} className="flex flex-col justify-between gap-8 rounded-[36px] bg-white p-8">
                  <blockquote className="text-xl leading-normal text-pretty text-ink">“{q.text}”</blockquote>
                  <figcaption className="flex items-center gap-3">
                    <span className={`flex size-12 items-center justify-center rounded-full text-[15px] font-semibold ${AVATAR_BG[i]}`}>
                      {q.name.split(" ").map((s) => s[0]).join("")}
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="text-base font-semibold">{q.name}</span>
                      <span className="text-sm text-muted">{q.role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {SHOW_PRICING && (
          <section id="pricing" className={`${SECTION} flex flex-col items-center gap-12`}>
            <div className="flex flex-col items-center gap-3.5 text-center">
              <h2 className={H2}>{t.priceH}</h2>
              <p className="text-[19px] leading-normal text-ink-soft">{t.priceSub}</p>
            </div>
            <div className="grid w-full max-w-[920px] grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-5">
              {t.plans.map((p, i) => (
                <div key={p.name} className={`flex flex-col gap-6 rounded-[40px] p-10 ${PLANS[i].card}`}>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[17px] font-semibold">{p.name}</span>
                    <span className={`text-[15px] ${PLANS[i].sub}`}>{p.desc}</span>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-display text-[52px] leading-none font-semibold">{p.price}</span>
                    <span className={`text-base ${PLANS[i].sub}`}>{p.per}</span>
                  </div>
                  <div className={`flex flex-col gap-3 border-t pt-6 ${PLANS[i].line}`}>
                    {p.items.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-base">
                        <Icon icon="solar:check-circle-bold" size={20} className={PLANS[i].check} />
                        {item}
                      </div>
                    ))}
                  </div>
                  <a
                    href="#download"
                    className={`mt-auto flex h-14 items-center justify-center rounded-full text-base font-semibold transition-colors ${PLANS[i].btn}`}
                  >
                    {p.cta}
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        <section id="faq" className={`${SECTION} grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] items-start gap-10`}>
          <div className="flex max-w-[420px] flex-col gap-3.5">
            <h2 className={H2}>{t.faqH}</h2>
            <p className="text-lg leading-normal text-ink-soft">{t.faqSub}</p>
          </div>
          <div className="flex flex-col gap-2.5">
            {t.faq.map((f, i) => (
              <details key={f.q} name="faq" open={i === 0} className="group rounded-[28px] bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 pr-5 pl-7 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-canvas text-brand transition-colors group-open:bg-brand group-open:text-white">
                    <Icon icon="solar:add-circle-linear" size={18} className="group-open:hidden" />
                    <Icon icon="solar:minus-circle-linear" size={18} className="hidden group-open:block" />
                  </span>
                </summary>
                <p className="max-w-[620px] px-7 pb-6 text-[17px] leading-[1.55] text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="download" className={SECTION}>
          <div className="relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] overflow-hidden rounded-[48px] bg-lilac">
            <div className="absolute -bottom-[200px] -left-[120px] size-[460px] rounded-full bg-lilac-deep" />
            <div className="relative flex flex-col justify-center gap-5 px-7 py-12 sm:px-16 sm:py-[72px]">
              <h2 className={H2}>{t.dlH}</h2>
              <p className="text-[19px] leading-normal text-ink-soft">{t.dlSub}</p>
              <div className="mt-2">
                <StoreButtons lang={lang} />
              </div>
            </div>
            <div className="relative min-h-[480px]">
              <Phone
                src="/landing/sale.png"
                alt="New sale"
                sizes="284px"
                className="top-16 w-[300px] rotate-4 rounded-[54px] p-2 shadow-[0_40px_80px_rgba(13,77,95,0.25)] [&_img]:rounded-[46px]"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-[1240px] flex-col gap-14 px-6 pt-24 pb-10">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-10">
          <div className="flex flex-col items-start gap-3.5">
            <Logo />
            <span className="text-base text-ink-soft">{t.footTag}</span>
          </div>
          <div className="flex flex-col gap-3 text-base">
            <span className="text-sm font-semibold text-muted">{t.footProduct}</span>
            {t.nav.map((n) => (
              <a key={n.href} href={n.href} className="self-start text-ink hover:text-brand">
                {n.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 text-base">
            <span className="text-sm font-semibold text-muted">{t.footCompany}</span>
            {t.company.map((c) => (
              <Link key={c.href} href={c.href} className="self-start text-ink hover:text-brand">
                {c.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 text-base">
            <span className="text-sm font-semibold text-muted">{t.footContact}</span>
            <a href={`tel:${CONTACT.phone.replaceAll(" ", "")}`} className="flex items-center gap-2 self-start text-ink hover:text-brand">
              <Icon icon="solar:phone-calling-linear" size={18} />
              {CONTACT.phone}
            </a>
            <a href={CONTACT.whatsapp} className="flex items-center gap-2 self-start text-ink hover:text-brand">
              <Icon icon="ri:whatsapp-line" size={18} />
              WhatsApp
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 self-start text-ink hover:text-brand">
              <Icon icon="solar:letter-linear" size={18} />
              {CONTACT.email}
            </a>
            <span className="flex items-center gap-2">
              <Icon icon="solar:map-point-linear" size={18} />
              Kigali, Rwanda
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-line pt-6 text-sm text-muted">
          <span>{t.rights}</span>
          <span>{t.made}</span>
        </div>
      </footer>
    </div>
  );
}
