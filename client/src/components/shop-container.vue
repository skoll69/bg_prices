<template>
  <div class="column is-3-desktop is-half-tablet">
    <img class="title_img" :src="title_img" />
    <img class="searching_img" v-if="searching" src="/public/loading.gif"/>
    <resultcontainer v-for="item in results" :key="item.name" :data="item"></resultcontainer>
    <div v-if="no_results">No results</div>
  </div>
</template>

<script>
import resultcontainer from './result-item-container.vue'

export default {
  props: ['title', 'results', 'searching'],
  components: { resultcontainer },
  data(){
    return{
      title_img: `/public/${this.title}.png`,
    }
  },
  computed: {
    no_results: function(){
      return this.results.length == 0 && !this.searching
    }
  }
}
</script>

<style scoped>
  .title_img{
    max-width: 240px;
    max-height: 80px;
  }

  .searching_img{
    max-width: 120px;
    max-height: 120px;
  }
</style>