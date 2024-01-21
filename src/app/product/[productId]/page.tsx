interface IParams{
    productId?: string
}

const Product = ({params}: {params: IParams}) => {
    return ( 
        <div>{params.productId}</div>
     );
}
 
export default Product;