<template>
  <div class="view-datail">
    <article>
      <h2>Detalle de Video</h2>
      <div class="card" style="width: 100%;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><iframe width="100%" height="600" :src="form.url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
          <li class="list-group-item"><h4>{{form.title}}</h4></li>
          <li class="list-group-item">{{form.description}}</li>
        </ul>
      </div>
    </article>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    name:'VideoDetail',
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
      }),
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