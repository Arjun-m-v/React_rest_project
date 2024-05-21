import commonApi from "./commonApi";

//add_employee

export const addEmployee=(data)=>{
    return commonApi("POST",'http://127.0.0.1:8000/emp/',data)
}


//view_employee

export const allEmployee=()=>{
    return commonApi("GET",'http://127.0.0.1:8000/emp/',"")
}

//delete_employee

export const deleteEmployee=(id)=>{
    return commonApi("DELETE",`http://127.0.0.1:8000/emp/${id}/`,"")
}

//get_employee
export const getEmployee=(id)=>{
    return commonApi("GET",`http://127.0.0.1:8000/emp/${id}/`,"")
}

//edit_employee
export const editEmployee=(id,data)=>{
    return commonApi("PUT",`http://127.0.0.1:8000/emp/${id}/`,data)
}