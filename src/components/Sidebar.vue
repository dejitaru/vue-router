<template>
  <div style="padding:20px; margin-bottom:10px">
      <router-link to="/seccion1">Seccion 1</router-link>
      <router-link to="/seccion2">Seccion 2</router-link>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    msg: String
  }
}
</script>