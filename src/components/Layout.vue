<template>
  <div class="layout w-screen h-screen">
    <el-card class="card h-24">
      <Header/>
    </el-card>
    <div class="flex h-c-v-24">
      <transition name="aside">
        <Aside v-if="$store.state.visibleAside"/>
      </transition>
      <el-main>
        <slot/>
      </el-main>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Header from '@/components/Header.vue';
import Aside from '@/components/Aside/Aside.vue';

@Options({
  components: {
    Header,
    Aside
  }
})
export default class Layout extends Vue {
}
</script>

<style lang="less">
.layout .card .el-card__body {
  padding: 0;
  margin: 0;
}

.layout {
  .aside-enter-active,
  .aside-leave-active {
    transition: all 0.2s linear;
  }

  .aside-enter-from,
  .aside-leave-to {
    width: 10%;
    opacity: 0.5;
  }
}
</style>
