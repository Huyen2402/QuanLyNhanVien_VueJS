<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
        <a href="/" class="navbar-brand">Ứng dụng Quản lý nhân viên</a>
        <ul class="navbar-nav ">
            <li class="nav-item ">
                <router-link class="nav-link" to="/">Nhân Viên</router-link>
             
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/phong">Phòng Ban</router-link>
           
            </li>
            <li class="nav-item">
            
                <router-link class="nav-link" to="/chucVu">Chức Vụ</router-link>
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