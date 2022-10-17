import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
   {
   path: "/nhanvien",
    name: "contactbook",
    component: ContactBook,
  },
  {
    path: "/phong",
    name:"phong",
    component: () => import("@/views/Phong.vue"),
  },
  {
    path: "/chucvu",
    name: "chucvu",
    component: () => import("@/views/ChucVu.vue"),
 
  },
  // {
  //   path: "/chucVu",
  //    name: "chucvu",
  //    component: ChucVu,
  //  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: "/contacts/:id",
    name: "contact.edit",
    component: () => import("@/views/ContactEdit.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },
  {
    path: "/chucvus/:id",
    name: "chucvu.edit",
    component: () => import("@/views/ChucVuEdit.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },
  {
    path: "/contactsAdd",
    name: "contact.add",
    component: () => import("@/views/ContactAdd.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },
  {
    path: "/ChucVuAdd",
    name: "chucvu.add",
    component: () => import("@/views/ChucVuAdd.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },
  {
    path: "/PhongAdd",
    name: "phong.add",
    component: () => import("@/views/PhongAdd.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },
  {
    path: "/PhongEdit/:id",
    name: "phong.edit",
    component: () => import("@/views/PhongEdit.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },
  {
    path: "/",
    name: "dangnhap",
    component: () => import("@/views/DangNhap.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },

];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
