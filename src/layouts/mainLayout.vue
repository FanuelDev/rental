<template>
  <a-layout class="bg-white">
    <nav class="navbar navbar-expand-sm navbar-light py-3">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/src/assets/img/logo.png" alt="" id="img-logo"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarID"
          aria-controls="navbarID"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-lg-flex justify-content-between"
          id="navbarID"
        >
          <div class="navbar-nav"></div>
          <div class="navbar-nav">
            <a class="nav-link mx-2 active" aria-current="page" href="#">Compagnies</a>
            <a class="nav-link mx-2 active" aria-current="page" href="#">Comment ça marche</a>
            <a class="nav-link mx-2 active" aria-current="page" href="#">Partenaires</a>
          </div>
          <div class="navbar-nav">
            <a class="nav-link mx-2 active btn btn-dark" aria-current="page" href="#">Reserver une voiture</a>
            <a class="nav-link mx-2 btn btn-outline-primary" aria-current="page" href="#">Se connecter</a>
          </div>
        </div>
      </div>
    </nav>
    <div class="container my-5">
        <router-view/>
    </div>
  </a-layout>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.bg-white {
  background-color: #fff !important;
}
</style>