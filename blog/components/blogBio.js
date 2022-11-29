//define template
const blogbioTemplate = document.createElement("template");

blogbioTemplate.innerHTML = `    
    <!-- add template specific styles -->
    <style>
        * {
            margin: 0;
            padding: 0;
            border: none;
            box-sizing: border-box;
            background: none;
        }
        .wrapper {
            margin: 4rem 0;
        }
        .bio {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            background: var(--neutral-mdlt);
            padding: 4rem 2rem;
        }
        .avatar-container {
            width: 10rem;
            min-width: 10rem;
        }
        .avatar {
            width: 100%;
            border-radius: 50%;
            border: 2px solid var(--primary-dk);
            background: var(--primary-md);
        }
        .bio p, .bio h2 {
            margin: 0;
        }
        .bio-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            text-align: center;
        }
        .bio .btn {
            background: var(--primary-dk);
            color: var(--neutral-lt);
            padding: 8px 16px;
            border-radius: 50px;
            text-decoration: none;
            margin-top: 2rem;
        }
        .btn:hover {
            color: var(--neutral-lt);
            background: var(--primary-md);
        }
        @media screen and (min-width: 750px) {
            .bio {
                flex-direction: row;
                align-items: flex-start;
                gap: 4rem;
                padding: 4rem;
            }
            .bio-text {
                align-items: flex-start;
                text-align: left;
            }
        }
    </style>

    <!-- add the HTML content -->
                    <article class="bio wrapper">
                <div class="avatar-container">
                <img class="avatar" src="./images/avatar.png"/>
                </div>
                <div class="bio-text">
                    <h2>Author Name</h2>
                    <p>Some text about the awesome, interesting, and witty author of this HTML/CSS/JS blog.</p>
                </div>
            </article>

`;

//define the class
class Blogbio extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    //create shadow DOM
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(blogbioTemplate.content.cloneNode(true));
  }
}

//register the custom element using the customElements.define() method
customElements.define("blogbio-component", Blogbio);
