<template>
    <transition name=crossfade>
        <div v-show="visibleSlide === index" class="carousel-slide">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
    props: [
        'visibleSlide',
        'index'
    ],
    data() {
        return {

        }
    }
}
</script>

<style>
    .carousel-slide {
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
    }
    .crossfade-enter-active {
        animation:  crossfadeInAnimation 1s ease-in-out;
    }
    .crossfade-leave-active {
        animation: crossfadeOutAnimation 1s ease-in-out;
    }
    @keyframes crossfadeInAnimation {
        from {opacity: 0%}
        to {opacity: 100%}
    }
    @keyframes crossfadeOutAnimation {
        from {opacity: 100%}
        to {opacity: 0%}
    }   

/*     .left-enter-active {
        animation: leftInAnimation 0.4s ease-in-out;
    }
    .left-leave-active {
        animation: leftOutAnimation 0.4s ease-in-out;
    }
    @keyframes leftInAnimation {
        from { transform: translateX(100%) }
        to { transform: translateX(0)}
    }
    @keyframes leftOutAnimation {
        from { transform: translateX(0) }
        to { transform: translateX(-100%)}
    } */
</style>
