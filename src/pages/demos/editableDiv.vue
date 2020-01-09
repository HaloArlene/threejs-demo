<template>
  <div class="demo-editable-div">
    <breadcrumb :crumbs="['Demos', 'Editable Div']"/>
    <div class="main-page">

      <com-editor ref="comEditor" :maxlength="200" :placeholder="'请输入内容...'" :showRemain="true"
                  @textChange="contentChange"/>

      <a-popover trigger="click" placement="bottomLeft" v-model="facesVisible">
        <a-button class="icon-button face-btn" @click="faceBtnClick">
          <i class="iconfont icon-face"/>
        </a-button>

        <div class="face-selector" slot="content">
          <span class="face-item" v-for="(face, i) in faces" :key="'face' + i"
                :style="{backgroundImage: `url(${face.image})`}" @click="selectFace(face)"/>
        </div>
      </a-popover>

      <div class="display-content" v-html="layoutHtml"></div>

      <div class="content-layout" v-html="layoutContent"></div>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from "../../components/breadcrumb";
  import ComEditor from "../../components/com-editor";
  import {faces} from "../../assets/faces";

  export default {
    components: {ComEditor, Breadcrumb},
    data() {
      return {
        faces,
        facesVisible: false,
        layoutHtml: '',
        layoutContent: ''
      }
    },
    methods: {
      contentChange(content) {
        this.layoutContent = content.content;
        this.layoutHtml = content.innerHTML;
      },
      faceBtnClick() {
        this.$refs['comEditor'].focusInput();
      },
      selectFace(face) {
        const img = document.createElement('img');
        img.src = face.image;
        img.setAttribute('mark', face.text);
        this.$refs['comEditor'].insertContent(img);
      }
    }
  }
</script>

<style lang="less">
  .demo-editable-div {

    .face-btn {
      margin-top: 10px;
      height: 20px;
    }

    .icon-face {
      font-size: 20px;
    }

    .display-content {
      margin-top: 60px;
      line-height: 20px;

      img {
        height: 20px;
        width: 20px;
        line-height: 20px;
        display: inline;
        vertical-align: middle;
      }
    }

    .content-layout {
      margin-top: 20px;
    }
  }

  .face-selector {
    height: 20px;

    .face-item {
      width: 20px;
      height: 20px;
      display: inline-block;
      background-size: 100%;
      background-position: center;
      margin-right: 10px;
      cursor: pointer;
    }
  }
</style>
