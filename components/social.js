//define template
const socialTemplate = document.createElement("template");

socialTemplate.innerHTML = `    
    <!-- add template specific styles -->
    <!-- connect to remix icons -->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">

    <style>
        * {
            margin: 0;
            padding: 0;
            border: none;
            box-sizing: border-box;
            background: none;
        }
        a {
            text-decoration: none;
        }
        a:hover {
            color: var(--primary-md);
        }
        .wrapper {
            margin: 6rem auto;
            max-width: 630px;
        }
        .social {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }
        .social h2 {
            margin-top: 0;
            width: 100%;
        }
        .heading-accent {
            height: 8px;
            width: 50px;
            background: var(--primary-dk);
            margin-top: -2rem;
            margin-bottom: 4rem;
            align-self: flex-start;
        }
        .social-links {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-top: 1rem;
        }
        .social-icon {
            font-size: 3.2rem;
            color: var(--neutral-lt);
            background: var(--primary-dk);
            padding: 4px;
            border-radius: 3px;
        }
        .social-icon:hover {
            background: var(--primary-md);
        }
        @media screen and (min-width: 750px) {
            .social {
                text-align: center;
            }
            .heading-accent {
                align-self: initial;
            }
        }
    </style>

    <!-- add the HTML content -->
    <article class="social wrapper">
    <h2>Where to Connect</h2>
    <div class="heading-accent"></div>
        <p>If you would like to follow along with this project or view more of my development work, visit my main website at <a href="https://christadejesus.com" target="_blank" rel="noreferrer">christadejesus.com</a>.</p>
        <div class="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i class="ri-facebook-fill social-icon"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i class="ri-instagram-fill social-icon"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i class="ri-twitter-fill social-icon"></i></a>
        </div>
    </article>

`;

//define the class
class Social extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    //create shadow DOM
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(socialTemplate.content.cloneNode(true));
  }
}

//register the custom element using the customElements.define() method
customElements.define("social-component", Social);
