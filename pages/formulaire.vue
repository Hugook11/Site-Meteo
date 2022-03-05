<template>
<div>
  <form @submit.prevent="postData">
    <div class="mb-3">
      <label for="inputPseudo" class="form-label">Pseudo</label>
      <input type="text" class="form-control" v-model="pseudo" />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Message</label>
      <textarea type="textarea" class="form-control" v-model="message" />
    </div>
    <button type="submit" class="btn btn-primary">Envoyer</button>
  </form>
  <div>

  </div>
  </div>
</template>

<script>
export default {
  name: "Formulaire",
  layout: "default",

  data(){
    return{
      pseudo:"",
      message:"",
      indexMessages: 1,
    }
  },

  methods:{
    postData(){
      try{
      this.$fire.firestore.collection("Messages").doc().set({
        Pseudo:this.pseudo,
        Message:this.message
      })
      }catch(err){
        console.log(err)
      }
      this.indexMessages++
    }
  }
};
</script>

<style scoped>

</style>