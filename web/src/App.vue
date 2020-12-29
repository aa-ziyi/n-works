<template>
  <div id="app">
    <a @click="handleDown">
     下载模版
    </a>
  </div>
</template>

<script>
import * as simpleGit from 'simple-git/promise';
import * as path from 'path';
export default {
  name: 'App',
  components: {

  },
  created() {
  },
  methods:{
    handleDown() {
      let localsrc = path.join('/Users/koci/project/git-test','daydayup');
      console.log(localsrc);
      console.log(simpleGit());
      // simpleGit().clone('https://github.com:aa-ziyi/daydayup.git',['/Users/koci/project/git-test']).then((res)=>{
      //   console.log(res);
      // })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
