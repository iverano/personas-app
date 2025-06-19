# 🛸 Rick and Morty Explorer

Aplicación web creada con **Vue 3**, que consume la [API pública de Rick and Morty](https://rickandmortyapi.com/), con búsqueda de personajes, paginación, detalle por personaje y soporte multilenguaje (**Español** e **Inglés**).

---

## 🖼️ Características

- 🔍 Búsqueda con debounce por nombre de personaje
- 📄 Paginación entre resultados
- 📁 Vista de detalle por personaje
- 🌐 Soporte de idiomas (i18n)
- ❤️ Sistema de favoritos (no persistente)
- ⚡ Vue Router + Pinia para gestión de rutas y estados

---

## 📦 Tecnologías usadas

- [Vue 3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vue I18n](https://vue-i18n.intlify.dev/)
- [Axios](https://axios-http.com/)
- [Bootstrap 5](https://getbootstrap.com/) *(si aplica)*

---

## 🛠️ Instalación y ejecución

# 1. Clonar el repositorio
git clone https://github.com/iverano/rick-and-morty-explorer.git
cd rick-and-morty-explorer

# 2. Instalar dependencias
npm install

# 3. Ejecutar el servidor local
npm run dev

--- 
## 🛠️ Estructura del proyecto

src/
├── assets/            # Estilos globales
├── components/        # Componentes reutilizables (e.g. Persona.vue)
├── views/             # Vistas principales (e.g. App.vue, PersonaDetalle.vue)
├── router/            # Configuración de Vue Router
├── stores/            # Pinia stores (e.g. dataPersonajes.js)
├── locales/           # Archivos de traducción i18n
├── App.vue            # Componente raíz
├── main.ts            # Punto de entrada principal

---

## 👤 Autor
Ivan Verano
@iverano
