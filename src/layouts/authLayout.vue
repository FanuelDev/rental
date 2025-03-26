<template>
  <div class="d-flex justify-content-between">
    <div>
      <div class="p-5">
        <a class="navbar-brand" href="/">
          <img src="/src/assets/img/logo.png" alt="" id="img-logo" />
        </a>
      </div>
      <div class="p-5" style="width: 450px">
        <router-view />
      </div>
      <div class="mx-5" style="position: absolute; bottom: 25px">
        <small>&copy; Copyright by aaa-rental</small>
      </div>
    </div>
    <div class="banner w-70"></div>
  </div>
</template>


<script lang="ts" setup>
</script>

<style scoped>
.bg-white {
  background-color: #fff !important;
}
</style>