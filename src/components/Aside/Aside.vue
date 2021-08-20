<template>
  <div
      class="aside w-screen absolute top-0 bg-gray-100 bg-opacity-75 lg:static lg:bg-transparent lg:w-auto lg:top-auto">
    <el-aside class="md:mt-4 h-c-%-4">
      <el-menu router :default-active="$route.fullPath">
        <el-menu-item v-for="item in Menu" :index="item.url" :key="item.url"
                      :class="item.url===$route.fullPath?'bg-gray-200 ':''">
          <template #title>
            <div class="flex items-center">
              <icon :type="item.icon" class="pr-4"/>
              <span>{{ item.title }}</span>
            </div>
          </template>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Menu from '@/components/Aside/Menu.ts';
import Icon from '@/components/Aside/Icon.vue';


@Options({
  components: {
    Icon,
  },
  data() {
    return {
      Menu,
    }
  },
})
export default class Aside extends Vue {
}
</script>

<style lang="less">
</style>
