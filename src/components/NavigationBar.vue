<template>
    
    <div>
        <ul v-for="NavBarElement in NavBarElements" :key="NavBarElement.name1" class="navbar">
            <li class="Navbarli"><a class="active" href="/arama"> <i class="fa fa-bars mr-2 pl-2 pr-2" style="margin-right:8px;"></i>{{NavBarElement.name1}}</a></li>
            <li class="Navbarli" id="UstGiyimDropdown">
                <a href="/ust-giyim-c-549">{{NavBarElement.name2}}</a>
                <ul class="dropdownUstGiyim">
                    <li v-for="UstGiyim in UstGiyimler" :key="UstGiyim.name" class="DropdownLi"><a href="/ust-giyim/sweatshirt-c-556">{{UstGiyim.name}}</a></li>
                    <li id="DropdowLiSon" class="DropdownLi"><a href="/ust-giyim/bodysuit-c-561">Bodysuit</a></li>
                </ul>
            </li>
            <li class="Navbarli" id="AltGiyimDropdown">
                <a href="/alt-giyim-c-550">{{NavBarElement.name3}}</a>
                <ul class="dropdownAltGiyim">
                    <li v-for="AltGiyim in AltGiyimler" :key="AltGiyim.name" class="DropdownLi"><a href="/alt-giyim/jean-pantolon-c-562">{{AltGiyim.name}}</a></li>
                    <li id="DropdowLiSon2" class="DropdownLi"><a href="/alt-giyim/esofman-c-567">Eşofman</a></li>
                </ul>
            </li>
            <li class="Navbarli" id="DIŞGiyimDropdown">
                <a href="/dis-giyim-c-551">{{NavBarElement.name4}}</a>
                <ul class="dropdownDIŞGiyim">
                    <li v-for="DışGiyim in DışGiyimler" :key="DışGiyim.name" class="DropdownLi"><a href="/dis-giyim/ceket-c-568">{{DışGiyim.name}}</a></li>
                </ul>
            </li>
            <li class="Navbarli"><a href="/elbiseler-c-552">{{NavBarElement.name5}}</a></li>
            <li class="Navbarli"><a href="/aksesuar-c-553">{{NavBarElement.name6}}</a></li>
            <li class="Navbarli"><a href="/pijama-takimi-c-554">{{NavBarElement.name7}}</a></li>
            <li class="Navbarli"><a href="/ikili-takim-c-555">{{NavBarElement.name8}}</a></li>
            <li class="Navbarli"><a href="/indirimli-urunler-c-573">{{NavBarElement.name9}}</a></li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "Navbar",

        data(){
            return{
                NavBarElements:[{name1:'YENİ ÜRÜNLER',name2:'ÜST GIYIM',name3:'ALT GIYIM',name4:'DIŞ GIYIM',name5:'ELBISELER',name6:'AKSESUAR',name7:'PIJAMA TAKIMI',name8:'İKILI TAKIM',name9:'İNDIRIMLI URUNLAR'}],
                UstGiyimler:[{name:'Sweatshirt'},{name:'T-shirt'},{name:'Kazak'},{name:'Gömlek/Bluz'},{name:'Crop'}],
                AltGiyimler:[{name:'Jean Pantolon'},{name:'Mevsimlik Pantolon'},{name:'Etek'},{name:'Şort'},{name:'Tayt'}],
                DışGiyimler:[{name:'Ceket'},{name:'Mont'},{name:'Trençkot'},{name:'Yağmurluk'}],
            };
        },
        props:{
        },
    };
</script>

<style>
.navbar {
  list-style-type: none;
  margin: 0px;
  padding-left: 180px;
  height:60px;
  overflow: hidden;
  background-color: #222;
  flex-wrap: wrap;
  margin-left:-10px;
  margin-right:-10px;
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
}

li a:hover:not(.active) {
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