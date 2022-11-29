<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter
},


}

</script>

<template>
  <div  >
    <AppHeader/>
    <div class="container mt-3 giao-dien">
      
      <router-view />
    </div>
    <AppFooter/>
  </div>
</template>
<style>
.page {
  max-width: 400px;
  margin: auto;
}
#ss{
  width: 100%;
}
.giao-dien{
 top: 100px;
 bottom: 150px;
 background: white;
 border-radius: 8px;
 padding: 80px;
}
</style>