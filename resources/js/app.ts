import '../css/app.css';

import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp } from 'vue';
import { ZiggyVue } from 'ziggy-js';
import { initializeTheme } from './composables/useAppearance';
// @ts-ignore // TODO: Add types
import { ModalLink, renderApp } from '@inertiaui/modal-vue';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        createApp({ render: renderApp(App, props) })
            .component('ModalLink', ModalLink)
            .use(plugin)
            .use(ZiggyVue)
            .use(autoAnimatePlugin)
            .mount(el);
    },
    progress: {
        color: '#6366F1',
    },
});

// This will set light / dark mode on page load...
initializeTheme();
