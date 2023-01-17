<template>
  <div class="image">
    <img :src="img" style="height:480px;"/>
  </div>
  <div class="about">
    <h1>About the Hospital</h1>
      <div class="diagnosis">
        <div class="image">
          <i class="fa-solid fa-person-dots-from-line fa-3x"></i>
        </div>
       <h2>Diagnosis</h2>
      <p>We have a team that is commited to make sure that our patients are confortable in their visit<br> to our facility by ensuring that they are treated to the correct illness by gettin the correct <br> diagnosis.</p>
    </div>
    <div class="generaltreatment">
      <div class="image">
        <i class="fa-solid fa-hand-holding-medical fa-3x"></i>
      </div>
      <h2>General Treatment</h2>
      <p>We are commited to help in the treatment plan of the common diseases that are majourly<br> found in the sounding areas of the hospital and those in the environs of the town.</p>
    </div>
    <div class="criticalcare">
      <div class="image">
        <i class="fa-solid fa-bed-pulse fa-3x"></i>
      </div>
       <h2>Critical Care</h2>
      <p>We have an Intensive Care Unit (I.C.U) for patients who are in need of the service & an able<br> team to take care of them</p>
    </div>
  </div>


  <section >
    <div class="oursection">
      <div class="whyus">
        <h2>Why Choose Racecouse Hospital?</h2>
        <p>We are ready to provide to you the best of the<br> medical care that should assist you in the daily <br> life. We provide a variety of services that cut  <br> across various departments to give you the <br> best.</p>
      </div>
      <div class="ourmission">
        <h2>Our Mission</h2>
        <p>To improve the health of our community by <br> setting the standard of excellence in patient  <br> care.</p>
      </div>
      <div class="ourvision">
        <h2>Our Vision</h2>
        <p>To lead the country in the diagnosis and  <br>treatment of disease and  to train tomorrow’s  <br> great physicians, nurses and scientists.</p>
      </div>
    </div>
  </section>
</template>
<script>
  export default{
    name: 'AboutView',
    data(){
      return{                                    
        img: './img/aboutimage.png',
      }
    },
  }
</script>
<style>
.about h1{
  padding-top: 30px;
}
.about h2{
  text-align: left;
}
.image{
  float: left;
  margin-left: 10px;
  margin-top: 50px;
}
h1{
  text-align: center;
  color:#212529;
  margin-left: 5px;
  
}
.diagnosis i{
    float: left;
    margin-left: 0px;
    padding-right:0px;
    color:#1977cc;
}
.diagnosis h2{
  font-size:18px;

}
.diagnosis p{
    text-align: left;
    margin-left:628px;
}

.generaltreatment i{
    float: center;
    margin-left: 5px;
    margin-right:0px;
    color:#1977cc;
}
.generaltreatment h2{
   font-size:18px;
   display: block;
}
.generaltreatment p{
    text-align: left;
    margin-left:628px;
}

.criticalcare i{
    float: center;
    margin-left: 5px;
    margin-right:0px;
    color:#1977cc;
}
.criticalcare h2{
   font-size:18px;
}
.criticalcare p{
    text-align: left;
    margin-left:628px;
}
section{
  padding-top: 150px;
  margin-bottom: 50px;
  margin-left: 100px;
  margin-right: 100px;
}
section h2{
  font-size:24px;

}
section p{
  font-size:18px;
}

section .whyus{
  float: left;
  width:33%;
}
section .ourmission{
  float: left;
  width:33%;
}
section .ourvision{
  float: right;
  width:33%;
  
}
</style>