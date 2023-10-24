<template>
  <div class="container-fluid">
    <section class="row d-flex justify-content-center p-3">
      <div class="col-5 card bg-light shadow">
        <p class="fs-3 text-center">Send Gift</p>
        <form @submit.prevent="createGift()">
          <div class="mb-3">
            <label for="giftTag" class="form-label">Gift Tag</label>
            <input v-model="editable.tag" type="text" class="form-control" id="giftTag" name="tag">
            <label for="giftUrl" class="form-label mt-3">Gift Url</label>
            <input v-model="editable.url" type="url" class="form-control" id="giftUrl" name="url">
            <button class="btn btn-primary mt-3" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>

    <section class="row">
      <div v-for="gift in gifts" :key="gift.id" class="col-md-3 p-3">
        <GiftCard :giftProp="gift" />
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { giftsService } from '../services/GiftsService.js'
import GiftCard from "../components/GiftCard.vue";
import { logger } from "../utils/Logger";

export default {
  setup() {
    // this will be the formData 
    const editable = ref({})

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
      editable,
      // movies: computed(() => AppState.movies)
      gifts: computed(() => AppState.gifts),

      async createGift() {
        try {
          event.preventDefault()
          // let form = event.target
          // let formData = { tag: form.tag.value, url: form.url.value }
          // let formData = getFormData(form)
          // logger.log(editable)
          // let formData = editable.value
          // logger.log(formData)
          await giftsService.createGift(editable.value)
          // await giftsService.createGift(formData)
        } catch (error) {
          Pop.error(error)
        }
      }


    };
  },
  components: { GiftCard }
}
</script>

<style scoped lang="scss"></style>
