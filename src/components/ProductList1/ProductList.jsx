import './ProductList.css';
import { useTelegram } from "../../hooks/useTelegram";

const ProductList = () => {
   const { user } = useTelegram();
   
   return (
      <>
       <h2>Product List</h2>
         <h2>{user?.userName}</h2>
      </>

   );
};

export default ProductList;

