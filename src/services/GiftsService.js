import { AppState } from "../AppState"
import { Gift } from "../models/Gift"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { api } from "./AxiosService"


class GiftsService {
  async getGifts() {
    const res = await api.get('api/gifts')
    logger.log(res.data)
    AppState.gifts = res.data.map(gift => new Gift(gift))
  }

  async createGift(formData) {
    const res = await api.post('api/gifts', formData)
    const newGift = new Gift(res.data)
    AppState.gifts.unshift(newGift)
  }

  async openGift(giftProp) {
    // const gift = AppState.gifts.find(gift => gift.id == giftProp.id)
    const giftIndex = AppState.gifts.findIndex(gift => gift.id == giftProp.id)
    if (giftIndex == -1) {
      Pop.error("Can't find gift.")
      return
    }
    // logger.log(giftProp.id)
    giftProp.opened = true
    const res = await api.put(`api/gifts/${giftProp.id}`, giftProp)
    const newGift = new Gift(res.data)
    AppState.gifts.splice(giftIndex, 1, newGift)
  }
}

export const giftsService = new GiftsService()