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