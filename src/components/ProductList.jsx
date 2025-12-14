import Product from './Product.jsx';

export default function ProductList() {
    const products = [
        {title:"Phone", description:"Smartphone 15", price:"799€"},
        {title:"PC", description: "Gaming", price:"1299€"},
        {title:"Laptop", description: "15 inches", price:"899€"},
        {title:"Tablet", description:"Watch movies", price:"599€"},
        {title:"Printer", description:"Print stuff", price:"49€"},
        {title:"Smart watch", description:"Time but better", price:"149€"},
        {title:"Headphones", description:"Music", price:"59€"},
    ]

    return (
        <div>
            {products.map((product, index) => (
                <Product key={index} title={product.title} description={product.description} price={product.price}/>
            ))}
        </div>
    );
}