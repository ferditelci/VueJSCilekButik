<template>
    <div>
        <div class="UrunDetayBody">
            <div class="UrunKategori">
                <NuxtLink to="/">Ana Sayfa</NuxtLink> > <NuxtLink to="/Kategoriler">Dış Giyim</NuxtLink> > <NuxtLink to="/Kategoriler">Ceket</NuxtLink>
            </div>
            <SepeteEkleEkranı/>
            
        </div>
        <div class="BenzerUrunlerText">
            Benzer Ürünler
        </div>
        <BenzerUrunler/>
    </div>
</template>

<script>
    import SepeteEkleEkranı from '@/components/SepeteEkleEkranı'
    import BenzerUrunler from '@/components/BenzerUrunler'
    export default {
    components:{
        SepeteEkleEkranı,
        BenzerUrunler
        }     
    }
</script>

<style scoped>
    a{
        color:#555;
        font-family: 'Oswald', sans-serif;
        font-size:13px;
        letter-spacing: -1px;
        text-decoration: none;
        font-weight: bold;
        margin-right: 5px;
        margin-left: 5px;
        transform: scaleY(1.2);
    }

    .UrunKategori {
        font-weight: 500;
        font-size: 13px;
        margin-left: -3px;
        margin-top: 20px;
    }
    .UrunDetayBody {
        max-width: 80%;
        margin-right: auto;
        margin-left: auto;
        width: 1200px;
    }
    .BenzerUrunlerText {
        max-width: 80%;
        margin-right: auto;
        margin-left: auto;
        width: 1200px;
        margin-top: 50px;
        margin-bottom: 30px;
        font-size: 20px;
        font-weight: bold;
        font-family: 'Oswald', sans-serif;
        transform: scaleY(1.2);
        color:#212529
    }
</style>