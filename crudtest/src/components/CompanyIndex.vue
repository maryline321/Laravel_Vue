<template>

    <div style="margin: 40px;">
   
        <!-- <RouterLink :to="{ name: 'createCompany' }" class="btn btn-primary">Create Company</RouterLink> -->
        <a href="/createcompany" class="btn btn-primary">Create Company</a>
        <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Website</th>
                 <th>Actions</th>
              </tr>
            </thead>
            <tbody>             
              <tr v-for="item in companies" :key="item.id">
                <th scope="row">{{item.name}}</th>
                <td>{{item.email}}</td>
                <td>{{item.address}}</td>
                <td>{{item.website}}</td>
                <td><button @click="deleteCompany(item.id)" class="btn btn-danger">Delete</button></td>

              </tr>
             
            </tbody>
          </table>
  

    </div>

</template>

<script setup>

import { RouterLink } from 'vue-router';
import useCompanies from '../composible/company';
import { onMounted } from 'vue';

const { companies, getCompanies, destroyCompany} =useCompanies();

onMounted(getCompanies)

const deleteCompany = async (id) => {

    if (!window.confirm('Are you sure you want to delete?'))
{
    return
}
    await destroyCompany(id);
    await getCompanies();
}

    


</script>