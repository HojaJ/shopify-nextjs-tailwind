import ProducContentPage from "../../components/ProductContentPage";
import { getAllProducts, getProduct } from "../../lib/shopify";


export default function ProductPage ({ product }) {
    return (
        <div>
            <ProducContentPage product={product} />
        </div>
    )
}


export async function getStaticPaths() {
    const products = await getAllProducts()
    
    const paths = products.map(item => {
        
        const product = String(item.node.handle)
        
        return {
            params: { product }
        }
    })

    return {
      paths,
      fallback: false
    };
}

export async function getStaticProps({ params }) {
    const product = await getProduct(params.product)

    return {
        props: {
            product
        }
    }
}