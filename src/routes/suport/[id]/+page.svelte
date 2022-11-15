<!--<script lang="ts" context="module">
  export async function load({ params }) {
    return {
      props: {
        id: params.id,
      },
    };
  }
</script>-->
<script lang="js">
  import { page } from "$app/stores";

  const unsubscribe = page.subscribe((value) => {
    console.log(value);
  });
</script>

<svelte:head>
  <title>Esta - {$page.params.id}</title>
</svelte:head>

<center>
  <h2>El id de tu peticion es: {$page.params.id}</h2>
</center>
