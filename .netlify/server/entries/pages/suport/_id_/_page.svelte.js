import { g as getContext, c as create_ssr_component, d as subscribe, e as escape } from "../../../../chunks/index.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  const readonly_stores = {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    updated: stores.updated
  };
  Object.defineProperties(readonly_stores, {
    preloading: {
      get() {
        console.error("stores.preloading is deprecated; use stores.navigating instead");
        return {
          subscribe: stores.navigating.subscribe
        };
      },
      enumerable: false
    },
    session: {
      get() {
        removed_session();
        return {};
      },
      enumerable: false
    }
  });
  return readonly_stores;
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function removed_session() {
  throw new Error(
    "stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
  );
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  page.subscribe((value) => {
    console.log(value);
  });
  $$unsubscribe_page();
  return `


${$$result.head += `<!-- HEAD_svelte-tgmzvz_START -->${$$result.title = `<title>Esta - ${escape($page.params.id)}</title>`, ""}<!-- HEAD_svelte-tgmzvz_END -->`, ""}

<center><h2>El id de tu peticion es: ${escape($page.params.id)}</h2></center>`;
});
export {
  Page as default
};
