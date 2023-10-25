import { AppState } from "../AppState"
import { House } from "../models/House"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HousesService {


    async getHouses() {
        const res = await api.get('api/houses')
        logger.log('response', res.data)
        AppState.houses = res.data.map(h => new House(h))

    }

    async getCurrentHouse(houseId) {
        logger.log('house id made it to service?', houseId)
        const res = await api.get(`api/houses/${houseId}`)
        logger.log('res data', res.data)
        AppState.activeHouse = new House(res.data)


    }

    async createHouse(theData) {
        logger.log('this ran', theData)
        const res = await api.post('api/houses', theData)
        logger.log('house i get back ', res.data)
        AppState.houses.push(new House(res.data))
    }
    async deleteHouse(houseId) {
        logger.log('house id', houseId)
        const res = await api.delete(`api/houses/${houseId}`)
        logger.log('deleted house', res.data)
    }
}


export const housesService = new HousesService()