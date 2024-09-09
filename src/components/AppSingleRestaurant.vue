
<script>
import axios from 'axios';

export default {
    name: 'AppSingleRestaurant',
    data() {
        return {
            restaurant: null,
        };
    },
    methods: {
        getImageSrc(img) {
            return img.startsWith('http') ? img : `/storage/${img}`;
        }
    },
    async mounted() {
        try {
            const slug = this.$route.params.slug;
            const response = await axios.get(`http://localhost:8000/api/restaurants?slug=${slug}`);
            this.restaurant = response.data;
        } catch (error) {
            console.error('Error fetching restaurant details:', error);
        }
    }
}
</script>
<template>
    <div class="menu-section" v-if="restaurant">
        <div class="title-section d-flex flex-column">
            <h1>{{ restaurant.name }}</h1>
            <h2>Menù</h2>
        </div>
        <div class="menu-items">
            <div class="menu-item" v-for="dish in restaurant.dishes" :key="dish.id">
                <h3>{{ dish.name }}</h3>
                <p>{{ dish.description }}</p>
                <span class="price">{{ dish.price }} €</span> 
                <img :src="getImageSrc(dish.img)" :alt="dish.name" />
            </div>
        </div>
    </div>
</template>


<style scoped>
.menu-section {
    text-align: center;
    padding: 50px 0;
    background-color: #f8f8f8;
}

.title-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
}


h2 {
    font-family: "Times New Roman", Times, serif;
    font-size: 24px;
    font-weight: bold;
}

.menu-items {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
}

.menu-item {
    max-width: 300px;
    text-align: left;
}

.menu-item h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

.menu-item p {
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
}

.menu-item img {
    width: 100%;
    border-radius: 5px;
}

.price {
    background-color: #000000c2;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
}

</style>