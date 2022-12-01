// KİTAPLAR KATEGORİSİ NESNELERİ
const app1=Vue.createApp({
    data(){
        return{
            booktype1:"Bilim ve Teknik",
            booktype2:"Çizgi Roman",
            booktype3:"Çocuk Kitapları",
            booktype4:"Din",
            booktype5:"Edebiyat",
            booktype6:"Ekonomi & İş Dünyası",
            booktype7:"Felsefe & Düşünce",
            booktype8:"Hukuk",
            booktype9:"Osmanlıca",
            booktype10:"Referans & Başvuru",
            booktype11:"Sağlık",
            booktype12:"Sanat",
            booktype13:"Sınav ve Ders Kitapları",
            booktype14:"Spor",
            booktype15:"Tarih",
            booktype16:"Toplum & Siyaset",
            booktype17:"Diğer & Çeşitli",
        };
    }

    // KİTAPLAR KATEGORY NAVBAR

}).mount("#kitaplar-kategori")

const app2=Vue.createApp({
    methods:{
        showKategories :function(){
            alert("aferin çocuk adam");
        }
    }
}).mount("#home");




    





