<template>

    <section class=" text-center text-lg-start">
        <div class="card mb-3">
          <div class="row g-0 d-flex align-items-center">
            <div class="col-lg-4 d-none d-lg-flex">
              <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
                class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
            </div>
            <div class="col-lg-8">
              <div class="card-body py-5 px-md-5">
                <h1 class="row mb-4 " style="font-weight:bolder;text-align:center;">Request new password </h1>

                <form>
                  
                  <div class="form-outline mb-4">
                    <input type="email" id="" class="form-control" placeholder="Email address"/>
                    
                  </div>
             
                  <div class="row mb-4">
                    <div class="col">
                
                        <a style="text-decoration:none;" href="#">Remember your password?</a>
                      </div>
      
                  </div>
      
                  <!-- Submit button -->
                  <button type="button" class="btn btn-primary btn-block mb-4" style="width: 100%;">Submit</button>
      
                </form>
      
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </template>
    
    <script>
    
    export default{
    
    name: "Login"
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