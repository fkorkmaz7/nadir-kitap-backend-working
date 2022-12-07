<script>
import nadirkitaplogo from '/public/logo.svg'
import Dropdown from './Dropdown.vue';
export default {
        data(){
            return {
                imagelogo: nadirkitaplogo
            };
        },
        components: {Dropdown}
    }
</script>

<template>
 <div class="head-logo-kategory-satici-banaozel-sepetim">
    <h1  id="logo"><a  href="https://www.nadirkitap.com" title="İkinci el kitap, yeni kitap, dergi, efemera"><img src="/public/logo.svg" alt="Nadir"></a></h1>
        <div id="head-column1"></div>
        <div id="home"><a href="" style="color: #63b5ea;text-decoration: none;"  class="kategoriler_buton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kategoriler 	
&#9660;</a></div>
        <div id="head-column2"></div>
        <div class="kitap-saticilari"><a  href="" style="color:#63B5EA;text-decoration: none;" title="Online sahaflar, ikinci el kitap satıcıları, kitap dükkanları">Kitap Satıcıları</a></div>
        <div id="head-column3"></div>
        <div class="kayit-giris-paneli"><h4>Hoşgeldiniz,<a style="color: #63b5ea;text-decoration: none;" href="">Kayıt Ol </a>|<a style="color: #63b5ea;text-decoration: none;" href=""> Giriş Yap</a></h4></div>
      <Dropdown/>
          <hr class="head-deadline">
        <button class="sepetim-buton" href=""> 🛒Sepetim (0)</button>
        <br class="br-cizgi"/>

        
</div>
        
</template>

<style>
#logo{
position: absolute;
  margin: 0px;
  height: 100px;
  width: 200px;

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

.sepetim-buton{

  position:absolute;
  left:862px;
  top:30px;
  height:22px;
  width: 120px;

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
