<template>
  <a-layout class="bg-white">
    <nav class="navbar navbar-expand-sm navbar-light bg-white py-3 sticky-top">
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
            <a class="nav-link mx-2 active" aria-current="page" href="#"
              >Compagnies</a
            >
            <a class="nav-link mx-2 active" aria-current="page" href="#"
              >Comment ça marche</a
            >
            <a class="nav-link mx-2 active" aria-current="page" href="#"
              >Partenaires</a
            >
          </div>
          <div class="navbar-nav">
            <a
              class="nav-link mx-2 active btn btn-dark"
              aria-current="page"
              href="#"
              >Reserver une voiture</a
            >
            <a
              class="nav-link mx-2 btn btn-outline-primary"
              aria-current="page"
              href="#"
              >Se connecter</a
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
            <a class="navbar-brand" href="#">
              <img
                src="/src/assets/img/logo.png"
                alt=""
                class="img-fluid"
                id="img-logo1"
            /></a>
            <p class="mx-5 my-4 text-decorate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium deleniti commodi saepe molestias quam! Error ullam ex
              nostrum cumque accusantium praesentium, quos alias quis autem
              exercitationem velit, nesciunt laboriosam eum.
            </p>
            <p class="my-4 mx-5">
              <a href="" class="a mx-2"><i class="fab fa-facebook"></i></a>
              <a href="" class="a mx-2"><i class="fab fa-instagram"></i></a>
              <a href="" class="a mx-2"><i class="fab fa-linkedin"></i></a>
              <a href="" class="a mx-2"><i class="fab fa-whatsapp"></i></a>
            </p>
          </div>
          <div class="col-md-2 my-4">
            <h6>Categorie</h6>
            <ul>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
            </ul>
          </div>
          <div class="col-md-2 my-4">
            <h6>Liens utiles</h6>
            <ul>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
            </ul>
          </div>
          <div class="col-md-2 my-4">
            <h6>Liens rapides</h6>
            <ul>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
            </ul>
          </div>
          <div class="col-md-2 my-4">
            <h6>Help</h6>
            <ul>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
              <li><a href="">Lorem, ipsum.</a></li>
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