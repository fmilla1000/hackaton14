<template>
  <div class="layout">
    <Header />
    <Main>
        <router-view></router-view>
    </Main>
  </div>
</template>
<script>
import Header from '@/components/Header';
import Main from '@/components/Main';

export default {
    name:'Layout',
    components: {
        Header,
        Main,
    }
};
</script>
<style lang="scss">
</style>