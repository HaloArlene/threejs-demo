<template>
  <div class="hello">
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
    <router-link to="/vuexDemo">VuexDemo</router-link>
  </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                lang: localStorage.getItem('locale'),
            }
        },
        methods: {
            localeChange(e) {
                const lang = e.target.value;
                localStorage.setItem('locale', lang);
                this.$i18n.locale = lang;
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
