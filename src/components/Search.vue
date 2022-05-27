<template>
  <div>
    <div class="container">
      <i-input v-model="searchData" size="large" class="search" placeholder="   Rechercher">
        <Button slot="append" icon="ios-search" @click="search"></Button>
      </i-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      searchData: ''
    };
  },
  methods: {
    search () {
      this.$router.push({path: '/goodsList', query: { searchData: this.searchData }});
    }
  }
};
</script>

<style scoped>
.container {
  padding-top: 15px;
  margin: 0px auto;
  margin-bottom: 15px;
  width: 460px;
}
.search {
  margin: 5px 0px;
}
</style>
