<template>


                <GuestLayout title="Request new password">
                <form>
                  
                  <div class="form-outline mb-4">
                    <input type="email" id="" class="form-control" placeholder="Email address"/>
                    
                  </div>
             
                  <div class="row mb-4">
                    <div class="col">
                
                        <a style="text-decoration:none;" href="login">Remember your password?</a>
                      </div>
      
                  </div>
      
                  <!-- Submit button -->
                  <button type="button" class="btn btn-primary btn-block mb-4" style="width: 100%;">Submit</button>
      
                </form>
            </GuestLayout>
              
    
    </template>
    
    <script setup>
    import GuestLayout from '../components/GuestLayout.vue';
  
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