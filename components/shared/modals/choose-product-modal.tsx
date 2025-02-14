import './choose-product-modal.css'

type ChooseProductModalProps = {
    product: any;
}

const ChooseProductModal:React.FC<ChooseProductModalProps> = ({product}) => {
    return (
        <div className="modal">
            <img src={product.imageUrl}></img>
            <div>{product.name}</div>
            
            </div>
    )
}

export default ChooseProductModal;