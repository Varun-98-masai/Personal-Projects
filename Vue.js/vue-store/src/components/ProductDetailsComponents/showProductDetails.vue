<template>
    <div id="container">
     <div id="lhs">
        <img :src="product.imageUrl" alt="">
     </div>
     <div id="rhs">
        <h3>{{product.title}}</h3>
        <p> Rs. {{product.price}}</p>

        <q-btn @click="addtoCart(product)" id="addToCart_btn" color="black" label="Add To Cart" />
     </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { db, doc , getDoc } from "../../firebase.js";
import { useRoute } from "vue-router";
import { useCartStore } from "../../store.js";

const route = useRoute();
const product = ref([]); //access value using product.value
const cartStore = useCartStore();

onMounted( async() =>{
  const docRef = doc(db, "vuestore", route.params.id);
  const docSnap = await getDoc(docRef);

  if(docSnap.exists()) {

   let prod = docSnap.data();
   prod.id = docSnap.id;
  
   product.value = prod;
  }else{
    console.log("No Such Document");
  }
});

const addtoCart = (product) =>{
    cartStore.addToCart(product);
}

</script>

<style scoped>
    #container{
        display: flex;
        margin-top: 5%;
    }
    
    #lhs{
        display: flex;
        flex: 5;
    }
    #lhs img{
        width: 100%;
    }
    #rhs{
        display: flex;
        flex-direction: column;
        flex: 5;
        margin-left: 3%;
    }
    #addToCart_btn{
        width: 50%;
    }
</style>