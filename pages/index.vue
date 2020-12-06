<template>
  <div >
    <div class="CarouselBody">
        <Carousel @next="next" @prev="prev" class="Carousel">
            <CarouselSlide v-for="(slide,index) in slides" :key="slide" :index="index" :visibleSlide="visibleSlide">
                <a href="#"><img :src="slide"/></a>
            </CarouselSlide>
        </Carousel>
    </div>
    <div class="UrunlerBody">
        <div class="CokSatanUrunler">
            ÇOK SATAN ÜRÜNLER
        </div>
        <UrunListeleme class="Urunler"/>
    </div>
  </div>
</template>

<script>
  import Carousel from '@/components/Carousel'
  import CarouselSlide from '@/components/CarouselSlide'
  import UrunListeleme from '@/components/UrunListeleme'

  export default {

    data() {
        return {
            slides: [ 
                'https://www.cilekbutik.net/cdn/1/1190/450/images/manset/uygulama-22.png',
                'https://www.cilekbutik.net/cdn/1/1190/450/images/manset/kargo-23.png',
            ],
            visibleSlide : 0,
        }
    },
    computed: {
        slidesLen() {
            return this.slides.length;
        }
    },
    methods: {
        init() {
            setInterval(() => {
                    this.visibleSlide++;
                    if(this.visibleSlide >= this.slidesLen) {
                        this.visibleSlide = 0;
                    }
                }, 5000);
        },         
        next() {
            if(this.visibleSlide >= this.slidesLen -1) {
                this.visibleSlide = -1;
            }else {
                this.visibleSlide++;
            }
        },
        prev() {
            if(this.visibleSlide <= 0) {
                this.visibleSlide = this.slidesLen -1;
            }else {
                this.visibleSlide--;
            }
        }        
    },
    mounted() {
        this.init();
    },

    components:{
      Carousel,
      CarouselSlide,
      UrunListeleme
    }
  }
</script>

<style>
.CarouselBody {
    max-width: 64%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 30px;
}
.UrunlerBody {
    max-width: 70%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 50px;
}
.CokSatanUrunler {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 30px;
    transform: scaleY(1.2);
    font-family: 'Oswald', sans-serif;
}
</style>
