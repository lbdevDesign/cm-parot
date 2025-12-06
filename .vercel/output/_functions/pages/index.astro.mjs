import { e as createComponent, s as spreadAttributes, u as unescapeHTML, r as renderTemplate, f as createAstro, m as maybeRenderHead, h as addAttribute, k as renderComponent, l as renderHead } from '../chunks/astro/server_B_D8lMhE.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const astroLogo = createSvgComponent({"meta":{"src":"/_astro/astro.Dm8K3lV8.svg","width":115,"height":48,"format":"svg"},"attributes":{"fill":"none","width":"115","height":"48"},"children":"<path fill=\"#17191E\" d=\"M7.77 36.35C6.4 35.11 6 32.51 6.57 30.62c.99 1.2 2.35 1.57 3.75 1.78 2.18.33 4.31.2 6.33-.78.23-.12.44-.27.7-.42.18.55.23 1.1.17 1.67a4.56 4.56 0 0 1-1.94 3.23c-.43.32-.9.61-1.34.91-1.38.94-1.76 2.03-1.24 3.62l.05.17a3.63 3.63 0 0 1-1.6-1.38 3.87 3.87 0 0 1-.63-2.1c0-.37 0-.74-.05-1.1-.13-.9-.55-1.3-1.33-1.32a1.56 1.56 0 0 0-1.63 1.26c0 .06-.03.12-.05.2Z\" /><path fill=\"url(#a)\" d=\"M7.77 36.35C6.4 35.11 6 32.51 6.57 30.62c.99 1.2 2.35 1.57 3.75 1.78 2.18.33 4.31.2 6.33-.78.23-.12.44-.27.7-.42.18.55.23 1.1.17 1.67a4.56 4.56 0 0 1-1.94 3.23c-.43.32-.9.61-1.34.91-1.38.94-1.76 2.03-1.24 3.62l.05.17a3.63 3.63 0 0 1-1.6-1.38 3.87 3.87 0 0 1-.63-2.1c0-.37 0-.74-.05-1.1-.13-.9-.55-1.3-1.33-1.32a1.56 1.56 0 0 0-1.63 1.26c0 .06-.03.12-.05.2Z\" /><path fill=\"#17191E\" d=\"M.02 30.31s4.02-1.95 8.05-1.95l3.04-9.4c.11-.45.44-.76.82-.76.37 0 .7.31.82.76l3.04 9.4c4.77 0 8.05 1.95 8.05 1.95L17 11.71c-.2-.56-.53-.91-.98-.91H7.83c-.44 0-.76.35-.97.9L.02 30.31Zm42.37-5.97c0 1.64-2.05 2.62-4.88 2.62-1.85 0-2.5-.45-2.5-1.41 0-1 .8-1.49 2.65-1.49 1.67 0 3.09.03 4.73.23v.05Zm.03-2.04a21.37 21.37 0 0 0-4.37-.36c-5.32 0-7.82 1.25-7.82 4.18 0 3.04 1.71 4.2 5.68 4.2 3.35 0 5.63-.84 6.46-2.92h.14c-.03.5-.05 1-.05 1.4 0 1.07.18 1.16 1.06 1.16h4.15a16.9 16.9 0 0 1-.36-4c0-1.67.06-2.93.06-4.62 0-3.45-2.07-5.64-8.56-5.64-2.8 0-5.9.48-8.26 1.19.22.93.54 2.83.7 4.06 2.04-.96 4.95-1.37 7.2-1.37 3.11 0 3.97.71 3.97 2.15v.57Zm11.37 3c-.56.07-1.33.07-2.12.07-.83 0-1.6-.03-2.12-.1l-.02.58c0 2.85 1.87 4.52 8.45 4.52 6.2 0 8.2-1.64 8.2-4.55 0-2.74-1.33-4.09-7.2-4.39-4.58-.2-4.99-.7-4.99-1.28 0-.66.59-1 3.65-1 3.18 0 4.03.43 4.03 1.35v.2a46.13 46.13 0 0 1 4.24.03l.02-.55c0-3.36-2.8-4.46-8.2-4.46-6.08 0-8.13 1.49-8.13 4.39 0 2.6 1.64 4.23 7.48 4.48 4.3.14 4.77.62 4.77 1.28 0 .7-.7 1.03-3.71 1.03-3.47 0-4.35-.48-4.35-1.47v-.13Zm19.82-12.05a17.5 17.5 0 0 1-6.24 3.48c.03.84.03 2.4.03 3.24l1.5.02c-.02 1.63-.04 3.6-.04 4.9 0 3.04 1.6 5.32 6.58 5.32 2.1 0 3.5-.23 5.23-.6a43.77 43.77 0 0 1-.46-4.13c-1.03.34-2.34.53-3.78.53-2 0-2.82-.55-2.82-2.13 0-1.37 0-2.65.03-3.84 2.57.02 5.13.07 6.64.11-.02-1.18.03-2.9.1-4.04-2.2.04-4.65.07-6.68.07l.07-2.93h-.16Zm13.46 6.04a767.33 767.33 0 0 1 .07-3.18H82.6c.07 1.96.07 3.98.07 6.92 0 2.95-.03 4.99-.07 6.93h5.18c-.09-1.37-.11-3.68-.11-5.65 0-3.1 1.26-4 4.12-4 1.33 0 2.28.16 3.1.46.03-1.16.26-3.43.4-4.43-.86-.25-1.81-.41-2.96-.41-2.46-.03-4.26.98-5.1 3.38l-.17-.02Zm22.55 3.65c0 2.5-1.8 3.66-4.64 3.66-2.81 0-4.61-1.1-4.61-3.66s1.82-3.52 4.61-3.52c2.82 0 4.64 1.03 4.64 3.52Zm4.71-.11c0-4.96-3.87-7.18-9.35-7.18-5.5 0-9.23 2.22-9.23 7.18 0 4.94 3.49 7.59 9.21 7.59 5.77 0 9.37-2.65 9.37-7.6Z\" /><defs><linearGradient id=\"a\" x1=\"6.33\" x2=\"19.43\" y1=\"40.8\" y2=\"34.6\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#D83333\" /><stop offset=\"1\" stop-color=\"#F041FF\" /></linearGradient></defs>"});

