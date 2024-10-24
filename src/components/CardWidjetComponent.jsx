import { FaShoppingCart } from 'react-icons/fa'; 
const styles = {
   container: {
     position: 'relative', 
     display: 'inline-block',
     cursor: 'pointer',
   },
   icon: {
     fontSize: '24px', 
     color: '#333', 
   },
   cartCount: {
     position: 'absolute',
     top: '-10px',
     right: '-10px',
     backgroundColor: '#ff0000', 
     color: '#fff', 
     borderRadius: '50%', 
     padding: '4px 8px',
     fontSize: '12px',
   },
 };
const CardWidjetComponent = () => {
 return (
   <div style={styles.container}>
   {/* Icono de carrito */}
   <FaShoppingCart style={styles.icon} />
   
   {/* Número de productos */}
   <span style={styles.cartCount}>5</span>
 </div>
  );
};



export default CardWidjetComponent;
