<template>
  <div class="UrunEkranıDiv">
    <div v-for="Urun in UrunOzellikleri" :key="Urun.id" class="UrunEkranı">
      <div class="UrunEkranıImage">
        <a href="#">
          <img class="UrunImage" v-bind:src="Urun.url" alt="">
        
          <img class="UrunKucukImage" v-bind:src="Urun.url2" alt="">
        </a>
      </div>

      <div class="UrunEkranıBilgi">
        <h3 class="UrunIsim"> {{Urun.name}} </h3>
        <p class="UrunBilgi"> Ürün Kodu:</p>
        <p class="UrunBilgi"> Barkod: {{Urun.barkod}}</p>
        <p class="UrunBilgi"> Kategori: <NuxtLink to="/Kategoriler" class="KategoriLink">{{Urun.kategori}}</NuxtLink></p>
        <p class="UrunBilgi"> Fiyat</p>
        <b class="UrunFiyat">{{Urun.fiyat}},00 TL</b>

        <div class="BedenlerDiv">
          
          <p class="UrunBeden"> BEDEN:</p>
          <div class="BedenKonum">
            <button v-for="beden in Urun.bedenler" :key="beden.ad" class="Bedenler">
              <b>{{beden.ad}}</b>
            </button>
          </div>

        </div>
        <div class="Görünüm">
          <button @click="AdetAzalt()" class="AdetAzaltButonu">-</button>
          <input class="AdetInput" v-bind:value="counter" >
          <button @click="AdetArttır()" class="AdetArttırButonu">+</button>   
          <button class="SepeteEkleButon"> Sepete Ekle</button><img class="IconBoyut" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1Ni45MzgwOSA0NTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQ0OS45NDE0MDYgODIuNDY4NzVoLTMzNy41NzAzMTJsLTcuMTUyMzQ0LTQ0LjkyOTY4OGMtMy40MjE4NzUtMjEuNDc2NTYyLTIxLjE0ODQzOC0zNy4wNzAzMTItNDIuMTYwMTU2LTM3LjA3MDMxMmgtNTYuMDU4NTk0Yy0zLjg2NzE4OCAwLTcgMy4xMzI4MTItNyA3czMuMTMyODEyIDcgNyA3aDU2LjA1ODU5NGMxNC4wODU5MzcgMCAyNiAxMC44MDg1OTQgMjguMzMyMDMxIDI1LjQ0OTIxOWw0Ni45Njg3NSAyOTUuMTI1YzEuMjM0Mzc1IDkuMzI4MTI1IDkuMTQwNjI1IDE2LjMyODEyNSAxOC41NTA3ODEgMTYuNDI1NzgxaDEyLjkxMDE1NmMzLjM1NTQ2OSAxNyAxOC4yNDYwOTQgMzAuNjE3MTg4IDM2LjA2NjQwNyAzMC42MTcxODggMTcuODE2NDA2IDAgMzIuNzEwOTM3LTEzLjYxNzE4OCAzNi4wNjI1LTMwLjYxNzE4OGg5Ny41MjczNDNjMy4zNTE1NjMgMTcgMTguMjQ2MDk0IDMwLjYyODkwNiAzNi4wNjI1IDMwLjYyODkwNiAyMC4yNzczNDQgMCAzNi43NzM0MzgtMTcuMDcwMzEyIDM2Ljc3MzQzOC0zOC4wNTQ2ODdzLTE2LjUtMzguMDYyNS0zNi43NzM0MzgtMzguMDYyNWMtMTguMTEzMjgxIDAtMzMuMTk5MjE4IDEzLjQ4ODI4MS0zNi4yMTQ4NDMgMzEuNDg4MjgxaC05Ny4yMjI2NTdjLTMuMDE1NjI0LTE4LTE4LjEwMTU2Mi0zMS41LTM2LjIxNDg0My0zMS41LTE4LjExNzE4OCAwLTMzLjIwMzEyNSAxMy41LTM2LjIxNDg0NCAzMS41aC0xMi41NzAzMTNjLTIuNDg4MjgxLS4wMjczNDQtNC41NzQyMTgtMS44ODY3MTktNC44ODY3MTgtNC4zNTE1NjItLjAwNzgxMy0uMDQyOTY5LS4wMTU2MjUuMDU4NTkzLS4wMTk1MzIuMDE1NjI0bC04LjcyMjY1Ni01NC42NjQwNjJoMjM5Ljc0MjE4OGMxNy45MDYyNS4wMDM5MDYgMzMuNDIxODc1LTEyLjQwMjM0NCAzNy4zNTU0NjgtMjkuODcxMDk0bDM2LjE4NzUtMTU3LjIyMjY1NmMuNDgwNDY5LTIuMTI4OTA2LS4wMTE3MTgtNC4zNTkzNzUtMS4zNDM3NS02LjA4OTg0NC0xLjMwODU5My0xLjcxMDkzNy0zLjMxNjQwNi0yLjc0NjA5NC01LjQ3MjY1Ni0yLjgxNjQwNnptLTE3MS4zMjQyMTggMTcyLjgwMDc4MWMtNDAuOTA2MjUgMC03NC4wNjY0MDctMzMuMTYwMTU2LTc0LjA2NjQwNy03NC4wNjY0MDYtLjAwMzkwNi00MC45MDYyNSAzMy4xNjAxNTctNzQuMDY2NDA2IDc0LjA2MjUtNzQuMDY2NDA2IDQwLjkwNjI1IDAgNzQuMDY2NDA3IDMzLjE2MDE1NiA3NC4wNjY0MDcgNzQuMDY2NDA2LS4wNDY4NzYgNDAuODg2NzE5LTMzLjE3OTY4OCA3NC4wMTk1MzEtNzQuMDYyNSA3NC4wNjY0MDZ6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI3OC42MTcxODggMTIxLjE0MDYyNWMtMzMuMTc1NzgyIDAtNjAuMDY2NDA3IDI2Ljg5NDUzMS02MC4wNjY0MDcgNjAuMDY2NDA2LS4wMDM5MDYgMzMuMTc1NzgxIDI2Ljg5MDYyNSA2MC4wNjY0MDcgNjAuMDY2NDA3IDYwLjA2NjQwNyAzMy4xNzE4NzQgMCA2MC4wNjI1LTI2Ljg5NDUzMiA2MC4wNjI1LTYwLjA2NjQwNy0uMDM1MTU3LTMzLjE1NjI1LTI2LjkwNjI1LTYwLjAyNzM0My02MC4wNjI1LTYwLjA2NjQwNnptNDUuOTE0MDYyIDU4LjMyODEyNWMwIDMuODY3MTg4LTMuMTMyODEyIDctNyA3aC0zMi4wNTg1OTR2MzEuOTcyNjU2YzAgMy44NjcxODgtMy4xMzY3MTggNy03IDctMy44NjcxODcgMC03LTMuMTMyODEyLTctN3YtMzEuOTcyNjU2aC0zMS43NzM0MzdjLTMuODY3MTg4IDAtNy0zLjEzMjgxMi03LTdzMy4xMzI4MTItNyA3LTdoMzEuNzczNDM3di0zMS44NTkzNzVjMC0zLjg2NzE4NyAzLjEzMjgxMy03IDctNyAzLjg2MzI4MiAwIDcgMy4xMzI4MTMgNyA3djMxLjg1OTM3NWgzMi4wNTg1OTRjMy44NjcxODggMCA3IDMuMTMyODEyIDcgN3ptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="/>
          <NuxtLink to="/Adres"><button class="HemenAlButon"> <b class="TLicon">₺</b> Hemen Al</button></NuxtLink>
          <button class="WhatsappButon">  WHATSAPP İLE SİPARİŞ VER</button> <img class="Iconkonum" src="https://i.hizliresim.com/p5WbED.png" />

        </div>
          
        <a href="#" class="Favoriler"> <label class="BuyukKalp">♡</label> Favorilerime ekle</a> 
        <img class="YerliUretimBoyut" src="https://www.cilekbutik.net/template/smart/default/assets/images/yerli-uretim.png?v=1578595504">
        <div class="HızlıGönderi">
          <img class="DivIcon" src="https://i.hizliresim.com/6VevqG.png"/>
          <b class="DivYazı">Hızlı Gönderi</b>
        </div>
        <div class="GüvenliAlışveriş">
          <img class="DivIcon2" src="https://i.hizliresim.com/9G1N2Y.png"/>
          <b class="DivYazı2">Güvenli Alışveriş</b>
        </div>

        <div class="Çizgi"></div>

        <div class="DivDisplay">
          <button class="Twitter"><img src="https://i.hizliresim.com/9V5PHm.png"/></button>
          <button class="Facebook"><img src="https://i.hizliresim.com/rbSj77.png"/></button>
          <button class="Linkedin"><img src="https://i.hizliresim.com/7UdmbB.png"/></button>
          <button class="Whatsapp"><img class="boyut" src="https://i.hizliresim.com/p5WbED.png"/></button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

