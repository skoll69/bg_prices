<template>
  <div class="container">
    <div class="title">
      Boardgame Prices
    </div>
    <div class="search" id="query">
      <p>
        Search for <input type="text" v-model="querystring" />
        <button v-on:click="search">Search</button>
      </p>
    </div>
    <hr>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <shopcontainer v-for="shop in shops" :key="shop.name" :title="shop.name" :results="shop.data"></shopcontainer>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const BASEURL = 'http://localhost:3000/'

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
        axios.get(BASEURL + 'query/' + element.name + '/' + this.querystring).then(response => {
            console.log(element)
            let index = this.shopIndex[response.data.shop]
            let shop = this.shops[index]
            shop.data = response.data.data
            this.$set(this.shops, index, shop)

        })
      });
      axios.get(BASEURL + 'query/' + 'lautapelit/' + this.querystring).then(response => {
          //console.log(response.data)
          let index = this.shopIndex[response.data.shop]
          let shop = this.shops[index]
          shop.data = response.data.data
          this.$set(this.shops, index, shop)

      })
    } 
  },
  mounted: function(){
    axios.get(BASEURL + 'handlers').then(response => {
      for (let i in response.data){
        let name = response.data[i]
        let index = this.shops.push({name}) - 1
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
