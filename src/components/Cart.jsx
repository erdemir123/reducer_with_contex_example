import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardContext } from "../context/MainContext";

const Cart = ({ item }) => {
  const [state, dispatch] = useContext(CardContext);
  const removeToCart = (item) => {
    console.log(item);
    dispatch({ type: "REMOVE", payload:item});
  };
  return (
    <div>
      <Card
        style={{ width: "18rem", display: "flex", justifyContent: "center"}}
      >
        <Card.Img variant="top" src={item.url} />
        <Card.Body style={{ margin: "0 auto" }}>
          <Card.Title style={{ textAlign: "center" }}>{item.title}</Card.Title>
          <Card.Text style={{ textAlign: "center" }}>{item.name}</Card.Text>
          <Card.Text style={{ textAlign: "center" }}>{item.price} TL</Card.Text>
          <Button
            variant="primary"
            style={{ display: "block", margin: "0 auto" }}
            onClick={() => removeToCart(item.id)}
          >
            Remove to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cart;
