<template>
  <div class="view-list">
    <div v-if="!videos.length" class="text-center">
        <Button event="click" :callback="redirectAdd" type="primary">Agregar Video</Button>
    </div>
    <div v-else>
        <h2>Lista de videos</h2>
        <div class="grid">
            <Card v-for="video in videos" :key="video.id" :data="video" v-on:goDelete="deleteItem" v-on:goEdit="editItem" v-on:goDetail="detailItem" />
        </div>
    </div>
  </div>
</template>
<script>
import Button from '@/ui/Button';
import Card from '@/components/Card';
import { mixin } from '@/mixin/mixin';
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
    name:'VideoList',
    mixins: [mixin],
    components: {
        Button,
        Card,
    },
    data() {
        return {};
    },
    watch: {
        videos() {
            console.log('this.getVideoId(2)', this.getVideoId(2));
        }
    },
    computed: {
        ...mapState({
            videos: (state) => {
                return state.videos
            },
            count: (state) => state.count
        }), 
        ...mapGetters({
            getVideoId: 'getVideoId'
        }),
    },
    methods: {
        ...mapActions({
            getVideos: 'getVideos',
            deleteVideo: 'deleteVideo',
        }),
        redirectAdd() {
            this.$router.push('add')
        },
        
        async deleteItem(id) {
            await this.deleteVideo(id);
            await this.getVideos();          
        },
        editItem(id) {
            this.$router.push({ name: 'VideoEdit', params: {id} })
        },
        detailItem(id) {
            this.$router.push({ name: 'VideoDetail', params: {id} })
        },
    },
    mounted() {
        this.getVideos();
    },
};
</script>
<style lang="scss">
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
}

h2 {
    margin-bottom: 25px;
}

</style>