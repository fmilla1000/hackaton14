<template>
  <header class="header">
        <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">CRUD VIDEOS</a>
            <Button v-if="videos.length" v-show="checkComponent" event="click" :callback="redirectAdd" type="primary">Agregar Video</Button>
        </div>
        </nav>
  </header>
</template>
<script>
import Button from '@/ui/Button';
import { mapActions, mapState } from 'vuex';

export default {
    name: 'Header',
    components: {
        Button,
    },
    methods: {
        redirectAdd() {
            this.$router.push('add')
        },
        ...mapActions({
            getVideos: 'getVideos',
            deleteVideo: 'deleteVideo',
        }),
    },
    computed:{
        ...mapState({
            videos: (state) => {
                return state.videos
            },
        }),  
        checkComponent() {
            if(this.$route.matched.some(({name}) => name === 'VideoList')){
                return true;
            }
            else{
                return false;
            }
        },
             
    },
    mounted() {
        this.getVideos();
    },
};
</script>
<style lang="scss">
</style>