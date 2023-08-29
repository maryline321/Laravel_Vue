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
                <h1 class="row mb-4 " style="font-weight:bold;text-align:center;"></h1>
                {{ title }}
    
                  <slot></slot>
      
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </template>
    
    <script setup>
    const {title} =defineProps( 
        {
            title:String
        }
    )
    
    </script>
