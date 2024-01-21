import Container from "@/components/Container";
import ProductDetails from "@/components/product/ProductDetails";
import { product } from "../../../../utils/product";
interface IParams{
    productId?: string
}

const Product = ({params}: {params: IParams}) => {
    return ( 
        <Container>
            <ProductDetails product={product} />
        </Container>
     );
}
 
export default Product;