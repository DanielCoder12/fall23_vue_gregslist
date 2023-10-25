<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create House Listing</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="handleSubmit()">
                        <div class="mb-3">
                            <label for="" class="form-label">Price </label>
                            <input v-model="editable.price" type="number" class="form-control" id="" required
                                max='100000000' min="0">
                        </div>

                        <div class="mb-3">
                            <label for="" class="form-label">Bedrooms </label>
                            <input v-model="editable.bedrooms" type="number" class="form-control" id="" required
                                max='100000000' min="0">
                        </div>

                        <div class="mb-3">
                            <label for="" class="form-label">Bathrooms </label>
                            <input v-model="editable.bathrooms" type="number" class="form-control" id="" required
                                max='100000000' min="0">
                        </div>

                        <div class="mb-3">
                            <label for="" class="form-label">Levels </label>
                            <input v-model="editable.levels" type="number" class="form-control" id="" required
                                max='100000000' min="0">
                        </div>

                        <div class="mb-3">
                            <label for="" class="form-label">Year </label>
                            <input v-model="editable.year" type="number" class="form-control" id="" required max='2024'
                                min="1900">
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save changes</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { housesService } from '../services/HousesService';
import { logger } from '../utils/Logger';
import { Modal } from 'bootstrap';
export default {
    setup() {
        const editable = ref({})
        return {
            editable,
            async handleSubmit() {
                logger.log('this is working')
                const theData = editable.value
                if (!editable.value.id) {
                    await housesService.createHouse(theData)
                    editable.value = {}
                    Modal.getOrCreateInstance('#exampleModalLabel').hide()

                } else {
                    return
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>