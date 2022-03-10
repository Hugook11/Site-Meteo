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
    <br>

    <div id="messages" class=""></div>
  </div>
</template>

<script>
export default {
  name: 'Formulaire',
  layout: 'default',

  data() {
    return {
      pseudo: "",
      message: "",
    };
  },

  mounted:function() {
          this.getMessages();
        },

  methods: {
    postData() {
      try {
        this.$fire.firestore.collection("Messages").doc().set({
          Pseudo: this.pseudo,
          Message: this.message,
          Date: new Date().getTime(),
        });
      } catch (err) {
        console.log(err);
      }
    },

    getMessages() {
      this.$fire.firestore
        .collection("Messages")
        .orderBy("Date", "desc")
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            this.$el.querySelector("#messages").innerHTML += `
            <div class="card" style="width: 60%">
              <div class="card-body">
                <h5 class="card-title">${doc.data().Pseudo}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${
                  doc.data().Date
                }</h6>
                <p class="card-text">${doc.data().Message}</p>
              </div>
            </div><br>`;
          });
        });
    },
  },

};
</script>

<style scoped>
</style>
