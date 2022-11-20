<template>
  <div class="container">
    <div class="title">
      Boardgame Prices
    </div>
    <div class="flex-container">
      <div class="search" id="query">
        <p>
          Search for <input type="text" v-model="querystring" @keypress.enter="search"/>
          <button @click="search">Search</button>
        </p>
      </div>
      <label class="switch">
        <input type="checkbox" v-model="showUnavailable">
        <span class="slider round"></span>
        <p class="show">Show out of stock</p>
      </label>
    </div>
    <hr>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <shopcontainer v-for="shop in shops" :key="shop.name" :title="shop.name" :results="shop.data" :searching="shop.searching" :showUnavailable="showUnavailable"></shopcontainer>
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
      showUnavailable: false,
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
      // axios.get(API_BASE_URL + 'query/' + 'lautapelit/' + this.querystring).then(response => {
      //     let index = this.shopIndex[response.data.shop]
      //     let shop = this.shops[index]
      //     console.log('in res');
      //     console.log(response);
      //     shop.data = response.data.data
      //     this.$set(this.shops, index, shop)

      // })
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

.switch {
  margin-left: 2rem;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.flex-container {
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 400px;
}

.show {
  font-size: 0.6rem;
  width: 80px;
  margin-top: 7px;
}
</style>
