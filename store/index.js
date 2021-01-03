//import { Urunler } from '../plugins/firebase'

export const state = () => ({
   Urunler: [],
   Sepet: [
      {
         id: 0,
         url: 'https://www.cilekbutik.net/cdn/2/100/100/images/urunler/5fa6a3f956175-1372.jpg',
         name: 'Lakers Sweat',
         beden: 'M',
         renk: 'TURUNCU',
         fiyat: 55.00,
         counter: 1,
         tutar: 55.00
      },
      {
         id: 1,
         url: 'https://www.cilekbutik.net/cdn/2/100/100/images/urunler/5fa57bd2c7259-1351.jpg',
         name: 'PANTOLON',
         beden: 'S',
         renk: 'SİYAH',
         counter: 1,
         fiyat: 55.00,
         tutar: 55.00
      },
      {
         id: 2,
         url: 'https://www.cilekbutik.net/cdn/2/100/100/images/urunler/5fa6a3f956175-1372.jpg',
         name: 'Lakers Sweat',
         beden: 'M',
         renk: 'TURUNCU',
         counter: 1,
         fiyat: 55.00,
         tutar: 55.00
      },
      {
         id: 3,
         url: 'https://www.cilekbutik.net/cdn/2/100/100/images/urunler/5fa6a3f956175-1372.jpg',
         name: 'Lakers Sweat',
         beden: 'M',
         renk: 'TURUNCU',
         counter: 1,
         fiyat: 55.00,
         tutar: 55.00
      },
      {
         id: 4,
         url: 'https://www.cilekbutik.net/cdn/2/100/100/images/urunler/5fa6a3f956175-1372.jpg',
         name: 'Lakers Sweat',
         beden: '26',
         renk: 'TURUNCU',
         counter: 1,
         fiyat: 55.00,
         tutar: 55.00
      },
   ],
})

export const getters = () => ({
   StoktakiUrunler(state, getters) {
      return state.Urunler.filter(Urun => Urun.adet > 0)
   },

   SepetUrunleri(state) {
      return state.Sepet.map(SepetUrunu => {
         const Urun = state.Urunler.find(Urun => Urun.id === SepetUrunu.id)
         return {
            name: Urun.name,
            fiyat: Urun.fiyat,
            renk: Urun.renk,
            beden: Urun.beden,
            tutar: Urun.tutar,
            adet: SepetUrunu.adet
         }
      })
   },

   SepetToplam(state, getters) {
      return getters.SepetÜrünleri.reduce((toplam, Urun) => toplam + Urun.fiyat * Urun.adet, 0)
   },

   StoktaVarMı() {
      return (Urun) => {
         return Urun.adet > 0
      }
   }
})

export const actions = {

   async Urunlerfetch({ commit }) {
      const urunler = await this.$fire.database.ref("Urunler").once("value");
      commit("setUrunler", urunler.val());
      },

   SepeteEkle({ state, getters, commit }, Urun) {
      this.$router.push('/Sepet')
      const SepetUrunu = state.Sepet.find(item => item.id === Urun.id)
      if (!SepetUrunu) {
         commit('SepetDizisineEkle', Urun.id)
      } else {
         commit('AdetiArttır', SepetUrunu)
      }
      commit('AdetiAzalt', Urun)
   },
}

export const mutations = {
   setUrunler(state, Urunler) {
      state.Urunler = Urunler
   },

   SepetDizisineEkle(state, UrunId) {
      state.Sepet.push({
         id: UrunId,
         adet: 1
      })
   },

   AdetiArttır(state, SepetUrunu) {
      SepetUrunu.adet++
   },

   AdetiAzalt(state, Urun) {
      Urun.adet--
   },

   SepetBoşaltma(state) {
      state.Sepet = []
   }
}
