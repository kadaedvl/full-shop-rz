
const ProductPage = ({ params: { id } }: { params: { id: string } }) => {

    return (
        <div className="container">
            ProductPage {id}
        </div>
    );
}

export default ProductPage
