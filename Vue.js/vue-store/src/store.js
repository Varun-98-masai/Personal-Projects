import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore("cart",() =>{

    const cart = ref([]);
    const cartCount = computed(() => cart.value.length);
    
    const cartTotal = computed(() => 
     cart.value.reduce((total, product) =>{
        return Number(total) + Number(product.price)
     },0)
    )

    // actions are functions which change state properties

    const addToCart = (product) =>{
        cart.value.push(product);
        console.log("cart.value: " + cart.value);
    }
    const removeFromCart = (id) =>{
        cart.value = cart.value.filter((el) =>{
            return el.id !== id;
        })
    }

    return { cartCount, cart, addToCart, removeFromCart, cartTotal };

});