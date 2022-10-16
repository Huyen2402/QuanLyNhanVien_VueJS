<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <a href="/" class="navbar-brand">Ứng dụng Quản lý nhân viên</a>
        <ul class="navbar-nav ">
            <li class="nav-item ">
                <router-link class="nav-link" to="/nhanvien">{{ message1 }}</router-link>
             
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/phong">{{ message2 }}</router-link>
           
            </li>
            <li class="nav-item">
            
                <router-link class="nav-link" to="/chucVu">{{ message3 }}</router-link>
            </li>
            
        
        <li class="nav-item">
            
            <router-link class="nav-link" to="/">{{ message }}</router-link>
        </li>
        </ul>
        <!-- <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'contactbook' }" class="nav-link">
                    Danh bạ
                    <i class="fas fa-address-book"></i>
                </router-link>
            </li>
        </div> -->
    </nav>
</template>
<script>
var bien = localStorage.getItem('User')
 console.log(localStorage.getItem("User"))
 export default {
        data() {
            return {
                message: this.sayHello(),
                message1: this.sayHello1(),
                message2: this.sayHello2(),
                message3: this.sayHello3(),
            }
        },
        methods: {
            sayHello() {
                if(localStorage.getItem('User') != null){
                    return 'Đăng Xuất'
                }
                else{
                    return ''
                }
               
            },
            sayHello1() {
                if(localStorage.getItem('User') != null){
                    return 'Nhân Viên'
                }
                else{
                    return ''
                }
               
            },
            sayHello2() {
                if(localStorage.getItem('User') != null){
                    return 'Phòng Ban'
                }
                else{
                    return ''
                }
               
            },
            sayHello3() {
                if(localStorage.getItem('User') != null){
                    return 'Chức Vụ'
                }
                else{
                    return ''
                }
               
            }
        }
    }

</script>