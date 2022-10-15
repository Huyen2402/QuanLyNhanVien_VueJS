<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import ContactService from '../services/contact.service.js'
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
      email: yup
        .string()
        .min(10, "Email phải ít nhất 10 ký tự.")
        .email("E-mail không đúng.")
        .max(50, "E-mail tối đa 50 ký tự."),
      address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự.").min(2, "Địa Chỉ phải ít nhất 2 ký tự."),
      phone: yup
        .string()
        .matches(
          /((09|03|07|08|05)+([0-9]{8})\b)/g,
          "Số điện thoại không hợp lệ."
        ),
        
    });
    return {
      contactFormSchema,
      name: '',
      email: '',
      address: '',
      phone: '',
      favorite: false,
      message: '',
    };
  },
  methods: {   
    async createContact() {
      try {
         await ContactService.create({
            name: this.name,
            email: this.email,
            address: this.address,
            phone: this.phone,
            favorite: this.favorite,
        });
        this.message = "Thêm liên hệ mới thành công.";
      } catch (error) {
        console.log(error);
      }
    },
  },
};

</script>
<template >
  <div class="page">
    <h4>Thêm liên hệ</h4>
    <Form @submit="createContact" :validation-schema="contactFormSchema">
      <div class="form-group">
        <label for="name">Tên</label>
        <Field name="name" type="text" class="form-control" v-model="name"/>
        <ErrorMessage name="name" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <Field name="email" type="text" class="form-control" v-model="email"/>
        <ErrorMessage name="email" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="address">Địa Chỉ</label>
        <Field name="address" type="text" class="form-control" v-model="address"/>
        <ErrorMessage name="address" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="phone">Số Điện Thoại</label>
        <Field name="phone" type="text" class="form-control" v-model="phone"/>
        <ErrorMessage name="phone" class="error-feedback" />
      </div>
      <div class="form-group form-check">
        <input name="favorite" type="checkbox" class="form-check-input" v-model="favorite"/>
        <label for="favorite" class="form-check-label">
          <strong>Liên Hệ Yêu Thích</strong>
        </label>
      </div>
<div class="form-group">
        <button class="btn btn-primary me-2"><i class="fa-solid fa-floppy-disk"></i> Lưu</button>
      </div>
      {{message}}
    </Form>
  </div>
</template>