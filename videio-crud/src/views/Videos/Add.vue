<template>
  <div class="view-add">
    <form @submit.prevent="handleSubmit">
    <h2>Agregar Video</h2>
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
        <Button class="me-3" type="primary" type-button="submit">Agregar</Button>
        <Button event="click" :callback="cancelarF" >Cancelar</Button>
    </div>
    </form>
  </div>
</template>
<script>
import Button from '@/ui/Button';
import { mixin } from '@/mixin/mixin';
export default {
    name:'VideoAdd',
    mixins: [mixin],
    components: {
        Button,
    },
    data() {
        return {
            form: {
                title: "",
                url: "",
                description: "",
            },
        };
    },
    methods: {
        saveVideo(payload) {
            fetch('http://localhost:3000/videos', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
            });
        },
        alertError(e) {
            alert('error');
            console.error(e)
        },
        async handleSubmit() {
            try {
                alert('Se creó correctamente el video');
                await this.saveVideo(this.form)
                this.$router.push("/")
            } catch(e) {
                this.alertError(e)
            }
            
        },
        cancelarF() {
            this.$router.push("/")
        }
    },
};
</script>
<style lang="scss">
h2 {
    margin-bottom: 25px;
}
</style>