import { defineNuxtConfig } from '@nuxt/config'

export default defineNuxtConfig({
    meta: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
            }
        ],
        script: [
            {
                src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
            }
        ]
    }
})
