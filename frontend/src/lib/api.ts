import {strapiInstance} from "@/utils/api";

export const getAbout = async () => {
    const response = await strapiInstance.get('about');
    return response.data;
}

export const getCompanyTimeLine = async () => {
    const response = await strapiInstance.get('company-timeline');
    return response.data;
}

export const getThumbnail = async () => {
    const response = await strapiInstance.get('landing');
    return response.data;
}

export const getServiceCount = async () => {
    const response = await strapiInstance.get('service');
    return response.data;
}

export const getServices = async () => {
    const response = await strapiInstance.get('our-service');
    return response.data;
}

export const getStrengths = async () => {
    const response = await strapiInstance.get('strength');
    return response.data;
}

export const getGallery = async () => {
    const response = await strapiInstance.get('galleries/1?populate=*');
    return response.data;
}



