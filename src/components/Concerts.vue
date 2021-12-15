<template>
  <div>
    <h1>Concerts</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th>Artist</th>
          <th>City</th>
          <th>Venue</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aConcert in theConcerts" :key="aConcert.ConcertPK">
          <th>{{ aConcert.ArtistName }}</th>
          <th>{{ aConcert.Location }}</th>
          <th>{{ aConcert.VenueName }}</th>
          <th>
            <router-link :to="`/concerts/${aConcert.ConcertPK}`"
              ><button class="btn btn-primary">Details</button></router-link
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    theConcerts() {
      return this.$store.state.concerts;
    },
  },
};
</script>

<style></style>
