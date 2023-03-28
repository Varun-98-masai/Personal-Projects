<template>
    <div>
        <NavbarComponent/>
        <h1>This is Admin Page</h1>

        <input v-model="form.name" type="text" />
        <input v-model="form.contact" type="text" />
        <input v-model="form.city" type="text" />
        <input v-model="form.age" type="number" />
        
       <h3>{{ form }}</h3> 
      
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import NavbarComponent from "../components/Homepage/Navbar.vue";

// const name = ref("");

// const contact = ref("");

const form = reactive({
    name:"",
    contact:"",
    city:"",
    age:0
})

</script>

<style scoped>
    
</style>