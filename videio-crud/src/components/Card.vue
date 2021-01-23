<template>
  <article class="card" style="width: 255px;">
    <Button class="icon icon-left" event="click" :callback="() => {goEdit(data.id)}"><i class="fas fa-edit"></i></Button>
    <Button class="icon icon-right btn-danger" event="click" :callback="() => {goDelete(data.id)}"><i class="fas fa-trash"></i></Button>
    <iframe class="card-img-top" :src="data.url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="card-body">
        <h5 class="card-title">{{ data.title }}</h5>
        <p class="card-text">{{ data.description }}</p>        
        <Button class="btn form-control" event="click" :callback="() => {goDetail(data.id)}" type="primary">Ir a detalle</Button>
    </div>
  </article>
</template>
<script>
import Button from "@/ui/Button";
import '@fortawesome/fontawesome-free/css/all.css';
export default {
    name:"Card",
    components: {
        Button,
    },
    props: {
        data: {
            type: Object,
        },
    },
    methods: {
        goDetail(id) {
            this.$emit("goDetail", id)
        },
        goDelete(id) {
            this.$emit("goDelete", id)
        },
        goEdit(id) {
            this.$emit("goEdit", id)
        },
    }
};
</script>
<style lang="scss">

.icon {
    position: absolute;
    margin-top: 10px;
}
.icon-left {
    left: 10px;
}
.icon-right {
    right: 10px;
}

</style>