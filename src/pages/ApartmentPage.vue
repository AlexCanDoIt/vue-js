<template>
  <main class="apartment-page">
    <SectionWithHeaderSpacer>
      <Container>
        <div v-if="apartment" class="apartment-page__content">
          <ApartmentsMainInfo :apartment="apartment" />
          <div class="apartment-page__additional-info">
            <ApartmentsOwner
              class="apartment-page__owner"
              :owner="apartment.owner"
            />
            <Reviews :reviews="reviewsList" />
          </div>
        </div>
      </Container>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import { getApartmentById } from "../sevices/apartments.service";
import reviewsList from "../components/reviews/reviews.json";
import SectionWithHeaderSpacer from "../components/shared/SectionWithHeaderSpacer";
import Container from "../components/shared/Container";
import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo";
import ApartmentsOwner from "../components/apartment/ApartmentsOwner";
import Reviews from "../components/reviews";

export default {
  name: "ApartmentPage",
  components: {
    SectionWithHeaderSpacer,
    Container,
    ApartmentsMainInfo,
    ApartmentsOwner,
    Reviews,
  },
  data() {
    return {
      apartment: null,
    };
  },
  computed: {
    reviewsList() {
      return reviewsList;
    },
  },
  async created() {
    try {
      const { id } = this.$route.params;
      const { data } = await getApartmentById(id);
      this.apartment = data;
    } catch (err) {
      console.error(err);
    }
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>
