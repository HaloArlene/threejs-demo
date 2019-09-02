<template>
  <div>
    <a-breadcrumb style="margin: 12px 0">
      <a-breadcrumb-item>Demos</a-breadcrumb-item>
      <a-breadcrumb-item>Vue-I18n Demo</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="main-page">
      <h1>{{ $t('title') }}</h1>
      <h2>{{ $t('hello') }}</h2>
      <p>{{ $t('welcomeMsg') }}</p>
      <label>
        {{ $t('language') }}
        <select v-model="lang" @change="localeChange">
          <option value="zh">中文</option>
          <option value="en">English</option>
        </select>
      </label>

      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="Note" :label-col="{span: 5}" :wrapper-col="{span: 12}">
          <a-input v-decorator="decorators.note"/>
        </a-form-item>
        <a-form-item label="Gender" :label-col="{span: 5}" :wrapper-col="{span: 12}">
          <a-select v-decorator="decorators.gender" placeholder="Select a option and change input text above">
            <a-select-option value="male">male</a-select-option>
            <a-select-option value="female">female</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :wrapper-col="{span: 12, offset: 5}">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                lang: localStorage.getItem('locale') || 'zh',
                form: this.$form.createForm(this),
                decorators: {
                    note: ['note', {rules: [{required: true, message: 'Please input your note!'}]}],
                    gender: ['gender', {rules: [{required: true, message: 'Please select your gender!'}]}]
                },
                formValues: {
                    note: 'Hello guys',
                    gender: 'male'
                }
            }
        },
        mounted() {
            this.form.setFieldsValue(this.formValues);
        },
        methods: {
            localeChange(e) {
                const lang = e.target.value;
                localStorage.setItem('locale', lang);
                this.$i18n.locale = lang;
            },
            handleSubmit() {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
