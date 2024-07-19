import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';

import '@cells-demo/demo-app-template/demo-app-template';
import '@bbva-web-components/bbva-web-card-product/bbva-web-card-product.js';

class AboutPage extends CellsPage {
  static get is() {
    return 'about-page';
  }

  static get properties() {
    return {
      name: { type: String },
      lastName: { type: String },
    };
  }

  constructor() {
    super();
    this.name = 'Brian';
    this.lastName = 'Cardenas';
  }

  render() {
    return html`
      <demo-app-template data-cells-type="template">
        <div>
          <h1>LISTA DE POKEMONES</h1>
          <bbva-web-card-product> </bbva-web-card-product>
        </div>
      </demo-app-template>
    `;
  }
}

window.customElements.define(AboutPage.is, AboutPage);
