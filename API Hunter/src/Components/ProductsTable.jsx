import ProductCard from "./ProductCard"

function ProductsTable({data}){
    return (
            <table  style={{border:"1px solid black", width:"80%", marginLeft:"150px"}}>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody >
                {data.map((product, index) => (
                    <ProductCard 
                        key={product.id}
                        id={product.id}
                        brand={product.brand}
                        category={product.category}
                        price={product.price}
                        
                    />
                ))}
            </tbody>
            </table>
    )
}

export default ProductsTable