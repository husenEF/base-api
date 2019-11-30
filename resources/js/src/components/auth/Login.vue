<template>
  <div class="login row justify-content-center">
    <div class="col-md-6">
      <div class="card p-3">
        <div class="card-heder">
          <h2 class="text-center">Login</h2>
        </div>
        <div class="card-body">
          <form action>
            <div class="form-group row">
              <label for>Username</label>
              <input type="text" name="username" class="form-control" />
            </div>
            <div class="form-group row">
              <label for>Password</label>
              <input type="password" name="password" id class="form-control" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage"
};
</script>

<style lang="stylus"></style>