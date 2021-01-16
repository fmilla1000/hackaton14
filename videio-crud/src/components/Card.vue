<template>
  <article>
    <iframe width="560" height="315" :scr="url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </article>
</template>
<script>
export default {
    name:"Card",
    props: {
        title: {
            type: String,
        },
        url: {
            type: String,
        },
        description: {
            type: String,
        },
    }
};
</script>
<style lang="scss">
</style>