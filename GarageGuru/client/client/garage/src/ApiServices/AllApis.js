import base_url from "./base_url";
import CommonApi from "./CommonApi";

//to get whole customer details
export const getCustomers=()=>{
    return CommonApi("","",`${base_url}/customer/`,"GET")
}