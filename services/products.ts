import { Product } from "@prisma/client"
import { axiosInstantds } from "./axiosInstantds"
import { ApiRoutes } from "./constants";

export const search = async (query: string): Promise<Product[]> => {
    const { data } = await axiosInstantds.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, { params: { query } });
    return data;
}