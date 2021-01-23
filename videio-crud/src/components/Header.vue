<template>
  <header class="header">
        <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">CRUD VIDEOS</a>
            <Button v-show="checkComponent" event="click" :callback="redirectAdd" type="primary">Agregar Video</Button>
        </div>
        </nav>
  </header>
</template>
<script>
import Button from '@/ui/Button';

export default {
    name: 'Header',
    data(){
        return{
            viewsList:['admin',],
        }
    },
    components: {
        Button,
    },
    methods: {
        redirectAdd() {
            this.$router.push('add')
        },
    },
    computed:{
        checkComponent() {
            if(this.$route.matched.some(({name}) => name === 'VideoList')){
                return true;
            }
            else{
                return false;
            }
        },      
    },
};
</script>
<style lang="scss">
</style>