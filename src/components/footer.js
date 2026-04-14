export function renderFooter(person) {
  return `
    <footer class="footer reveal reveal-delay-2">
      <p>Designed for ${person.name}</p>
      <a href="${person.linkedin}" target="_blank" rel="noreferrer">
        ${person.linkedin.replace("https://", "")}
      </a>
    </footer>
  `;
}
