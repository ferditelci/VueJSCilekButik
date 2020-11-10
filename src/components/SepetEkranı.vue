<template>
    <section class="SepetEkranıSection">
        <div class="SepetEkranı">
            <p class="SepetListesiYazı">Sepet Listesi</p>
            <div class="SepetEkranıBirim">
                <p class="SepetEkranıUrun">Ürün</p>
                <p class="SepetEkranıFiyat">Fiyat</p>
                <p class="SepetEkranıAdet">Adet</p>
                <p class="SepetEkranıTutar">Tutar</p>
            </div>

            <div v-for="Urun in SepetUrunler" :key="Urun.id" class="SepetUrunler">
                <div SepetFiyatKonum>

                    <b class="UrunAdetFiyat"> {{Urun.fiyat + ",00 TL"}} </b>

                    <button @click="AdetAzalt(Urun)" class="AdetAzaltButonu">-</button>
                    <input class="AdetInput" v-bind:value="Urun.counter" >
                    <button @click="AdetArttır(Urun)" class="AdetArttırButonu">+</button>
                    <b class="Tutar"> {{Urun.tutar = Urun.fiyat * Urun.counter }},00 TL </b>
                </div>
                <a href="https://www.cilekbutik.net/sirt-baski-sweat-urun1434.html">
                    <img class="UrunImage" v-bind:src="Urun.url" alt="">
                </a>
                <div class="konum">
                    <a class="LINK" href="https://www.cilekbutik.net/sirt-baski-sweat-urun1434.html">
                        <b class="UrunIsim" alt="">
                            {{Urun.name}}
                        </b>
                    </a>

                    <b class="UrunBeden">
                        BEDEN: 
                        <span> {{Urun.beden}} </span> 
                    </b>

                    <b class="UrunRenk">
                        Renk: 
                        <span> {{Urun.renk}} </span> 
                    </b>

                    <button @click="UrunSil(Urunid)" class="UrunSilButton" >Sil</button>
                </div>

            </div> 

            <div class="AlışverişeDevamEtDiv">
                <button class="AlışverişeDevamEtButon">
                    &lt; Alışverişe Devam Et
                </button>
            </div>    
        </div> 

        <div class="ŞiparişÖzeti">
            <h3 class="ŞiparişÖzetiYazı">Sipariş Özeti</h3>
            <b class="ŞiparişÖzetiAra"> &nbsp;Ürünler Toplamı <b class="ToplamFiyat"> {{GenelToplamHesaplama }},00 TL</b> </b>
            <div class="ŞiparişÖzetiGenel">
                <b> &nbsp;
                    Genel Toplam
                    <b class="GenelToplamFiyat"> {{GenelToplamHesaplamaKDV }},00 TL</b>
                    <br> &nbsp;(KDV Dahil) 
                </b>
            </div>

            <button class="AlışverişiTamamlaButonu" > Alışverişi Tamamla > </button>
        </div>

    </section>
    
</template>


