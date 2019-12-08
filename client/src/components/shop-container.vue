<template>
  <div class="column is-3-desktop is-half-tablet">
    <img class="title_img" :src="title_img" />
    <resultcontainer v-for="item in results" :key="item.name" :data="item"></resultcontainer>
  </div>
</template>

<script>
import resultcontainer from './result-item-container.vue'

export default {
  props: ['title', 'results'],
  components: { resultcontainer },
  data(){
    return{
      title_img: `/public/${this.title}.png`,
    }
  }
}
</script>

<style scoped>
  .title_img{
    max-width: 240px;
    max-height: 80px;
  }
</style>