<template>
  <el-header class="text-base header">
    <div v-if="!visible" class="flex items-center h-full">
      <el-button type="text">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
          <path
              d="M90.258176 848.52215466L933.08326402 848.52215466c46.36262401 0 84.29568 37.933056 84.29567998 84.29568s-37.933056 84.29568-84.29567999 84.29568001l-842.69337602 0c-46.36262401 0-84.29568-37.933056-84.29568-84.29568001-0.13171201-46.36262402 37.801344-84.29568 84.16396801-84.29568zM90.258176 435.86845867L928.078208 435.86845867c46.36262401 0 84.29568 37.933056 84.29568 84.29567999s-37.933056 84.29568-84.29568 84.29568l-837.820032 0c-46.36262401 0-84.29568-37.933056-84.29568-84.29568s37.933056-84.29568 84.29568-84.29567999zM90.258176 15.70717865L933.08326401 15.70717864c46.36262401 0 84.29568 37.933056 84.29567999 84.29568001s-37.933056 84.29568-84.29567999 84.29568003l-842.69337601 0c-46.36262401 0-84.29568-37.933056-84.29568001-84.29568003-0.13171201-46.36262402 37.801344-84.29568 84.16396801-84.29568z"
              fill="#666666"/>
        </svg>
      </el-button>
      <span class="w-48 text-center text-2xl">{{ title }}</span>
      <span class="w-24 text-xl">{{ $route.meta.title }}</span>
      <div class="flex-1 flex justify-end">
        <el-input v-if="searchBoxShow" v-model="search" size="small" clearable prefix-icon="el-icon-search"
                  placeholder="搜索文章与问答"/>
        <el-button v-else @click="visible = true" icon="el-icon-search" size="small" circle/>
      </div>

      <div class="ml-8 flex">
        <el-button type="text">登录</el-button>
        <el-button type="text">注册</el-button>
      </div>
    </div>
    <transition name="el-fade-in">
      <div v-if="visible" class="flex items-center text-2xl search">
        <el-button circle icon="el-icon-back" class="mr-4" @click="visible = false"/>
        <el-input v-model="search" size="small" clearable prefix-icon="el-icon-search"
                  placeholder="搜索文章与问答"/>
      </div>
    </transition>
  </el-header>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  data() {
    return {
      title: "khaos论坛",
      search: "",
      searchBoxShow: true,
      visible: false,
      screenWidth: 0,
    }
  },
  props: {},
  watch: {
    'screenWidth'(val) {
      this.searchBoxShow = val >= 750;
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
      })();
    }
  },
})
export default class HelloWorld extends Vue {
}
</script>

<style lang="less">
@import "/src/assets/less/index.less";

.header .el-input__inner {
  border: none;
}

.header .el-input__inner:focus {
  border-bottom: 1px solid @mainColor;
}

.header .el-button--text {
  color: @mainTextColor;
}

.header .search .el-button {
  border: none;
  font-size: 2rem;
}
</style>
