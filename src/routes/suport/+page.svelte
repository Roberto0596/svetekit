<script lang="ts">
  let id: string;
</script>

<h1>Pagina de support</h1>

Ingresa un id

<input type="text" bind:value={id} />

<a href="/suport/{id}">Ir</a>
