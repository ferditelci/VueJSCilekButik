<template>
    <div class="carousel">
        <slot></slot>
        <button @click="next" class="next carousel-button" style="font-size:x-large"><i class="fas fa-chevron-right" id='normal-text'></i></button>
        <button @click="prev" class="prev carousel-button" style="font-size:x-large"><i class="fas fa-chevron-left" id='normal-text'></i></button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {       
        next() {
            this.$emit('next')
        },
        prev() {
            this.$emit('prev')
        }
    }
}
</script>

<style>
    .carousel{
        position:relative;
        overflow: hidden;
        width: 1190px;
        height: 450px;
        border-radius: 8px;
    }
    .carousel-button {
        position: absolute;
        width: 50px;
        height: 40px;
        top: calc(50% - 20px);
        background: none;
        border: none;
        color: white;
        opacity: .5;
        outline: none;
    }
    .carousel-button:active, .carousel-button:hover{
        outline: none;
        cursor: pointer;
        opacity: 1;
    }
    .next {
        right: 0;
        font: normal normal normal 14px/1 FontAwesome;
    }
    .prev {
        left: 0;
        font: normal normal normal 14px/1 FontAwesome;  
    }
    #normal-text {
        font-style: normal;
        font-weight: 900;
    }
</style>