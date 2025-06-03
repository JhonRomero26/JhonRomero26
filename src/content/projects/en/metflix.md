---
order: 3
title: "Metflix"
description: "Metflix is a website inspired by Netflix built with Astro, TypeScript, and Tailwind CSS. It explores how to implement custom reactivity, load content dynamically with IntersectionObserver, and handle dynamic events with MutationObserver."
image: metflix/poster.webp
skills: ["AstroJS"]
publishDate: 2023-07-08
readMinTime: 7
author: Jhon Romero
website: "https://metflix-ten.vercel.app"
repoUri: "https://github.com/JhonRomero26/metflix"
---

A few months ago, I decided to build **Metflix**, a project inspired by the Netflix streaming platform, with the goal of learning advanced frontend development concepts without using reactive frameworks like React or Vue. The result was a modern, fast, and smooth user experience site, even without using a full framework.

## Why this project?

I wanted to see how far I could go without relying on external libraries. Instead of using tools like Zustand, Pinia or Redux, I wanted to implement my own reactive state system `signal`. I also wanted to reinforce my skills with `IntersectionObserver` to load content efficiently. Finally, I wanted to explore how to handle dynamic events when new elements are inserted into the DOM to re-load the `addEventListener` efficiently for each new inserted card, which I did with `MutationObserver`.

The result was a modern, fast, and smooth user experience site, even without using a full framework.

## Technologies used

- <a href="https://astro.build/" target="_blank">**Astro**</a> - Web framework for content-oriented sites.
- <a href="https://www.typescriptlang.org/" target="_blank">**Typescript**</a> - JavaScript with static typing.
- <a href="https://tailwindcss.com/" target="_blank">**Tailwindcss**</a> - CSS utility framework for custom design.
- <a href="https://github.com/midudev/tailwind-animations" target="_blank">**@midudev/tailwind-animations**</a> - Predefined animations to improve UX.
- <a href="https://github.com/justinribeiro/lite-youtube" target="_blank">**@justinribeiro/lite-youtube**</a> - Lightweight component for embedding YouTube videos.

## 📦 Project architecture

Metflix has a simple but very modular architecture:

- A main page with multiple movie carousels.
- A detail page for each selected movie.
- Each carousel loads data through an API <a href="https://developer.themoviedb.org" target="_blank">The Movie Database</a>.
- As the user reaches the end of the carousel, more results are automatically loaded.
- Clicking on a movie updates the visual Hero with details and the movie trailer.

## 🔄 Customized reactive system with `signal`.

One of the interesting parts of the project was to implement a status system similar to `signals` in Preact or SolidJS.

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

This system allows you to automatically update the interface every time the state changes, without the need to use reactive frameworks.

## 🔍 Infinite loading with IntersectionObserver

To simulate an infinite scroll, `IntersectionObserver` was used to observe an invisible element at the end of each carousel with the purpose of loading new movies just before the user reaches the end, providing a smooth experience.

![IntersectionObserver](/images/projects/metflix/metflix-lazy-load.gif)

## 🧠 DOM observation with MutationObserver

One of the problems of the project was **detecting when new movie cards** were inserted inside each carousel, so that the `click` event could be assigned to them. This is where `MutationObserver` is introduced:

With this technique:

- I check new insertions of a DOM element to apply listeners cleanly and surgically.
- I apply listeners cleanly
- I avoid duplicates by using `removeEventListener` before adding a new one.

## 💡 Lessons learned

1. **You don't always need a framework** - It is possible to create small reactive systems from scratch without relying on reactive libraries, but it has its own maintenance cost and complexity to consider when scaling.
2. **IntersectionObserver** is key to improving performance and user experience.
3. **MutationObserver** is a powerful tool, although little used, it is usually ideal for dynamic scenarios as in this project.
4. **The creation of an image caching system** helped me to identify that not loading images dynamically with JavaScript will again have a redundant HTTP request despite having been previously loaded, so saving the information of the previously loaded images helps to avoid redundant HTTP requests and optimizes the user experience with slow connections and saving megabytes of internet data.

## 📝 Conclusion

Metflix is a movie site, but it is also a practical example of learning how to build modern, reactive applications without relying on full frameworks.

If you want to start understanding how concepts like `signals`, `IntersectionObserver` or `MutationObserver` work, this project can help you as an excellent starting point.
