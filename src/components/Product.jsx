
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardContext } from '../context/MainContext';


function Product({product}) {
    
    const [{basket},dispatch]=useContext(CardContext)
    const addToCart=(product)=>{
        dispatch({type:"ADD",payload:product})
    }
  return (
    <>
    <Card style={{ width: '18rem', display:"flex",justifyContent:"center",}}>
      <Card.Img variant="top" src={product.url} />
      <Card.Body style={{margin:"0 auto"}}>
        <Card.Title style={{textAlign:"center"}}>{product.title}</Card.Title>
        <Card.Text style={{textAlign:"center"}}>
          {product.name}
        </Card.Text>
        <Card.Text style={{textAlign:"center"}}>
          {product.price} TL
        </Card.Text>
        <Button variant="primary" style={{display:"block",margin:"0 auto"}} onClick={()=>addToCart(product)}>Add to Cart</Button>
      </Card.Body>
    </Card>
    </>
    
  );
}

export default Product;