import { html, render } from "./htm-preact.mjs";
import Example from "./components/Example.js";

/* Utils to program faster and reduce code length */
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);
const ael = (element, callback, evnt="click") => {
  element.addEventListener(evnt, e => {
    callback(e);
  });
}
const mode = alert;
const _ = text => {
  mode(`[DEBUG] ${text}`);
}
/* End utils */

render( html`<${Example} innerText="Hello World" />`, $("#app") );

/* Await code */
/*
(async () => {

})();
*/
/* End Await */