const background = createSvgComponent({"meta":{"src":"/_astro/background.BPKAcmfN.svg","width":1440,"height":1024,"format":"svg"},"attributes":{"width":"1440","height":"1024","fill":"none"},"children":"<path fill=\"url(#a)\" fill-rule=\"evenodd\" d=\"M-217.58 475.75c91.82-72.02 225.52-29.38 341.2-44.74C240 415.56 372.33 315.14 466.77 384.9c102.9 76.02 44.74 246.76 90.31 366.31 29.83 78.24 90.48 136.14 129.48 210.23 57.92 109.99 169.67 208.23 155.9 331.77-13.52 121.26-103.42 264.33-224.23 281.37-141.96 20.03-232.72-220.96-374.06-196.99-151.7 25.73-172.68 330.24-325.85 315.72-128.6-12.2-110.9-230.73-128.15-358.76-12.16-90.14 65.87-176.25 44.1-264.57-26.42-107.2-167.12-163.46-176.72-273.45-10.15-116.29 33.01-248.75 124.87-320.79Z\" clip-rule=\"evenodd\" style=\"opacity:.154\" /><path fill=\"url(#b)\" fill-rule=\"evenodd\" d=\"M1103.43 115.43c146.42-19.45 275.33-155.84 413.5-103.59 188.09 71.13 409 212.64 407.06 413.88-1.94 201.25-259.28 278.6-414.96 405.96-130 106.35-240.24 294.39-405.6 265.3-163.7-28.8-161.93-274.12-284.34-386.66-134.95-124.06-436-101.46-445.82-284.6-9.68-180.38 247.41-246.3 413.54-316.9 101.01-42.93 207.83 21.06 316.62 6.61Z\" clip-rule=\"evenodd\" style=\"opacity:.154\" /><defs><linearGradient id=\"b\" x1=\"373\" x2=\"1995.44\" y1=\"1100\" y2=\"118.03\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#D83333\" /><stop offset=\"1\" stop-color=\"#F041FF\" /></linearGradient><linearGradient id=\"a\" x1=\"107.37\" x2=\"1130.66\" y1=\"1993.35\" y2=\"1026.31\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#3245FF\" /><stop offset=\"1\" stop-color=\"#BC52EE\" /></linearGradient></defs>"});