<script>
export default {
    
  data(){
        return{
            SepetUrunler:[
                {
                    id:0,
                    url:'https://www.cilekbutik.net/cdn/2/100/100/images/urunler/5fa6a3f956175-1372.jpg',
                    name:'Lakers Sweat',
                    beden:'M',
                    renk:'TURUNCU',
                    fiyat:55.00,
                    counter:1,
                    tutar:55.00
                },
                {
                    id:1,
                    url:'https://www.cilekbutik.net/cdn/2/100/100/images/urunler/5fa57bd2c7259-1351.jpg',
                    name:'PANTOLON',
                    beden:'S',
                    renk:'SİYAH',
                    counter:1,
                    fiyat:55.00,
                    tutar:55.00
                },  
                {
                    id:2,
                    url:'https://www.cilekbutik.net/cdn/2/100/100/images/urunler/5fa6a3f956175-1372.jpg',
                    name:'Lakers Sweat',
                    beden:'M',
                    renk:'TURUNCU',
                    counter:1,
                    fiyat:55.00,
                    tutar:55.00
                },  
                {
                    id:3,
                    url:'https://www.cilekbutik.net/cdn/2/100/100/images/urunler/5fa6a3f956175-1372.jpg',
                    name:'Lakers Sweat',
                    beden:'M',
                    renk:'TURUNCU',
                    counter:1,
                    fiyat:55.00,
                    tutar:55.00
                },  
                {
                    id:4,
                    url:'https://www.cilekbutik.net/cdn/2/100/100/images/urunler/5fa6a3f956175-1372.jpg',
                    name:'Lakers Sweat',
                    beden:'26',
                    renk:'TURUNCU',
                    counter:1,
                    fiyat:55.00,
                    tutar:55.00
                },    
            ],
            GenelToplam:0,
            GenelToplamKDV:0
        };

    },  
  methods: {
      UrunSil: function (Urunid) {
          this.SepetUrunler.splice(Urunid,1);
        },

        AdetArttır: function(Urun){
            Urun.counter++;  
        },

        AdetAzalt: function(Urun){
            if(Urun.counter>1){
                Urun.counter--;
            }
        },
    },

    computed:{
        GenelToplamHesaplama: function(){
            return this.SepetUrunler.map(urun => urun.tutar).reduce((total, amount) => total + amount);
        },
        GenelToplamHesaplamaKDV: function(){
            return this.SepetUrunler.map(urun => urun.tutar).reduce((total, amount) => total + amount);
        }
    }
    
}
</script>


