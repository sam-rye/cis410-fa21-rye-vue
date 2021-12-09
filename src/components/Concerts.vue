<template>
  <div>
    <h1>Concerts</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Insert Name</th>
          <th>Insert Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aConcert in theConcerts" :key="aConcert.ConcertPK">
          <th>{{ aConcert.Date }}</th>
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
