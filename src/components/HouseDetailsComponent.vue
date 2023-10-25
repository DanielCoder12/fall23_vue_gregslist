<template>
    <div class="col-5">
        <img class="img-fluid side-image" :src="house.imgUrl" alt="">
    </div>

    <div class="col-7 p-5 ">
        <div class="d-flex align-items-center">
            <img class=" rounded-circle creator-image" :src="house.creator.picture" alt="">
            <p class="mb-0 ps-3">
                Listed By {{ house.creator.name }}
            </p>
        </div>
        <h2>${{ house.price }}</h2>
        <div v-if="account.id == house.creatorId" class="text-end">
            <button @click="deleteHouse(house.id)" class="btn btn-danger">delete </button>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, popScopeId } from 'vue';
import { House } from '../models/House';
import { housesService } from '../services/HousesService';
import Pop from '../utils/Pop';
import { useRouter } from 'vue-router';
export default {
    props: {
        house: { type: House, required: true }
    },
    setup() {
        const router = useRouter()
        return {
            account: computed(() => AppState.account),
            async deleteHouse(houseId) {
                const a = await Pop.confirm('are you sure')
                if (!a) {
                    return
                }
                await housesService.deleteHouse(houseId)
                router.push({ name: 'Houses' });
            }
        }
    }
};
</script>


<style lang="scss" scoped>
.side-image {
    height: 50vh;
    width: 100%;
    object-fit: cover;
}

.creator-image {
    height: 7vh;
    width: 7vh;
    object-fit: cover;
}
</style>