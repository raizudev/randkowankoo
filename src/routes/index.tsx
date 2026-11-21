import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { AFFILIATE_URL } from "@/lib/affiliate";

export const Route = createFileRoute("/")({ component: Home });

const points = [
  {
    icon: MapPin,
    title: "Blisko Ciebie",
    text: "Osoby z Twojego miasta. Kawa dziś wieczorem, nie czat przez pół kraju.",
  },
  {
    icon: Sparkles,
    title: "Chętni na randkę",
    text: "Wchodzą tu, bo chcą się umówić. Spacer, kolacja, coś więcej.",
  },
  {
    icon: ShieldCheck,
    title: "100% dyskretnie",
    text: "Bez nazwiska, numeru telefonu i innych danych wrażliwych.",
  },
];

const steps = [
  ["01", "Zobacz ludzi obok", "Tysiące osób z Polski. Często z Twojej okolicy."],
  ["02", "Napisz pierwszy", "Jedna wiadomość. Ktoś, kto też szuka spotkania, odpisuje."],
  ["03", "Wyjdźcie z domu", "Randka zaczyna się przy kawie, nie na ekranie."],
];

const cities = ["Warszawa", "Kraków", "Wrocław", "Poznań", "Gdańsk", "Łódź", "Katowice", "Lublin", "Szczecin", "Białystok"];

const hearts = [
  { left: "6%", delay: "0s", duration: "11s", size: 18 },
  { left: "18%", delay: "2s", duration: "13s", size: 12 },
  { left: "32%", delay: "4.5s", duration: "10s", size: 22 },
  { left: "48%", delay: "1s", duration: "14s", size: 14 },
  { left: "63%", delay: "3s", duration: "12s", size: 16 },
  { left: "78%", delay: "5s", duration: "11s", size: 20 },
  { left: "90%", delay: "1.8s", duration: "15s", size: 12 },
];

function Join({
  children = "Zobacz, kto jest blisko",
  compact = false,
  wide = false,
}: {
  children?: string;
  compact?: boolean;
  wide?: boolean;
}) {
  return (
    <a
      href={AFFILIATE_URL}
      rel="sponsored noopener noreferrer"
      className={[
        "glow-btn inline-flex items-center justify-center gap-2 rounded-full font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
        compact ? "min-h-11 px-4 text-sm" : "min-h-14 px-7 text-base",
        wide ? "w-full" : "",
      ].join(" ")}
    >
      {children}
      <ArrowRight className="size-4 shrink-0" aria-hidden />
    </a>
  );
}

