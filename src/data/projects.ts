import { DEVTOOLS_NAMES } from "~/lib/constants";
import type { Project } from "~/schemas/Project";

export const projects: Project[] = [
  {
    id: "1",
    title: "I2TEC Website",
    devtools: [
      DEVTOOLS_NAMES.astro,
      DEVTOOLS_NAMES.typescript,
      DEVTOOLS_NAMES.javascript,
      DEVTOOLS_NAMES.tailwind,
      DEVTOOLS_NAMES.css3,
      DEVTOOLS_NAMES.preact,
    ],
    links: [
      {
        name: "Website",
        default: true,
        url: "https://i2tec.ec",
      },
      {
        name: "GitHub",
        default: false,
        url: "https://github.com/JhonRomero26/i2tec-frontend",
      },
    ],
    images: {
      thumbnail: "/projects/i2tec-ec.thumbnail.webp",
      small: "/projects/i2tec-ec.1x.webp",
      medium: "/projects/i2tec-ec.2x.webp",
      large: "/projects/i2tec-ec.4x.webp",
    },
  },
  {
    id: "2",
    title: "Torrent Movies Website",
    devtools: [
      DEVTOOLS_NAMES.javascript,
      DEVTOOLS_NAMES.html5,
      DEVTOOLS_NAMES.css3,
    ],
    links: [
      {
        name: "Website",
        default: true,
        url: "https://jhonromero26.github.io/PlatziVideo",
      },
      {
        name: "GitHub",
        default: false,
        url: "https://github.com/JhonRomero26/PlatziVideo",
      },
    ],
    images: {
      thumbnail: "/projects/torrent-movies.thumbnail.webp",
      small: "/projects/torrent-movies.1x.webp",
      medium: "/projects/torrent-movies.2x.webp",
      large: "/projects/torrent-movies.4x.webp",
    },
  },
  {
    id: "3",
    title: "Rick and Morty API Website",
    devtools: [
      DEVTOOLS_NAMES.javascript,
      DEVTOOLS_NAMES.html5,
      DEVTOOLS_NAMES.css3,
    ],
    links: [
      {
        name: "Website",
        default: true,
        url: "https://jhonromero26.github.io/rick-and-morty",
      },
      {
        name: "GitHub",
        default: false,
        url: "https://github.com/JhonRomero26/rick-and-morty",
      },
    ],
    images: {
      thumbnail: "/projects/rick-and-morty.thumbnail.webp",
      small: "/projects/rick-and-morty.1x.webp",
      medium: "/projects/rick-and-morty.2x.webp",
      large: "/projects/rick-and-morty.4x.webp",
    },
  },
  {
    id: "4",
    title: "Erlangb Calculator Website (WebAssembly)",
    devtools: [DEVTOOLS_NAMES.wasm, DEVTOOLS_NAMES.react, DEVTOOLS_NAMES.css3],
    links: [
      {
        name: "Website",
        default: true,
        url: "https://jhonromero26.github.io/erlangb",
      },
      {
        name: "GitHub",
        default: false,
        url: "https://github.com/JhonRomero26/erlangb",
      },
    ],
    images: {
      thumbnail: "/projects/erlangb.thumbnail.webp",
      small: "/projects/erlangb.1x.webp",
      medium: "/projects/erlangb.2x.webp",
      large: "/projects/erlangb.4x.webp",
    },
  },
  {
    id: "5",
    title: "Fiestas Patronales Colegio La Inmaculada",
    devtools: [
      DEVTOOLS_NAMES.javascript,
      DEVTOOLS_NAMES.react,
      DEVTOOLS_NAMES.tailwind,
      DEVTOOLS_NAMES.css3,
    ],
    links: [
      {
        name: "Website",
        default: true,
        url: "https://uefli-ciencias-sociales.github.io/fiestas-patronales",
      },
      {
        name: "GitHub",
        default: false,
        url: "https://github.com/UEFLI-Ciencias-Sociales/fiestas-patronales",
      },
    ],
    images: {
      thumbnail: "/projects/uefli-fiestas-patronales.thumbnail.webp",
      small: "/projects/uefli-fiestas-patronales.1x.webp",
      medium: "/projects/uefli-fiestas-patronales.2x.webp",
      large: "/projects/uefli-fiestas-patronales.4x.webp",
    },
  },
];
