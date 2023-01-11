<template>
  <div class="footer">
    <h1>Racecourse Hospital</h1>
    <p>P.O Box 4249 - 30100. Eldoret - Kenya</p>
    <p>( Ole Tpes Road Off Eldoret - Kapsabet Road next to</p>
    <p>Chineese Garage )</p>
    &nbsp;
    &nbsp;
    <p>Phone: +254-726-773876</p>
    <p>Email: racecoursehospital@gmail.com</p>
  <div class="links">
    <h1 style="text-align:center;">Useful Links</h1>
    <ul>
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Services</a>
        <a href="">Terms Of Services</a>
       <a href="">Privacy Policy</a>
    </ul>
  </div>
  </div>
  <div class="footermain">
      <p>Copyright © 2022 <a href="#">Dennis Kemboi</a> All rights reserved</p>
      <div class="socials">
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-skype"></i>
        <i class="fa-brands fa-linkedin"></i>
      </div>
      
  </div>
  <i class="fa-duotone fa-arrow-up-to-line"></i>
</template>

<script>
export default {

}
</script>

<style>
    .footer{
        padding-top: 10px;
        text-align:left;
        padding-left: 10px;
    }
    .footer h1{
        text-align: left;
    }
    .links{
        text-align: center;
        padding-top: 0px;
        padding-bottom: 200px;
    }
    .links ul{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .links ul a{
        text-decoration: none;
        padding: 10px;
        font-size: 14px;
    }
    .footermain{
        width: 100%;
        background: #f2f2f2;
        height: 80px;
        position: fixed;
        bottom: 0;
        text-align: center;
        padding-top: 20px;
        display: flex;
        justify-content: center;
        padding-right: 10px;
        padding-top: 40px;
    }
    .footermain .socials i{
        padding-left: 10px;
        font-size: 35px;
        float: left;
        width: 50px;
       
    }
</style>