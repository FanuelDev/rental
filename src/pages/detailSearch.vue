<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6">
        <img src="/src/assets/img/v2.png" class="img-fluid" alt="" />
      </div>
      <div class="col-md-6">
        <div class="p-4">
          <a-tag color="green">Disponible</a-tag>
          <a-tag color="blue">Climatisée</a-tag>
          <a-tag color="orange">Populaire</a-tag>

          <div class="d-flex justify-content-between align-items-end my-4">
            <div>
              <span class="text-decorate">Akfa Romeo | Guilla</span>
              <br />
              <h5>Veloce, 2024</h5>
              <!-- <a-rate v-model:value="value" allow-half /> -->
            </div>
            <div>
              <h5>300.000 XOF / Jour</h5>
            </div>
          </div>
          <div class="my-4">
            <a-row>
              <a-col :span="8">
                <a-statistic
                  title="Active Users"
                  :value="112893"
                  style="margin-right: 50px"
                />
              </a-col>
              <a-col :span="8">
                <a-statistic
                  title="Account Balance (CNY)"
                  :precision="2"
                  :value="112893"
                />
              </a-col>
              <a-col :span="8">
                <a-statistic
                  title="Active Users"
                  :value="112893"
                  style="margin-right: 50px"
                />
              </a-col>
            </a-row>
          </div>
          <div class="my-4">
            <div class="row">
              <div class="col-md-4">
                <small>Perfomence</small>
                <a-progress :percent="60" size="small" />
              </div>
              <div class="col-md-4">
                <small>Perfomence vitesse</small>
                <a-progress :percent="55" size="small" />
              </div>
              <div class="col-md-4">
                <small>Tout terrain</small>
                <a-progress :percent="75" size="small" />
              </div>
            </div>
          </div>
          <div class="my-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem corporis quasi quisquam consequatur! Doloremque ex
              velit dignissimos aliquid ratione sit temporibus, sed rerum
              impedit autem est possimus ad eos ipsam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem corporis quasi quisquam consequatur! Doloremque ex
              velit dignissimos aliquid ratione sit temporibus, sed rerum
              impedit autem est possimus ad eos ipsam.
            </p>
          </div>
          <div class="my-5">
            <button class="btn btn-dark mx-2">Reserver maintenant</button>
            <router-link to="/auth/register">
              <button class="btn btn-outline-primary mx-2">
                Créer un compte
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-md-12 py-4">
        <div class="d-flex justify-content-between align-items-center">
          <h4>Autres voitures que vous pouvez reservées</h4>
          <h6 class="text-primar">Voir tout</h6>
        </div>
        <div class="my-4 row">
          <div class="col-md-3 my-3">
            <router-link to="/search/1" class="a">
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
                      <h6>Veloce, 2024</h6>
                    </div>
                    <div>
                      <h6>150.000 XOF / Jour</h6>
                    </div>
                  </div>
                </a-card>
              </a-badge-ribbon>
            </router-link>
          </div>
          <div class="col-md-3 my-3">
            <router-link to="/search/2" class="a">
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
                      <h6>Veloce, 2024</h6>
                    </div>
                    <div>
                      <h6>300.000 XOF / Jour</h6>
                    </div>
                  </div>
                </a-card>
              </a-badge-ribbon>
            </router-link>
          </div>
          <div class="col-md-3 my-3">
            <router-link to="/search/3" class="a">
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
                      <h6>Veloce, 2024</h6>
                    </div>
                    <div>
                      <h6>150.000 XOF / Jour</h6>
                    </div>
                  </div>
                </a-card>
              </a-badge-ribbon>
            </router-link>
          </div>
          <div class="col-md-3 my-3">
            <router-link to="/search/4" class="a">
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
                      <h6>Veloce, 2024</h6>
                    </div>
                    <div>
                      <h6>150.000 XOF / Jour</h6>
                    </div>
                  </div>
                </a-card>
              </a-badge-ribbon>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <section class="top">
      <div class="container bg-banner2">
        <div class="row align-items-center">
          <div class="col-md-5"></div>
          <div class="col-md-6 text-center my-4">
            <h2 class="text-white">Conduisons avec un contrat aujourd'hui.</h2>
            <p class="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              saepe blanditiis dolor animi vitae ullam? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quas, delectus.
            </p>
            <div class="my-4">
              <button class="btn btn-primary px-4">
                Télécharger l'application mobile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const value = ref<number>(3.5);
</script>