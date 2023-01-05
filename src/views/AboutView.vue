<template>
  <img :src="img" style="height:700px;"/>
  <div class="about">
    <h1>About the Hospital</h1>
  <i class="fa-solid fa-person-dots-from-line fa-3x"></i> <h2>Diagnosis</h2>
  <p>We have a team that is comnited to make sure that our patients are confortable in their visit to our facility by ensuring that they are treated to the correct illness by gettin the correct diagnosis.</p>
  </div>
</template>
<script>
  export default{
    name: 'AboutView',
    components:{
      img: './img/aboutimage.png',
    }
  }
</script>
<style>
img{
  margin-bottom: 20px;
}
.about{
  margin: 0px
}
  h1{
    text-align: center;
    color:#212529;
    margin-left: 5px;
  }
  i{
    float: center;
    margin-left: 5px;
    margin-right:0px;
  }
  h2{
   font-size:18px 
  }
  p{
    text-align: center;
  }
</style>