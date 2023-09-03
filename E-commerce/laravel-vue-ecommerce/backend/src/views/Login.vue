<template>

  <GuestLayout title="Sign In">
          <form method="POST" @submit.prevent="login">
            
            <div class="form-outline mb-4">
              <input type="email" id="email" class="form-control" 
              autocomplete="email"
              v-model="user.email"
              placeholder="Email address"/>
              
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="password" class="form-control" 
              autocomplete="current-password"
              v-model="user.password"
              placeholder="Password" />
      
            </div>

           
            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
               
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" name="remember-me" 
                  v-model="user.remember"
                  id="remember-me" checked />
                  
                  <label class="form-check-label" for=""> Remember me </label>
                </div>
              </div>

              <div class="col">
              
                <a style="text-decoration:none;" href="request-password">Forgot password?</a>
              </div>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-4" style="width: 100%;">
              
              Sign in</button>

          </form>
</GuestLayout>

</template>

<script setup>
import GuestLayout from '../components/GuestLayout.vue';
import store from "../store"
import router from "../router"

const user ={
  email: '',
  password: '',
  remember:false
}

function login() {
  store.dispatch( 'login', user)
  .then(() => {
    router.push({name: 'app.dashboard'})
  })
  
}

</script>

<style scoped>

.rounded-t-5 {
border-top-left-radius: 0.5rem;
border-top-right-radius: 0.5rem;
}

@media (min-width: 992px) {
.rounded-tr-lg-0 {
  border-top-right-radius: 0;
}

.rounded-bl-lg-5 {
  border-bottom-left-radius: 0.5rem;
}
}


</style>