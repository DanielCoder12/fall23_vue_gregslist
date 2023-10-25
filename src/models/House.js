export class House {
    constructor(data) {
        this.id = data.id || data._id
        this.bathrooms = data.bathrooms
        this.bedrooms = data.bedrooms
        this.createdAt = new Date(data.createdAt)
        this.creatorId = data.creatorId
        this.creator = data.creator
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.levels = data.levels
        this.price = data.price
        this.updatedAt = new Date(data.updatedAt)
        this.year = data.year
    }

}