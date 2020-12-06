<template>
    <div class="Sepet">
        <SepetEkranı/>
    </div>
</template>

<script>
  import SepetEkranı from '@/components/SepetEkranı'

  export default {

    components:{
      SepetEkranı
    }
  }
</script>

<style scoped>
    .Sepet{
        margin-top:20px;
        margin-right: auto;
        margin-left:auto;
        width:70%
    }
</style>
