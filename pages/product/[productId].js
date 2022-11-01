import {useRouter} from 'next/router'

function productDetails() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const product_id = router.query.productId
  return (
    <div>
        <h3>Products Information {product_id}</h3>
    </div>
  )
}

export default productDetails
