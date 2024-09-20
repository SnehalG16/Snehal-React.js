import { Link } from "react-router-dom";

const ProductCard = ({ id, brand, category, price }) => {
  return (
    
    <div>
       <tr data-testid="item">
      <td>{id}</td>
      <td data-testid="brand">
        <Link to={`/products/${id}`} style={{color:"black",textDecoration:"none"}}>{brand}</Link>
      </td>
      <td data-testid="category">{category}</td>
      <td data-testid="price">{price}</td>
    </tr>
    </div>
  );
};

export default ProductCard;