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
        <th>Họ Tên</th>
        <th>Chức Vụ</th>
        <th>Email</th>
        <th>SDT</th>
        <th>Thao Tác</th>
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
            {{ contact.email }}
    
      </td>
      <td  @click="updateActiveIndex(index)">
            {{ contact.phone }}
    
      </td>
      <td>
        <router-link :to="{
                name: 'contact.edit',
                params: { id: contact._id },
                }">
                         <button type="button" class="btn btn-warning">Chỉnh Sửa</button>
                </router-link>
  
      </td>
      
    </tr>
      
    </tbody>
  </table>
</template>