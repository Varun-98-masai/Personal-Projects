<template>
    <div id="welcome_div">
      
      <h1>{{msg}}</h1>
     <q-btn color="white" text-color="black" label="Standard" />
    </div>
</template>
<script setup>
  
  defineProps(["msg"]);
</script>

<style scoped>
    h1{
        font-weight: 500;
        font-size: 3rem;
    }
    #welcome_div{
        display: flex;
        height: 200px;
        border-bottom: 1px solid black;
        justify-content: center;
        align-items: center;
        color: rgb(45, 116, 45);
    }
</style>