<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ concert.VenueName }}</h2>
        <br />

        <p>
          Insert Name: <br /><strong>{{ concert.Location }}</strong>
        </p>
        <p>
          Insert Name: <br /><strong>{{ concert.Capacity }}</strong>
        </p>
        <p>
          Insert Name: <br /><strong>{{ concert.Time }}</strong>
        </p>
      </div>
    </div>
    <br />

    <router-link v-if="auth" :to="`/concerts/${this.$route.params.pk}/review`"
      ><button class="btn btn-success">Add a Review</button></router-link
    >

    <router-link v-else :to="`/login`"
      ><button class="btn btn-outline-success">
        Sign In to Add a Review
      </button></router-link
    >
    <br /><br />
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    concert() {
      let allConcerts = this.$store.state.concerts;

      let thisConcert = allConcerts.find((aConcert) => {
        return aConcert.ConcertPK == this.$route.params.pk;
      });

      return thisConcert;
    },

    // formattedPrice() {
    //   return new Intl.NumberFormat("en-US", {
    //    style: "currency",
    //     currency: "USD",
    //   }).format(this.concert.Capacity);
    //  },
    auth() {
      return this.$store.state.token;
    },
  },
};
</script>

<style></style>
