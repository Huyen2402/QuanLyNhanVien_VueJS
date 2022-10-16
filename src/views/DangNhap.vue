<script>


import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import TaiKhoanService from '../services/taikhoan.service.js'

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
            username: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            password: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),


        });
        return {
            contactFormSchema,
            username: '',
            password: '',

        };
    },
    methods: {
        async loginContact() {
            try {
                await TaiKhoanService.login({
                    username: this.username,
                    password: this.password,

                });
                const ckeck = await TaiKhoanService.login({
                    username: this.username,
                    password: this.password,

                });
                console.log(ckeck);
                localStorage['User'] = ckeck.message;
                var website =localStorage.getItem('User');
                console.log(website);
                 this.$router.push('/nhanvien')


                this.message = "Đăng nhập thành công.";
            } catch (error) {
                console.log(error);
                this.message = "Đăng nhập thất bại.";
            }
        },
    },
};
</script>

<template>
    <div class="sidenav">
        <div class="login-main-text">
            <h2>Ứng dụng Quản lý nhân viên</h2>
            <p>Vui lòng đăng nhập để có thể thao tác.</p>
        </div>
    </div>
    <div class="main">
        <div class="col-md-6 col-sm-12">
            <div class="login-form">

                <Form @submit="loginContact" :validation-schema="contactFormSchema">
                    <div class="form-group">
                        <label for="username">User Name</label>
                        <Field name="username" type="text" class="form-control" v-model="username"
                            placeholder="User Name" />
                        <ErrorMessage name="username" class="error-feedback" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <Field name="password" type="text" class="form-control" v-model="password"
                            placeholder="Password" />
                        <ErrorMessage name="password" class="error-feedback" />
                    </div>

                    <div class="form-group">
                        <button class="btn btn-black">Đăng nhập</button>
                    </div>
                    {{message}}
                </Form>
            </div>
        </div>
    </div>
</template>
<style>
body {
    font-family: "Lato", sans-serif;
}



.main-head {
    height: 150px;
    background: #FFF;

}

.sidenav {
    height: 100%;
    background-color: #000;
    overflow-x: hidden;
    padding-top: 20px;
}


.main {
    padding: 0px 10px;
}

@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }
}

@media screen and (max-width: 450px) {
    .login-form {
        margin-top: 10%;
    }

    .register-form {
        margin-top: 10%;
    }
}

@media screen and (min-width: 768px) {
    .main {
        margin-left: 40%;
    }

    .sidenav {
        width: 40%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
    }

    .login-form {
        margin-top: 80%;
    }

    .register-form {
        margin-top: 20%;
    }
}


.login-main-text {
    margin-top: 20%;
    padding: 60px;
    color: #fff;
}

.login-main-text h2 {
    font-weight: 300;
}

.btn-black {
    background-color: #000 !important;
    color: #fff;
}
</style>
