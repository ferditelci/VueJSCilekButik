<template>
    
    <div>
        <ul v-for="NavBarElement in NavBarElements" :key="NavBarElement.name1" class="navbar">
            <li class="Navbarli"><NuxtLink to="/Kategoriler" class="active"> <i class="fa fa-bars mr-2 pl-2 pr-2" style="margin-right:8px;"></i>{{NavBarElement.name1}}</NuxtLink></li>
            <li class="Navbarli" id="UstGiyimDropdown">
                <NuxtLink to="/Kategoriler">{{NavBarElement.name2}}</NuxtLink>
                <ul class="dropdownUstGiyim">
                    <li v-for="UstGiyim in UstGiyimler" :key="UstGiyim.name" class="DropdownLi"><NuxtLink to="/Kategoriler">{{UstGiyim.name}}</NuxtLink></li>
                    <li id="DropdowLiSon" class="DropdownLi"><NuxtLink to="/Kategoriler">Bodysuit</NuxtLink></li>
                </ul>
            </li>
            <li class="Navbarli" id="AltGiyimDropdown">
                <NuxtLink to="/Kategoriler">{{NavBarElement.name3}}</NuxtLink>
                <ul class="dropdownAltGiyim">
                    <li v-for="AltGiyim in AltGiyimler" :key="AltGiyim.name" class="DropdownLi"><NuxtLink to="/Kategoriler">{{AltGiyim.name}}</NuxtLink></li>
                    <li id="DropdowLiSon2" class="DropdownLi"><NuxtLink to="/Kategoriler">Eşofman</NuxtLink></li>
                </ul>
            </li>
            <li class="Navbarli" id="DIŞGiyimDropdown">
                <NuxtLink to="/Kategoriler">{{NavBarElement.name4}}</NuxtLink>
                <ul class="dropdownDIŞGiyim">
                    <li v-for="DışGiyim in DışGiyimler" :key="DışGiyim.name" class="DropdownLi"><NuxtLink to="/Kategoriler">{{DışGiyim.name}}</NuxtLink></li>
                </ul>
            </li>
            <li class="Navbarli"><NuxtLink to="/Kategoriler">{{NavBarElement.name5}}</NuxtLink></li>
            <li class="Navbarli"><NuxtLink to="/Kategoriler">{{NavBarElement.name6}}</NuxtLink></li>
            <li class="Navbarli"><NuxtLink to="/Kategoriler">{{NavBarElement.name7}}</NuxtLink></li>
            <li class="Navbarli"><NuxtLink to="/Kategoriler">{{NavBarElement.name8}}</NuxtLink></li>
            <li class="Navbarli"><NuxtLink to="/Kategoriler">{{NavBarElement.name9}}</NuxtLink></li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "Navbar",

        data(){
            return{
                NavBarElements:[{name1:'YENİ ÜRÜNLER',name2:'ÜST GIYIM',name3:'ALT GIYIM',name4:'DIŞ GIYIM',name5:'ELBISELER',name6:'AKSESUAR',name7:'PIJAMA TAKIMI',name8:'İKILI TAKIM',name9:'İNDIRIMLI URUNLER'}],
                UstGiyimler:[{name:'Sweatshirt'},{name:'T-shirt'},{name:'Kazak'},{name:'Gömlek/Bluz'},{name:'Crop'}],
                AltGiyimler:[{name:'Jean Pantolon'},{name:'Mevsimlik Pantolon'},{name:'Etek'},{name:'Şort'},{name:'Tayt'}],
                DışGiyimler:[{name:'Ceket'},{name:'Mont'},{name:'Trençkot'},{name:'Yağmurluk'}],
                user:'',
                eposta: '',
                sifre: '',
            };
        },
        props:{
        },
    };
</script>

<style scoped>

.navbar {
  list-style-type: none;
  margin: 0px;
  height:60px;
  overflow: hidden;
  background-color: #222;
  flex-wrap: wrap;
  margin-left:-10px;
  margin-right:-10px;
  padding-left:350px;
}

.dropdownUstGiyim,
.dropdownAltGiyim,
.dropdownDIŞGiyim{
  list-style-type: none;
  margin-top:60px;
  overflow: hidden;
  background-color: #ed2c3b;
  display:none;
  position:absolute;
  z-index: 2;
  width:1200px;
  height:100px;
}

.dropdownUstGiyim{
   margin-left:-220px;
}

.dropdownAltGiyim{
   margin-left:-343px;
}

.dropdownDIŞGiyim{
    margin-left:-463px;
}

.DropdownLi{
    display:block;
    float:left;
    padding-right: 155px;
}

#DropdowLiSon{
    padding-left:35px;
}

#DropdowLiSon2{
    padding-left:60px;
}
#UstGiyimDropdown{
    display:flex;
}

#UstGiyimDropdown:hover .dropdownUstGiyim{
     display:inline-block;
}

#AltGiyimDropdown:hover .dropdownAltGiyim{
     display:inline-block;
}

#DIŞGiyimDropdown:hover .dropdownDIŞGiyim{
     display:inline-block;
     height:70px;
}


.Navbarli {
  float: left;
  margin-right:20px;
  letter-spacing: -1px;
  height:60px;
  text-align: center;
  display:flex;
  flex-basis: 100%;
}

li a {
  display: block;
  color: white;
  text-align: center;
  font-weight: 600;
  font-size:14px;
  padding-top:20px;
  padding-right:20px;
  padding-left:20px;
  text-decoration: none;
  font-family: 'Oswald', sans-serif;
  transform: scaleY(1.2)
}

li:hover:not(.active) {
  background-color:#ed2c3b;
}

.active {
  background-color: #ed2c3b;
  padding-left:30px;
}

.MenuIcon{
    padding-right:10px;
}
</style>