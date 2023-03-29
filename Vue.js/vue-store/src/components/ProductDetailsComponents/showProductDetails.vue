<template>
    <div id="container">
     <div id="lhs">
        <img :src="product.imageUrl" alt="">
     </div>
     <div id="rhs">
        <h3>{{product.title}}</h3>
        <p> Rs. {{product.price}}</p>
     </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { db, doc , getDoc } from "../../firebase.js";
import { useRoute } from "vue-router";

const route = useRoute();
const product = ref([]); //access value using product.value

onMounted( async() =>{
  const docRef = doc(db, "vuestore", route.params.id);
  const  docSnap = await getDoc(docRef);

  if(docSnap.exists()) {
   console.log("Document data:" + docSnap.data());
   product.value = docSnap.data();
  }else{
    console.log("No Such Document");
  }
});


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
</style>