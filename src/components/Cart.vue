<template>
    <table>
    <tbody>
        <tr v-for="(product,index) in products" :key="index">
            <td>{{ product.item }}</td>
            <!-- <td><input type="number"></td>
            <td>| {{ product.price }}</td> -->
            <td>| {{ product.price }}</td>
            <td><button class="btn" @click="delToCart(index)">Delete from cart</button>  </td>
        </tr>
    </tbody>
    </table>
    <hr>
    Sum of Check: {{ sumCheck.toFixed(2) }}
</template>

<script>
   export default {
    data(){
        return{
            products:[],
            sumCheck:0,
        }
    },
    computed:{

    },
    mounted(){
        this.showEl()
    },
    methods:{
            showEl(){
                this.products = this.$store.getters.getCart
                this.giveFullPrice()
            },
            giveFullPrice(){
                this.sumCheck = 0
                this.products.forEach(el => {
                this.sumCheck += el.price
            });
            },
            delToCart(index){
                this.$store.commit('setDelCart', index);
                this.showEl()
            }
        },
   }
</script>

<style>

</style>