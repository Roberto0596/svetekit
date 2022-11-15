import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<center><h2>\xA9 Roberto cordero ${escape(new Date().getFullYear())}</h2></center>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav><a href="${"/"}">Inicio</a>
  <a href="${"/about"}">About</a>
  <a href="${"/suport"}">Soporte</a></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
