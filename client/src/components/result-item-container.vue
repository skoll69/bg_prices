<template>
  <div v-if="showUnavailable || _available">
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
  props: ['data', 'showUnavailable'],
  data(){
    let availability_icon = '/question_mark.png';
    if (this.data.available === true) {
      availability_icon = '/yes.png';
    }
    if (this.data.available === false) {
      availability_icon = '/no.png';
    }
    return {
      availability_icon,
    }
  },
  computed: {
    _available: function(){
      return this.data.available || this.data.available === undefined;
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