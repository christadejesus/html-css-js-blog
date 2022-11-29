//define template
const bioTemplate = document.createElement("template");

bioTemplate.innerHTML = `    
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
            margin: 6rem 0;
        }
        .bio {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            border: 2px solid var(--primary-dk);
            padding: 4rem 2rem;
        }
        .avatar-container {
            width: 12rem;
            min-width: 12rem;
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
                    <h2>Meet the Author</h2>
                    <p>Christa DeJesus is a web developer, graphic design enthusiast, dedicated dog mom, and amature foodie in the USA. </p>
                </div>
            </article>

`;

//define the class
class Bio extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    //create shadow DOM
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(bioTemplate.content.cloneNode(true));
  }
}

//register the custom element using the customElements.define() method
customElements.define("bio-component", Bio);
