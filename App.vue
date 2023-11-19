
<template>   
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  </head> 
  <div class="container-fluid">
    <div class="row no-gutter">
      <div class="col-md-6 d-none d-md-flex bg-image"> 
        </div>
        <div class="col-md-6 bg-light">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-lg-10 col-xl-7 mx-auto">
                  <h3 class="display-4">Flavour Coffee Station</h3>
                  <form @submit.prevent="login">
                    <div class="form-group mb-3">
                      <label for="text"></label>
                      <input type="text" v-model="name" class="form-control form-control-lg" id="text" placeholder="Name" required>
                    </div>
                    <div class="form-group mb-3">
                      <label for="password"></label>
                      <input type="password" v-model="password" class="form-control form-control-lg" id="password" placeholder="Password" required>
                    </div>
                  
                    <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Login</button>
                    <br> <a href="/forgot" class ="forgor">Forgot Password</a>
                    <br> <a href="/register" class ="reg">Register</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
</template>

<script>
export default {
  data() {
    return {
      name: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log("Testing");
      this.$router.push('/homepage');
    },
  },
};
</script>

<style> 
.login, 
.image{
min-height: 100vh;
}

.bg-image {
  background-image: url('https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/378511219_278353035187794_579260741048849670_n.png?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGB22TfawUAIHtMbpMpZWYFyKGum-Kz6I3Ioa6b4rPojT-F5hvehnEtLrIZTl5uYtPrsQ3QwWO5gBJs4lzrKjEV&_nc_ohc=RXlWcwSjPAIAX85jKl9&_nc_ht=scontent.fceb3-1.fna&oh=00_AfCSc42w6eF3nUIyQ1MC8ry5PPct4Z4sAGkf4RHZMXWS8w&oe=655F67C2');
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
}
@media (max-width: 767px) {
  /* Adjust background image for smaller devices */
  .bg-image {
    background-size: contain; /* Change to 'contain' for smaller screens */
    background-position: top; /* Adjust positioning if needed */
    min-height: 50vh; /* Adjust the height for smaller screens */
  }
}
.forgor{
text-align:center; 
} 
.reg{
text-align:center; 
} 
</style>
