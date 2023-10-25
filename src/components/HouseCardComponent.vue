<template>
    <router-link :to="{ name: 'HouseDetails', params: { houseId: house.id } }">
        <section type="button" class="row bg-light shadow rounded">
            <div class="col-md-4 p-0">
                <img class="rounded-start img-fluid" :src="house.imgUrl" alt="">
            </div>
            <div class="col-md-8 p-5">
                <h2>{{ house.creator.name }}'s house</h2>
                <h3>Listed On {{ house.createdAt.toLocaleDateString() }}</h3>
                <h3>$ {{ house.price }}</h3>

            </div>
        </section>
    </router-link>
</template>


<script>
import { computed } from 'vue';
import { House } from '../models/House';
import { housesService } from '../services/HousesService';
import { logger } from '../utils/Logger';
import { AppState } from '../AppState';


export default {
    props: {
        house: { type: House }
    },
    setup() {
        return {
            account: computed(() => AppState.account),

        }
    }
};
</script>


<style lang="scss" scoped>
img {
    height: 30vh;
    width: 100%;
    object-fit: cover;
}
</style>