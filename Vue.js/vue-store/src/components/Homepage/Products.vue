<template>
  <div 
  
  id="products"
  >
    <div @click="showProduct(product.id)"  v-for="product in products" :key="product" id="individual_product">
      <div id="image_div">
          <img :src=product.imageUrl alt="">
      </div>
     
      <p>{{product.title}}</p>
      <p>{{product.price}}</p>
    </div>
   
  </div>
</template>

<script setup>
// import ProductData from "../../data/products.json";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router"
import { db, collection, getDocs } from "../../firebase.js";
let products = ref([]);
const router = useRouter();

onMounted( async() =>{
 const result = await getDocs(collection(db, "vuestore"));
 result.forEach((doc) => {
  let product = doc.data();
  product.id = doc.id;
  console.log("Products:"+ product);

  products.value.push(product);
 })
 console.log("Products:"+ products.value);
});



const showProduct = (id) =>{
 console.log(id);
//  rewrite it to productDetails/id

  router.push(`productDetails/${id}`);
}

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
    height: 300px;
    width: 200px;
}
#individual_product{
    width: 150px;
}
#image_div img {
    width: 100%;
    height: 100%;
}
</style>
