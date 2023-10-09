import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const t = useTranslate();
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{t(head.title)}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {head.meta.map((m) => {
        const { name, content, ...rest } = m;
        return (
          <meta
            key={m.key}
            name={name}
            content={name === "description" ? t(content!) : content}
            {...rest}
          />
        );
      })}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}

      {head.scripts.map((s) => (
        <script key={s.key} {...s.props} dangerouslySetInnerHTML={s.script} />
      ))}
    </>
  );
});
