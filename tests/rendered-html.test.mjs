import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("contains Kevin's minimal identity", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<h1>Kevin Xue<\/h1>/i);
  assert.match(page, /<p>aka Kevin77<\/p>/i);
  assert.match(layout, /Kevin Xue — Kevin77/);
});

test("ships the Pacific Twilight visual and motion safeguards", async () => {
  const [page, css, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /className="ocean"/);
  assert.match(page, /className="cityGlow"/);
  assert.match(css, /pacific-twilight\.webp/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /@media \(max-width:\s*640px\)/);
  assert.match(layout, /Kevin Xue — Kevin77/);
  await access(new URL("../public/pacific-twilight.webp", import.meta.url));
});