function Home() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-paper pb-24 text-ink md:pb-0">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="orb -left-24 top-0 size-[28rem] bg-[#ff2d78]/50" />
        <div className="orb right-[-8rem] top-40 size-[32rem] bg-[#7c3aed]/50 [animation-delay:-4s]" />
        <div className="orb bottom-20 left-1/3 size-[24rem] bg-[#ff7a18]/30 [animation-delay:-8s]" />
        {hearts.map((heart) => (
          <Heart
            key={heart.left}
            className="heart-bit fill-current"
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
              width: heart.size,
              height: heart.size,
            }}
          />
        ))}
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#09060f]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#start" className="flex min-h-11 items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl bg-white/10 shadow-[0_0_24px_#ff2d7888]">
              <Heart className="size-4 fill-[#ff4d94] text-[#ff4d94]" aria-hidden />
            </span>
            <span className="text-base font-bold tracking-tight">Randkowanko</span>
          </a>
          <Join compact>Wejdź teraz</Join>
        </div>
      </header>

      <main id="start" className="relative z-10">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-8 pt-10 md:grid-cols-2 md:pt-16">
          <div>
            <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-semibold backdrop-blur">
              <span className="live-dot size-2 shrink-0 rounded-full bg-[#3dff9a] shadow-[0_0_12px_#3dff9a]" />
              Najbliższa kobieta jest 7,4 km od Ciebie
            </p>
            <h1 className="mt-5 text-5xl leading-[0.95] md:text-7xl">
              Ktoś blisko
              <span className="gradient-text block">chce się umówić.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
              Kawa, spacer, kolacja. Ludzie z Twojego miasta już tu są. Wejdź,
              napisz i wyjdźcie z domu — dyskretnie, bez nazwiska i telefonu.
            </p>
            <div className="mt-8">
              <Join>Zobacz, kto jest blisko</Join>
              <p className="mt-3 text-sm text-white/60">Anonimowo · bez danych wrażliwych · 18+</p>
            </div>
          </div>

          <div className="relative">
            <div className="photo-ring absolute -inset-1 rounded-[2rem] opacity-90 blur-[2px]" />
            <div
              className="relative flex aspect-[4/5] flex-col overflow-hidden rounded-[1.8rem] border border-white/15 bg-[#120910]/95 p-4 shadow-[0_30px_80px_#ff2d7855] sm:p-5"
              aria-label="Przykładowa rozmowa"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#ff2d78] to-[#ffb020] text-lg font-bold text-white">
                  O
                </span>
                <div className="min-w-0">
                  <p className="truncate text-base font-bold">Ola, 27</p>
                  <p className="flex items-center gap-1.5 text-xs text-white/70">
                    <span className="live-dot size-1.5 rounded-full bg-[#3dff9a]" />
                    2,1 km stąd · aktywna teraz
                  </p>
                </div>
              </div>

              <div className="mt-auto flex flex-col pt-6">
                <div className="chat-line chat-a">
                  <p className="mb-3 max-w-[88%] rounded-2xl rounded-bl-md bg-white/12 px-3.5 py-2.5 text-sm leading-snug">
                    Cześć. Też masz dziś wolny wieczór?
                  </p>
                </div>
                <div className="chat-line chat-b">
                  <p className="mb-3 ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-gradient-to-r from-[#ff2d78] to-[#ff7a18] px-3.5 py-2.5 text-sm leading-snug font-medium">
                    Mam. Kawa czy spacer?
                  </p>
                </div>
                <div className="chat-line chat-type">
                  <p className="mb-3 flex w-fit gap-1 rounded-2xl bg-white/12 px-3.5 py-3">
                    <span className="chat-dot size-1.5 rounded-full bg-white" />
                    <span className="chat-dot size-1.5 rounded-full bg-white [animation-delay:0.15s]" />
                    <span className="chat-dot size-1.5 rounded-full bg-white [animation-delay:0.3s]" />
                  </p>
                </div>
                <div className="chat-line chat-c">
                  <p className="mb-3 max-w-[88%] rounded-2xl rounded-bl-md bg-white/12 px-3.5 py-2.5 text-sm leading-snug">
                    Najpierw kawa przy parku. Potem zobaczymy dokąd nas poniesie.
                  </p>
                </div>
                <div className="chat-line chat-d">
                  <p className="mb-1 ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-gradient-to-r from-[#ff2d78] to-[#ff7a18] px-3.5 py-2.5 text-sm leading-snug font-medium">
                    Biorę stolik. Jestem za 20 minut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-4 px-5 py-14 md:grid-cols-3">
          {points.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-[0_20px_80px_#ff2d7822] backdrop-blur-xl"
            >
              <item.icon className="size-6 text-[#ff7eb3]" aria-hidden />
              <h2 className="mt-4 text-2xl">{item.title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </section>

        <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-16 md:grid-cols-2">
          <img
            src="/photos/street.jpg"
            alt="Para idzie wieczorem ulicą"
            width={1728}
            height={1152}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[1.8rem] object-cover shadow-[0_30px_80px_#7c3aed44]"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff7eb3]">Trzy ruchy</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Od spojrzenia do randki.</h2>
            <ol className="mt-8 space-y-4">
              {steps.map(([n, title, text]) => (
                <li key={n} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
                  <p className="text-sm font-bold text-[#ff7eb3]">{n}</p>
                  <h3 className="mt-1 text-xl">{title}</h3>
                  <p className="mt-1 text-muted">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-16">
          <div className="grid items-stretch overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 md:grid-cols-2">
            <img
              src="/photos/coffee.jpg"
              alt="Dwie kawy na stole"
              width={1408}
              height={1408}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover md:aspect-auto md:h-full md:min-h-[32rem]"
            />
            <div className="relative flex flex-col justify-center px-6 py-10 md:px-12 md:py-16">
              <div className="orb -right-10 -top-16 size-56 bg-[#ff2d78]/40" />
              <h2 className="relative text-4xl md:text-5xl">W 100% dyskretnie i anonimowo.</h2>
              <p className="relative mt-4 max-w-md text-lg leading-relaxed text-muted">
                Nie pytamy o nazwisko, numer telefonu ani inne dane wrażliwe. Nikt z pracy
                ani rodziny nie musi wiedzieć, że szukasz spotkania.
              </p>
              <div className="relative mt-8">
                <Join>Poznaj kogoś dziś</Join>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top,#ff2d78_0%,#3b0764_42%,#09060f_100%)] px-6 py-16 text-center md:py-24">
            <h2 className="mx-auto max-w-3xl text-4xl md:text-6xl">
              Twój wieczór może wyglądać inaczej.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Tysiące osób w Polsce chce się umówić. Zobacz, kto jest blisko.
            </p>
            <div className="mt-8 flex justify-center">
              <Join>Zobacz osoby w pobliżu</Join>
            </div>
          </div>
        </section>
      </main>

      <div className="relative overflow-hidden border-y border-white/10 bg-white/5 py-3">
        <div className="marquee-track gap-8 px-4 text-sm font-semibold tracking-wide text-white/80">
          {[...cities, ...cities].map((city, i) => (
            <span key={`${city}-${i}`} className="flex items-center gap-8">
              {city}
              <Heart className="size-3 fill-[#ff4d94] text-[#ff4d94]" aria-hidden />
            </span>
          ))}
        </div>
      </div>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-white/55 md:flex-row md:justify-between">
          <p className="font-semibold text-white">Randkowanko</p>
          <p className="max-w-xl">
            Tylko 18+. Bez nazwiska, telefonu i danych wrażliwych. Za polecenie możemy otrzymać
            wynagrodzenie. © {new Date().getFullYear()}
          </p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#09060f]/80 p-3 backdrop-blur-xl md:hidden">
        <Join wide>Zobacz, kto jest blisko</Join>
      </div>
    </div>
  );
}
