<template>
    <div>
        
        <div class="UrunKategori">
            <NuxtLink to="/">Ana Sayfa</NuxtLink> > <NuxtLink to="/Kategoriler">Dış Giyim</NuxtLink> > <NuxtLink to="/Kategoriler">Ceket</NuxtLink>
        </div>
        <div class="container" >
            <UrunFiltreleme/>
            <div class="Urunler">
                <h3 class="başlık">Üst Giyim</h3>
                <UrunListeleme />
            </div>
        </div>
    </div>
</template>

<script>
  import UrunFiltreleme from '@/components/UrunFiltreleme'
  import UrunListeleme from '@/components/UrunListeleme'

  export default {

    components:{
      UrunFiltreleme,
      UrunListeleme
    }
  }
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  margin-top:10px;
}

.Urunler{
    margin-left:20px;
    max-width: 50%;
    margin-right: auto;
}
.UrunKategori {
    font-weight: 500;
    font-size: 13px;
    margin-left: 130px;
    margin-top: 20px;
    margin-bottom: 20px;
}
a{
    color:#555;
    font-family: 'Oswald', sans-serif;
    font-size:17px;
    letter-spacing: -1px;
    text-decoration: none;
    font-weight: 600;
    margin-right: 5px;
    margin-left: 5px;
    transform: scaleY(1.2);
}

.başlık{
    font-size:22px;
    font-weight: bold;
    font-family: 'Oswald', sans-serif;
    color:#212529;
    letter-spacing:-1px;
    transform: scaleY(1.2);
}
</style>
