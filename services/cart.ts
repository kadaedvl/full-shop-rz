import { axiosInstantds } from "./axiosInstantds"
import { CartDTO } from "./dto/cart.dto";

export const fetchCart = async (): Promise<CartDTO> => {
    const { data } = await axiosInstantds.get<CartDTO>('/cart');
    return data;
}