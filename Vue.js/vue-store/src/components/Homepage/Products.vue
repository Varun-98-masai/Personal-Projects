<template>
  <div id="products">
    <div v-for="element in products" :key="element" id="individual_product">
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
// import ProductData from "../../data/products.json";
import { ref, onMounted } from "vue";
let products = ref([]);
import axios from "axios";
// import firebase utilities

import { db, collection, getDocs } from "../../firebase.js";
console.log("db: " + db);




// onMounted
const getData = async() => {
const querySnapshot = await getDocs(collection(db, "vuestore"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
}
onMounted( async() =>{
  await getData();
});

onMounted(async () => {
  
  let res = await axios.get('http://fakestoreapi.com/products');
  let data = res.data;
  console.log(data);
  products.value = data;
})

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
