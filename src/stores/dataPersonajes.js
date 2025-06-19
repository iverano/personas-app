import { defineStore } from 'pinia'
import axios from 'axios'

export const personajesStore = defineStore('personajes', {
    state: () => ({
        personajes: [],
        personajeDetalle: null,
        page: 1,
        busqueda: '',
    }),
    actions: {
        async getPersonajes() {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${this.page}`);
                this.personajes = response.data.results;
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        },
        async getPersonajeName() {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character?name=${this.busqueda}`);
                this.personajes = response.data.results;
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        },
        async getPersonajeId(id) {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
                this.personajeDetalle = response.data;
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        },
        previewPage() {
             this.page--;
            this.getPersonajes()
        },
        nextPage() {
            this.page++;
            this.getPersonajes()
        },
        setBusqueda(data) {
            this.busqueda = data;
            this.page = 1;
            this.getPersonajeName()
        },
        setBusquedaId(data) {
            this.busqueda = data;
            this.page = 1;
            this.getPersonajeId()
        }
    }
})