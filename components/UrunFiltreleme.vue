<template>
    <section class="UrunFiltrelemeSection">

        <div class="AltKategorilerDiv">
            <h3 class="AltKategorilerBaşlık">Alt Kategoriler</h3>
            <NuxtLink to="/Kategoriler" v-for="AltKategori in AltKategoriler" :key="AltKategori.id" title="Sweatshirt" class="AltKategoriler">{{AltKategori.isim}}</NuxtLink>
            <span><br></span>
        </div>

        <div class="Markalar">
            <h3 class="AltKategorilerBaşlık">Markalar</h3>
            <input type="checkbox" class="UrunFiltrelemeCheckBox"/>
            <span class="SpanImage" />
            <a href="#" class="CheckboxIsim"> Çilekbutik</a>
        </div>
        <div class="FiyatAralıkları">
            <h3 class="AltKategorilerBaşlık">Fiyat Aralıkları</h3>

            <div class="FiyatAralığı">
                <div v-for="Fiyat in FiyatAralık" :key="Fiyat.id">
                    <input type="radio"  name="fiyat" class="UrunFiltrelemeCheckBox"/>
                    <span class="SpanImage"/>
                    <a href="#" class="CheckboxIsim"> {{Fiyat.Aralık}}</a>
                </div>
            </div>
        </div>
        <div class="Listeleme">
            <h3 class="AltKategorilerBaşlık">Listeleme</h3>
            <input type="checkbox" class="UrunFiltrelemeCheckBox" v-bind:checked="clearAll"/>
            <span class="SpanImage" />
            <a href="#" class="CheckboxIsim"> Sadece stoktakileri göster</a>
        </div>
        <button class="SeçimTemizleButon"> Seçimleri Temizle</button>

    </section>
</template>

<script>
export default {
    data(){
        return{
            AltKategoriler:[{isim:'Sweatshirt', id:0},{isim:'Gömlek/Bluz', id:1},{isim:'Crop', id:2}],
            FiyatAralık:[{Aralık:'20 TL ve altı', id:0},{Aralık:'20 TL - 39 TL', id:1},{Aralık:'39 TL - 59 TL', id:2},{Aralık:'59 TL - 79 TL', id:3},{Aralık:'79 TL - 99 TL', id:4},{Aralık:'99 TL - 119 TL', id:5},{Aralık:'119 TL - 139 TL', id:6},{Aralık:'139 TL - 159 TL', id:7},{Aralık:'159 TL - 179 TL', id:8},{Aralık:'179 TL ve üzeri', id:9}],
           
        }
    },
    methods:{
    }
}
</script>

<style scoped>

    /* width */
    ::-webkit-scrollbar {
    width: 7px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 15px;
    }

    .UrunFiltrelemeSection{
        display:block;
    }
    .FiyatAralığı{
        margin-top:20px;
        height:310px;
        overflow: auto;
    }
    .FiyatAralığı div{
        display: block;
    }
    
    .AltKategorilerDiv{
        width: 300px;
        border-width:0.1px;
        border-style: solid;
        border-color:#E5E7E9;
        display:block;
        border-radius: 4px;
        margin-left:130px;
        padding-left:15px;
    }
    .Markalar,
    .FiyatAralıkları,
    .Listeleme{
        width: 300px;
        border-width:0.1px;
        border-style: solid;
        border-color:#E5E7E9;
        display:block;
        border-radius: 4px;
        margin-top:10px;
        margin-left:130px;
        padding-left:15px;
    }

    .AltKategorilerBaşlık{
        font-family: 'Oswald', sans-serif;
        font-size:17px;
        font-weight: bold;
        letter-spacing: -1px;
        margin-bottom: 10px;
        margin-top:10px;
        transform: scaleY(1.2);
    }

    .AltKategoriler{
        text-decoration: none;
        color:#555;
        display: block;
        margin-top:7px;
        font-family: 'Oswald', sans-serif;
        font-size:15px;
        letter-spacing: -1px;
        transform: scaleY(1.2);
    }

    .AltKategoriler:hover{
        color:black;
    }

    .CheckboxIsim{
        color:#555;
        font-family: 'Oswald', sans-serif;
        font-size:15px;
        letter-spacing: -1px;
        vertical-align: top;
        text-decoration: none;
        margin-left:5px;
        transform: scaleY(1.2);
    }
    
    input[type="radio"] {
        -webkit-appearance: checkbox;
    }

    .UrunFiltrelemeCheckBox{
        height:20px;
        width: 20px;
        border-radius: 4px;
        margin-top:0px;
        margin-bottom:20px;
        position: relative;
        z-index: 0;
        cursor:pointer;
        
    }


    .SpanImage{
        border-width: 2px;
        border-color:#E5E7E9;
        border-radius: 4px;
        display: inline;
    }

    .UrunFiltrelemeCheckBox:checked + .SpanImage{
        background:url("https://www.flaticon.com/svg/static/icons/svg/61/61141.svg");
    }

    .SeçimTemizleButon{
        background-color:#6c757d;
        border:none;
        border-radius:4px;
        color:white;
        font-family: 'Oswald', sans-serif;
        font-size:15px;
        letter-spacing: -1px;
        margin-left:180px;
        width:120px;
        height:35px;
        margin-top:10px;
        cursor:pointer;
        outline: none;
    }

    .SeçimTemizleButon:hover{
        background:#566573 ;
    }
    
</style>