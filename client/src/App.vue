<template>
  <div class="container">
    <div class="title">
      Boardgame Prices
    </div>
    <div class="search" id="query">
      <p>
        Search for <input type="text" v-model="querystring" @keypress.enter="search"/>
        <button @click="search">Search</button>
      </p>
    </div>
    <hr>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <shopcontainer v-for="shop in shops" :key="shop.name" :title="shop.name" :results="shop.data" :searching="shop.searching"></shopcontainer>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const API_BASE_URL = process.env.VUE_APP_API_BASE_URL

import axios from 'axios';

import shopcontainer from './components/shop-container.vue'

export default {
  components: { shopcontainer },
  data() {
    return {
      querystring: '',
      shopIndex: {},
      shops: [],
    }
  },
  methods: {
    search: function () {
      this.shops.forEach(element => {
        element.searching = true
        element.data = []
        axios.get(API_BASE_URL + 'query/' + element.name + '/' + this.querystring).then(response => {
            let index = this.shopIndex[response.data.shop]
            let shop = this.shops[index]
            shop.data = response.data.data
            this.$set(this.shops, index, shop)
            shop.searching = false
        })
      });
      axios.get(API_BASE_URL + 'query/' + 'lautapelit/' + this.querystring).then(response => {
          let index = this.shopIndex[response.data.shop]
          let shop = this.shops[index]
          shop.data = response.data.data
          this.$set(this.shops, index, shop)

      })
    } 
  },
  mounted: function(){
    axios.get(API_BASE_URL + 'handlers').then(response => {
      for (let i in response.data){
        let name = response.data[i]
        let index = this.shops.push({name, data: [], searching: false}) - 1
        this.shopIndex[name] = index
      }

    })
  }
}
</script>

<style scoped>
.search{
  text-align: center;
}

.title{
  font-size: 36px;
  text-align: center;
}
</style>
