<template>
  <section>
    <div class="my-5">
      <h1 class="text-center">
        Découvrez la plus grande place de marché de location & <br />
        d'échange de voitures au monde
      </h1>
    </div>
    <div class="my-4 row">
      <div class="col-md-8 offset-md-2">
        <div class="search-box">
          <div class="w-100 mx-2">
            <small>Type de vehicule</small>
            <a-select
              ref="select"
              v-model:value="value1"
              style="width: 100%"
              @change="handleChange"
            >
              <a-select-option value="Citadines">Citadines</a-select-option>
              <a-select-option value="Berlines">Berlines</a-select-option>
              <a-select-option value="SUV & 4x4">SUV & 4x4</a-select-option>
              <a-select-option value="Vans & Minibus"
                >Vans & Minibus</a-select-option
              >
              <a-select-option value="Voitures de Luxe"
                >Voitures de Luxe</a-select-option
              >
              <a-select-option value="Utilitaires">Utilitaires</a-select-option>
            </a-select>
          </div>
          <div class="w-100 mx-2">
            <small>Budget & Gamme</small>
            <a-select
              ref="select"
              v-model:value="value2"
              style="width: 100%"
              @change="handleChange"
            >
              <a-select-option value="Économique">Économique</a-select-option>
              <a-select-option value="Moyenne gamme"
                >Moyenne gamme</a-select-option
              >
              <a-select-option value="Haut de gamme"
                >Haut de gamme</a-select-option
              >
            </a-select>
          </div>
          <div class="w-100 mx-2">
            <small>Type d’Énergie</small>
            <a-select
              ref="select"
              v-model:value="value3"
              style="width: 100%"
              @change="handleChange"
            >
              <a-select-option value="Thermique (Essence/Diesel)"
                >Thermique (Essence/Diesel)</a-select-option
              >
              <a-select-option value="Hybride">Hybride</a-select-option>
              <a-select-option value="Électrique">Électrique</a-select-option>
            </a-select>
          </div>

          <button class="btn btn-primary btn-lg ml-4">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="my-4 row">
      <div class="col-md-10 offset-md-1">
        <img
          src="/src/assets/img/banner1.png"
          class="img-banner img-fluid"
          alt=""
        />
        <div class="scroller">
          <button class="btn btn-outline-primar">
            <i class="fa fa-arrow-down"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="top">
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <h1 class="text-center">
          consultez <br />
          notre marché
        </h1>
        <p class="text-center">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-md-4 p-5">
        <div class="card p-5 border-0 bg-blue-tr text-center">
          <div class="my-4 d-flex justify-content-center">
            <div class="rond">
              <h5><i class="fas fa-certificate"></i></h5>
            </div>
          </div>
          <h6>carte de crédit pas nécessaire</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            molestiae.
          </p>
        </div>
      </div>
      <div class="col-md-4 p-5">
        <div class="card p-5 border-0 bg-light-tr text-center">
          <div class="my-4 d-flex justify-content-center">
            <div class="rond">
              <h5><i class="far fa-chart-bar"></i></h5>
            </div>
          </div>
          <h6>enregistrement ultra rapide</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            molestiae.
          </p>
        </div>
      </div>
      <div class="col-md-4 p-5">
        <div class="card p-5 border-0 bg-orange-tr text-center">
          <div class="my-4 d-flex justify-content-center">
            <div class="rond">
              <h5><i class="fab fa-opencart"></i></h5>
            </div>
          </div>
          <h6>reservation et assurance</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            molestiae.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="my-5">
    <div class="row align-items-end">
      <div class="col-md-6 p-5">
        <h1 class="text-left">
          vos vehicules prêt pour <br />
          la reservation
        </h1>
      </div>
      <div class="col-md-6 p-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
          molestiae.
        </p>
      </div>
    </div>
    <div class="row my-4">
      <div class="col-md-12 d-lg-flex justify-content-center">
        <button class="btn btn-outline-primary mx-2">Citadines</button>
        <button class="btn btn-outline-primary mx-2">Berlines</button>
        <button class="btn btn-outline-primary mx-2">SUV & 4x4</button>
        <button class="btn btn-outline-primary mx-2">Vans & Minibus</button>
        <button class="btn btn-outline-primary active mx-2">
          Voitures de Luxe
        </button>
        <button class="btn btn-outline-primary mx-2">Utilitaires</button>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md-4 my-2">
        <img src="/src/assets/img/1.jpg" class="img-fluid img-voiture" alt="" />
      </div>
      <div class="col-md-4 my-2">
        <img src="/src/assets/img/2.jpg" class="img-fluid img-voiture" alt="" />
      </div>
      <div class="col-md-4 my-2">
        <img src="/src/assets/img/3.jpg" class="img-fluid img-voiture" alt="" />
      </div>
      <div class="col-md-3 my-2">
        <img
          src="/src/assets/img/4.jpg"
          class="img-fluid img-voiture1"
          alt=""
        />
      </div>
      <div class="col-md-3 my-2">
        <img
          src="/src/assets/img/5.jpg"
          class="img-fluid img-voiture1"
          alt=""
        />
      </div>
      <div class="col-md-3 my-2">
        <img
          src="/src/assets/img/6.jpg"
          class="img-fluid img-voiture1"
          alt=""
        />
      </div>
      <div class="col-md-3 my-2">
        <img
          src="/src/assets/img/7.jpg"
          class="img-fluid img-voiture1"
          alt=""
        />
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-outline-primary mx-2">
        Voir plus <i class="fa fa-arrow-right"></i>
      </button>
    </div>
  </section>

  <section class="top">
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <h1 class="text-center">
          Articles & Blogs
        </h1>
        <p class="text-center">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const value1 = ref("Citadines");
const value2 = ref("Économique");
const value3 = ref("Thermique (Essence/Diesel)");

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
</script>
