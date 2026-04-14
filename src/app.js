import { renderHeader } from "./components/header.js";
import { renderHero } from "./components/hero.js";
import { renderStatement } from "./components/statement.js";
import { renderHighlights } from "./components/highlights.js";
import { renderFooter } from "./components/footer.js";
import { initRevealAnimations } from "./interactions/reveal.js";
import { initParallaxCards } from "./interactions/parallax.js";
import { initPaletteSwitcher } from "./interactions/paletteSwitcher.js";

export function bootstrapApp(root, content) {
  if (!root) {
    throw new Error("Root element was not found");
  }

  root.innerHTML = `
    <div class="page-aurora" aria-hidden="true"></div>
    ${renderHeader(content.person)}
    <main>
      ${renderHero({ person: content.person, pillars: content.pillars, assets: content.assets })}
      ${renderStatement(content.person.statement)}
      ${renderHighlights(content.highlights, content.assets[2])}
    </main>
    ${renderFooter(content.person)}
  `;

  initRevealAnimations();
  initParallaxCards();
  initPaletteSwitcher(content.palettes);
}
