<template>
    <div>
   <div style="position:absolute; top: 240px;width: 1200px;height: 300px;"> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  
      <div class="container">
         <div class="d-flex flex-row justify-content-center" >
  
          <div class= "col-md-8" >
            <div class="card" >
              <div class="card-header">
                Sign Up
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
     
          <headernuxt></headernuxt>
          <searchnuxt></searchnuxt>
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
  import firebase from "firebase/app";
  import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

  export default{
    data(){
      return{
        email : '',
        password: '',
      }
    },
    methods:{
      pressed() {
        getAuth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user);
          this.$router.push("/home");
        });
    },
    }
  }

  </script>
  
  <style>
  
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




