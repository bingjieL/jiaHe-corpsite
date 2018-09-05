<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: MicrosoftYaHei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // widows: 100%;
  // height: 100%;
  background: #fff;
}
.clearfix:after {
  content: "";
  display: block;
  visibility: hidden;
  height: 0;
  clear: both;
}
.clearfix {
  zoom: 1;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #0d633c;
    }
  }
}
</style>
