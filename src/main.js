import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { VueDraggable } from 'vue-draggable-plus';

createApp(App)
  .component('VueDraggable', VueDraggable)
  .mount('#app')
