import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useCompanies()
{

    const companies = ref([])
    const router= useRouter()

    async function getCompanies (){

        let response = await axios.get('http://localhost:8000/api/companies')
        companies.value =response.data;

    }

    const storeCompany = async (data) => {
        await axios.post('http://127.0.0.1:8000/api/createCompany/')
        await router.push({name: 'companyIndex'})
    }
    const destroyCompany = async (id) => {
        await axios.delete('http://127.0.0.1:8000/api/company/' + id)
    }

    return{

        companies,
        getCompanies,
        destroyCompany,
        storeCompany
    }
}