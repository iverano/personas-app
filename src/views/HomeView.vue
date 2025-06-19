<script>
import Persona from '../components/Persona.vue';
import { personajesStore } from '../stores/dataPersonajes'

  export default {
    name: 'App',
    data() {
        return {
            showDetalle: null,
            favorito: [],
        };
    },
    components: {
        Persona,
    },
    computed: {
      personajesStore() {
        return personajesStore();
      },
      personajes() {
        return this.personajesStore.personajes;
      }
    },
    mounted() {
      this.personajesStore.getPersonajes();
    },
    methods: {
        verDetalle(personaje) {
            const index = this.personajes.findIndex(p => p.id === personaje.id);
            if (index !== -1) {
                this.showDetalle = this.personajes[index];
            } else {
                console.error('Personaje no encontrado:', personaje);
            }
            console.log(this.showDetalle);
        },
        toogleFavorito(personaje) {
            const index = this.favorito.findIndex(p => p.id === personaje.id);
            if (index !== -1) {
                this.favorito.splice(index, 1);
            } else {
                this.favorito.push(personaje);
            }
            localStorage.setItem('favorito', JSON.stringify(this.favorito));
        },
        isfavorito(personaje) {
            return this.favorito.some(p => p.id === personaje.id);
        },
        previewPage() {
          this.personajesStore.previewPage();
        },
        nextPage() {
          this.personajesStore.nextPage();
        },
        buscarPersona() {
          setTimeout(() => {
            this.personajesStore.setBusqueda(this.personaSearch.trim());
          }, 300)
        }
    }
  }
</script>

<template>
  <div class="container">
    <h1 class="text-center">{{ $t('titulo') }}</h1>
    <div class="row mt-4 buscador">
      <input type="text" v-model="personaSearch" @input="buscarPersona" placeholder="Ingrese el nombre del personaje" class="form-control"  />
    </div>
    <div class="row mt-4">
      <Persona
        v-for="personaje in personajes"
        :key="personaje.id"
        :personaje="personaje"
        @detalle="verDetalle(personaje)"
        @toogle="toogleFavorito(personaje)"
        :favorito="isfavorito(personaje)" />
    </div>
    <div class="row">
      <div class="paginacion d-flex mt-5">
        <button class="btn btn-outline-primary" @click="previewPage" :disabled="personajesStore.page === 1">
          {{ $t('anterior') }}
        </button>
        <span>{{ $t('pagina') }} {{ personajesStore.page }}</span>
        <button class="btn btn-outline-primary" @click="nextPage">
           {{ $t('siguiente') }}
        </button>
      </div>
      <div v-if="showDetalle" class="col-md-12">
        <h2>Detalle de {{ showDetalle.name }}</h2>
        <img :src="showDetalle.image" alt="Image" />
        <p><strong>{{ $t('estado') }}:</strong> {{ showDetalle.status }}</p>
        <p><strong>{{ $t('especie') }}:</strong> {{ showDetalle.species }}</p>
      </div>
    </div>  
  </div>
</template>

<style scoped>
  .paginacion {
    width: 100%;
    justify-content: space-between;
  }
</style>