import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let id;
  return `<h1>Pagina de support</h1>

Ingresa un id

<input type="${"text"}"${add_attribute("value", id, 0)}>

<a href="${"/suport/" + escape(id, true)}">Ir</a>`;
});
export {
  Page as default
};
