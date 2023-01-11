<template>
  <div id="background"></div>
  <div class="card">
    <div class="image">
      <i class="fa-sharp fa-solid fa-house-medical"></i>
    </div>
    <div class="container">
      <h1>Outpatient / Casualty</h1>
      <p>We provide an excellent patient care to the patients who visit us each day.</p>
    </div>
  </div>
  <div class="card">
    <div class="image">
       <i class="fa-sharp fa-solid fa-bed"></i>
       </div>
    <div class="container">
      <h1>Inpatient Services</h1>
      <p>Inpatients care is provided at an affordable cost with empharsis to patient comfort.</p>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <i class="fa-solid fa-microscope"></i>
    </div>
    <div class="container">
      <h1>Labaratory Service</h1>
      <p>We have professional laboratory staff with the specialized diagnostic equipments to provide the best of services to the patients.</p>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <i class="fa-solid fa-prescription-bottle-pill"></i>
    </div>
    <div class="container">
      <h1>Pharmacy</h1>
      <p>We have a team of pharmacists that ensure that patients get quality and safe medication.</p>
  </div>
  </div>
  <div class="card">
    <div class="image">
       <i class="fa-solid fa-circle-radiation"></i>
    </div>
    <div class="container">
      <h1>Radiology</h1>
      <p>We have a team that assist to provide advanced diagnostic imaging services.</p>
    </div>
  </div>
  <div class="card">
    <div class="image">
       <i class="fa-solid fa-tooth"></i>
    </div>
    <div class="container">
      <h1>Dental Clinic</h1>
      <p>We provide general and specialized dental care to our patients.</p>
    </div>
  </div>
</template>

<script>



export default {
  name: 'HomeView',
  components: {
   img: '.img/middle.jpg'
  }
}
</script>

<style>

#background{
  background-image: 'public/img/middle.jpg';
}


  .card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 30%;
  height: 350px;
  padding: 50px;
  margin: 20px;
  display: inline-block;
}
.card .image{
  font-size:50px;
  color:#1977cc;
}
.card .image:hover{
  color:white;
}
.card .container h1{
  color:#1977cc;
}
card .container h1:hover{
  color:white;
}
.card .container:hover{
  color:white;
  filter: saturate(0%);
}
.card:hover{
  background-color: #1977cc;
}
.card .container h1 .image:hover {
  color:white;
}
.container {
  padding: 2px 16px;
  color:#212529;
}
</style>