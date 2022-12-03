<script setup>

</script>

<template>
 <div class="head-logo-kategory-satici-banaozel-sepetim">
    <h1  id="logo"><a href="https://www.nadirkitap.com" title="İkinci el kitap, yeni kitap, dergi, efemera"><img src="https://static.nadirkitap.com/img/logo.svg"  width="190px" height="51px"></a></h1>
        <div id="head-column1"></div>
        <div id="home"><button  v-on:click="showKategories" class="kategoriler_buton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kategoriler</button></div>
        <div id="head-column2"></div>
        <div class="kitap-saticilari"><a  href="" title="Online sahaflar, ikinci el kitap satıcıları, kitap dükkanları">Kitap Satıcıları</a></div>
        <div id="head-column3"></div>
        <div class="kayit-giris-paneli"><h4>Hoşgeldiniz,<a href="">Kayıt Ol </a>|<a href=""> Giriş Yap</a></h4></div>
        <button class="bana-ozel-buton" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Bana Özel <span class="caret"></span></button>
          <hr class="head-deadline">
        <button class="sepetim-buton" href="">Sepetim</button>
        <br class="br-cizgi"/>
</div>
        
</template>

<style>
#logo{
position: absolute;
 display: flex;
justify-content: center;
  margin: 0px;

}

.kategoriler_buton{

  position:absolute;
  left:230px;
  top:30px;
  border-bottom: 1px;
  

}

.kitap-saticilari{

  position:absolute;
  left:350px;
  top:30px;
  
}

.kayit-giris-paneli{

  position:absolute;
  left:480px;
  top:11px;
  

}

.bana-ozel-buton{

  position:absolute;
  left:750px;
  top:30px;

}

.sepetim-buton{

  position:absolute;
  left:827px;
  top:30px;

}


.head-deadline{
position: absolute;
width: 100%;
top: 70px;
z-index: -1;

}

.head-logo-kategory-satici-banaozel-sepetim{
  
   position:relative;
   top:0px;
   left: 25%;
   width:900px;
  
}

</style>
