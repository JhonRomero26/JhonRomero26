---
title: "Metflix"
description: "Metflix es un sitio web inspirado en Netflix construido con Astro, TypeScript y Tailwind CSS. Explora cómo implementar reactividad personalizada, cargar contenido dinámicamente con IntersectionObserver y manejar eventos dinámicos con MutationObserver."
image: metflix/poster.webp
skills: ["AstroJS"]
publishDate: 2023-07-08
readMinTime: 7
website: "https://metflix-ten.vercel.app"
repoUri: "https://github.com/JhonRomero26/metflix"
---

Hace unos meses me propuse construir **Metflix**, un proyecto inspirado en la plataforma de streaming Netflix, con el objetivo de aprender conceptos avanzados de desarrollo frontend sin usar frameworks reactivos como React o Vue. El resultado fue un sitio moderno, rápido y con una experiencia de usuario suave, incluso sin depender de un framework completo.

## 🧠 ¿Por qué este proyecto?

Quería probar hasta dónde puedo llegar sin depender de librerías externas. En lugar de usar herramientas como Zustand, Pinia o Redux, quise implementar mi propio sistema de estado reactivo `signal`. También quería reforzar mis habilidades con `IntersectionObserver` para cargar contenido de manera eficiente. Finalmente quería explorar cómo manejar eventos dinámicos cuando se insertan nuevos elementos al DOM para volver a cargar los `addEventListener` de manera eficiente en cada nueva tarjeta insertada, lo cual hice con `MutationObserver`.

El resultado fue un sitio moderno, rápido y con una experiencia de usuario suave, incluso sin usar un framework completo.

## 🚀 Tecnologías utilizadas

- <a href="https://astro.build/" target="_blank">**Astro**</a> - Framework web para sitios orientados a contenido.
- <a href="https://www.typescriptlang.org/" target="_blank">**Typescript**</a> - JavaScript con tipado estático.
- <a href="https://tailwindcss.com/" target="_blank">**Tailwindcss**</a> - Framework de utilidades CSS para diseño personalizado.
- <a href="https://github.com/midudev/tailwind-animations" target="_blank">**@midudev/tailwind-animations**</a> - Animaciones predefinidas para mejorar la UX.
- <a href="https://github.com/justinribeiro/lite-youtube" target="_blank">**@justinribeiro/lite-youtube**</a> - Componente ligero para incrustar videos de YouTube.

## 📦 Arquitectura del proyecto

Metflix tiene una arquitectura sencilla pero muy modular:

- Una página principal con múltiples carousels de películas.
- Una página de detalle para cada pelicula seleccionada.
- Cada carousel carga datos mediante una API <a href="https://developer.themoviedb.org" target="_blank">The Movie Database</a>.
- A medida que el usuario llega al final del carousel, se cargan más resultados automáticamente.
- Al hacer clic en una película, se actualiza el Hero visual con detalles y el trailer de la película.

## 🔄 Sistema reactivo personalizado con `signal`

Una de las partes interesantes del proyecto fue implementar un sistema de estado similar a los `signals` de Preact o SolidJS.

```ts title="/src/utils/signal.ts"
type SignalSubscriber<T> = (value: T) => void;

function signal<T>(initialValue: T) {
  let value = initialValue;
  const subscribers = new Set<SignalSubscriber<T>>();

  const notify = () => {
    subscribers.forEach((sub) => sub(value));
  };

  const signal = {
    get value() {
      return value;
    },
    set value(newValue: T) {
      if (newValue !== value) {
        value = newValue;
        notify();
      }
    },
    subscribe(cb: SignalSubscriber<T>) {
      subscribers.add(cb);
      return () => {
        subscribers.delete(cb);
      };
    },
  };

  return signal;
}
```

Este sistema permite actualizar automáticamente la interfaz cada vez que cambia el estado, sin necesidad de usar frameworks reactivos.

## 🔍 Carga infinita con IntersectionObserver

Para simular un scroll infinito, se uso `IntersectionObserver` observando un elemento invisible al final de cada carousel con la finalidad de cargar nuevas películas justo antes de que el usuario llegue al final, generandole una experiencia fluida.

![IntersectionObserver](/images/projects/metflix/metflix-lazy-load.gif)

## 🧠 Observación del DOM con MutationObserver

Uno de los problemas del proyecto era **detectar cuándo se insertaban nuevas tarjetas de película** dentro de cada carrusel, para poder asignarles el evento `click`. Aquí es donde se introduce `MutationObserver`:

Con esta técnica:

- Compruebo las nuevas inserciones de un elemento DOM para aplicar listeners de forma limpia y quirúrgica.
- Aplico listeners de forma limpia
- Evito duplicados usando `removeEventListener` antes de añadir uno nuevo.

## 💡 Lecciones aprendidas

1. **No siempre necesitas un framework** – Es posible crear pequeños sistemas reactivos desde cero sin depender de librerías reactivas, pero tiene su propio costo de mantenimiento y complejidad que se debe considerar a la hora de escalar.
2. **IntersectionObserver** es clave para mejorar el rendimiento y la experiencia de usuario.
3. **MutationObserver** es una herramienta poderosa, aunque poco usada, suele ser ideal para escenarios dinámicos como en este proyecto.
4. **La creación de un sistema de caché de imágenes** me ayudo a identificar que no cargar imagenes dinamicamente con JavaScript tendra nuevamente una solicitud HTTP redundante a pesar de haberse cargado previamente, por lo que guardar la informacion de las imagenes previamente cargadas ayuda a evitar solicitudes HTTP redundantes y optimiza la experiencia de usuario con conexiones lenta y ahorro de megas de datos de internet.

## 📝 Conclusión

Metflix es un sitio de películas, pero tambien, es un ejemplo práctico de aprendizaje de cómo construir aplicaciones modernas y reactivas sin depender de marcos completos.

Si quieres empezar a entender cómo funcionan conceptos como `signals`, `IntersectionObserver` o `MutationObserver`, este proyecto puede ayudarte como un excelente punto de partida.
