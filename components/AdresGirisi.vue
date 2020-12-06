<template>
    <div class="adres-girisi-butun">
        <div class="adres-girisi-content">
            <div class="adres-girisi">
                <div class="adres-header">
                    <div class="adres-header-icerik">
                        <i class="fa fa-map-marker adres-icon" style="font-size:20px"></i>
                        Adres Girişi
                    </div>
                </div>
                <div class="adres-body">
                    <div class="satir">
                        <div class="sutun">
                            <label for="siparisInputName" class="adres-text">
                                Ad
                                <span class="zorunlu-text">*</span>
                            </label>
                            <input type="text" class="input-form">
                        </div>
                        <div class="sutun">
                            <label for="siparisInputName" class="adres-text">
                                Soyad
                                <span class="zorunlu-text">*</span>
                            </label>
                            <input type="text" class="input-form">
                        </div>
                    </div>
                    <div class="satir">
                        <div class="sutun">
                            <label for="siparisInputName" class="adres-text">
                                E-posta Adresi
                                <span class="zorunlu-text">*</span>
                            </label>
                            <input type="text" class="input-form">
                        </div>
                        <div class="sutun">
                            <label for="siparisInputName" class="adres-text">
                                Cep Telefonu
                                <span class="zorunlu-text">*</span>
                            </label>
                            <div>
                                <img src="https://cdn.countryflags.com/thumbs/turkey/flag-400.png" width="30" height="20" class="turkbayragi">
                                <input type="text" class="input-form-cep-tel">
                            </div>
                        </div>
                    </div>
                    <div class="satir">
                        <div class="sutun">
                            <label for="siparisInputName" class="adres-text">
                                İl
                                <span class="zorunlu-text">*</span>
                            </label>
                            <select name="sehir" id="siparisInputSehir" class="input-form">
                            <option selected="" value="">Seçin</option>
                            <option value="1">Adana</option>
                            <option value="2">Adıyaman</option>
                            <option value="3">Afyon</option>
                            <option value="4">Ağrı</option>
                            <option value="68">Aksaray</option>
                            <option value="5">Amasya</option>
                            <option value="6">Ankara</option>
                            <option value="7">Antalya</option>
                            <option value="75">Ardahan</option>
                            <option value="8">Artvin</option>
                            <option value="9">Aydın</option>
                            <option value="10">Balıkesir</option>
                            <option value="74">Bartın</option>
                            <option value="72">Batman</option>
                            <option value="69">Bayburt</option>
                            <option value="11">Bilecik</option>
                            <option value="12">Bingöl</option>
                            <option value="13">Bitlis</option>
                            <option value="14">Bolu</option>
                            <option value="15">Burdur</option>
                            <option value="16">Bursa</option>
                            <option value="17">Çanakkale</option>
                            <option value="18">Çankırı</option>
                            <option value="19">Çorum</option>
                            <option value="20">Denizli</option>
                            <option value="21">Diyarbakır</option>
                            <option value="81">Düzce</option>
                            <option value="22">Edirne</option>
                            <option value="23">Elazığ</option>
                            <option value="24">Erzincan</option>
                            <option value="25">Erzurum</option>
                            <option value="26">Eskişehir</option>
                            <option value="27">Gaziantep</option>
                            <option value="28">Giresun</option>
                            <option value="29">Gümüşhane</option>
                            <option value="30">Hakkari</option>
                            <option value="31">Hatay</option>
                            <option value="76">Iğdır</option>
                            <option value="32">Isparta</option>
                            <option value="34">İstanbul</option>
                            <option value="35">İzmir</option>
                            <option value="46">Kahramanmaraş</option>
                            <option value="78">Karabük</option>
                            <option value="70">Karaman</option>
                            <option value="36">Kars</option>
                            <option value="37">Kastamonu</option>
                            <option value="38">Kayseri</option>
                            <option value="71">Kırıkkale</option>
                            <option value="39">Kırklareli</option>
                            <option value="40">Kırşehir</option>
                            <option value="79">Kilis</option>
                            <option value="41">Kocaeli</option>
                            <option value="42">Konya</option>
                            <option value="43">Kütahya</option>
                            <option value="44">Malatya</option>
                            <option value="45">Manisa</option>
                            <option value="47">Mardin</option>
                            <option value="33">Mersin</option>
                            <option value="48">Muğla</option>
                            <option value="49">Muş</option>
                            <option value="50">Nevşehir</option>
                            <option value="51">Niğde</option>
                            <option value="52">Ordu</option>
                            <option value="80">Osmaniye</option>
                            <option value="53">Rize</option>
                            <option value="54">Sakarya</option>
                            <option value="55">Samsun</option>
                            <option value="56">Siirt</option>
                            <option value="57">Sinop</option>
                            <option value="58">Sivas</option>
                            <option value="63">Şanlıurfa</option>
                            <option value="73">Şırnak</option>
                            <option value="59">Tekirdağ</option>
                            <option value="60">Tokat</option>
                            <option value="61">Trabzon</option>
                            <option value="62">Tunceli</option>
                            <option value="64">Uşak</option>
                            <option value="65">Van</option>
                            <option value="77">Yalova</option>
                            <option value="66">Yozgat</option>
                            <option value="67">Zonguldak</option>
                            </select>
                        </div>
                        <div class="sutun">
                            <label for="siparisInputName" class="adres-text">
                                İlçe
                                <span class="zorunlu-text">*</span>
                            </label>
                            <select name="ilce" id="siparisInputIlce" class="input-form">
                            <option value="">Seçin</option>
                            </select>
                        </div>
                    </div>
                    <div class="satir">
                        <div class="sutun-adres">
                            <label for="siparisInputName" class="adres-text">
                                Adres
                                <span class="zorunlu-text">*</span>
                            </label>
                            <textarea name="Adres" class="input-form" id="siparisInputAdres"></textarea>
                        </div>
                    </div>
                    <div class="satir">
                        <div class="fatura-satiri">
                            <input type="checkbox" name="fatura" v-model="faturaDetayi" id="siparisInputFatura" >
                            <label for="siparisInputFatura" class="fatura">Fatura bilgilerimi farklı girmek istiyorum.</label>
                        </div>
                    </div>
                    <div v-if="faturaDetayi" >
                        <input type="radio" v-model="faturaTipi" value="bireysel" id="bireyselRadio">
                        <label for="bireyselRadio" class="adres-text">Bireysel</label>

                        <input type="radio" v-model="faturaTipi" value="kurumsal" id="kurumsalRadio">
                        <label for="kurumsalRadio" class="adres-text">Kurumsal</label>

                        <div v-show="faturaTipi === 'bireysel'">
                            <div class="satir">
                                <div class="sutun-adres">
                                    <label for="siparisInputName" class="adres-text">
                                        Ünvan / Ad Soyad
                                        <span class="zorunlu-text">*</span>
                                    </label>
                                    <input type="text" class="input-form">
                                </div>
                            </div>
                            <div class="satir">
                                <div class="sutun-adres">
                                    <label for="siparisInputName" class="adres-text">
                                        TC Kimlik Numarası
                                        <span class="zorunlu-text">*</span>
                                    </label>
                                    <input type="text" class="input-form">
                                </div>
                            </div>
                            <div class="satir">
                                <div class="sutun">
                                    <label for="siparisInputName" class="adres-text">
                                        İl
                                        <span class="zorunlu-text">*</span>
                                    </label>
                                    <select name="sehir" id="siparisInputSehir" class="input-form">
                                    <option selected="" value="">Seçin</option>
                                    <option value="1">Adana</option>
                                    <option value="2">Adıyaman</option>
                                    <option value="3">Afyon</option>
                                    <option value="4">Ağrı</option>
                                    <option value="68">Aksaray</option>
                                    <option value="5">Amasya</option>
                                    <option value="6">Ankara</option>
                                    <option value="7">Antalya</option>
                                    <option value="75">Ardahan</option>
                                    <option value="8">Artvin</option>
                                    <option value="9">Aydın</option>
                                    <option value="10">Balıkesir</option>
                                    <option value="74">Bartın</option>
                                    <option value="72">Batman</option>
                                    <option value="69">Bayburt</option>
                                    <option value="11">Bilecik</option>
                                    <option value="12">Bingöl</option>
                                    <option value="13">Bitlis</option>
                                    <option value="14">Bolu</option>
                                    <option value="15">Burdur</option>
                                    <option value="16">Bursa</option>
                                    <option value="17">Çanakkale</option>
                                    <option value="18">Çankırı</option>
                                    <option value="19">Çorum</option>
                                    <option value="20">Denizli</option>
                                    <option value="21">Diyarbakır</option>
                                    <option value="81">Düzce</option>
                                    <option value="22">Edirne</option>
                                    <option value="23">Elazığ</option>
                                    <option value="24">Erzincan</option>
                                    <option value="25">Erzurum</option>
                                    <option value="26">Eskişehir</option>
                                    <option value="27">Gaziantep</option>
                                    <option value="28">Giresun</option>
                                    <option value="29">Gümüşhane</option>
                                    <option value="30">Hakkari</option>
                                    <option value="31">Hatay</option>
                                    <option value="76">Iğdır</option>
                                    <option value="32">Isparta</option>
                                    <option value="34">İstanbul</option>
                                    <option value="35">İzmir</option>
                                    <option value="46">Kahramanmaraş</option>
                                    <option value="78">Karabük</option>
                                    <option value="70">Karaman</option>
                                    <option value="36">Kars</option>
                                    <option value="37">Kastamonu</option>
                                    <option value="38">Kayseri</option>
                                    <option value="71">Kırıkkale</option>
                                    <option value="39">Kırklareli</option>
                                    <option value="40">Kırşehir</option>
                                    <option value="79">Kilis</option>
                                    <option value="41">Kocaeli</option>
                                    <option value="42">Konya</option>
                                    <option value="43">Kütahya</option>
                                    <option value="44">Malatya</option>
                                    <option value="45">Manisa</option>
                                    <option value="47">Mardin</option>
                                    <option value="33">Mersin</option>
                                    <option value="48">Muğla</option>
                                    <option value="49">Muş</option>
                                    <option value="50">Nevşehir</option>
                                    <option value="51">Niğde</option>
                                    <option value="52">Ordu</option>
                                    <option value="80">Osmaniye</option>
                                    <option value="53">Rize</option>
                                    <option value="54">Sakarya</option>
                                    <option value="55">Samsun</option>
                                    <option value="56">Siirt</option>
                                    <option value="57">Sinop</option>
                                    <option value="58">Sivas</option>
                                    <option value="63">Şanlıurfa</option>
                                    <option value="73">Şırnak</option>
                                    <option value="59">Tekirdağ</option>
                                    <option value="60">Tokat</option>
                                    <option value="61">Trabzon</option>
                                    <option value="62">Tunceli</option>
                                    <option value="64">Uşak</option>
                                    <option value="65">Van</option>
                                    <option value="77">Yalova</option>
                                    <option value="66">Yozgat</option>
                                    <option value="67">Zonguldak</option>
                                    </select>
                                </div>
                                <div class="sutun">
                                    <label for="siparisInputName" class="adres-text">
                                        İlçe
                                        <span class="zorunlu-text">*</span>
                                    </label>
                                    <select name="ilce" id="siparisInputIlce" class="input-form">
                                    <option value="">Seçin</option>
                                    </select>
                                </div>
                            </div>
                            <div class="satir">
                                <div class="sutun-adres">
                                    <label for="siparisInputName" class="adres-text">
                                        Adres
                                        <span class="zorunlu-text">*</span>
                                    </label>
                                    <textarea name="Adres" class="input-form" id="siparisInputAdres"></textarea>
                                </div>
                            </div>
                        </div>
                        
                        <div v-show="faturaTipi === 'kurumsal'">
                            <div class="satir">
                                <div class="sutun-adres">
                                    <label for="siparisInputName" class="adres-text">
                                        Ünvan / Ad Soyad
                                        <span class="zorunlu-text">*</span>
                                    </label>
                                    <input type="text" class="input-form">
                                </div>
                            </div>
                            <div class="satir">
                                <div class="sutun">
                                    <label for="siparisInputName" class="adres-text">
                                        Vergi Numarası
                                        <span class="zorunlu-text">*</span>
                                    </label>
                                    <input type="text" class="input-form">
                                </div>
                                <div class="sutun">
                                    <label for="siparisInputName" class="adres-text">
                                        Vergi Dairesi
                                        <span class="zorunlu-text">*</span>
                                    </label>
                                    <input type="text" class="input-form">
                                </div>
                            </div>
                            <div class="satir">
                                <div class="sutun">
                                    <label for="siparisInputName" class="adres-text">
                                        İl
                                        <span class="zorunlu-text">*</span>
                                    </label>
                                    <select name="sehir" id="siparisInputSehir" class="input-form">
                                    <option selected="" value="">Seçin</option>
                                    <option value="1">Adana</option>
                                    <option value="2">Adıyaman</option>
                                    <option value="3">Afyon</option>
                                    <option value="4">Ağrı</option>
                                    <option value="68">Aksaray</option>
                                    <option value="5">Amasya</option>
                                    <option value="6">Ankara</option>
                                    <option value="7">Antalya</option>
                                    <option value="75">Ardahan</option>
                                    <option value="8">Artvin</option>
                                    <option value="9">Aydın</option>
                                    <option value="10">Balıkesir</option>
                                    <option value="74">Bartın</option>
                                    <option value="72">Batman</option>
                                    <option value="69">Bayburt</option>
                                    <option value="11">Bilecik</option>
                                    <option value="12">Bingöl</option>
                                    <option value="13">Bitlis</option>
                                    <option value="14">Bolu</option>
                                    <option value="15">Burdur</option>
                                    <option value="16">Bursa</option>
                                    <option value="17">Çanakkale</option>
                                    <option value="18">Çankırı</option>
                                    <option value="19">Çorum</option>
                                    <option value="20">Denizli</option>
                                    <option value="21">Diyarbakır</option>
                                    <option value="81">Düzce</option>
                                    <option value="22">Edirne</option>
                                    <option value="23">Elazığ</option>
                                    <option value="24">Erzincan</option>
                                    <option value="25">Erzurum</option>
                                    <option value="26">Eskişehir</option>
                                    <option value="27">Gaziantep</option>
                                    <option value="28">Giresun</option>
                                    <option value="29">Gümüşhane</option>
                                    <option value="30">Hakkari</option>
                                    <option value="31">Hatay</option>
                                    <option value="76">Iğdır</option>
                                    <option value="32">Isparta</option>
                                    <option value="34">İstanbul</option>
                                    <option value="35">İzmir</option>
                                    <option value="46">Kahramanmaraş</option>
                                    <option value="78">Karabük</option>
                                    <option value="70">Karaman</option>
                                    <option value="36">Kars</option>
                                    <option value="37">Kastamonu</option>
                                    <option value="38">Kayseri</option>
                                    <option value="71">Kırıkkale</option>
                                    <option value="39">Kırklareli</option>
                                    <option value="40">Kırşehir</option>
                                    <option value="79">Kilis</option>
                                    <option value="41">Kocaeli</option>
                                    <option value="42">Konya</option>
                                    <option value="43">Kütahya</option>
                                    <option value="44">Malatya</option>
                                    <option value="45">Manisa</option>
                                    <option value="47">Mardin</option>
                                    <option value="33">Mersin</option>
                                    <option value="48">Muğla</option>
                                    <option value="49">Muş</option>
                                    <option value="50">Nevşehir</option>
                                    <option value="51">Niğde</option>
                                    <option value="52">Ordu</option>
                                    <option value="80">Osmaniye</option>
                                    <option value="53">Rize</option>
                                    <option value="54">Sakarya</option>
                                    <option value="55">Samsun</option>
                                    <option value="56">Siirt</option>
                                    <option value="57">Sinop</option>
                                    <option value="58">Sivas</option>
                                    <option value="63">Şanlıurfa</option>
                                    <option value="73">Şırnak</option>
                                    <option value="59">Tekirdağ</option>
                                    <option value="60">Tokat</option>
                                    <option value="61">Trabzon</option>
                                    <option value="62">Tunceli</option>
                                    <option value="64">Uşak</option>
                                    <option value="65">Van</option>
                                    <option value="77">Yalova</option>
                                    <option value="66">Yozgat</option>
                                    <option value="67">Zonguldak</option>
                                    </select>
                                </div>
                                <div class="sutun">
                                    <label for="siparisInputName" class="adres-text">
                                        İlçe
                                        <span class="zorunlu-text">*</span>
                                    </label>
                                    <select name="ilce" id="siparisInputIlce" class="input-form">
                                    <option value="">Seçin</option>
                                    </select>
                                </div>
                            </div>
                            <div class="satir">
                                <div class="sutun-adres">
                                    <label for="siparisInputName" class="adres-text">
                                        Adres
                                        <span class="zorunlu-text">*</span>
                                    </label>
                                    <textarea name="Adres" class="input-form" id="siparisInputAdres"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
                <div class="siparis-odeme-info">
                <div class="siparis-ozeti">
                    <div class="siparis-ozeti-header">
                        <div class="siparis-ozeti-text">
                            Sipariş Özeti
                        </div>
                    </div>
                    <div class="siparis-detay-bolumu">
                        <span @click="sepettekiUrunleriGoster=!sepettekiUrunleriGoster" class="urunleriGosterText">
                            <div class="siparis-sepetteki-urunler-text" >
                                <i class="fa fa-caret-down"></i>
                                Sepetteki Ürünler
                            </div>
                        </span>
                        <div class="urunListesi"  v-if="sepettekiUrunleriGoster">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="th-urun">Ürün</th>
                                        <th class="th-adet">Adet</th>
                                        <th class="th-tutar">Tutar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="td-urun">
                                            <NuxtLink to="/Urun" class="urunAd">CEKET</NuxtLink>
                                            <div class="urun-tercihi">
                                                <span>M</span>
                                            </div>
                                        </td>
                                        <td class="td-adet">
                                            1
                                        </td>
                                        <td class="td-tutar">
                                            70,00 TL
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="td-urun">
                                            <NuxtLink to="/Urun" class="urunAd">MARVEL SWEAT</NuxtLink>
                                            <div class="urun-tercihi">
                                                <span>L</span>
                                            </div>
                                        </td>
                                        <td class="td-adet">
                                            2
                                        </td>
                                        <td class="td-tutar">
                                            110,00 TL
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="sepet-satir">
                            <div class="sepet-sutun-sol">
                                Ürünler Toplamı
                            </div>
                            <div class="sepet-sutun-sag">
                                <label id="sagaYapistir">60,00 TL</label> 
                            </div>
                        </div>
                        <div class="sepet-satir">
                            <div class="sepet-sutun-sol">
                                Kargo
                            </div>
                            <div class="sepet-sutun-sag">
                                <label id="sagaYapistir">12,00 TL</label>
                            </div>
                        </div>
                        <div class="sepet-satir-final">
                            <div class="sepet-sutun-sol">
                                Genel Toplam <br> (KDV Dahil)
                            </div>
                            <div class="sepet-sutun-sag" style="vertical-align: center;">
                                <label id="sagaYapistir" style="font-size: 20px; font-weight: bold; color: #31ab45;">72,00 TL</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="button-odeme-islemleri"> ÖDEME İŞLEMLERİ <i class="fa fa-chevron-right"></i></button>
            </div>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            faturaTipi:'bireysel',
            faturaDetayi: false,
            sepettekiUrunleriGoster: false,
        }
    }
    
}

