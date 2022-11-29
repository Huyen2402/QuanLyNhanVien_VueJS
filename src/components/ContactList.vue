

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
        },
       
    }
};
</script>
<template>
   

   
      <table class="table table-striped">
    <thead>
      <tr>
        <th><b>Họ Tên</b></th>
        <th><b>Chức Vụ</b></th>
        <th><b>Phòng Ban</b></th>
        <th><b>Email</b></th>
        <th><b>Địa Chỉ</b></th>
        <th><b>SDT</b></th>
        <th><b>Thao Tác</b></th>
      </tr>
    </thead>
    <tbody >

    <tr  v-for="(contact, index) in contacts" :key="contact._id"
            :class="{ active: index === activeIndex }" >
      <td @click="updateActiveIndex(index)">
            {{ contact.name }}
    
      </td>
      <td  @click="updateActiveIndex(index)">
            {{ contact.chucVu }}
    
      </td>
      <td  @click="updateActiveIndex(index)">
            {{ contact.phong }}
    
      </td>
      <td  @click="updateActiveIndex(index)">
            {{ contact.email }}
    
      </td>
      <td  @click="updateActiveIndex(index)">
            {{ contact.address }}
    
      </td>
      <td  @click="updateActiveIndex(index)">
            {{ contact.phone }}
    
      </td>
      <td>
        <router-link :to="{
                name: 'contact.edit',
                params: { id: contact._id },
                }">
                         <button  class="btn btn-warning">Chỉnh Sửa</button> 
                </router-link>
              
      </td>
      
    </tr>
      
    </tbody>
  </table>
 
</template>