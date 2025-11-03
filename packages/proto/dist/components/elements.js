import { html, shadow } from "@calpoly/mustang";

class NFLTeamElement extends HTMLElement {

    static template = html`
        <template>
            <link rel="stylesheet" href="/styles/tokens.css">
            <link rel="stylesheet" href="/styles/page.css">
            <link rel="stylesheet" href="/styles/reset.css">
            <a id="link">
                <img id="logo" alt="">
                <span id="name"></span>
            </a>
        </template>  
    `;

    connectedCallback() {
        const name = this.getAttribute('name');
        const logo = this.getAttribute('logo');
        const href = this.getAttribute('href');

        const link = this.shadowRoot.getElementById("link");
        const img = this.shadowRoot.getElementById("logo");
        const span = this.shadowRoot.getElementById("name");

        img.src = logo
        img.alt = `${name} logo`;
        span.textContent = name;

        if (href) {
            link.href = href;
        }
        else {
            const spanWrapper = document.createElement('span');
            spanWrapper.append(img, span);
            link.replaceWith(spanWrapper);
        }
    }

    constructor() {
        super();
        shadow(this).template(NFLTeamElement.template);
    }
}

customElements.define("nfl-team", NFLTeamElement);

// gets label with dark mode checkbox
const darkLabel = document.getElementById("dark-label");

darkLabel.onchange = (event) => {
    
    event.stopPropagation(); // won't show without this

    // creating the custom event for dark mode
    const darkToggle = new CustomEvent("darkmode:toggle", {
        bubbles: true, // won't show without this
        detail: {
            checked: event.target.checked
        }
    });
    
    // last step to "firing an event"
    darkLabel.dispatchEvent(darkToggle);
};

const page = document.body;
// will replace current colors with the darkmode colors if checked
page.addEventListener("darkmode:toggle", (event) => {
    if (event.detail.checked) {
        event.currentTarget.classList.add("dark-mode");
    }
    else {
        event.currentTarget.classList.remove("dark-mode");
    }
});

