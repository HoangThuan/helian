<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "admin@themesbrand.com",
      password: "123456",
      isProsses: false,
    };
  },
  methods: {
     signinapi() {
      this.isProsses = true;
      this.$swal({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      this.$router.push({
        path: '/home'
      });
      this.isProsses = false;
    },
  },
};
</script>
<template>
  <div class="login-pages">
    <div class="login-card">
      <div class="login-logo">
        <img src="@/assets/images/logo/logo-login.png" alt="" height="100" />
      </div>
      <form @submit.prevent="signinapi">
        <label>Email</label>
        <div className="login-field">
          <input type="text" className="login-input" v-model="email" />
        </div>
        <label>Password</label>
        <div className="login-field">
          <input type="password" className="login-input" v-model="password" />
        </div>

        <button className="login-submit" type="submit" :disabled="isProsses">
          <span className="button-text">{{
            isProsses ? "Pleawating..." : "Login"
          }}</span>
        </button>
      </form>
    </div>
  </div>
</template>
