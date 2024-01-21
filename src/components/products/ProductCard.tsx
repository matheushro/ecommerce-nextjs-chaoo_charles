
import Image from "next/image";
import { truncateText } from "../../../utils/truncateText";
import { formatePrice } from "../../../utils/formatePrice";
import { Rating } from "@mui/material";
import Link from "next/link";

interface ProductCardProps{
    data: any
}

const ProductCard: React.FC<ProductCardProps> = ({data}) => {


    const productRating = data.reviews.reduce((acc: number, item: { rating: number; }) => item.rating + acc, 0) / data.reviews.length

    return ( 
        <Link 
            href={`/product/${data.id}`}
            className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg0slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm"
        >
            <div className="flex flex-col items-center w-full gap-1">

                <div className="aspect-square overflow-hidden relative w-full">
                    <Image 
                        src={data.images[0].image}
                        fill
                        alt={data.name}
                        className="w-full h-full object-contain" 
                    />
                </div>

                <div className="mt-4">
                    {truncateText(data.name)}
                </div>

                <div>
                    <Rating value={productRating} readOnly/>
                </div>

                <div>
                    {data.reviews.length} reviews
                </div>

                <div className="font-semibold">
                    {formatePrice(data.price)}
                </div>

            </div>
        </Link>
     );
}
 
export default ProductCard;