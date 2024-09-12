<script>
import axios from 'axios';
import AppHeader from "./components/AppHeader.vue";
import { EventBus } from '../data/eventBus';



export default {
	name: 'App',

	components: {
		AppHeader,

	},

	watch: {
		$route(to) {
      if (to.path.startsWith('/restaurant')) {
		console.log('siamo sulla rotta singolo ristorante')
        EventBus.emit('openCart');
      }
    }
	},

	data() {
		return {

		}
	},

	methods: {

	},

	mounted() {
		
	}
}

</script>

<template>
	<AppHeader />
	<router-view></router-view>
</template>

<style scoped></style>
