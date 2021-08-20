<template>
  <div class="quiz">
    <div v-if="selected.length !== 0" class="remove">
      <el-icon color="#409eff" size="20" style="cursor: pointer;">
        <delete-filled />
      </el-icon>
      <span class="hint">已选择{{ selected.length }}个项目</span>
    </div>
    <el-table :data="data" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelect" @row-click="rowClick">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="author" label="作者" width="120" />
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="attention" label="关注人数" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-space>
            <el-button icon="el-icon-paperclip" size="mini" circle @click="open('https://www.baidu.com')" />
            <el-button icon="el-icon-edit-outline" size="mini" circle @click="operation(scope.row, true)" />
            <el-popconfirm title="是否确定删除?" @confirm="operation(scope.row, false)">
              <template #reference>
                <el-button icon="el-icon-delete" size="mini" circle />
              </template>
            </el-popconfirm>
          </el-space>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="编辑话题" v-model="show" width="30%">
      <el-form :model="quiz">
        <el-form-item prop="title">
          <el-input v-model="quiz.title" size="small" />
        </el-form-item>
        <el-form-item prop="title">
          <el-space style="justify-content: space-between;">
            <el-space>
              <el-tag v-for="(type, index) in quiz.type" :key="index" closable type="info" effect="plain">{{ type }}</el-tag>
            </el-space>
            <el-button icon="el-icon-plus" size="mini" circle @click="innerShow = true"></el-button>
          </el-space>
        </el-form-item>
        <el-form-item prop="title">
          <el-input type="textarea" :rows="6" v-model="quiz.content" size="small" />
        </el-form-item>
        <el-form-item>
          <el-button size="small">发布</el-button>
        </el-form-item>
      </el-form>
      <el-dialog width="30%" title="请选择话题" v-model="innerShow" append-to-body>
        <div>
          <el-space>
            <el-tag v-for="(type, index) in quiz.type" :key="index" closable type="info" effect="plain">{{ type }}</el-tag>
          </el-space>
        </div>
        <el-divider></el-divider>
        <div>
          <div v-for="item in 5" :key="item" class="flex" style="justify-content: space-between; align-items: center;">
            <img src="" alt="头像" />
            <div class="flex flex-col flex-grow ml-2">
              <span>Golang</span>
              <span>Go/Golang技术分享</span>
            </div>
            <el-checkbox />
          </div>
        </div>
        <div style="text-align: right;">
          <el-button type="primary">确定</el-button>
        </div>
      </el-dialog>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { DeleteFilled } from "@element-plus/icons";
import { ElIcon } from "element-plus";

export default defineComponent({
  name: "quiz",
  components: {
    DeleteFilled,
    ElIcon,
  },
  setup(){
    const state = reactive({
      data: [
        {
          author: "Golang",
          title: "Go/Golang技术分享",
          attention: 1,
          img: ""
        },
        {
          author: "Golang",
          title: "Go/Golang技术分享",
          attention: 1,
          img: ""
        },
        {
          author: "Golang",
          title: "Go/Golang技术分享",
          attention: 1,
          img: ""
        },
        {
          author: "Golang",
          title: "Go/Golang技术分享",
          attention: 1,
          img: ""
        },
        {
          author: "Golang",
          title: "Go/Golang技术分享",
          attention: 1,
          img: ""
        }
      ],
      selected: [],
      show: false,
      innerShow: false,
      visible: false,
      quiz: {
        title: "",
        type: ["golang"],
        content: ""
      }
    });

    function handleSelect(selection: never){
      state.selected = selection;
    }

    function operation(row: Record<string, never>, status: boolean){
      console.log(row, status);
      if(status){
        state.show = true;
      }else{
        // 删除
      }
    }

    function open(url: string){
      window.open(url);
    }

    function rowClick(){
      state.show = true;
    }

    return {
      ...toRefs(state),
      handleSelect,
      operation,
      open,
      rowClick
    }
  }
})
</script>

<style lang="less" scoped>
.quiz{
  position: relative;
  .remove{
    width: calc(100% - 60px);
    height: 46px;
    line-height: 46px;
    position: absolute;
    top: 0;
    left: 60px;
    z-index: 1000;
    background: #fff;
    display: flex;
    align-items: center;
    .hint{
      color: #409EFF;
      margin-left: 10px;
    }
  }
  .attention{
    font-size: 12px;
  }
}
</style>