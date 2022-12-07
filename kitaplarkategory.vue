<template>
   <div class="kitaplar-kategorisi"><h4 style="color:#931818">Kitaplar</h4>
               
               <div id="app">
         
                 <ul>
                                   <li><a style="color: #5b4a43;;text-decoration: none;"  href="" title="Bilim ve Teknik Kitapları">{{booktype1}}</a></li>
                                   <li><a style="color:#5b4a43;text-decoration: none;"  href="" title="Çizgi Roman Kitapları">{{booktype2}}</a></li>
                                   <li><a style="color:#5b4a43;text-decoration: none;"  href="" title="Çocuk Kitapları">{{booktype3}}</a></li>
                                   <li><a style="color:#5b4a43;text-decoration: none;"  href="" title="Dini Kitaplar">{{booktype4}}</a></li>
                                   <li><a style="color:#5b4a43;text-decoration: none;"  href="" title="Edebiyat Kitapları">{{booktype5}}</a></li>
                                   <li><a style="color:#5b4a43;text-decoration: none;"  href="" title="Ekonomi ve İş Dünyası Kitapları">{{booktype6}}</a></li>
                                   <li><a style="color:#5b4a43;text-decoration: none;"  href="" title="Felsefe Kitapları">{{booktype7}}</a></li>
                                   <li><a style="color:#5b4a43;text-decoration: none;"  href="" title="Hukuk Kitapları">{{booktype8}}</a></li>
                                   <li><a style="color:#5b4a43;text-decoration: none;"  href="" title="Osmanlıca Kitaplar">{{booktype9}}</a></li>
                                   <li><a style="color:#5b4a43;text-decoration: none;"  href="" title="Referans Kitaplar">{{booktype10}}</a></li>
                                   <li><a style="color:#5b4a43;text-decoration: none;"  href="" title="Sağlık Kitapları">{{booktype11}}</a></li>
                                   <li><a style="color:#5b4a43;text-decoration: none;"  href="" title="Sanat Kitapları">{{booktype12}}</a></li>
                                   <li><a style="color:#5b4a43;text-decoration: none;"  href="" title="Sınav ve Ders Kitapları">{{booktype13}}</a></li>
                                   <li><a style="color:#5b4a43;text-decoration: none;"  href="" title="Spor Kitapları">{{booktype14}}</a></li>
                                   <li><a style="color:#5b4a43;text-decoration: none;"  href="" title="Tarih Kitapları">{{booktype15}}</a></li>
                                   <li><a style="color:#5b4a43;text-decoration: none;"  href="" title="Siyaset Kitapları">{{booktype16}}</a></li>
                                   <li><a style="color:#5b4a43;text-decoration: none;"  href="" title="Çeşitli Kitaplar">{{booktype17}}</a></li>
                                 </ul>
             
               </div>
                         <h4 style="color:#931818">Dergiler</h4>
                         <h4 style="color:#931818">Sanat & Koleksiyon</h4>
                        </div>
</template>
<script>
export default {
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
            booktype17:"Diğer & Çeşitli"

        };
    }
}
</script>
<style>
    .kitaplar-kategorisi{
  position:absolute;
  top:150px;
  left: 440px;
  background-color:#faf7ec;
  width: 200px;
  height: 550px;
  text-align:left;
  border-color: #3d3c3b;
  border-bottom: 2px;
  letter-spacing: 0.5px;
  font-family:Arial, Helvetica, sans-serif;
  font-size:normal;
  border: 2px dotted #eee4cd;
  padding: 10px;
  line-height: 21px;

  
}

ul
{
        list-style-type: none;
        padding-left: 0;
        margin-left: 15px;
        
}

li:before {
    content: "\25b8";
    color: #931818;
    position: relative;
    left: -2px;
}
  
</style>