import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Heart, i as MapPin, n as Sparkles, o as ArrowRight, r as ShieldCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D51qQsqE.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Jeden adres dla wszystkich przycisków „Dołącz”.
* Podmień na link afiliacyjny — strona nie ma własnej rejestracji.
*/
var AFFILIATE_URL = "https://example.com/";
var points = [
	{
		icon: MapPin,
		title: "Blisko Ciebie",
		text: "Osoby z Twojego miasta. Kawa dziś wieczorem, nie czat przez pół kraju."
	},
	{
		icon: Sparkles,
		title: "Chętni na randkę",
		text: "Wchodzą tu, bo chcą się umówić. Spacer, kolacja, coś więcej."
	},
	{
		icon: ShieldCheck,
		title: "100% dyskretnie",
		text: "Bez nazwiska, numeru telefonu i innych danych wrażliwych."
	}
];
var steps = [
	[
		"01",
		"Zobacz ludzi obok",
		"Tysiące osób z Polski. Często z Twojej okolicy."
	],
	[
		"02",
		"Napisz pierwszy",
		"Jedna wiadomość. Ktoś, kto też szuka spotkania, odpisuje."
	],
	[
		"03",
		"Wyjdźcie z domu",
		"Randka zaczyna się przy kawie, nie na ekranie."
	]
];
var cities = [
	"Warszawa",
	"Kraków",
	"Wrocław",
	"Poznań",
	"Gdańsk",
	"Łódź",
	"Katowice",
	"Lublin",
	"Szczecin",
	"Białystok"
];
var hearts = [
	{
		left: "6%",
		delay: "0s",
		duration: "11s",
		size: 18
	},
	{
		left: "18%",
		delay: "2s",
		duration: "13s",
		size: 12
	},
	{
		left: "32%",
		delay: "4.5s",
		duration: "10s",
		size: 22
	},
	{
		left: "48%",
		delay: "1s",
		duration: "14s",
		size: 14
	},
	{
		left: "63%",
		delay: "3s",
		duration: "12s",
		size: 16
	},
	{
		left: "78%",
		delay: "5s",
		duration: "11s",
		size: 20
	},
	{
		left: "90%",
		delay: "1.8s",
		duration: "15s",
		size: 12
	}
];
function Join({ children = "Zobacz, kto jest blisko", compact = false, wide = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: AFFILIATE_URL,
		rel: "sponsored noopener noreferrer",
		className: [
			"glow-btn inline-flex items-center justify-center gap-2 rounded-full font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
			compact ? "min-h-11 px-4 text-sm" : "min-h-14 px-7 text-base",
			wide ? "w-full" : ""
		].join(" "),
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
			className: "size-4 shrink-0",
			"aria-hidden": true
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh overflow-x-hidden bg-paper pb-24 text-ink md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				"aria-hidden": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "orb -left-24 top-0 size-[28rem] bg-[#ff2d78]/50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "orb right-[-8rem] top-40 size-[32rem] bg-[#7c3aed]/50 [animation-delay:-4s]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "orb bottom-20 left-1/3 size-[24rem] bg-[#ff7a18]/30 [animation-delay:-8s]" }),
					hearts.map((heart) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						className: "heart-bit fill-current",
						style: {
							left: heart.left,
							animationDelay: heart.delay,
							animationDuration: heart.duration,
							width: heart.size,
							height: heart.size
						}
					}, heart.left))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-white/10 bg-[#09060f]/70 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#start",
						className: "flex min-h-11 items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 place-items-center rounded-xl bg-white/10 shadow-[0_0_24px_#ff2d7888]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								className: "size-4 fill-[#ff4d94] text-[#ff4d94]",
								"aria-hidden": true
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base font-bold tracking-tight",
							children: "Randkowanko"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Join, {
						compact: true,
						children: "Wejdź teraz"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "start",
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto grid max-w-6xl items-center gap-10 px-5 pb-8 pt-10 md:grid-cols-2 md:pt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-semibold backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot size-2 shrink-0 rounded-full bg-[#3dff9a] shadow-[0_0_12px_#3dff9a]" }), "Najbliższa kobieta jest 7,4 km od Ciebie"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-5 text-5xl leading-[0.95] md:text-7xl",
								children: ["Ktoś blisko", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gradient-text block",
									children: "chce się umówić."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-lg text-lg leading-relaxed text-muted",
								children: "Stała relacja czy luźne spotkanie na jedną noc? Nie musisz się deklarować na starcie. Ludzie z Twojego miasta czekają na wiadomość. Wejdź, sprawdź kto jest online i spotkajcie się jeszcze dziś - anonimowo i bezpiecznie."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Join, { children: "Zobacz, kto jest blisko" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-white/60",
									children: "Anonimowo · bez danych wrażliwych · 18+"
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "photo-ring absolute -inset-1 rounded-[2rem] opacity-90 blur-[2px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex aspect-[4/5] flex-col overflow-hidden rounded-[1.8rem] border border-white/15 bg-[#120910]/95 p-4 shadow-[0_30px_80px_#ff2d7855] sm:p-5",
								"aria-label": "Przykładowa rozmowa",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#ff2d78] to-[#ffb020] text-lg font-bold text-white",
										children: "O"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-base font-bold",
											children: "Ola, 34"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-1.5 text-xs text-white/70",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot size-1.5 rounded-full bg-[#3dff9a]" }), "2,1 km stąd · aktywna teraz"]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-auto flex flex-col pt-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "chat-line chat-a",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mb-3 max-w-[88%] rounded-2xl rounded-bl-md bg-white/12 px-3.5 py-2.5 text-sm leading-snug",
												children: "Cześć. Też masz dziś wolny wieczór?"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "chat-line chat-b",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mb-3 ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-gradient-to-r from-[#ff2d78] to-[#ff7a18] px-3.5 py-2.5 text-sm leading-snug font-medium",
												children: "Mam. Spacer czy masz ochotę do mnie przyjechać lub ja do Ciebie haha"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "chat-line chat-type",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mb-3 flex w-fit gap-1 rounded-2xl bg-white/12 px-3.5 py-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "chat-dot size-1.5 rounded-full bg-white" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "chat-dot size-1.5 rounded-full bg-white [animation-delay:0.15s]" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "chat-dot size-1.5 rounded-full bg-white [animation-delay:0.3s]" })
												]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "chat-line chat-c",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mb-3 max-w-[88%] rounded-2xl rounded-bl-md bg-white/12 px-3.5 py-2.5 text-sm leading-snug",
												children: "Może u Ciebie? Potem zobaczymy do czego nas poniesie."
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "chat-line chat-d",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mb-1 ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-gradient-to-r from-[#ff2d78] to-[#ff7a18] px-3.5 py-2.5 text-sm leading-snug font-medium",
												children: "Może do mnie hehe, wyśle Ci zaraz pinezkę"
											})
										})
									]
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mx-auto grid max-w-6xl gap-4 px-5 py-14 md:grid-cols-3",
						children: points.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-3xl border border-white/15 bg-white/10 p-6 shadow-[0_20px_80px_#ff2d7822] backdrop-blur-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
									className: "size-6 text-[#ff7eb3]",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 text-2xl",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 leading-relaxed text-muted",
									children: item.text
								})
							]
						}, item.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto grid max-w-6xl items-center gap-8 px-5 pb-16 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/photos/street.jpg",
							alt: "Para idzie wieczorem ulicą",
							width: 1728,
							height: 1152,
							loading: "lazy",
							className: "aspect-[4/3] w-full rounded-[1.8rem] object-cover shadow-[0_30px_80px_#7c3aed44]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-[0.2em] text-[#ff7eb3]",
								children: "Trzy ruchy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-4xl md:text-5xl",
								children: "Od spojrzenia do randki."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-8 space-y-4",
								children: steps.map(([n, title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-bold text-[#ff7eb3]",
											children: n
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 text-xl",
											children: title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-muted",
											children: text
										})
									]
								}, n))
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mx-auto max-w-6xl px-5 pb-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-stretch overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/photos/coffee.jpg",
								alt: "Dwie kawy na stole",
								width: 1408,
								height: 1408,
								loading: "lazy",
								className: "aspect-[4/5] w-full object-cover md:aspect-auto md:h-full md:min-h-[32rem]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex flex-col justify-center px-6 py-10 md:px-12 md:py-16",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "orb -right-10 -top-16 size-56 bg-[#ff2d78]/40" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "relative text-4xl md:text-5xl",
										children: "W 100% dyskretnie i anonimowo."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "relative mt-4 max-w-md text-lg leading-relaxed text-muted",
										children: "Nie pytamy o nazwisko, numer telefonu ani inne dane wrażliwe. Nikt z pracy ani rodziny nie musi wiedzieć, że szukasz spotkania."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative mt-8",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Join, { children: "Poznaj kogoś dziś" })
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mx-auto max-w-6xl px-5 pb-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top,#ff2d78_0%,#3b0764_42%,#09060f_100%)] px-6 py-16 text-center md:py-24",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mx-auto max-w-3xl text-4xl md:text-6xl",
									children: "Twój wieczór może wyglądać inaczej."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-4 max-w-xl text-lg text-white/80",
									children: "Tysiące osób w Polsce chce się umówić. Zobacz, kto jest blisko."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 flex justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Join, { children: "Zobacz osoby w pobliżu" })
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden border-y border-white/10 bg-white/5 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "marquee-track gap-8 px-4 text-sm font-semibold tracking-wide text-white/80",
					children: [...cities, ...cities].map((city, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-8",
						children: [city, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
							className: "size-3 fill-[#ff4d94] text-[#ff4d94]",
							"aria-hidden": true
						})]
					}, `${city}-${i}`))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "relative z-10 border-t border-white/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-white/55 md:flex-row md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-white",
						children: "Randkowanko"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "max-w-xl",
						children: ["Tylko 18+. Bez nazwiska, telefonu i danych wrażliwych. Za polecenie możemy otrzymać wynagrodzenie. © ", (/* @__PURE__ */ new Date()).getFullYear()]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#09060f]/80 p-3 backdrop-blur-xl md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Join, {
					wide: true,
					children: "Zobacz, kto jest blisko"
				})
			})
		]
	});
}
//#endregion
export { Home as component };
