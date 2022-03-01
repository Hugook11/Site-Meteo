<template>
  <form>
    <div class="mb-3">
      <label for="inputPseudo" class="form-label">Pseudo</label>
      <input type="text" class="form-control" id="inputPseudo" />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Message</label>
      <textarea type="textarea" class="form-control" id="inputMessage" />
    </div>
    <button type="submit" class="btn btn-primary">Envoyer</button>
  </form>
</template>

<script>
export default {
  
  name: "Formulaire",
  layout: "default",
};

</script>

<style scoped>
</style>