//import UrunListeleme from '@/components/UrunListeleme.vue'


export default {

  data(){
    return{
        UrunOzellikleri:
        [
          {
            id:0,
            url:'https://www.cilekbutik.net/cdn/2/700/700/images/urunler/5fa6a282db005-1368.jpg',
            url2:'https://www.cilekbutik.net/cdn/2/100/100/images/urunler/5fa6a282db005-1368.jpg',
            name:'CEP KAPAKLI KOT CEKET',
            barkod:"6242005630101",
            kategori:"Ceket",
            fiyat:90.00,
            bedenler:[{ad:'S'},{ad:'M'},{ad:'L'}],
          },  
        ],
        counter:1   
      };

    },

  methods: {
    AdetArttır: function(){
      this.counter++;  
    },

    AdetAzalt: function(){
      if(this.counter>1){
        this.counter--;
      }
    },
  },

  components:{
    //UrunListeleme
  }
}
</script>

<style scoped>

  .boyut{
    width:16px;
    height:16px;
  }
  .Facebook{
    width:32px;
    height:32px;
    background: #3b5998;
    border-color: #3b5998;
    border-style: solid;
    cursor:pointer;
    outline:none;
    margin-left:10px;
    margin-bottom:70px;
    margin-top:10px;
  }
  .Facebook:hover{
    background: #335294;
    border-color: #335294;
  }

  .Whatsapp{
    width:32px;
    height:32px;
    background:#33aa29;
    border-color: #33aa29;
    border-style: solid;
    cursor:pointer;
    outline:none;
    margin-left:10px;
  }

  .Whatsapp:hover{
    background:#28961e;
    border-color: #28961e;
  }

  .Linkedin{
    width:32px;
    height:32px;
    background: #007bb6;
    border-color: #007bb6;
    border-style: solid;
    cursor:pointer;
    outline:none;
    margin-left:10px;
  }

  .Linkedin:hover{
    background: #3b5998;
    border-color: #3b5998;
  }
  .Twitter{
    width:32px;
    height:32px;
    background: #00aced;
    border-color: #00aced;
    border-style: solid;
    cursor:pointer;
    outline:none;
    margin-left:20px;
  }


  .Twitter:hover{
    background: #007bff;
    border-color: #007bff;
  }
  .DivDisplay{
    display:inline;
  }
  .Çizgi{
    border-width:0.1px;
    border-style: solid;
    border-color:#E5E7E9;
    width:680px;
    margin-left:20px;
    margin-top:75px;
  }

  .DivYazı{
    font-size:13px;
    margin-left:20px;
    font-family: 'Oswald', sans-serif;
    letter-spacing: -1px;
    transform: scaleY(1.2);
  }

  .DivYazı2{
    font-size:13px;
    text-align: left;
    font-family: 'Oswald', sans-serif;
    letter-spacing: -1px;
    margin-left:50px;
    transform: scaleY(1.2);
  }

  .DivIcon{
    margin-left:36px;
    margin-top:-5px;
    width:25px;
    height:25px;
  }

  .DivIcon2{
    margin-left:50px;
    margin-top:2px;
    width:20px;
    height:20px;
  }
  .HızlıGönderi{
    background:white;
    width: 100px;
    height:50px;
    float:left;
    margin-top:10px;
    border-width:0.1px;
    border-style: solid;
    border-color:#E5E7E9;
    border-radius: 4px;
    margin-left:10px;
  }

  .GüvenliAlışveriş{
    background:white;
    width: 150px;
    height:50px;
    float:left;
    margin-top:10px;
    border-width:0.1px;
    border-style: solid;
    border-color:#E5E7E9;
    border-radius: 4px;
    margin-left:10px;
  }
  .YerliUretimBoyut{
    width:130px;
    height:50px;
    margin-left:20px;
    border-radius: 4px;
    margin-top:10px;
    display:inline;
    float:left;
  }
  .Favoriler{
    font-family: 'Oswald', sans-serif;
    font-size:15px;
    margin-left:20px;
    margin-top:10px;
    letter-spacing: -1px;
    text-decoration: none;
    color:#333;
    display:block;
    transform: scaleY(1.2);
  }
  .Favoriler:hover{
    color:orange;
  }

  .BuyukKalp{
    font-size:17px;
    cursor:pointer;
  }

  .WhatsappButon{
    background:#33aa29;;
    border:none;
    border-radius: 4px;
    color:white;
    height:40px;
    width:250px;
    font-weight: 600;
    font-family: 'Oswald', sans-serif;
    font-size:15px;
    margin-left:15px;
    letter-spacing: -1px;
    cursor:pointer;
    outline:none;
    vertical-align: bottom;
    padding-left:10px;
    transform: scaleY(1.2);
  }
  .TLicon{
    font-size:20px;
    margin-right:3px;
    cursor:pointer;
  }
  .HemenAlButon{
    background:#5e5e5e;
    border:none;
    border-radius: 4px;
    color:white;
    height:40px;
    width:120px;
    font-weight: bold;
    font-family: 'Oswald', sans-serif;
    font-size:16px;
    margin-left:15px;
    letter-spacing: -1px;
    cursor:pointer;
    outline:none;
    vertical-align: bottom;
    transform: scaleY(1.2);
  }
  .IconBoyut{
    width:23px;
    height:23px;
    margin-left:-115px;
    margin-top:22px;
    position:absolute;
    cursor:pointer;
  }

  .Iconkonum{
    width:23px;
    height:23px;
    margin-left:-243px;
    margin-top:25px;
    position:absolute;
    cursor:pointer;
  }
  .SepeteEkleButon{
    background:#ed2c3b;
    border:none;
    border-radius: 4px;
    color:white;
    height:40px;
    width:120px;
    font-weight: bold;
    font-family: 'Oswald', sans-serif;
    font-size:14px;
    margin-left:15px;
    vertical-align: bottom;
    padding-left:30px;
    cursor:pointer;
    outline:none;
    transform: scaleY(1.2);
  }
  .Görünüm{
    display: block;
  }
  .BedenKonum{
    margin-left:10px;
  }
  .KategoriLink{
    font-weight: bold;
    text-decoration: none;
    color:#333;
    transform: scaleY(1.2);
  }
  .UrunEkranı{
    border-width:0.1px;
    border-style: solid;
    border-color:#E5E7E9;
    border-radius: 4px;
    margin-top:10px;
    height:580px;
    width:1200px;
  }

  .BedenlerDiv{
    border-width:0.1px;
    border-style: solid;
    border-color:#dddcdc;
    border-radius: 4px;
    height:85px;
    width:680px;
    margin-left:20px;
    margin-top:20px;
    background: rgba(0,0,0,.03);
  }

  .Bedenler{
    background:white;
    width:30px;
    height:35px;
    border-width:0.1px;
    border-style: solid;
    border-color:#bfbfbf;
    border-radius: 4px;
    outline:none;
    cursor: pointer;
    margin-left:5px;
    margin-top:-10px;
    padding-top:10px;
    padding-bottom: 10px;
  }

  .Bedenler:focus{
    border-color:black;
  }

  .UrunEkranıImage{
    width:40%;
    height:600px;
    float:left;
  }

  .UrunImage{
    position: relative;
    width:95%;
    height:75%;
    margin-top:10px;
    margin-left:10px;
    display:block;
  }
  .UrunKucukImage{
    width:10%;
    height:8%;
    border-color: black;
    border-style: solid;
    border-radius: 8px;
    border-width: 2px;
    padding-top:3px;
    padding-bottom:3px;
    padding-right:2px;
    padding-left:2px;
    margin-top:10px; 
    margin-left:200px; 
    margin-bottom:20px;
  }

  .UrunEkranıDiv{
    display:block;
    margin-top: 20px;
  }
  .UrunEkranıBilgi{
    float:left;
    background: #f5f5f5;
    width:60%;
    height: 100%;
    
  }

  .UrunIsim{
    font-family: 'Oswald', sans-serif;
    letter-spacing: -1px;
    color:#333;
    font-weight:bolder;
    margin-top:30px;
    margin-left:20px;
    transform: scaleY(1.2);
  }

  .UrunBilgi,
  .UrunBeden{
    font-weight:500;
    color:#333;
    font-family: 'Oswald', sans-serif;
    letter-spacing: -1px;
    transform: scaleY(1.2);
  }
  .UrunBeden{
    margin-left:15px;
  }
  .UrunBilgi{
    margin-top:-10px;
    margin-left:20px;
  }
  .UrunFiyat{
    font-size:25px;
    color:#333;
    font-family: 'Oswald', sans-serif;
    font-weight: bolder;
    letter-spacing: -1px;
    margin-left:20px;
    transform: scaleY(1.2);
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
    width:35px;
    height: 47px;
    font-size:25px;
    vertical-align: bottom;
    margin-top:10px;
  }

  .AdetAzaltButonu:hover,
  .AdetArttırButonu:hover{
    background-color:#E5E7E9;
    border-color:#E5E7E9;
  }

  .AdetAzaltButonu{
    border-radius: 4px 0px 0px 4px;
    margin-left:20px;
    outline:none;
  }
  .AdetArttırButonu{
    border-radius: 0px 4px 4px 0px;
    outline:none;
  }
  .AdetInput{
    width:35px;
    border-width:1px;
    height: 47px;
    border-style: solid;
    border-right:none;
    border-left:none;
    border-color:#bfbfbf;
    border-width: 3px;
    text-align: center;
    font-size:18px;
    font-weight: bold;
    font-family: 'Oswald', sans-serif;
    vertical-align: bottom;
    margin-top:10px;
  }

</style>