<template>
  <div class="rounded bg-light shadow">
    <img @click="openGift(giftProp)" v-if="giftProp.url == ''"
      src="https://images.unsplash.com/photo-1512101147095-d05249ea9a04?auto=format&fit=crop&q=80&w=2090&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="gift" class="img-fluid">
    <img v-else :src="giftProp.url" alt="meme" class="img-fluid">
    <div class="p-3">
      <p>{{ giftProp.tag }}</p>
    </div>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Gift } from "../models/Gift";
import Pop from "../utils/Pop";
import { giftsService } from "../services/GiftsService";
export default {
  props: {
    giftProp: { type: Gift, required: true }
  },
  setup() {
    return {
      async openGift(giftProp) {
        try {
          await giftsService.openGift(giftProp)
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped></style>