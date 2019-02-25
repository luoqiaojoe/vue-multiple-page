<template>
    <div id="app">
       <cpn></cpn>
    </div>
</template>

<script>
import cpn from 'components/cpn.vue'

export default {
  name: 'app',
  components: { cpn }
}
</script>

<style>
#app {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
