<template>
  <div class="login row justify-content-center">
    <div class="col-md-6">
      <div class="card p-3">
        <div class="card-heder">
          <h2 class="text-center">Login</h2>
        </div>
        <div class="alert alert-danger" role="alert" v-if="errorMessage">{{errorMessage}}</div>
        <div class="card-body">
          <form @submit.prevent="submitData">
            <div class="form-group row">
              <label for>Username</label>
              <input type="text" name="username" class="form-control" v-model="form.username" />
            </div>
            <div class="form-group row">
              <label for>Password</label>
              <input type="password" name="password" id class="form-control" v-model="form.pass" />
            </div>
            <div class="form-group row">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        username: "",
        pass: ""
      }
    };
  },
  computed: {
    errorMessage() {
      return this.$store.getters.getError("login");
    }
  },
  methods: {
    submitData() {
      this.$store.dispatch("loginAction", this.form);
      // .then(() => this.$router.push("/"))
      // .catch(err => console.log("err login", err));
    }
  }
};
</script>

<style lang="stylus"></style>