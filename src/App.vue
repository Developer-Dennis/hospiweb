<template>
  <div id="topbar">
    <p><i class="fa-solid fa-envelope"></i> &nbsp; <a href="mailto:racecoursehospital@gmail.com">racecoursehospital@gmail.com</a>  &nbsp;  &nbsp;  <i class="fa-solid fa-phone"> &nbsp; +254726773876</i></p>
  <div class="socials">
    <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-linkedin"></i>
  </div>
  </div>
  <nav>
    <img :src="image" />
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
    <router-link to="/">Service</router-link>
    <router-link to="/department">Department</router-link>
    <router-link to="/work-with-us">Work With Us</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
  <router-view/>
  <Footer />
</template>

<script>
import Footer from './views/footer.vue'
export default {
  name: 'myapp',
  components:{
    Footer
  },
  data(){
    return{
      image:  "./img/racecourse.png",
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
}
#topbar{
  background: #003;
  height: 15px;
  font-size: 15px;
  padding: 10px 0;
  color: white;
  display: flex;
  align-items: center;
  padding-left:40px ;
}
#topbar p a{
  text-decoration: none;
  color: #f2f2f2;
}
.socials{
  display: flex;
  justify-content: space-between;
}


nav {
  display: flex;
  background:#f2f2f2;
  padding: 10px;
  text-align: right;
}

nav a {
  font-size: 14px;
  text-decoration: none;
  color: #2c4964;
  padding: 14px 16px;
 
}
nav img{
  height: 50px;
  padding-right: 600px;
}


</style>
