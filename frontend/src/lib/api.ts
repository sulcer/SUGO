import {strapiInstance} from "@/utils/api";
import {Locale} from "@/types/types";

export const getAbout = async ({ locale }: Locale) => {
    const response = await strapiInstance.get(`about?locale=${locale}`);
    return response.data;
}

export const getGallery = async () => {
    const response = await strapiInstance.get('galleries?populate=*');
    return response.data;
}

export const getMachinePark = async ({ locale }: Locale) => {
    const response = await strapiInstance.get(`machine-parks?locale=${locale}&populate=*`);
    return response.data;
}

export const getProducts = async ({ locale }: Locale) => {
    const response = await strapiInstance.get(`products-galleries?locale=${locale}&populate=*`);
    return response.data;
}

export const getContact = async () => {
    const response = await strapiInstance.get('contact');
    return response.data;
}