const $$Astro$2 = createAstro();
const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Welcome;
  return renderTemplate`${maybeRenderHead()}<div id="container" data-astro-cid-mmc7otgs> <img id="background"${addAttribute(background.src, "src")} alt="" fetchpriority="high" data-astro-cid-mmc7otgs> <main data-astro-cid-mmc7otgs> <section id="hero" data-astro-cid-mmc7otgs> <a href="https://astro.build" data-astro-cid-mmc7otgs><img${addAttribute(astroLogo.src, "src")} width="115" height="48" alt="Astro Homepage" data-astro-cid-mmc7otgs></a> <section id="links" data-astro-cid-mmc7otgs> <a class="button" href="https://docs.astro.build" data-astro-cid-mmc7otgs>Read our docs</a> <a href="https://astro.build/chat" data-astro-cid-mmc7otgs>Join our Discord <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" data-astro-cid-mmc7otgs><path fill="currentColor" d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z" data-astro-cid-mmc7otgs></path></svg> </a> </section> </section> </main> <a href="https://astro.build/blog/astro-5/" id="news" class="box" data-astro-cid-mmc7otgs> <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-mmc7otgs><path d="M24.667 12c1.333 1.414 2 3.192 2 5.334 0 4.62-4.934 5.7-7.334 12C18.444 28.567 18 27.456 18 26c0-4.642 6.667-7.053 6.667-14Zm-5.334-5.333c1.6 1.65 2.4 3.43 2.4 5.333 0 6.602-8.06 7.59-6.4 17.334C13.111 27.787 12 25.564 12 22.666c0-4.434 7.333-8 7.333-16Zm-6-5.333C15.111 3.555 16 5.556 16 7.333c0 8.333-11.333 10.962-5.333 22-3.488-.774-6-4-6-8 0-8.667 8.666-10 8.666-20Z" fill="#111827" data-astro-cid-mmc7otgs></path></svg> <h2 data-astro-cid-mmc7otgs>What's New in Astro 5.0?</h2> <p data-astro-cid-mmc7otgs>
From content layers to server islands, click to learn more about the new features and
			improvements in Astro 5.0
</p> </a> </div> `;
}, "/Users/lb8/Documents/Code/cm-parot/src/components/Welcome.astro", void 0);

const Link = ({
  href = "#",
  variant = "default",
  className = "",
  target,
  children
}) => {
  const base = "relative pr-6 group inline-flex items-center font-semibold transition rounded-lg";
  const variants = {
    default: "text-blue-600 hover:text-blue-700",
    button: "bg-[#37A4B3] text-white px-5 py-2 border border-transparent hover:bg-transparent hover:text-[#313181] hover:bg-transparent hover:border-[#313181] transition",
    outline: "border border-blue-600 text-blue-600 px-5 py-2 hover:bg-blue-600 hover:text-white",
    underline: "text-blue-600 underline hover:text-blue-700"
  };
  return /* @__PURE__ */ jsxs("a", { href, target, className: `${base} ${variants[variant]} ${className}`, children: [
    /* @__PURE__ */ jsx("span", { className: "mr-0 group-hover:mr-2 transition", children }),
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "absolute right-2 w-0 h-4 opacity-0 -translate-x-1 group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150",
        src: "/Arrow_Right_SM.svg"
      }
    )
  ] });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<nav id="navbar" class="w-full shadow-xs fixed top-0 left-0 z-50 bg-white transition-all duration-300" data-astro-cid-5blmo7yk> <div class="max-w-6xl mx-auto px-4 flex justify-between items-center h-content" data-astro-cid-5blmo7yk> <div id="nav-links" class="flex items-center gap-12 h-32 transition-all duration-300" data-astro-cid-5blmo7yk> <!-- Logo --> <a id="nav-logo" href="/" class="h-30 w-30 font-bold text-gray-800 h-12 transition-all duration-300 flex flex-col align-middle items-center" data-astro-cid-5blmo7yk> <img id="upperWaves" src="logo/logoCMPupperWavesColored.svg" alt="Upper Waves" class="h-1/3 transition-all duration-300 mb-[-4px]" data-astro-cid-5blmo7yk> <img id="middleText" src="logo/logoTextCMPcolored.svg" alt="Nav Image" class="h-1/3 transition-all duration-300" data-astro-cid-5blmo7yk> <img id="lowerWaves" src="logo/logoCMPlowerWavesColored.svg" alt="Lower Waves" class="h-1/3 transition-all duration-300 mt-[-4px]" data-astro-cid-5blmo7yk> </a> <!-- Menu centr\xE9 --> <ul class="hidden md:flex space-x-8 text-lg font-medium text-[#313181]" data-astro-cid-5blmo7yk> <li data-astro-cid-5blmo7yk> <a href="/" class="hover:text-[#37A4B3] transition" data-astro-cid-5blmo7yk>Nos cabinets</a> </li> <li data-astro-cid-5blmo7yk> <a href="/#our-team" class="hover:text-[#37A4B3] transition" data-astro-cid-5blmo7yk>Notre \xE9quipe</a> </li> <!-- <li>\n          <a href="/blog" class="hover:text-[#37A4B3] transition">Blog</a>\n        </li> --> </ul> </div> <!-- CTA droite --> ', ` <!-- Burger mobile --> <button class="md:hidden flex items-center text-3xl" data-astro-cid-5blmo7yk>
