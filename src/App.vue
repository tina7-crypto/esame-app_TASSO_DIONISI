<template>
  <b-container-fluid id="app">
    <div id="nav">
      <top-header></top-header>
      <!--       <router-link to="/">Home</router-link> |
              <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </b-container-fluid>
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";
export default {
  components: {
    "top-header": TopHeader
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: auto; 
}

#nav {
  margin: auto;
  padding: 10px 15px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: white;
}

#nav .text-cart {
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 20px;
  font-weight: bold;
  color: white;
}
</style>
