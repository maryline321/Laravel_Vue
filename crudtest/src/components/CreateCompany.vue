<template>
    <form @submit.prevent="storeCompany(form)">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" v-model="form.name" class="form-control" id="name" placeholder="Enter name">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="form.email" class="form-control" id="email" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="name">Address</label>
            <input type="text" v-model="form.address" class="form-control" id="address" placeholder="address">
          </div>
        <div class="form-group">
          <label for="website">Website</label>
          <input type="website" v-model="form.website" class="form-control" id="website" placeholder="website">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
</template>

<script setup>

import {reactive} from 'vue'
const { storeCompany} =useCompanies();

 
 const form =reactive(
    {
    'name':'',
    'email':'',
    'address':'', 
    'website':'',
    }
 )

</script>