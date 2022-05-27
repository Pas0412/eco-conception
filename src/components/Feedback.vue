<template>
  <div>
    <div class="feedback-container">
      <div class="feedback-img-box">
        <img src="static/img/feedback.png">
      </div>
      <div class="feedback-box-border">
        <div class="feedback-box">
          <div class="feedback-title">
            <h1>Commentaires</h1>
            <h2>Merci pour vos commentaires, ils seront pris en compte dans nos prochaines mise à jour</h2>
          </div>
          <div class="feedback-content">
            <div class="feedback-form">
              <Form :model="formItem" :label-width="80">
                <FormItem label="titre">
                  <i-input v-model="formItem.title" placeholder="Titre"></i-input>
                </FormItem>
                <FormItem label="Contenu">
                  <i-input v-model="formItem.content" type="textarea" :autosize="{minRows: 8,maxRows: 10}" placeholder="Écrivez ici"></i-input>
                </FormItem>
                <FormItem>
                  <Button type="primary">Envoyer</Button>
                  <Button type="ghost">Effacer</Button>
                </FormItem>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'feedback',
  data () {
    return {
      formItem: {
        title: '',
        content: ''
      }
    };
  }
};
</script>

<style scoped>
.feedback-container {
  margin: 15px auto;
  width: 80%;
  height: 600px;
  display: flex;
  align-items: center;
  /* background-color: #ccc; */
}
.feedback-img-box {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.feedback-img-box img {
  width: 80%;
}
.feedback-box-border {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.feedback-box {
  width: 480px;
}
.feedback-content {
  margin: 15px auto;
  border: 1px #ccc dotted;
}
.feedback-form {
  margin: 30px auto;
  width: 90%;
}
</style>
