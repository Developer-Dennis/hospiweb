<template>
  <div class="departments">
    <h1>Neurology</h1>
    <img :src="neurology"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more..</button>

    <h1>Cardiology</h1>
    <img :src="cardiology"  v-if='showImage1' style="height:300px;"/>
    <button @click="toggleImage1">Show more...</button>

    <h1>Orthopaedic</h1>
    <img :src="orthopaedic"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage1">Show more...</button>

    <h1>pediatric</h1>
    <img :src="pediatric"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more...</button>

    <h1> Ophalmology</h1>
    <img :src=" ophalmology"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more...</button>

    <h1>Maternal care</h1>
    <img :src=" maternalcare"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more...</button>

    <h1>Radiology</h1>
    <img :src="radiology"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more...</button>

    
  <h1>Dental Care</h1>
    <img :src="dental"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more...</button>

    
  <h1>Labaratory</h1>
    <img :src="lab"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more...</button>


    <h1>Pharmacy</h1>
    <img :src="pharmacy"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more...</button>

    <h1>Oncology</h1>
    <img :src="oncology"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more...</button>

    <h1>Family Planning</h1>
    <img :src="family"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more...</button>

    <h1>Critical Care</h1>
    <img :src="icu"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more...</button>

    <h1>Ear Nose &Throat care </h1>
    <img :src="ent"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more...</button>

    <h1>Gynaecology & Reproductive Health Care </h1>
    <img :src="gynaecology"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more...</button>


    <h1>Physiotherapy Services </h1>
    <img :src="physiotherapy"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more...</button>


    <h1>Psychiatry Services ( Mental Health) </h1>
    <img :src="Mentalhealth"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more...</button>


    <h1>General Surgery </h1>
    <img :src="generalsurgery"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more...</button>


    <h1>Funeral Home servies</h1>
    <img :src="departments2"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more...</button>
  </div>



  
 
</template>
    
<script>
export default {
    name: 'Department',
    data(){
      return{    
        showImage: true,                              
        neurology: './img/neuralogy.jpg',
        cardiology:  './img/cardiology.jpg',
        orthopaedic:  './img/orthopaedic',
        pediatric:     './img/pediatric.jpg',
        ophalmology:     './img/ophalmology.png',
        maternalcare:     './img/maternalcare.jpg',
        radiology:        './img/radiology.png',
        dental:           './img/dental.jpg',
        lab:            './img/lab.jpg',
        pharmacy:       './img/pharmacy.png',
        oncology:       './img/oncology.png',
        family:         './img/family.png',
        icu:             './img/icu.png',
        ent:           './img/ent.jpg',
        gynaecology:    './img/gynaecology.jpg',
        physiotherapy:    './img/physiotherapy.png',
        Mentalhealth:    './img/Mental-health.jpg',
        generalsurgery:    './img/generalsurgery.jpg',
        departments2:     './img/departments2.jpg',
      }
    },
    methods: {
        toggleImage: function () {
            this.showImage = !this.showImage;
        },
      
    },
    components:{
     
    }
}
</script>

<style>
    .departments{
      padding-right : 50px;
      background-color:#f2f2f2;
    }
    .departments img{
      display: flex;
      align-items: right;
      display: block;
    }
    .departments h1{
      text-align: left;
    }
    button{
      width: 100%;
    }
</style>