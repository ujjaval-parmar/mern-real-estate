import { useNavigate } from "react-router-dom";

export const singlePageLoader = async ({ request, params }) => {
    console.log(params.id)
    try {
        const response = await fetch('http://localhost:5000/api/posts/' + params.id);

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Invalid Id!')
        }

        // console.log(data);

        return data.data;
    } catch (err) {
        throw new Error(err.message)
    }



}

export const listPageLoder = async({ request, params})=>{
    // console.log(request.url.split('?')[1]);

    try{
        const query = request.url.split('?')[1];
        const response = await fetch("http://localhost:5000/api/posts?"+query);
    
        const data = await response.json();
    
        if(data.data.length===0){
            throw new Error('No Data Found');
        }

        if(!response.ok){
            throw new Error(data.message);
        }
    
        return data.data;
    }catch(err){
        throw new Error(err);
    }
   

}