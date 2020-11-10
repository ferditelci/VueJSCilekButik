<template>
    <div>
        <Header/>
        <NavigationBar/>
        <AdresGirisi/>
        <carousel @next="next" @prev="prev">
            <carousel-slide v-for="(slide,index) in slides" :key="slide" :index="index" :visibleSlide="visibleSlide">
                <a href="#"><img :src="slide"/></a>
            </carousel-slide>
        </carousel>
        <UyeGirisi/>
        <UrunListeleme/>
        <SepeteEkleEkranı/>
        <UrunFiltreleme/>
        <SepetEkranı/>  
    </div>
</template>

<script>

import Header from '@/components/Header.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import Carousel from '@/components/Carousel.vue'
import CarouselSlide from '@/components/CarouselSlide.vue'
import UyeGirisi from '@/components/UyeGirisi.vue'
import UrunListeleme from '@/components/UrunListeleme.vue'
import UrunFiltreleme from '@/components/UrunFiltreleme.vue'
import SepetEkranı from '@/components/SepetEkranı.vue'
import SepeteEkleEkranı from '@/components/SepeteEkleEkranı.vue'
import AdresGirisi from '@/components/AdresGirisi.vue'

export default {
    name:'home',
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
    components: {
        Header,
        NavigationBar,
        Carousel,
        CarouselSlide,
        UyeGirisi,
        AdresGirisi,
        UrunFiltreleme,
        UrunListeleme,
        SepetEkranı,
        SepeteEkleEkranı
    }
    
}
</script>

<style>
</style>