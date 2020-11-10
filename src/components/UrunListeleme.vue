<template>
    
    <div>
        <div class="UrunAlanı" v-for="Urun in Urunler" :key="Urun.id">
            <a href="">
                <img class="UrunImage" v-bind:title="Urun.name" v-bind:src="Urun.url" alt="">
            </a>
            <a class="LINK" href="">
                <p class="UrunIsim" v-bind:title="Urun.name"> {{Urun.name}}</p>
            </a>
            <a class="LINK" href="">
                <b class="UrunFiyat" v-bind:title="Urun.name"> <span>{{Urun.fiyat + "\tTL"}} </span></b>  
            </a>

            <button class="SepeteEkleButton"> Sepete Ekle </button>
        </div>
    </div>

</template>

<script>

export default {
    name: "urun",
    props:{},
    methods: {
    },

    data(){
        return{
            Urunler:[
                {
                    id:0,
                    url:'https://www.cilekbutik.net/cdn/1/300/500/images/urunler/5fa57c217b440-1353.jpg',
                    name:'Lakers Sweat',
                    fiyat:55.00

                },
                {
                    id:1,
                    url:'https://www.cilekbutik.net/cdn/1/300/500/images/urunler/5fa57c217b440-1353.jpg',
                    name:'asd',
                    fiyat:23.23

                },
                {
                    id:2,
                    url:'https://www.cilekbutik.net/cdn/1/300/500/images/urunler/5fa57c217b440-1353.jpg',
                    name:'Lakers Sweat',
                    fiyat:55.00

                },
                {
                    id:3,
                    url:'https://www.cilekbutik.net/cdn/1/300/500/images/urunler/5fa57c217b440-1353.jpg',
                    name:'Lakers Sweat',
                    fiyat:55.00

                },
                {
                    id:4,
                    url:'https://www.cilekbutik.net/cdn/1/300/500/images/urunler/5fa57c217b440-1353.jpg',
                    name:'Lakers Sweat',
                    fiyat:55.00

                },
                {
                    id:5,
                    url:'https://www.cilekbutik.net/cdn/1/300/500/images/urunler/5fa57c217b440-1353.jpg',
                    name:'Lakers Sweat',
                    fiyat:55.00

                },
                {
                    id:6,
                    url:'https://www.cilekbutik.net/cdn/1/300/500/images/urunler/5fa57c217b440-1353.jpg',
                    name:'Lakers Sweat',
                    fiyat:55.00

                },
                {
                    id:7,
                    url:'https://www.cilekbutik.net/cdn/1/300/500/images/urunler/5fa57c217b440-1353.jpg',
                    name:'Lakers Sweat',
                    fiyat:55.00

                },
                {
                    id:8,
                    url:'https://www.cilekbutik.net/cdn/1/300/500/images/urunler/5fa57c217b440-1353.jpg',
                    name:'Lakers Sweat',
                    fiyat:55.00

                },
                {
                    id:9,
                    url:'https://www.cilekbutik.net/cdn/1/300/500/images/urunler/5fa57c217b440-1353.jpg',
                    name:'Lakers Sweat',
                    fiyat:55.00

                },
                {
                    id:10,
                    url:'https://www.cilekbutik.net/cdn/1/300/500/images/urunler/5fa57c217b440-1353.jpg',
                    name:'Lakers Sweat',
                    fiyat:55.00

                },
                {
                    id:11,
                    url:'https://www.cilekbutik.net/cdn/1/300/500/images/urunler/5fa57c217b440-1353.jpg',
                    name:'Lakers Sweat',
                    fiyat:55.00

                },
                {
                    id:12,
                    url:'https://www.cilekbutik.net/cdn/1/300/500/images/urunler/5fa57c217b440-1353.jpg',
                    name:'Lakers Sweat',
                    fiyat:55.00

                },
                {
                    id:13,
                    url:'https://www.cilekbutik.net/cdn/1/300/500/images/urunler/5fa6a45571d00-1373.jpg',
                    name:'Lakers Sweat',
                    fiyat:55.00

                },
            ]
            };

    }
}
</script>

<style scoped>

    .UrunAlanı{
        border-color:#E5E7E9;
        border-width: 0.1px;
        border-style:solid;
        border-radius: 4px;
        width:250px;
        height:480px;
        margin-right:30px;
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
    }

    .SepeteEkleButton{
        background-color: #1c2529;
        color:white;
        font-family: 'Oswald', sans-serif;
        font-weight: bold;
        font-size:13px;
        width:230px;
        margin-left:10px;
        height:30px;
        border:none;
        border-radius: 4px;
        margin-top:10px;
        cursor:pointer;
    }

</style>