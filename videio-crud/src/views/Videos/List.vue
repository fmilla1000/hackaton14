<template>
  <div class="view-list">
    <div v-if="!videos.length" class="text-center">
        <Button event="click" :callback="redirectAdd" type="primary">Agregar Video</Button>
    </div>
    <div v-else>
        <Card v-for="video in videos" :key="video.id" :title="video.title" :url="video.url"  :description="video.description" />
    </div>
  </div>
</template>
<script>
import Button from '@/ui/Button';
import Card from '@/components/Card';
import { mixin } from '@/mixin/mixin';
export default {
    name:'VideoList',
    mixins: [mixin],
    components: {
        Button,
        Card,
    },
    data() {
        return {
            videos: []
        };
    },
    methods: {
        redirectAdd() {
            this.$router.push('add')
        },
        async getVideos() {
            try {
                const response = await fetch('http://localhost:3000/videos').then(response=> response.json());
                this.videos = response
            } catch(e) {
                this.alertError(e)
            }
            
        },
    },
    mounted() {
        this.getVideos()
    },
};
</script>
<style lang="scss">
</style>