\u2630
</button> </div> </nav> <script>
  const navbar = document.getElementById('navbar');
  const upper = document.getElementById('upperWaves');
  const middle = document.getElementById('middleText');
  const lower = document.getElementById('lowerWaves');
  const logo = document.getElementById('nav-logo');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      upper.style.height = '0';
      lower.style.height = '0';
      upper.style.opacity = '0';
      lower.style.opacity = '0';
      logo.style.justifyContent = 'center';
      middle.style.height = '40%';
    } else {
      navbar.classList.remove('scrolled');
      upper.style.height = '33%';
      lower.style.height = '33%';
      upper.style.opacity = '1';
      lower.style.opacity = '1';
      middle.style.height = '33%';
    }
  });
<\/script> `])), maybeRenderHead(), renderComponent($$result, "Link", Link, { "href": "/contact", "variant": "button", "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate` <p class="hidden md:block" data-astro-cid-5blmo7yk>Contactez-nous</p> <img src="/src/assets/icon-mail-white.svg" class="h-6 md:hidden" data-astro-cid-5blmo7yk> ` }));
}, "/Users/lb8/Documents/Code/cm-parot/src/components/Navbar.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full h-[70vh] flex items-center bg-white"> <!-- Overlay --> <div class="
    absolute inset-0 z-10 
    bg-gradient-to-r from-[rgba(0,0,0,0.55)] to-[rgba(0,0,0,0)]
    md:w-1/2
  "></div> <!-- Content --> <div class="
      relative z-20 px-6 
      w-full md:w-1/2
      mt-20 md:mt-40
      text-white 
      mx-auto md:ml-20
    "> <div class="max-w-xl text-left space-y-6"> <h1 class="text-3xl md:text-6xl font-extrabold leading-tight">
La santé de vos
<span class="text-transparent [-webkit-text-stroke:2px_white]">
poumons
</span>
entre de bonnes mains
</h1> <p class="text-base md:text-xl opacity-90">
Parce que bien respirer est essentiel à votre qualité de vie, notre centre de pneumologie vous propose un accompagnement personnalisé et attentif. Nos médecins prennent le temps de comprendre vos besoins pour vous offrir un suivi médical clair, rassurant et adapté à votre situation.
</p> ${renderComponent($$result, "Link", Link, { "href": "/contact", "variant": "button", "className": "mt-4 md:hidden inline-block" }, { "default": ($$result2) => renderTemplate`
Nous contacter
` })} </div> </div> <!-- Logo ovale --> <div class="
      absolute  
      bg-white p-4 rounded-full
      z-30 flex items-center justify-center
      left-1/2 bottom-0 transform 
      -translate-x-1/2 translate-y-1/2
    "> <img src="/logo/logoCMPlowerWavesColored.svg" alt="Logo waves" class="h-6 md:h-8 w-auto"> </div> <!-- Background image --> <img src="header.jpg" alt="Hero Image" class="absolute inset-0 w-full h-full object-cover object-center z-0"> </section>`;
}, "/Users/lb8/Documents/Code/cm-parot/src/components/Hero.astro", void 0);

function CabinetsClient({ cabinets }) {
  const [selected, setSelected] = useState(cabinets[0]);
  return /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-2 w-full mx-auto text-center", children: "Nos cabinets" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-8 max-w-2xl w-full mx-auto text-center", children: "Retrouvez nos différents cabinets médicaux répartis dans la ville." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "space-y-4 flex gap-4 justify-center", children: cabinets.map((c) => /* @__PURE__ */ jsx(
        "button",
        {
          className: `mb-2 w-44 flex items-center cursor-pointer gap-4 p-4 rounded-xl border transition ${selected.id === c.id ? "border-transparent bg-[#37A4B3] text-white" : "border-gray-200 hover:bg-gray-100"}`,
          onClick: () => setSelected(c),
          children: /* @__PURE__ */ jsx("span", { className: "text-lg w-full font-medium text-center", children: c.district })
        },
        c.id
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-gray-200 p-6 bg-white flex-1", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: selected.image,
            alt: selected.name,
            className: "rounded-lg mb-4 object-cover w-full h-100"
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-1", children: selected.name }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: selected.description }),
        /* @__PURE__ */ jsx(Link, { href: selected.mapsUrl, target: "_blank", variant: "button", children: "Voir sur Google Maps" })
      ] })
    ] })
  ] }) });
}

