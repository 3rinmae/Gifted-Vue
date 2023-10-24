import { AppState } from "../AppState"
import { Gift } from "../models/Gift"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class GiftsService {
  async getGifts() {
    const res = await api.get('api/gifts')
    logger.log(res.data)
    AppState.gifts = res.data.map(gift => new Gift(gift))
  }
}

export const giftsService = new GiftsService()