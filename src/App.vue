<template>
  <div id="app">
    <div>
        MENU
        <Sidebar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  name: 'Seccion 1',
  components: {Sidebar}
}
</script>
<style>
.router-link-active{
    background-color:#000;
    color:#FFF

}
</style>