<template>
  <div class="topic">
    <div v-if="selected.length !== 0" class="remove">
      <el-icon color="#409eff" size="20" style="cursor: pointer;">
        <delete-filled />
      </el-icon>
      <span class="hint">已选择{{ selected.length }}个项目</span>
    </div>
    <el-table :data="data" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelect" @row-click="rowClick">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="name" label="名称" width="120" />
      <el-table-column prop="desc" label="描述" />
      <el-table-column prop="attention" label="关注人数" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-space>
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
    <div class="affix">
      <el-button type="primary" icon="el-icon-plus" circle @click="addTopic" />
    </div>

    <el-dialog :title="status ? '添加话题' : '编辑话题'" v-model="show" width="30%">
      <el-form label-position="top" label-width="80px" :model="topic">
        <el-form-item label="话题名称">
          <el-input v-model="topic.name" size="small"/>
        </el-form-item>
        <el-form-item label="话题描述">
          <el-input v-model="topic.desc" size="small"/>
        </el-form-item>
        <el-form-item label="封面图片">
            <el-upload
                class="avatar-uploader"
                :show-file-list="false"
                :before-upload="beforeAvatarUpload"
            >
              <img v-if="topic.img" :src="topic.img" class="avatar" alt="" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { DeleteFilled } from "@element-plus/icons";
import { ElIcon } from "element-plus";

export default defineComponent({
  name: "topic",
  components: {
    DeleteFilled,
    ElIcon
  },
  setup(){
    const state = reactive({
      data: [
        {
          name: "Golang",
          desc: "Go/Golang技术分享",
          attention: 1,
          img: ""
        },
        {
          name: "Golang",
          desc: "Go/Golang技术分享",
          attention: 1,
          img: ""
        },
        {
          name: "Golang",
          desc: "Go/Golang技术分享",
          attention: 1,
          img: ""
        },
        {
          name: "Golang",
          desc: "Go/Golang技术分享",
          attention: 1,
          img: ""
        },
        {
          name: "Golang",
          desc: "Go/Golang技术分享",
          attention: 1,
          img: ""
        }
      ],
      selected: [],
      show: false,
      status: true,
      topic: {
        name: "",
        desc: "",
        img: ""
      }
    });

    function handleSelect(selection: never){
      state.selected = selection;
    }

    function operation(row: Record<string, never>, status: boolean){
      if(status){
        // 修改
        state.status = false;
        state.topic = {
          name: row.name,
          desc: row.desc,
          img: row.img
        }
        state.show = true;
      }else{
        // 删除
      }
    }

    function beforeAvatarUpload(){
      return false
    }

    function addTopic(){
      state.status = true;
      state.topic = {
        name: "",
        desc: "",
        img: ""
      };
      state.show = true;
    }

    function rowClick(){
      state.show = true;
    }

    return {
      ...toRefs(state),
      handleSelect,
      operation,
      beforeAvatarUpload,
      addTopic,
      rowClick
    }
  }
})
</script>

<style lang="less" scoped>
.topic{
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
  .affix{
    position: fixed;
    bottom: 25px;
    right: 25px;
  }
}
</style>