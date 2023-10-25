<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12 d-flex">
                <h1 class="p-4">Houses Page</h1>
                <button v-if="account.id" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    🏠
                </button>
            </div>
        </section>
        <section class="row">
            <div v-for="house in houses" :key="house.id" class="col-6 p-4">
                <HouseCardComponent :house="house" />
            </div>
        </section>
    </div>
    <HouseFormModalComponent />
</template>


<script>
import { computed, onMounted } from 'vue';
import { housesService } from '../services/HousesService';
import { AppState } from '../AppState'
import HouseFormModalComponent from '../components/HouseFormModalComponent.vue';

export default {
    setup() {
        async function getHouses() {
            await housesService.getHouses();
        }
        onMounted(() => getHouses());
        return {
            houses: computed(() => AppState.houses),
            account: computed(() => AppState.account)
        };
    },
    components: { HouseFormModalComponent }
};
</script>


<style lang="scss" scoped></style>