<template>
    <div>
     <div id="Navbar">
        <div id="lhs">
          Home
        </div>
        <div id="rhs">
            <div>Account</div>
            <div id="cart">
                <q-icon name="shopping_cart"/>
                <div id="cart_count">
                    1
                </div>
            </div>
        </div>
     </div>


    </div>
</template>
    
<script setup>

</script>
<style scoped>
    #Navbar{
        display: flex;
        height: 70px;
        align-items: center;
        font-size: 130%;
        border-bottom: solid 1px black;
    }
    #lhs{
        display: flex;
        flex: 3;
        align-items: center;
    }
    #rhs{
        display: flex;
        flex: 7;
        gap: 10%;
        align-content: center;
        justify-content: flex-end;
    }
    #cart{
        display: flex;
        align-items: center;
    }
    #cart_count{
        padding-bottom: 12px;
    }
</style>