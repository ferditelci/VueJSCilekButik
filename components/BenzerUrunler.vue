<template>
    <div class="xcontainer">
        <hooper :itemsToShow="4" :autoPlay="false" :playSpeed="10000">
            <slide class="slide_ferdi " v-for="Urun in Urunler" :key="Urun.id">
                <div class="UrunAlanı" >
                    <NuxtLink to="/Urun">
                        <img class="UrunImage" v-bind:title="Urun.name" v-bind:src="Urun.url" alt="">
                    </NuxtLink>
                    <NuxtLink to="/Urun" class="LINK">
                        <p class="UrunIsim" v-bind:title="Urun.name"> {{Urun.name}}</p>
                    </NuxtLink>
                    <NuxtLink to="/Urun" class="LINK">
                        <b class="UrunFiyat" v-bind:title="Urun.name"> <span>{{Urun.fiyat}},00 TL </span></b>  
                    </NuxtLink>
                    <button class="SepeteEkleButton"> Sepete Ekle </button>
                </div>
            </slide>
            <hooper-navigation slot="hooper-addons" ></hooper-navigation>
        </hooper>      
    </div>
</template>

<script>

import { Hooper, Slide, Navigation as HooperNavigation} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
    components: {
        Hooper,
        Slide,
        HooperNavigation
    },
    computed: {
        
      Urunler () {
        return this.$store.state.Urunler
      },
    },

    created() {
        this.$store.dispatch('Urunlerfetch')
    }
}
</script>

<style scoped>
    element.style {
        width:100px!important;
    }
    li, a {
        padding: 0;
    }
    li a:hover {
        background:none;
    }
    .hooper {
        height: auto;
        width: 64%;
        margin: auto;
    }
    .slide_ferdi {
        width: 300px;
        margin-right: 5px;
    }
    .xcontainer {
        width: 100%;
        margin: auto;
        margin-bottom: 30px;
        margin-left:40px;
    }
    .UrunAlanı{
        border-color:#E5E7E9;
        border-width: 0.1px;
        border-style:solid;
        border-radius: 4px;
        padding: 10px;
        display:inline-block;
    }

    .UrunAlanı:hover{
        border-color:#bfbfbf;
    }

    .UrunImage{
        width: 263px;
        height: 438.33px;
    }

    .UrunIsim{
        font-family: 'Oswald', sans-serif;
        margin-top:0px;
        display:block;
        color:#555;
        text-align: center;
        transform: scaleY(1.2);
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
        transform: scaleY(1.2);
    }

    .SepeteEkleButton{
        background-color: #1c2529;
        color:white;
        font-family: 'Oswald', sans-serif;
        font-weight: bold;
        font-size:13px;
        width: 263px;
        height:30px;
        border:none;
        border-radius: 4px;
        margin-top:10px;
        cursor:pointer;
        transform: scaleY(1.2);
    }
    .benzer-urunler-button {
        position: absolute;
    }
    .hooper-navigation {
        background: black;
    }
</style>