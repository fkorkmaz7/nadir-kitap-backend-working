<template>
   <div class="dropdown">
      <button class="dropbtn" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">&#128483; Bana Özel &#9660; <span class="caret"></span></button>
      <div class="dropdown-content">
      <a href="#">Mesajlarım</a>
      <a href="#">Siparişlerim</a>
      <a href="#">İzlediklerim</a>
      <a href="#">Favorilerim</a>
      <a href="#">Hesabım</a>
      </div>
      </div>
</template>

<script setup>


</script>

<style>
/* Dropdown Button */
.dropbtn {
  height: 22px;
  font-size: 13px;
  
  
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position:absolute;
  left:750px;
  top:30px;
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

}

/* Links inside the dropdown */
.dropdown-content a {
  
  color: black;
  padding: 5px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #e2e2e2;}

</style>