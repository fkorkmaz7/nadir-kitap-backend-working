<template>
  <div>
  <h1 style="position:absolute; top:200px;left:220px;font-size:30px;">Üye Girişi</h1>
   
    
   

        <headernuxt class="zamazingo"></headernuxt>
        <searchnuxt></searchnuxt> <div class="giris">

    <div class="container">
         <div class="d-flex flex-row justify-content-center" >
  
          <div class= "col-md-8" >
            <div class="card" >
              <div class="card-header">
                Sign In
              </div>
              <div class="card-body">
                <form @submit.prevent ="pressed">
                  <div class="form-group" >
                    <input type="text" placeholder="Email" v-model="email" class="form-control" >
                  </div>
                  <div class="form-group" >
                    <input type="password" placeholder="Password" v-model="password" class="form-control" >
                  </div>
                  <button type="submit" > Submit </button>
                </form>
              </div>
            </div>
  
          </div>
             </div>
  
         </div></div>
        <div class="ornek1">
        <altcubuknuxt></altcubuknuxt>
        </div>
        <div class="ornek2">
            <tutorialnuxt></tutorialnuxt>
        </div>

        <div class="orneky"><islemrehberinuxt></islemrehberinuxt></div>

    
  </div>
</template>

<script>
export default{
  data(){
    return{
      email:'',
      password:''
    }
  },
  methods:{
    pressed(){
      alert('form submitted')
    }
  }
}

</script>

<style>
.giris{
position: absolute;
top: 240px;
width: 1200px;
height: 300px;

}


.ornek1{
   position: relative;
   bottom: 1150px;
}

.ornek2{
   position: relative;
   top: 720px;
}

.orneky{
    position: relative;
    bottom: 1200px;
    left:40px;
    
}


</style>