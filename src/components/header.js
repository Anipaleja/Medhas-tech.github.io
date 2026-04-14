export function renderHeader(person) {
  return `
    <header class="topbar reveal">
      <div class="brand" aria-label="Medha Saraiya initials">MS</div>
      <nav class="top-actions" aria-label="Main actions">
        <button class="palette-toggle" type="button" aria-label="Switch color palette">
          Switch Palette
        </button>
        <a class="linkedin-btn" href="${person.linkedin}" target="_blank" rel="noreferrer">
          Connect on LinkedIn
        </a>
      </nav>
    </header>
  `;
}
