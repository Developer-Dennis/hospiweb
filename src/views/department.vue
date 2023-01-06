<template>
  <div class="departments">
    <h1>Neurology</h1>
    <img :src="neurology"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more..</button>

    <h1>Cardiology</h1>
    <img :src="cardiology"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more...</button>

    <h1>Orthopaedic</h1>
    <img :src="orthopaedic"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage">Show more...</button>

    <h1>pediatric</h1>
    <img :src="pediatric"  v-if='showImage' style="height:300px;"/>
    <p  v-if='showText'>Our pediatric/Children's clinic is to assist your child to have the best of health care so as to live happily. We do have a team of specilized physicians to take care of your child so as to be comfortable in their day to day life.</p>
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
      }
    },
    methods: {
        toggleImage: function () {
            this.showImage = !this.showImage;
            this.showText = !this.showText;
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
</style>