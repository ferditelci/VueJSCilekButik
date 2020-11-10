<template>
    <header class="header">           
        <section class="duyuru">
            <div class="duyuru-text"> 200 TL VE ÜZERİ SİPARİŞLERDE ÜCRETSİZ KARGO FIRSATI SİZLERİ BEKLİYOR </div>
        </section>
        <section class="ana-bolum">
            <div class="logo-bolumu">
                <a href="#"><img src="https://www.cilekbutik.net/images/logo/logo-16.png" alt=""></a>                
            </div>
            <div class="orta-bolum">
                <form action="https://www.cilekbutik.net/arama" class='searchbar-form'>
                    <select name="kategoriler" class=kategori-selectbox>
                        <option value="0">Tüm Kategoriler</option>
                        <option value="549">Üst Giyim</option>
                        <option value="550">Alt Giyim</option>
                        <option value="551">Dış Giyim</option>
                        <option value="552">Elbiseler</option>
                        <option value="553">Aksesuar</option>
                        <option value="554">Pijama Takımı</option>
                        <option value="555">İkili takım</option>
                        <option value="573">İndirimli Ürünler</option>
                    </select>
                    <div class="searchbar-tasarim"></div>
                    <input type="text" name="searchbar-input-text" class="searchbar-inputbox" placeholder="Aramak istediğiniz ürünü yazın...">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                    <button type="submit" class="searchbar-input-button">
                        <i class="fa fa-search search-icon" style="font-size:large"></i>
                    </button>
                </form>
            </div>
            <div class="yan-bolum">
                <div class="yan-bolum-icerik">
                    <div class="tepe-giris-uyeol">
                        <div class="uyelik-linkler">
                            <a href="https://www.cilekbutik.net/uye-giris" class="tepe-link-text">Giriş Yap</a>
                            <span> / </span>
                            <a href="https://www.cilekbutik.net/uye-ol" class="tepe-link-text">Üye Ol</a>
                        </div>
                        &#32;
                        <i class="fa fa-user kullanici-icon"></i>
                    </div>
                    <a class="tepe-sepet" href="https://www.cilekbutik.net/sepet">
                        <span class="tepe-sepet-bilgi">
                            <span class="sepetim-text">Sepetim</span>
                            <br>
                            <span class="sepetim-ucret-text">50,00 TL</span>
                        </span>
                        <span class="tepe-sepet-icon-bar">
                            <i class="fa fa-shopping-basket tepe-sepet-icon"></i>
                            <span class="tepe-urun-adedi">1</span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    </header>
</template>
<script>
export default {
    
}
</script>

<style>
    *, ::after , ::before {
        box-sizing: border-box; 
    }
    .header{
        background: #fff;
        position: relative;
        z-index: 11;
    }
    .ana-bolum {
        display: flex;
    }
    .duyuru{
        height: 50px;
        text-align: center;
        background: #ed2c3b;
        color: white;
        font-size: 25px;
    }
    .duyuru-text {
        padding-right: 10px;
        padding-left: 10px;
        padding-bottom: 10px;
        padding-top: 10px;
    }
    .logo-bolumu {
        height: 130px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding-right: 10px;
        padding-left: 10px;
        flex: 0 0 25%;
        max-width: 25%;
        box-sizing: border-box;
    }
    .orta-bolum {
        width: auto;
        height: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding-right: 10px;
        padding-left: 10px;
        flex: 0 0 25%;
        max-width: 50%;
        box-sizing: border-box;    
    }
    .searchbar-form {
        width: 550px;
        height: 40px;
        border-width: 0.1px;
        border-style: solid;
        border-color: #E5E7E9;
        border-radius: 4px;
        display: inline-block;
        align-items: center;
    }
    .kategori-selectbox {
        display: inline-block;
        border-radius: 4px;
        height: 100%;
        border: none;
        background-color: #f4f4f4;
        font-size: 14px;
        color: #2b2d2f;
        width: 200px;
        padding: 0px 10px;
        outline:none;
        position:relative;
        z-index: 1;
    }
    .searchbar-tasarim {
        display: inline-block;
        background: #f4f4f4;
        width: 40px;
        height: 40px;
        transform: skew(29deg);
        vertical-align: top;
        margin-left: -30px;
        position:absolute;
    }
    .searchbar-inputbox {
        display: inline-block;
        color: #666;
        text-align: center;
        font-weight: 600;
        font-size: 13px;
        width: 260px;
        height: 90%;
        border: none;
        outline:none;
        padding-left: 30px;
    }
    .searchbar-input-button {
        display: inline-block;
        border: none;
        outline: none;
        background: none;
        cursor: pointer;
        width: 85px;
        height: 37px;
    }  
    .search-icon:hover {
        color: #ffbc00;
    }
    .yan-bolum {
        height: auto;
        width: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding-right: 10px;
        padding-left: 10px;
        flex: 0 0 25%;
        max-width: 25%;
        box-sizing: border-box;
    }
    .yan-bolum-icerik {
        display: inline-block;
        align-items: center;
    }
    .tepe-giris-uyeol {
        display: inline-block;
        justify-content: center;
        align-items: center;
        color: #fff;
        padding: 10px;
        font-size: 15px;
        background: #1c2529;
    }
    .uyelik-linkler {
        display: inline-block;
    }
    .tepe-link-text {
        color: white;
        text-decoration: none;
        font-weight: 500;
        font-size: 13px;
    }
    .kullanici-icon {
        display: inline-block;
    }
    .tepe-sepet {
        display: inline-block;
        justify-content: center;
        align-items: center;
        margin-left: 15px;
        color: #444;
        vertical-align: top;
    }
    .tepe-sepet-bilgi {
        display: inline-block;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-right: 1px solid rgba(0, 0, 0, .1);
        padding-right: 5px;
        min-width: 60px;
    }
    .sepetim-text {
        color: #999;
        font-weight: 500;
        font-size: 11px;
        font-weight: 400;
    }
    .sepetim-ucret-text {
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5;
    }
    .tepe-sepet-icon-bar {
        background: #1c2529;
        padding: 10px;
        margin-left: 5px;
        vertical-align: 8px;
        position:relative;
    }
    .tepe-sepet-icon {
        color: white;
    }
    .tepe-urun-adedi {
        position: absolute;
        right: -10px;
        top: -10px;
        width: 18px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #179847;
        color: #fff;
        font-size: 11px;
        border-radius: 50%;
    }
</style>