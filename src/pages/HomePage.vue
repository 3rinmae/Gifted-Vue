<template>
  <div class="container-fluid">
    <section class="row">
      <div v-for="gift in gifts" :key="gift.id" class="col-md-3 p-3">
        <GiftCard :giftProp="gift" />
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { giftsService } from '../services/GiftsService.js'
import GiftCard from "../components/GiftCard.vue";

export default {
  setup() {
    async function getGifts() {
      try {
        await giftsService.getGifts();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      getGifts();
    });
    return {
      // movies: computed(() => AppState.movies)
      gifts: computed(() => AppState.gifts)
    };
  },
  components: { GiftCard }
}
</script>

<style scoped lang="scss"></style>