</script>


<style>
    .adres-girisi-butun {
        max-width: 70%;
        margin-right: auto;
        margin-left: auto;
    }
    .adres-girisi-content {
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        
    }
    .adres-girisi {
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        flex: 0 0 75%;
        width: 75%;
        margin-right: 10px;
        margin-left: 10px;
    }
    .adres-header {
        padding: 20px 15px 0px 23px;
        height: 60px;
        display: flex;        
    }
    .adres-header-icerik {
        font-size: 17px;
        font-weight: 550;
        margin: 0;
        line-height: initial;
        font-family: 'Oswald', sans-serif;
        transform: scaleY(1.2);
        font-weight: 600;
    }
    .adres-icon {
        content: "\f3c5";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        font-size: 18px;
    }
    .input-form {
        display: block;
        width: 100%;
        height: calc(1.5em + .75rem + 2px);
        padding: .375rem .75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .input-form-cep-tel {
        display: block;
        width: 100%;
        height: calc(1.5em + .75rem + 2px);
        padding: .375rem 3rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .satir {
        padding: 10px;
        display: flex;
    }
    .sutun {
        flex: 0 0 50%;
        max-width: 50%;
        padding-right: 10px;
        padding-left: 10px;
    }
    .sutun-adres {
        flex: 0 0 100%;
        max-width: 100%;
        padding-right: 10px;
        padding-left: 10px;
    }
    .zorunlu-text {
        color: #dc3545!important;
        font-family: 'Oswald', sans-serif;
        font-size: 14px;
        transform: scaleY(1.2);
        font-weight: 600;
    }
    .adres-text {
        font-size: 14px;
        font-family: 'Oswald', sans-serif;
        font-weight: 600;
        transform: scaleY(1.2);
    }
    #siparisInputAdres {
        resize: none;
        height: 100px;
    }
    .fatura-satiri {
        background: rgba(0,0,0,.05);
        border-radius: 5px;
        padding: 8px 8px 3px 8px;
        width: 100%;
    }
    .fatura {
        font-weight: 500;
        margin-left: 10px;
        cursor: pointer;
        display: inline-block;
        margin-bottom: .5rem;
        font-family: 'Oswald', sans-serif; 
        transform: scaleY(1.2);
        font-weight: 600;   
    }
    .siparis-odeme-info {
        flex: 0 0 25%;
        width: 25%;
    }
    .siparis-ozeti {
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        flex: 0 0 25%;
    }
    .siparis-ozeti-header {
        font-size: 17px;
        font-weight: 550;
        margin: 0;
        line-height: initial;
        font-family: 'Oswald', sans-serif;
        padding: 20px 10px;
        height: 60px;
        display: flex;
        transform: scaleY(1.2);
    }
    .siparis-sepetteki-urunler-text{
        border-bottom: 1px solid rgba(0,0,0,.1);
        font-size: 13px;
        font-weight: 600;
        color: #000;
        padding: 10px;
        display: block;
        transform: scaleY(1.2);
        
    }
    .sepet-satir {
        padding: 5px;
        display: flex;
        background: #f9f9f9;
        border-bottom: 1px solid rgba(0,0,0,.1);
        font-size: 12px;
        font-weight: 500;
        vertical-align: top;
    }
    .sepet-satir-final {
        padding: 5px;
        display: flex;
        background: #f9f9f9;
        font-size: 12px;
        font-weight: 500;
        vertical-align: top;
    }
    .sepet-sutun-sag {
        flex: 0 0 50%;
        max-width: 50%;
        padding-left: 10px;
        font-family: 'Oswald', sans-serif;
        font-weight: 600;
        transform: scaleY(1.2);
        font-size:16px;
        margin-top:5px;
        margin-bottom:5px;
        color:#333;
    }
    .sepet-sutun-sol {
        flex: 0 0 50%;
        max-width: 50%;
        padding-right: 10px;
        font-family: 'Oswald', sans-serif;
        font-weight: bold;
        transform: scaleY(1.2);
        font-size:16px;
        margin-top:5px;
        color:#333;
    }
    #sagaYapistir {
        float: right;
    }
    .button-odeme-islemleri{
        background: #ed2c3b;
        border-color: #ed2c3b;
        font-size: 16px;
        color: #fff;
        font-weight: 600;
        display: block;
        width: 100%;
        padding: 10px 5px;
        cursor: pointer;
        border-radius: 4px;
        border-style: solid;
        margin-top: 20px;
        outline: none;
    }
    .turkbayragi {
        position: absolute;
        margin: 8px;
    }
    .urunListesi{
        border-bottom: 1px solid rgba(0,0,0,.1);
    }
    .table {
        border-left: 202px;
    }
    th{
        padding: 5px;
        font-weight: 500;
        vertical-align: bottom;
        text-align: inherit;
        font-size: 13px;
        transform: scaleY(1.2);
        font-family: 'Oswald', sans-serif;
    }
    .th-urun{
        width: 50%;
        font-weight: 600;
        transform: scaleY(1.2);
        font-family: 'Oswald', sans-serif;
        
    }
    .th-adet{
        text-align: center;
        font-weight: 600;
        transform: scaleY(1.2);
        font-family: 'Oswald', sans-serif;
    }
    .th-tutar{
        width: 100%;
        text-align: right;
        font-weight: 600;
        transform: scaleY(1.2);
        font-family: 'Oswald', sans-serif;
        
    }
    .urunAd {
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 16px;
        max-height: 32px;
        height: 32px;
        font-size: 14px;
        color: rgb(51, 51, 51);
        text-decoration: none;
        font-family: 'Oswald', sans-serif;
        transform: scaleY(1.2);
        font-weight:600;
    }
    .urun-tercihi{
        font-size: 14px;
    }
    .td-urun{
        border-top: 1px solid #dee2e6;
        padding-top:5px;
        font-family: 'Oswald', sans-serif;
        font-weight:600;
        color: rgb(51, 51, 51);
    }
    .td-adet{
        text-align: center;
        padding-left: 2px;
        padding-right: 2px;
        vertical-align: top;
        border-top: 1px solid #dee2e6;
        padding-top:5px;
        font-family: 'Oswald', sans-serif;
        font-weight:600;
        color: rgb(51, 51, 51);
    }
    .td-tutar {
        border-top: 1px solid #dee2e6;
        text-align: right;
        font-weight: 600;
        font-size: 14px;
        vertical-align: top;
        padding-top:5px;
        font-family: 'Oswald', sans-serif;
        font-weight:600;
        color: rgb(51, 51, 51);
    }
    .urunleriGosterText{
        cursor:pointer;
        font-family: 'Oswald', sans-serif;
        font-weight:600;
    }
    tbody:hover{
        background: #f0f1f1;
    }
</style>