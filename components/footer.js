//define template
const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
    <!-- connect to remix icons -->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    
    <!-- add template specific styles -->
    <style>
        * {
            margin: 0;
            padding: 0;
            border: none;
            box-sizing: border-box;
            background: none;
        }
        a {
            color: var(--primary-dk);
            text-decoration: none;
        }
        a:hover {
            color: var(--primary-md);
        }
        .page-footer {
            text-align: center;
            width: 100%;
            padding: 2rem;
            margin-top: 4rem;
        }
        .footer-content {
            display: flex;
            flex-direction: column;
            border-top: 1px solid var(--neutral-md);
            max-width: 900px;
            margin: 0 auto;
            padding: 4rem 0;
        }
    </style>

    <!-- add the HTML content -->
        <footer class="page-footer">
            <div class="footer-content">
            <span>This website is a web development demo by Christa DeJesus.</span>
            <a href="https://christadejesus.com" target="_blank" rel="noreferrer">@christadejesus.com</a>
            </div>
        </footer>
`;

//define the class
class Footer extends HTMLElement {
  constructor() {
    super();
  } 

    connectedCallback() {
    //create shadow DOM
    const shadowRoot = 
    this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
  } 
}

//register the custom element using the customElements.define() method
customElements.define("footer-component", Footer);
