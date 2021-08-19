<template>
  <Layout>
    <router-view/>
  </Layout>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Layout from '@/components/Layout.vue';

@Options({
  components: {
    Layout
  }
})
export default class App extends Vue {
}
</script>

<style lang="less">
@import "~element-plus/lib/theme-chalk/index.css";
@import "~tailwindcss/tailwind.css";
@import "./assets/less/default.less";
</style>
