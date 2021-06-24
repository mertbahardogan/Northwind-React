import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Label, Button } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";

export default function CartSummary() {
  //globalstate okuyoruz, abone olduk reduxa
  //Yani; redux store state'e erişim yapmamızı sağlayan hook useSelector'dür.
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeToCart(cartItem.product));
    toast.error(`${cartItem.product.productName} sepetten kaldırıldı.`);
  };

  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          {cartItems.map((cartItem) => (
            <Dropdown.Item>
              {cartItem.product.productName}
              <Label>{cartItem.quantity}</Label>
              <Button color="red" onClick={() => handleRemoveFromCart(cartItem)}>x</Button>
            </Dropdown.Item>
          ))}
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">
            Sepete git
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
