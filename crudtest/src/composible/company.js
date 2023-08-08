import { ref } from "vue";
import axios from "axios";

export default function useCompanies()
{

    const companies = ref([])

    async function getCompanies (){

        let response = await axios.get('http://localhost:8000/api/companies')
        companies.value =response.data;

    }

    const destroyCompany = async(id) => {
        await axios.delete('http://127.0.0.1:8000/api/company/' + id)
    }

    return{

        companies,
        getCompanies,
        destroyCompany
    }
}