const team = [
  {
    name: "Pierre Bombaron",
    url: "https://www.doctolib.fr/pneumologue/lyon/pierre-bombaron?pid=practice-617216",
    photo: "medecins/pierreBombaron-min.jpg",
  },
  {
    name: "Amandine Vial-Dupuy",
    url: "https://www.doctolib.fr/pneumologue/rillieux-la-pape/amandine-vial-dupuy-rillieux-la-pape?pid=practice-617216",
    photo: "medecins/amandineVialDupuy-min.jpg",
  },
  {
    name: "Annick Wattiez",
    url: "https://www.doctolib.fr/pneumologue/lyon/annick-wattiez?pid=practice-617216",
    photo: "medecins/annickWattiez-min.jpg",
  }, 
  {
    name: "Bruno Caillet",
    url: "https://www.doctolib.fr/pneumologue/lyon/bruno-caillet?pid=practice-617216",
    photo: "medecins/brunoCaillet-min.jpg",
  },
  {
    name: "Karima Bouledrak",
    url: "https://www.doctolib.fr/pneumologue/lyon/karima-bouledrak?pid=practice-617216",
    photo: "medecins/karimaBouledrak-min.jpg",
  },
  {
    name: "Fabrice Piegay",
    url: "https://www.doctolib.fr/pneumologue/lyon/fabrice-piegay?pid=practice-617216",
    photo: "medecins/fabricePiegay-min.jpg",
  },
  {
    name: "Martin Veaudor",
    url: "https://www.doctolib.fr/pneumologue/lyon/martin-veaudor?pid=practice-617216",
    photo: "medecins/martinVeaudor-min.jpg",
  },
  {
    name: "Nelson Hanin",
    url: "https://www.doctolib.fr/pneumologue/rillieux-la-pape/nelson-hanin?pid=practice-617216",
    photo: "medecins/nelsonHanin-min.jpg",
  }
];

const $$OurTeam = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-screen px-6 py-20 flex flex-col align-center justify-center" id="our-team"> <h2 class="text-4xl font-bold text-center mb-16">Notre équipe</h2> <div class="mx-auto flex flex-wrap justify-center gap-10"> ${team.map((member) => renderTemplate`<div class="w-3xs bg-white shadow-lg rounded-xl overflow-hidden text-center transition hover:shadow-xl"> <img${addAttribute(member.photo, "src")}${addAttribute(member.name, "alt")} class="w-full h-60 rounded-t-xl object-cover object-top"> <div class="p-6"> <h3 class="text-xl font-semibold">${member.name}</h3> ${renderComponent($$result, "Link", Link, { "href": member.url, "variant": "underline", "target": "_blank", "className": "mt-6 text-blue-600 hover:underline" }, { "default": ($$result2) => renderTemplate`
Doctolib
` })} </div> </div>`)} </div> </section>`;
}, "/Users/lb8/Documents/Code/cm-parot/src/components/OurTeam.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const faq = [
    {
      question: "Comment fonctionne votre service ?",
      answer: "Nous proposons une solution compl\xE8te incluant le d\xE9veloppement, la maintenance et le support."
    },
    {
      question: "Quels sont vos d\xE9lais de livraison ?",
      answer: "Les d\xE9lais varient entre 1 et 4 semaines selon la complexit\xE9 du projet."
    },
    {
      question: "Proposez-vous un support apr\xE8s livraison ?",
      answer: "Oui, nous proposons plusieurs forfaits de support et de maintenance."
    },
    {
      question: "Puis-je modifier mon site moi-m\xEAme ?",
      answer: "Bien s\xFBr ! Gr\xE2ce \xE0 notre CMS, vous pouvez modifier vos pages et publier des articles facilement."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="max-w-5xl mx-auto px-6 py-20"> <h2 class="text-4xl font-bold text-center mb-16">FAQ</h2> <div class="space-y-6"> ${faq.map((item) => renderTemplate`<details class="group bg-white shadow-md rounded-xl p-6 transition"> <summary class="cursor-pointer flex justify-between items-center text-lg font-medium"> ${item.question} <span class="transition-transform group-open:rotate-180">
