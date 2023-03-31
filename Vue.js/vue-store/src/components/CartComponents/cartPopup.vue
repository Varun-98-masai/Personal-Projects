<template>
    <div id="cart">
      <q-dialog :seamless="true" :modelValue="dialogVisibility" position="right">
      <q-card id="cart_card" >
       <!-- class="row items-center no-wrap" -->
        <q-card-section >
          <div>
            <h4>Recently Added Items</h4>
            <h5>Total: {{cartStore.cartTotal}}</h5>
          </div>

          <q-space />

          <div id="cart_products">
            <div v-for="product in cartStore.cart" id="cart_product">
                <div id="lhs">
                   <img :src="product.imageUrl" alt="">
                </div>
                <div id="rhs">
                    <p>{{product.title}}</p>
                    <p>{{product.price}}</p>
                    <q-icon @click="removeFromCart(product.id)" name="delete"/>
                </div>
            </div>
          </div>
          <div id="place_order">
            <router-link to="/orders">
              <q-btn color="secondary" label="Proceed" />
            </router-link>
          
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../../store.js";


const dialog = ref(true);

const cartStore = useCartStore();

const removeFromCart = (id) =>{
    cartStore.removeFromCart(id)
}

defineProps(["dialogVisibility"])
</script>

<style scoped>
    #cart_card{
        height: 900px;
        width: 400px;
        margin-top: 10%;
    }
    #cart_product{
        display: flex;
    }
    #cart_product div{
        border: 1px solid black;
        margin-top: 4%;
    }
    #lhs{
        display: flex;
        flex: 4;
    }
    #lhs img{
        width: 100%;
    }
    #rhs{
        display: flex;
        flex-direction: column;
        flex: 6;
    }
   #place_order{
    margin-top: 5%;
    margin-bottom: 5%;
   }
   a{
    text-decoration: none;
   }
</style>