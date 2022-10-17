<template>
    <div v-if="contact" class="page">
        <h4>Chỉnh Sửa Chức Vụ</h4>
        <ContactForm :contact="contact" @submit:contact="updateContact" @delete:contact="deleteContact" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import ContactForm from "@/components/PhongForm.vue";
import ContactService from "@/services/chucvu.service";
export default {
    components: {
        ContactForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            contact: null,
            message: "",
        };
    },
    methods: {
        async getContact(id) {
            try {
                this.contact = await ContactService.get(id);
            } catch (error) {
                console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
        async updateContact(data) {
            try {
                await ContactService.update(this.contact._id, data);
                this.message = "Chức Vụ được cập nhật thành công.";
            } catch (error) {
                console.log(error);
            }
        },
        async deleteContact() {
            if (confirm("Bạn muốn xóa chức vụ này?")) {
                try {
                    await ContactService.delete(this.contact._id);
                    this.$router.push({ name: "chucvu" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    created() {
        this.getContact(this.id);
        this.message = "";
    },
};
</script>