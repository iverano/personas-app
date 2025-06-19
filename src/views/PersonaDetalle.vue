<template>
    <div v-if="personajeDetalle" class="personaje col-6 d-flex justify-content-center flex-column p-3">
        <img :src="personajeDetalle.image" alt="Image" />
        <h2>{{ personajeDetalle.name }}</h2>
        <ul>
            <li><strong>{{ $t('especie') }}: </strong> {{ personajeDetalle.species }}</li>
            <li><strong>{{ $t('estado') }}: </strong>{{ personajeDetalle.status }}</li>
            <li><strong>{{ $t('genero') }}: </strong>{{ personajeDetalle.gender }}</li>
            <li><strong>{{ $t('origen') }}: </strong>{{ personajeDetalle.origin?.name }}</li>
            <li><strong>{{ $t('ubicacion') }}: </strong>{{ personajeDetalle.location?.name }}</li>
            <li><strong>{{ $t('creado') }}: </strong>{{ personajeDetalle.created }}</li>
        </ul>
        <div class="d-grid gap-2 d-md-flex justify-content-center">
          <router-link to="/" class="btn btn-primary col-6">
              {{ $t('volver') }}
          </router-link>
        </div>
    </div>
</template>

<script>
import { personajesStore } from '../stores/dataPersonajes'

export default {
    name: 'PersonaDetalle',
    props: ['id'],
    data() {
      return {
        personaje: null,
      }
    },
    computed: {
      personajesStore() {
        return personajesStore();
      },
      personajeDetalle() {
        return this.personajesStore.personajeDetalle;
      }
    },
     mounted() {
      this.personajesStore.getPersonajeId(this.id);
    },
}
</script>

<style scoped>
    .personaje {
        border: 1px solid #fff;
        max-width: 400px;
        margin: 0 auto;
    }
    .favorito {
        border: 1px solid #62a969;
        background: #c1e1c4;
        color: #232121;
    }
    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        text-align: center;
    }
</style>
