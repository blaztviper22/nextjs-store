import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddtoCart from "@/components/single-product/AddtoCart";
import BreadCrumbs from "@/components/single-product/BreadCrumbs"
import ProductRating from "@/components/single-product/ProductRating";
import ShareButton from "@/components/single-product/ShareButton";
import { fetchSingleProduct, findExistingReview } from "@/utils/actions"
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import SubmitReview from '@/components/reviews/SubmitReview';
import ProductReviews from '@/components/reviews/ProductReviews';
import {auth} from '@clerk/nextjs/server';

async function SingleProductpage({ params }: { params: { id: string }}) {
  const product = await fetchSingleProduct(params.id);
  const { name, image, company, price, description } = product;
  const dollarsAmount = formatCurrency(price);
  const {userId} = auth();
  const reviewDoesNotExist = 
    userId && !(await findExistingReview(userId,product.id));

  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-6 lg:grid-cols-2 lg:gap-x-6">
        {/* IMAGE FIRST COLOUMN */}
        <div className="relative h-full">
          <Image 
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
            priority
            className="w-full rounded-md object-cover"
          />
        </div>
        {/* PRODUCT INFO SECOND COLOUMN */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton productId={params.id} />
            <ShareButton name={product.name} productId={params.id} />
          </div>
          <ProductRating productId={params.id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddtoCart productId={params.id} />
        </div>
      </div>
      <ProductReviews productId={params.id} />
      
      { reviewDoesNotExist && <SubmitReview productId={params.id} /> }
    </section>
  )
}


export default SingleProductpage
