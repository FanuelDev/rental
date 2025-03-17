<template>
  <a-layout class="bg-white">
    <nav class="navbar navbar-expand-sm navbar-light bg-white py-3 sticky-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="/src/assets/img/logo.png" alt="" id="img-logo"
        /></router-link>
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
            <router-link class="nav-link mx-2 active" aria-current="page" to="#"
              >Compagnies</router-link
            >
            <router-link class="nav-link mx-2 active" aria-current="page" to="#"
              >Comment ça marche</router-link
            >
            <router-link class="nav-link mx-2 active" aria-current="page" to="#"
              >Partenaires</router-link
            >
          </div>
          <div class="navbar-nav">
            <router-link
              class="nav-link mx-2 active btn btn-dark"
              aria-current="page"
              to="/search"
              >Reserver une voiture</router-link
            >
            <router-link
              class="nav-link mx-2 btn btn-outline-primary"
              aria-current="page"
              to="#"
              >Se connecter</router-link
            >
          </div>
        </div>
      </div>
    </nav>
    <div class="container my-5">
      <router-view />
    </div>

    <footer class="mt-5 bg-light pt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <router-link class="navbar-brand" to="#">
              <img
                src="/src/assets/img/logo.png"
                alt=""
                class="img-fluid"
                id="img-logo1"
            /></router-link>
            <p class="mx-5 my-4 text-decorate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium deleniti commodi saepe molestias quam! Error ullam ex
              nostrum cumque accusantium praesentium, quos alias quis autem
              exercitationem velit, nesciunt laboriosam eum.
            </p>
            <p class="my-4 mx-5">
              <router-link to="" class="a mx-2"><i class="fab fa-facebook"></i></router-link>
              <router-link to="" class="a mx-2"><i class="fab fa-instagram"></i></router-link>
              <router-link to="" class="a mx-2"><i class="fab fa-linkedin"></i></router-link>
              <router-link to="" class="a mx-2"><i class="fab fa-whatsapp"></i></router-link>
            </p>
          </div>
          <div class="col-md-2 my-4">
            <h6>Categorie</h6>
            <ul>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
            </ul>
          </div>
          <div class="col-md-2 my-4">
            <h6>Liens utiles</h6>
            <ul>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
            </ul>
          </div>
          <div class="col-md-2 my-4">
            <h6>Liens rapides</h6>
            <ul>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
            </ul>
          </div>
          <div class="col-md-2 my-4">
            <h6>Help</h6>
            <ul>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
              <li><router-link to="">Lorem, ipsum.</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-primary pt-4 mt-4">
        <div
          class="container d-flex justify-content-between align-items-center text-white"
        >
          <p>&copy; Copyright by aaa-rental, 2025</p>
          <p>Tous droits reservés</p>
        </div>
      </div>
    </footer>
  </a-layout>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.bg-white {
  background-color: #fff !important;
}
</style>