<template>
  <article class="apartments-main-info">
    <div class="apartments-main-info__heading">
      <h1 class="apartments-main-info__title">{{ apartment.title }}</h1>
      <Rating :rating="apartment.rating" />
    </div>
    <img :src="apartment.imgUrl" alt="" class="apartments-main-info__photo" />
    <p class="apartments-main-info__description">{{ apartment.descr }}</p>
    <div class="apartments-main-info__btn">
      <Button @click="handleApartmentsBooking" :loading="isLoading">
        Забронировать
      </Button>
    </div>
  </article>
</template>

<script>
import { bookApartment } from "../../sevices/order.service";
import Rating from "../StarRating";
import Button from "../shared/Button";

export default {
  name: "ApartmentsMainInfo",
  components: {
    Rating,
    Button,
  },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async handleApartmentsBooking() {
      const body = {
        apartmentId: this.$route.params.id,
        date: Date.now(),
      };

      try {
        this.isLoading = true;

        await bookApartment(body);

        this.$notify({
          type: "success",
          title: "Заказ добавлен",
        });
      } catch (err) {
        this.$notify({
          type: "error",
          title: "Произошла ошибка",
          text: err.message,
        });
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-main-info {
  &__heading {
    display: flex;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 20px;
    margin-right: 20px;
  }

  &__photo {
    max-width: 100%;
  }

  &__description {
    line-height: 1.3;
    margin-top: 30px;
  }

  &__btn {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
