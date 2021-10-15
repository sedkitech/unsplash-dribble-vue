import { createApp } from 'vue'
import App from './App.vue'

import './index.css'
import Unsplash from 'vue-unsplash'
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'




createApp(App).use(VueAxios, axios).mount('#app')
