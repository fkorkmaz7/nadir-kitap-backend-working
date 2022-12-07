<template>
    <div class="home">
<div><a href="" style="color: #63b5ea;text-decoration: none;"  class="kategoriler_buton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kategoriler 	
&#9660;</a></div>
<div  class="kategoriler-content">
      <div style="float:left;" ><a href="#"><bold>Kitaplar</bold></a>
      <div style="float:left;"> <a href="#"><small>- Bilim ve Teknik</small></a>
        <a href="#"><small>- Çizgi Roman</small></a>
        <a href="#"><small>- Çocuk Kitapları</small></a>
        <a href="#"><small>- Din</small></a>
        <a href="#"><small>- Edebiyat</small></a>
        <a href="#"><small>- Ekonomi & İş Dünyası</small></a>
        <a href="#"><small>- Felsefe & Düşünce</small></a>
        <a href="#"><small>- Hukuk</small></a>
        <a href="#"><small>- Osmanlıca</small></a>
        <a href="#"><small>- Referans & Başvuru</small></a></div> 

        <div style="float:right;">  <a href="#"><small>- Sağlık</small></a>
        <a href="#"><small>- Sanat</small></a>
        <a href="#"><small>- Sınav ve Ders Kitapları</small></a>
        <a href="#"><small>- Spor</small></a>
        <a href="#"><small>- Tarih</small></a>
        <a href="#"><small>- Toplum & Siyaset</small></a>
        <a href="#"><small>- Diğer & Çeşitli</small></a></div>
        </div>

      
                
        <div style="float:none;" ><a href="#"><bold>Dergiler</bold></a>

      <div style="float:left;"><a href="#"><small>- Bilgisayar</small></a>
       <a href="#"><small>- Bilim, Teknik</small></a>
       <a href="#"><small>- Çocuk Dergileri</small></a>
       <a href="#"><small>- Din, Felsefe</small></a>
       <a href="#"><small>- Edebiyat</small></a>
       <a href="#"><small>- Ekonomi, İktisat</small></a>
       <a href="#"><small>- Gezi, Coğrafya</small></a>
       <a href="#"><small>- Hukuk</small></a>
       <a href="#"><small>- Kadın Dergileri</small></a>
       <a href="#"><small>- Magazin, Moda</small></a></div> 

       <div style="float:none;" > <a href="#"><small>- Mimarlık, Dekorasyon</small></a>
       <a href="#"><small>- Mizah, Karikatür</small></a>
       <a href="#"><small>- Otomobil</small></a>
       <a href="#"><small>- Sağlık, Yaşam</small></a>
       <a href="#"><small>- Sanat</small></a>
       <a href="#"><small>- Spor</small></a>
       <a href="#"><small>- Tarih</small></a>
       <a href="#"><small>- Toplum & Siyaset</small></a>
       <a href="#"><small>- Yeme, İçme</small></a>
       <a href="#"><small>- Diğer</small></a></div>
      
        </div>     

          <div style="float:none;"><a href="#">Sanat & Koleksiyon (Efemera)</a>
    <div style="float:left;" > <a href="#"><small>- Afiş & Poster</small></a>
      <a href="#"><small>- Belge, Evrak</small></a>
      <a href="#"><small>- Film & Müzik</small></a>
      <a href="#"><small>- Fotoğraf & Kartpostal</small></a></div> 
      <a href="#"><small>- Gazete Arşivi</small></a>
      <a href="#"><small>- Hat & Resim</small></a>
      <a href="#"><small>- Obje</small></a>
      <a href="#"><small>- Para & Madalya</small></a>
      <a href="#"><small>- Plak</small></a>
      <a href="#"><small>- Pul & Filateli</small></a></div> 

      <div> <a href="#"><small>- Takvim</small></a>
      <a href="#"><small>- Diğer</small></a> </div>
        
      </div>
        
    </div>
</template>
<script setup>

</script>
<style>

     
    .kategoriler_buton{
        
        height: 22px;
        font-size: 15px;
    }

    .home{
        position:absolute;
        left:230px;
        top:30px;
        display: inline-block;
        z-index: 1;
        width: 500px;
    }

    .kategoriler-content{
        display: none;
  background-color: #f1f1f1;
  min-width: 160px;
  width: 600px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  height: 600px;
    }

    .kategoriler-content a {
        color: black;
       padding: 5px 16px;
       text-decoration: none;
       display: block;
    }

    .kategoriler-content a:hover {background-color: #ddd;}

    .home:hover .kategoriler-content {display: block;}

    .home:hover .kategoriler_buton {background-color: #e2e2e2;}
</style>