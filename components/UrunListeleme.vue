<template>
    
    <div>
        <div class="UrunAlanı" v-for="Urun in Urunler" :key="Urun.id">
            <NuxtLink to="/Urun">
                <img class="UrunImage" v-bind:title="Urun.name" v-bind:src="Urun.url" alt="">
            </NuxtLink>
            <NuxtLink to="/Urun" class="LINK">
                <p class="UrunIsim" v-bind:title="Urun.name"> {{Urun.name}}</p>
            </NuxtLink>
            <NuxtLink to="/Urun" class="LINK">
                <b class="UrunFiyat" v-bind:title="Urun.name"> <span>{{Urun.fiyat}},00 TL </span></b>  
            </NuxtLink>
            <button @click="SepeteEkle(Urun)" class="SepeteEkleButton"> Sepete Ekle </button>
        </div>
    </div>

</template>

<script>
import axios from 'axios'

export default {
    name: "urun",
    props:{},
    methods: {
    },

    asyncData (){

        
    },
    computed: {
      Urunler () {
        return this.$store.state.store.Urunler
      },

      StoktaVarMı () {
        return this.$store.getters.StoktaVarMı
      },

      methods: {
            SepeteEkle (Urun) {
                this.$store.dispatch('SepeteEkle', Urun)
            }
        },
    },
}
</script>

<style scoped>

    .UrunAlanı{
        border-color:#E5E7E9;
        border-width: 0.1px;
        border-style:solid;
        border-radius: 4px;
        height:480px;
        margin-right:15px;
        margin-bottom:30px;
        display:inline-block;
    }

    .UrunAlanı:hover{
        border-color:#bfbfbf;
    }

    .UrunImage{
        height:350px;
        padding-left:10px;
        padding-top:10px;
        width:230px;
    }

    .UrunIsim{
        font-family: 'Oswald', sans-serif;
        transform: scaleY(1.2);
        margin-top:0px;
        display:block;
        color:#555;
        text-align: center;
    }

    .LINK{
        text-decoration: none;
        color:#555;
    }

    .UrunFiyat{
        display:block;
        font-family: 'Oswald', sans-serif;
        font-size:19px;
        color:#555;
        text-align: center;
        transform: scaleY(1.2)
    }

    .SepeteEkleButton{
        background-color: #1c2529;
        color:white;
        font-family: 'Oswald', sans-serif;
        font-weight: bold;
        font-size:13px;
        width:230px;
        margin-left: 5px;
        margin-right: 5px;
        height:30px;
        border:none;
        border-radius: 4px;
        margin-top:10px;
        cursor:pointer;   
        transform: scaleY(1.2)
    }

</style>