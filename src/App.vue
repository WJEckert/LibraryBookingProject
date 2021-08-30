<template>
  <div id="app">
    <Header/>
    <LanguageHeader/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header"
import LanguageHeader from "./components/LanguageHeader";

export default {
  name: 'App',
  components: {
    Header, LanguageHeader
  }
}
</script>

<style>
@import './assets/styles/base.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
