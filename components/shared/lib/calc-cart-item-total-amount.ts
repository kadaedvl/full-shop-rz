export const calcTotalAmount = (item: any) => {
    return item.productVariation.price * item.quantity;
}