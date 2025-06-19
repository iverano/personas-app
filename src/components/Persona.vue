<template>
        <div :class="{favorito}" class="personaje col-md-3 d-flex justify-content-center flex-column p-3">
            <img :src="personaje.image" alt="Image" />
            <h2 class="mt-2">{{ personaje.name }}</h2>
            <ul>
                <li>{{ personaje.species }}</li>
                <li>{{ personaje.status }}</li>
                <li>{{ personaje.gender }}</li>

            </ul>
            <div class="d-grid gap-2 d-md-flex">
                <router-link :to="`/personaje/${personaje.id}`" class="btn btn-primary col-6">
                    {{ $t('verdetalle') }}
                </router-link>
                <button @click="$emit('toogle', personaje)" class="btn btn-secondary col-6">
                    {{ $t('favorito') }}
                </button>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Persona',
    props: ['personaje', 'favorito'],
}
</script>

<style scoped>
    .personaje {
        border: 1px solid #fff;
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
