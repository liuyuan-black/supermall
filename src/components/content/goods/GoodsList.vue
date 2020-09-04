<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem";

export default {
  name: "GoodsList",
  components: {
    GoodListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  /*按照宽度进行平铺*/
  flex-wrap: wrap;
  /*均等分*/
  justify-content: space-around;

}


</style>