▼
</span> </summary> <p class="mt-4 text-gray-600 leading-relaxed"> ${item.answer} </p> </details>`)} </div> </section>`;
}, "/Users/lb8/Documents/Code/cm-parot/src/components/FAQ.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Notre \xE9quipe", href: "/equipe" },
    { label: "Blog", href: "/blog" }
  ];
  const legalLinks = [
    { label: "Mentions l\xE9gales", href: "/mentions-legales" },
    { label: "Politique de confidentialit\xE9", href: "/privacy" },
    { label: "Conditions d\u2019utilisation", href: "/cgu" }
  ];
  const socialLinks = [
    { label: "Twitter", href: "https://twitter.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-950 text-gray-300 mt-20 pt-16 pb-10"> <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12"> <!-- Logo + Description --> <div class="space-y-4"> <img src="/logo.svg" alt="Logo" class="w-32"> <p class="text-gray-400 text-sm leading-relaxed">
Nous créons des expériences web modernes, rapides et élégantes pour booster votre présence en ligne.
</p> </div> <!-- Navigation --> <div> <h4 class="text-white font-semibold mb-4">Navigation</h4> <ul class="space-y-2"> ${navLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="hover:underline"> ${link.label} </a> </li>`)} </ul> </div> <!-- Légal --> <div> <h4 class="text-white font-semibold mb-4">Légal</h4> <ul class="space-y-2"> ${legalLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="hover:underline"> ${link.label} </a> </li>`)} </ul> </div> <!-- Réseaux sociaux --> <div> <h4 class="text-white font-semibold mb-4">Réseaux</h4> <ul class="space-y-2"> ${socialLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="hover:underline" target="_blank"> ${link.label} </a> </li>`)} </ul> </div> </div> <!-- Bottom bar --> <div class="border-t border-gray-800 mt-14 pt-6 text-center text-sm text-gray-500">
© ${(/* @__PURE__ */ new Date()).getFullYear()} — Tous droits réservés.
</div> </footer>`;
}, "/Users/lb8/Documents/Code/cm-parot/src/components/Footer.astro", void 0);

const cabinets = [
  {
    id: 1,
    name: "Parot - Duquesne",
    district: "Duquesne",
    description: "54 Rue Duquesne, 69006 Lyon",
    image: "cliniques/cliniqueDuquesne.jpg",
    logo: "imgSlot.png",
    mapsUrl: "https://maps.app.goo.gl/b86pVfsgpgrCJSX97"
  },
  {
    id: 2,
    name: "Parot - Charcot",
    district: "Charcot",
    description: "51 Rue Commandant Charcot, 69110 Sainte-Foy-lès-Lyon",
    image: "cliniques/cliniqueCharcot.jpg",
    logo: "imgSlot.png",
    mapsUrl: "https://maps.app.goo.gl/dh84879fLTujPNVs6"
  },
  {
    id: 3,
    name: "Parot - Mermoz",
    district: "Mermoz",
    description: "11 Rue Edouard Nieuport, 69008 Lyon",
    image: "cliniques/cliniqueMermoz.jpg",
    logo: "imgSlot.png",
    mapsUrl: "https://maps.app.goo.gl/aUro1PMNwxkdr7bdA"
  },
  {
    id: 4,
    name: "Parot - Rillieux",
    district: "Rillieux",
    description: "65 Rue des Contamines, 69140 Rillieux-la-Pape",
    image: "cliniques/cliniqueRilleux.jpg",
    logo: "/imgSlot.png",
    mapsUrl: "https://maps.app.goo.gl/mbuYFTrBJPFdojp3A"
  }
];

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Centre médical Parot</title>${renderHead()}</head> <body class="bg-[--brand-surface]" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "Hero", $$Hero, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "OurOffices", CabinetsClient, { "client:load": true, "cabinets": cabinets, "client:component-hydration": "load", "client:component-path": "@/components/ourOffices.jsx", "client:component-export": "default", "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "OurTeam", $$OurTeam, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "FAQ", $$FAQ, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "/Users/lb8/Documents/Code/cm-parot/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, {})} ` })}`;
}, "/Users/lb8/Documents/Code/cm-parot/src/pages/index.astro", void 0);

const $$file = "/Users/lb8/Documents/Code/cm-parot/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
