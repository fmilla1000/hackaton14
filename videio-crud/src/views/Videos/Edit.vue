<template>
  <div class="view-edit">
    <form @submit.prevent="handleSubmit">
      <h2>Editar Video</h2>
      <div class="mb-3">
          <label class="form-label">Titulo</label>
          <input v-model="form.title" type="text" class="form-control">
      </div>
      <div class="mb-3">
          <label class="form-label">Url Video</label>
          <input v-model="form.url" type="text" class="form-control">
      </div>
      <div class="mb-3">
          <label class="form-label">Descripción</label>
          <textarea v-model="form.description" rows="5" class="form-control"></textarea>
      </div>
      <div class="d-flex justify-content-center">
          <Button class="me-3" type="primary" type-button="submit">Actualizar</Button>
          <Button event="click" :callback="cancelarF" >Cancelar</Button>
      </div>
    </form>
  </div>
</template>
<script>
import Button from '@/ui/Button';
import { mixin } from '@/mixin/mixin';
import { mapState, mapActions } from 'vuex';
export default {
    name:'VideoEdit',
    mixins: [mixin],
    components: {
      Button,
    },
    data() {
      return {
        form: {},
      };
    },
    computed: {
        ...mapState({
            video: (state) => {
                return state.currentVideo
            },
        }), 
    },
    methods: {
      ...mapActions({
            getVideo: 'getVideo',
            updateVideo: 'updateVideo',
      }),
      async handleSubmit() {
        alert('Se actualizó correctamente el video');
        await this.updateVideo({
          id: this.$route.params.id,
          body: this.form
        })
        this.$router.push("/")
      },
      cancelarF() {
        this.$router.push("/")
      },
    },
    async mounted() {
      await this.getVideo(this.$route.params.id)
      this.form = this.video
    }
};
</script>
<style lang="scss">
h2 {
    margin-bottom: 25px;
}
</style>