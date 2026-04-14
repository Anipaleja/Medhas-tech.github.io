const STORAGE_KEY = "medha-palette";

function applyPalette(palette) {
  Object.entries(palette.values).forEach(([token, value]) => {
    document.documentElement.style.setProperty(token, value);
  });
}

export function initPaletteSwitcher(palettes) {
  const toggleButton = document.querySelector(".palette-toggle");

  if (!toggleButton || palettes.length === 0) {
    return;
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  let activeIndex = palettes.findIndex((item) => item.id === saved);

  if (activeIndex === -1) {
    activeIndex = 0;
  }

  applyPalette(palettes[activeIndex]);
  toggleButton.textContent = `Palette: ${palettes[activeIndex].name}`;

  toggleButton.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % palettes.length;
    const next = palettes[activeIndex];
    applyPalette(next);
    localStorage.setItem(STORAGE_KEY, next.id);
    toggleButton.textContent = `Palette: ${next.name}`;
  });
}
