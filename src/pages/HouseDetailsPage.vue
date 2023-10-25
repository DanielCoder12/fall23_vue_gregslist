<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12">
                <h1 class="p-4">House Details</h1>
            </div>
        </section>
        <section v-if="house" class="row bg-white m-5 rounded shadow">
            <HouseDetailsComponent :house="house" />
        </section>
        <section v-else class="row">
            <div class="col-12"><span class="fs-1">
                    Loading... <i class="mdi mdi-loading mdi-spin"></i>
                </span>
            </div>
        </section>
    </div>
</template>


<script>
import { computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger';
import { housesService } from '../services/HousesService';
import { AppState } from '../AppState'


export default {
    setup() {
        const route = useRoute()
        onMounted(() =>
            getCurrentHouse()
        )
        onUnmounted(() =>
            AppState.activeHouse = null
        )
        async function getCurrentHouse() {
            await housesService.getCurrentHouse(route.params.houseId)
        }
        return {
            house: computed(() => AppState.activeHouse)
        }
    }
};
</script>


<style lang="scss" scoped></style>