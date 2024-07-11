// content.js
document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `
      ::selection {
        background-color: rgba(211, 211, 211, 0.17); /* Very light gray with 25% opacity */
        color: inherit; /* Maintain the text color */
      }
      ::-moz-selection {
        background-color: rgba(211, 211, 211, 0.17); /* Very light gray with 25% opacity for Firefox */
        color: inherit;
      }
    `;
  document.head.appendChild(style);
});
