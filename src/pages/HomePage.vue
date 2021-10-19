<template>
  <main class="homepage">
    <SectionWithHeaderSpacer>
      <Container>
        <ApartmentsFilterForm class="apartments-filter" @submit="filter" />
      </Container>
      <Container>
        <p v-if="!filteredApartments.length">Ничего не найдено</p>
        <ApartmentsList v-else :items="filteredApartments">
          <template v-slot:apartment="{ apartment }">
            <ApartmentsItem
              :key="apartment.id"
              :id="apartment.id"
              :descr="apartment.descr"
              :rating="apartment.rating"
              :imgSrc="apartment.imgUrl"
              :price="apartment.price"
            />
          </template>
        </ApartmentsList>
      </Container>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import { getApartmentsList } from "../sevices/apartments.service";
import SectionWithHeaderSpacer from "../components/shared/SectionWithHeaderSpacer";
import Container from "../components/shared/Container";
import ApartmentsFilterForm from "../components/apartment/ApartmentsFilterForm";
import ApartmentsList from "../components/apartment/ApartmentsList";
import ApartmentsItem from "../components/apartment/ApartmentsItem";

export default {
  name: "App",
  components: {
    SectionWithHeaderSpacer,
    Container,
    ApartmentsFilterForm,
    ApartmentsList,
    ApartmentsItem,
  },
  data() {
    return {
      text: "",
      apartments: [],
      filters: {
        city: "",
        price: "",
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  async created() {
    try {
      const { data } = await getApartmentsList();
      this.apartments = data;
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter(
        (apartment) => apartment.location.city === this.filters.city
      );
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;

      return apartments.filter(
        (apartment) => apartment.price >= this.filters.price
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-filter {
  margin-bottom: 40px;
}
</style>
