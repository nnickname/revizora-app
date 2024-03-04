import Cookie from 'universal-cookie';
import axios from '../call';

export const findProduct = async (keyword: string) => {
    
    try{
        const response: any = await axios.get("/marketplacee", {headers: {'token': keyword}});
        if(response?.data?.items !== undefined){
            return response?.data?.items;
        } else return null;
    }
    catch(error){
        return null;
    }
}

export const findRandomProducts = async () => {
    
    try{
        const response: any = await axios.get("/marketplacee/random");
        if(response?.data?.items !== undefined){
            return response?.data?.items;
        } else return null;
    }
    catch(error){
        return null;
    }
}

export const findMostViewedShops = async () => {
    
    try{
        const response: any = await axios.get("/marketplacee/mostviewed");
        if(response?.data?.items !== undefined){
            return response?.data?.items;
        } else return null;
    }
    catch(error){
        return null;
    }
}