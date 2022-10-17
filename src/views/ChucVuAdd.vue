<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import ContactService from '../services/chucvu.service.js'
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:contact", "create:contact"],
  props: {
    contact: { type: Object, required: true },
  },
  data() {
    const contactFormSchema = yup.object().shape({
      name: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),
     
        
    });
    return {
      contactFormSchema,
      name: '',
    
      message: '',
    };
  },
  methods: {   
    async createContact() {
      try {
         await ContactService.create({
            name: this.name,
          
        });
        this.message = "Thêm chức vụ mới thành công.";
      } catch (error) {
        console.log(error);
      }
    },
  },
};

</script>
<template >
  <div class="page">
    <h4>Thêm Chức Vụ Mới</h4>
    <Form @submit="createContact" :validation-schema="contactFormSchema">
      <div class="form-group">
        <label for="name">Tên Chức Vụ</label>
        <Field name="name" type="text" class="form-control" v-model="name"/>
        <ErrorMessage name="name" class="error-feedback" />
      </div>
      
<div class="form-group">
        <button class="btn btn-primary me-2"><i class="fa-solid fa-floppy-disk"></i> Lưu</button>
      </div>
      {{message}}
    </Form>
  </div>
</template>