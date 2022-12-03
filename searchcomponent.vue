<script setup>

</script>

<template>
  
  <div class="arama-bolumu">
        <input id="kelime" name="kelime" maxlength="100" type="text" placeholder="Satışta olan 10.606.766 kitap içinde">
        <button id="ARA-BUTON" type="submit">ARA</button>
        <div class="detayli-ara-kutucugu"><a style="color: #fff;" title="Kitap arama sayfası - İkinci el kitap ve yeni kitap, dergi, efemera" href="">Detaylı Ara</a>
      </div>
      <div class="arama-bolumu-box"></div>
  </div>

  
        
</template>

<style>
.arama-bolumu{
position: relative;
top: -24px;

}

#kelime{
  position:absolute;
   top:90px;
   left: 25%;
  height: 35px;
  width: 800px;
 
}

#ARA-BUTON
{
  position:absolute;
   top:90px;
   left: 67.5%;
  height: 40px;
  width: 60px;
  
}

.detayli-ara-kutucugu{
  position: relative;
  top:100px;
  left: 75%;

}

.arama-bolumu-box{
  position: absolute;
  top: 79px;
  left: -5px;
  width: 100%;
  height: 58px;
  background-color:#931818;
  z-index: -1;
}

</style>
