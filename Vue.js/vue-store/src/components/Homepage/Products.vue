<template>
  <div id="products">
    <div v-for="element in products" id="individual_product">
      <div id="image_div">
        <img :src="element.image" alt="" />
      </div>
      <div>
        <p>{{ element.title }}</p>
        <p>$ {{ element.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductData from "../../data/products.json";
const products = ProductData;
</script>

<style scoped>
#products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3%;
  grid-gap: 3%;
  width: 90%;
  margin-top: 10px;
  margin: auto;
  justify-content: center;
  align-items: center;
  
}
#image_div{
    height: 200px;
}
#individual_product{
    width: 150px;
}
#image_div img {
    width: 100%;
    height: 100%;
}
</style>
