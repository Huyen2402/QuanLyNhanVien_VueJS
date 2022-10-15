<template>
    <div class="page ">
        <!-- <div class="col-md-10">
            <InputSearch v-model="searchText" />
        </div> -->
        <!-- <div class="mt-3 col-md-6"> -->
            <h4>
                Thông Tin Phòng Ban
               
            </h4>
            <!-- <ContactList v-if="filteredContactsCount > 0" :contacts="filteredContacts"
                v-model:activeIndex="activeIndex" />
            <p v-else>Không có liên hệ nào.</p> -->
            
    <table class="table table-striped">
    <thead>
      <tr>
        <th>Tên Phòng</th>
     
        <th>Thao Tác</th>
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
                name: 'phong.edit',
                params: { id: contact._id },
                }">
                         <button type="button" class="btn btn-warning">Chỉnh Sửa</button>
                </router-link>
  
      </td>
      
    </tr>
      
    </tbody>
  </table>
            <div class="mt-3 row justify-content-around align-items-center">
               
                <button class="btn btn-sm btn-success" @click="goToAddContact">
                  
                    <i class="fas fa-plus"></i> Thêm mới
             
                  
                </button>
                <button class="btn btn-sm btn-danger" @click="removeAllContacts">
                    <i class="fas fa-trash"></i> Xóa tất cả
                </button>
            </div>
        <!-- </div> -->
        <!-- <div class="mt-3 col-md-6">
            <div v-if="activeContact">
                <h4>
                    Chi tiết Liên hệ
                    <i class="fas fa-address-card"></i>
                </h4>
                <ContactCard :contact="activeContact" />
                <router-link :to="{
                name: 'contact.edit',
                params: { id: activeContact._id },
                }">
                    <span class="mt-2 badge badge-warning">
                        <i class="fas fa-edit"></i> Hiệu chỉnh</span>
                </router-link>
            </div>
        </div> -->
    </div>
</template>
<script>
import ContactCard from "@/components/ContactCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import ContactList from "@/components/ContactList.vue";
import ContactService from "@/services/phong.service";
import contactService from "../services/contact.service";
export default {
    components: {
        ContactCard,
        InputSearch,
        ContactList,
    },
    data() {
        return {
            contacts: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        // Chuyển các đối tượng contact thành chuỗi để tiện cho tìm kiếm.
        contactStrings() {
            return this.contacts.map((contact) => {
                const { name} = contact;
                return [name].join("");
            });
        },
        // Trả về các contact có chứa thông tin cần tìm kiếm.
        filteredContacts() {
            if (!this.searchText) return this.contacts;
            return this.contacts.filter((_contact, index) =>
                this.contactStrings[index].includes(this.searchText)
            );
        },
        activeContact() {
            if (this.activeIndex < 0) return null;
            return this.filteredContacts[this.activeIndex];
        },
        filteredContactsCount() {
            return this.filteredContacts.length;
        },
    },
    methods: {
        async retrieveContacts() {
            try {
                this.contacts = await ContactService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveContacts();
            this.activeIndex = -1;
        },
        async removeAllContacts() {
            if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
                try {
                    await ContactService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        goToAddContact() {
            this.$router.push({ name: "phong.add" });
            
        },
    },
    mounted() {
        this.refreshList();
    },
};
    // Đoạn mã xử lý đầy đủ sẽ trình bày bên dưới


</script>


<style scoped>
.page {
    text-align: left;
    max-width: 750px;
}
</style>