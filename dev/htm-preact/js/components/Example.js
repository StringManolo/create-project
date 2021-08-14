import { html } from "../htm-preact.mjs";

const Example = props => {
  return html`<div class="myDivs">
    <h1>${props.innerText}</h1>
  </div>`;
}

export default Example;
