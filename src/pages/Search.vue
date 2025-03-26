<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="bg-light p-4 brr">
          <div class="d-flex justify-content-between align-items-center">
            <h4>Filtres</h4>
            <h6 class="text-primar">Reset</h6>
          </div>
          <div class="my-4">
            <div class="w-100 py-4">
              <a-range-picker
                v-model:value="valueDate"
                show-time
                size="large"
              />
            </div>
            <div class="w-100 py-4">
              <h6 class="mb-4">Type de vehicule</h6>
              <a-checkbox-group
                v-model:value="state.checkedList"
                :options="plainOptions"
              />
            </div>

            <div class="w-100 py-4">
              <h6 class="mb-4">Gamme</h6>
              <a-checkbox-group
                v-model:value="state.checkedList"
                :options="gammeOptions"
              />
            </div>

            <div class="w-100 py-4">
              <h6 class="mb-4">Budget (XOF)</h6>
              <a-slider
                v-model:value="budget"
                :min="25000"
                :max="1000000"
                :step="1000"
                range
              />
            </div>

            <div class="w-100 py-4">
              <h6 class="mb-4">Type d’énergie</h6>
              <a-checkbox-group
                v-model:value="state.checkedList"
                :options="energieOptions"
              />
            </div>
            <div class="w-100 py-4">
              <h6 class="mb-4">Usage Spécifique</h6>
              <a-checkbox-group
                v-model:value="state.checkedList"
                :options="usageOptions"
              />
            </div>

            <div class="w-100 py-4">
              <h6 class="mb-4">Options & Équipements</h6>
              <div
                class="d-flex justify-content-between align-items-center my-3"
              >
                <span>Boîte automatique</span>
                <a-switch v-model:checked="checked" />
              </div>
              <div
                class="d-flex justify-content-between align-items-center my-3"
              >
                <span>Climatisation</span>
                <a-switch v-model:checked="checked1" />
              </div>
              <div
                class="d-flex justify-content-between align-items-center my-3"
              >
                <span>Nombre de places</span>
                <a-input-number
                  id="inputNumber"
                  v-model:value="place"
                  :min="2"
                  :max="45"
                />
              </div>
              <div
                class="d-flex justify-content-between align-items-center my-3"
              >
                <span>GPS intégré</span>
                <a-switch v-model:checked="checked2" />
              </div>
              <div
                class="d-flex justify-content-between align-items-center my-3"
              >
                <span>Siège bébé / Rehausseur</span>
                <a-switch v-model:checked="checked3" />
              </div>
              <div
                class="d-flex justify-content-between align-items-center my-3"
              >
                <span>Wi-Fi à bord</span>
                <a-switch v-model:checked="checked4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8 py-4">
        <div class="d-flex justify-content-between align-items-center">
          <h4>24 voitures trouvées</h4>
          <h6 class="text-primar">Voir tout</h6>
        </div>
        <div class="my-4 row">
          <div class="col-md-6 my-3">
            <a href="/search/1" class="a">
              <a-badge-ribbon text="Nouveauté" color="green">
                <a-card>
                  <a-tag color="green">Disponible</a-tag>
                  <a-tag color="blue">Climatisée</a-tag>
                  <div>
                    <img
                      src="/src/assets/img/v1.png"
                      class="img-fluid img-voiture3"
                      alt=""
                    />
                  </div>
                  <div class="d-flex justify-content-between align-items-end">
                    <div>
                      <span class="text-decorate">Akfa Romeo | Guilla</span>
                      <br />
                      <h5>Veloce, 2024</h5>
                    </div>
                    <div>
                      <h5>150.000 XOF / Jour</h5>
                    </div>
                  </div>
                </a-card>
              </a-badge-ribbon>
            </a>
          </div>
          <div class="col-md-6 my-3">
            <a href="/search/2" class="a">
              <a-badge-ribbon text="Populaire" color="blue">
                <a-card>
                  <a-tag color="green">Disponible</a-tag>
                  <a-tag color="blue">Climatisée</a-tag>
                  <div>
                    <img
                      src="/src/assets/img/v2.png"
                      class="img-fluid img-voiture3"
                      alt=""
                    />
                  </div>
                  <div class="d-flex justify-content-between align-items-end">
                    <div>
                      <span class="text-decorate">Akfa Romeo | Guilla</span>
                      <br />
                      <h5>Veloce, 2024</h5>
                    </div>
                    <div>
                      <h5>300.000 XOF / Jour</h5>
                    </div>
                  </div>
                </a-card>
              </a-badge-ribbon>
            </a>
          </div>
          <div class="col-md-6 my-3">
            <a href="/search/3" class="a">
              <a-badge-ribbon text="Populaire" color="blue">
                <a-card>
                  <a-tag color="green">Disponible</a-tag>
                  <a-tag color="blue">Climatisée</a-tag>
                  <div>
                    <img
                      src="/src/assets/img/v3.png"
                      class="img-fluid img-voiture3"
                      alt=""
                    />
                  </div>
                  <div class="d-flex justify-content-between align-items-end">
                    <div>
                      <span class="text-decorate">Akfa Romeo | Guilla</span>
                      <br />
                      <h5>Veloce, 2024</h5>
                    </div>
                    <div>
                      <h5>150.000 XOF / Jour</h5>
                    </div>
                  </div>
                </a-card>
              </a-badge-ribbon>
            </a>
          </div>
          <div class="col-md-6 my-3">
            <a href="/search/4" class="a">
              <a-badge-ribbon text="Voiture d'exeption" color="orange">
                <a-card>
                  <a-tag color="green">Disponible</a-tag>
                  <a-tag color="blue">Climatisée</a-tag>
                  <div>
                    <img
                      src="/src/assets/img/v4.png"
                      class="img-fluid img-voiture3"
                      alt=""
                    />
                  </div>
                  <div class="d-flex justify-content-between align-items-end">
                    <div>
                      <span class="text-decorate">Akfa Romeo | Guilla</span>
                      <br />
                      <h5>Veloce, 2024</h5>
                    </div>
                    <div>
                      <h5>150.000 XOF / Jour</h5>
                    </div>
                  </div>
                </a-card>
              </a-badge-ribbon>
            </a>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <a-pagination v-model:current="current" :total="500" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { Dayjs } from "dayjs";

const plainOptions = [
  "Citadines",
  "Berlines",
  "SUV & 4x4",
  "Vans & Minibus",
  "Voitures de Luxe",
  "Utilitaires",
];
const gammeOptions = ["Économique", "Moyenne gamme", "Haut de gamme"];
const energieOptions = ["Thermique (Essence/Diesel)", "Hybride", "Électrique"];
const usageOptions = [
  "Voiture avec Chauffeur",
  "Location longue durée ",
  "Voiture de Mariage & Événementiel",
  "Transport de Marchandises",
];

const current = ref<number>(1);

const budget = ref<[number, number]>([100000, 500000]);

const state = reactive({
  indeterminate: true,
  checkAll: false,
  checkedList: ["Citadines"],
});

const checked = ref<boolean>(false);
const checked1 = ref<boolean>(false);
const checked2 = ref<boolean>(false);
const checked3 = ref<boolean>(false);
const checked4 = ref<boolean>(false);

const place = ref<number>(2);

type RangeValue = [Dayjs, Dayjs];
const valueDate = ref<RangeValue>();

// const value1 = ref("Citadines");
// const value2 = ref("Économique");
// const value3 = ref("Thermique (Essence/Diesel)");

// const handleChange = (value: string) => {
//   console.log(`selected ${value}`);
// };
</script>