<style scoped>

    .AlışverişiTamamlaButonu{
        background-color:#dc3545;
        width:300px;
        height:50px;
        border:none;
        border-radius: 8px;
        color:white;
        font-weight: bold;
        font-size: 18px;
        cursor:pointer;
        margin-top:15px;
        font-family: 'Oswald', sans-serif;
        outline:none;
    }

    .SepetEkranıSection{
        display:inline;
    }

    .SepetUrunler,
    .SepetEkranıBirim,
    .SepetEkranı,
    .AlışverişeDevamEtDiv{
        width: 800px;
        border-width:0.1px;
        border-style: solid;
        border-color:#E5E7E9;
    }

    .SepetEkranıBirim{
        display:block;
    }

    .SepetEkranı{
        border-radius: 8px 8px 0px 0px;
        border-bottom: none;
        float:left;
        display:inline;        
    }

    .SepetUrunler{
        border-bottom: none;
        overflow:hidden;
        display:block;
    }

    .AlışverişeDevamEtDiv{
        border-radius: 0px 0px 8px 8px;
        border-top:none;
        display:block;
    }

    .SepetUrunler:hover{
        background:#D7DBDD;
        border-color:#D7DBDD;
    }
    .SepetEkranıBirim{
        float: left;
        height: 50px;
        border-bottom:none;
    }

    .SepetEkranıUrun,
    .SepetListesiYazı,
    .SepetEkranıFiyat,
    .SepetEkranıAdet,
    .SepetEkranıTutar{
        font-size:18px;
        font-weight:bold;
        display:inline-block;
        font-family: 'Oswald', sans-serif;
    }

    .SepetEkranıUrun,
    .SepetEkranıFiyat,
    .SepetEkranıAdet,
    .SepetEkranıTutar{
        color:#2C3E50 ;
        letter-spacing: -1px;
    }

    .SepetListesiYazı{
        padding-left:30px;
    }

    .SepetEkranıUrun{
        padding-left:5px;
    }

    .SepetEkranıFiyat{
        padding-left:450px;
    }

    .SepetEkranıAdet{
        padding-left:80px;
    }

    .SepetEkranıTutar{
        padding-left:100px;
    }

    .UrunImage{
        padding-left:5px;
        margin-top:-30px;
        display:inline-block;
    }

    .LINK{
        text-decoration: none;
        vertical-align: top;
        color:#333;
        font-family: 'Oswald', sans-serif;
    }

    .UrunIsim{
        display:block;
        margin-top:-25px;
        padding-left:5px;
        letter-spacing: -1px;
        color:#333;
    }

    .UrunBeden,
    .UrunRenk{
        padding-left:5px;
        display:block;
        letter-spacing: -1px;
        font-family: 'Oswald', sans-serif;
        color:#333;
    }

    .konum{
        display:inline-block;
        vertical-align: top;
    }

    .UrunSilButton{
        background-color:#dc3545;
        color:white;
        border:solid;
        border-color:#dc3545;
        border-radius: 4px;
        margin-left: 8px;   
        margin-top:7px;
        width:26px;
        height:26px;
        text-align: center;
        padding-left:3px;
        letter-spacing: -1px;
        font-weight: bold;
        cursor:pointer;
        display: block;
        font-family: 'Oswald', sans-serif;
        outline:none;
    }

    .SepetFiyatKonum{
        display:inline-block;
    }

    .UrunAdetFiyat{
        font-weight: normal;
        display:inline-block;
        margin-left:485px;
        letter-spacing: -1px;
        font-family: 'Oswald', sans-serif;
    }

    .AdetAzaltButonu,
    .AdetArttırButonu{
        background-color: #bfbfbf;
        border-color:#bfbfbf;
        color: #484848;
        font-weight: bold;
        cursor:pointer;
        border-style:solid;
        border-width:1px;
        width:25px;
        height: 25px;
        margin-top:10px;
    }

    .Tutar{
        float:right;
        margin-right:10px;
        margin-top:10px;
    }
     

    .AdetAzaltButonu:hover,
    .AdetArttırButonu:hover{
        background-color:#E5E7E9;
        border-color:#E5E7E9;
    }

    .AdetAzaltButonu{
        border-radius: 4px 0px 0px 4px;
        margin-left:45px;
        outline:none;
    }
    .AdetArttırButonu{
        border-radius: 0px 4px 4px 0px;
        margin-right:55px;
        outline:none;
    }
    .AdetInput{
        width:25px;
        border-width:1px;
        height: 25px;
        border-style: solid;
        border-right:none;
        border-left:none;
        border-color:#bfbfbf;
        border-width: 3px;
        text-align: center;
    }

    .AlışverişeDevamEtButon{
        background-color:#F8F9F9;
        color:black;
        font-weight: bold;
        border:none;
        cursor:pointer;
        height:32px;
        margin-bottom:15px;
        margin-top:20px;
        margin-left:10px;
        display:inline-block;
        font-family: 'Oswald', sans-serif;
        outline:none;
    }

    .AlışverişeDevamEtButon:hover{
        background-color:#D7DBDD;
    }
    
    .ŞiparişÖzeti{
        border-width:0.1px;
        border-style: solid;
        border-color:#E5E7E9;
        width:300px;
        height: 136px;
        border-radius: 8px;
        float:left;
        margin-left:30px;
        display:block;
    }

    .ŞiparişÖzetiYazı{
        letter-spacing:0.1px;
        margin-left:10px;
        display:block;
    }

    .ŞiparişÖzetiAra{
        letter-spacing:-1px;
        border-style:solid;
        border-color:#E5E7E9;
        border-right:none;
        border-left:none;
        border-width: 0.1px;
        padding-top:5px;
        padding-bottom:5px;
        padding-right:4px;
        background-color:#F4F6F7;
        display:block;
        font-family: 'Oswald', sans-serif;
    }

    .ŞiparişÖzetiGenel{
        letter-spacing:-1px;
        border:none;
        padding-top:5px;
        padding-bottom:5px;
        padding-right:4px;
        border-radius: 0px 0px 8px 8px;
        background-color:#F4F6F7;
        font-family: 'Oswald', sans-serif;
    }

    .ToplamFiyat{
        float:right;
        font-family: 'Oswald', sans-serif;
    }

    .GenelToplamFiyat{
        float:right;
        color:green;
        font-size:21px;
        font-family: 'Oswald', sans-serif;
    }

</style>