import {strapiInstance} from "@/utils/api";

export const getAbout = async () => {
    const response = await strapiInstance.get('about');
    return response.data;
}

export const getGallery = async () => {
    const response = await strapiInstance.get('galleries?populate=*');
    return response.data;
}

export const getMachinePark = async () => {
    const response = await strapiInstance.get('machine-parks?populate=*');
    return response.data;
}

export const getProducts = async () => {
    const response = await strapiInstance.get('products-galleries?populate=*');
    return response.data;
}

export const getContact = async () => {
    const response = await strapiInstance.get('contact');
    return response.data;
}



