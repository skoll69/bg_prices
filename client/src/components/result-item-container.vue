<template>
  <div>
    <table class="table">
      <tr>
        <td class="image_td"><img class="thumbnail" :src="data.imageUrl || '/na.png'" /></td>
        <td class="data_td">
          <div class="name"><a :href="data.itemUrl" target="_blank">{{ data.name }}</a></div>
          <img class="availability_icon" :src="availability_icon" />
          <span class="price">{{ data.price.toFixed(2) }}{{ data.currency }}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data(){
    return {
      availability_icon: this.data.available ? "/yes.png" : "/no.png",
    }
  }
}
</script>

<style scoped>
.thumbnail{
  width: 80px;
  height: 80px;
}

.table{
  border-spacing: 3px;
  padding: 0px;
}

.table td{
  border: 0px;
}

.table .data_td{
  padding: 1px;
}

.table .image_td{
  padding: 2px;
}

.price{
  font-size: 20px;
}

.name{
  font-size: 14px;
}

.availability_icon{
  width: 32px;
  height: 32px;
  vertical-align: middle;
}
</style>