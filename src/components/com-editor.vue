<template>
  <div class="comp-comment-editor">
    <div ref="editableDiv"
         :class="['comp-editable-div', editable && !disabled ? 'read-write' : '', disabled ? 'disabled' : '']"
         :placeholder="placeholder" @blur="whenBlur"></div>
    <span :class="['text-remain', totalCount > 0 && !disabled ? 'base-blue' : '']">
        {{ showRemain || init ? maxlength - totalCount : totalCount }}
    </span>
  </div>
</template>

<script>
  export default {
    props: ['placeholder', 'maxlength', 'disabled', 'showRemain'],
    data() {
      return {
        editable: true,
        lastRange: null,
        textLength: 0,
        faceCount: 0,
        editorInner: '',
        init: true
      }
    },
    computed: {
      totalCount() {
        return this.textLength + this.faceCount;
      }
    },
    watch: {
      totalCount: function (val) {
        if (val > 0) this.init = false;

        const editor = this.$refs['editableDiv'];

        if (val === this.maxlength) {
          this.editorInner = editor.innerHTML;
        }

        if (val > this.maxlength) {
          editor.innerHTML = this.editorInner;
          const range = document.createRange();
          range.selectNodeContents(editor);
          range.collapse(false);
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
    },
    mounted() {
      this.$refs['editableDiv'].addEventListener('DOMSubtreeModified', () => {
        this.emitContentChange();
      });
    },
    methods: {
      whenBlur() {  //失去光标时记录光标位置
        const selection = window.getSelection();
        this.lastRange = selection.getRangeAt(0);
      },
      insertContent(html) { //在光标位置插入DOM元素
        if (this.maxlength <= this.totalCount) return;
        const editor = this.$refs['editableDiv'];
        editor.focus();
        const selection = window.getSelection();
        if (!this.lastRange) {
          editor.appendChild(html);
          const ran = document.createRange();
          ran.collapse(true);
          selection.removeAllRanges();
          selection.addRange(ran);
        } else {
          selection.removeAllRanges();
          const range = this.lastRange;
          selection.addRange(range);
          const div = document.createElement('div');
          div.appendChild(html);
          const frag = document.createDocumentFragment();
          let node, lastNode;
          while ((node = div.firstChild)) {
            lastNode = frag.appendChild(node);
          }
          range.insertNode(frag);
          if (lastNode) {
            const newRange = range.cloneRange();
            newRange.setStartAfter(lastNode);
            newRange.collapse(true);
            selection.removeAllRanges();
            selection.addRange(newRange);
          }
        }
      },
      emitContentChange() { //触发内容改变事件
        this.$emit('textChange', this.createContent());
      },
      createContent() { //转换文本内容
        const nodes = this.$refs['editableDiv'].childNodes;
        let txt = '', imgCount = 0;
        const content = Array.from(nodes).map(node => {
          if (node.nodeName === '#text') {
            if (node.nextSibling && node.nextSibling.nodeName === '#text') {
              return null;
            }
            txt += node.wholeText;
            return node.wholeText;
          }
          if (node.nodeName === 'IMG') {
            imgCount++;
            return node.attributes[1].value;
          }
        }).filter(item => item !== null).join('');
        this.textLength = txt.length;
        this.faceCount = imgCount;
        return {
          content,
          contentLength: this.textLength + this.faceCount,
          innerHTML: this.$refs['editableDiv'].innerHTML
        };
      },
      clearInnerContent() { //清空内容
        const editor = this.$refs['editableDiv'];
        Array.from(editor.childNodes).forEach(child => child.remove());
        this.textLength = 0;
        this.faceCount = 0;
      },
      focusInput() {
        this.$refs['editableDiv'].focus();
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/styles/variables";

  .comp-comment-editor {
    width: 100%;
    position: relative;

    .text-remain {
      display: block;
      position: absolute;
      bottom: 15px;
      right: 12px;
      color: @base_grey;
      font-size: @small;

      &.base-blue {
        color: @base_blue;
      }
    }
  }

  .comp-editable-div {
    width: 100%;
    line-height: 20px;
    font-size: @small;
    background-color: @white;
    padding: 15px 41px 15px 15px;
    border: 1px solid @base_grey;
    border-radius: 4px;
    height: auto;
    z-index: 200;
    outline: none;
    white-space: inherit;
    word-wrap: break-word;
    word-break: normal;

    &.read-write {
      user-modify: read-write-plaintext-only;
      -webkit-user-modify: read-write-plaintext-only;
    }

    &.disabled {
      color: @base_grey;
    }

    &:empty:before {
      content: attr(placeholder);
      color: @base_grey;
    }

    img {
      width: 20px;
      height: 20px;
      line-height: 20px;
      display: inline-block;
      vertical-align: middle;
    }
  }
</style>
