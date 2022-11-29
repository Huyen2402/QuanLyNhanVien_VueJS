<script>
export default {
    props: {
        contacts: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    }
};
</script>
<template>
   

    <table class="table table-striped">
    <thead>
      <tr>
       
        <th><b>Chức Vụ</b></th>
       
        <th><b>Thao Tác</b></th>
      </tr>
    </thead>
    <tbody >

    <tr  v-for="(contact, index) in contacts" :key="contact._id"
            :class="{ active: index === activeIndex }" >
      <td @click="updateActiveIndex(index)">
            {{ contact.name }}
    
      </td>
     
      <td>
        <router-link :to="{
                name: 'chucvu.edit',
                params: { id: contact._id },
                }">
                         <button type="button" class="btn btn-warning">Chỉnh Sửa</button>
                </router-link>
  
      </td>
      
    </tr>
      
    </tbody>
  </table>
</template>