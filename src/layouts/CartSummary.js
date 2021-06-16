import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownDivider, DropdownItem } from "semantic-ui-react";

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          <Dropdown.Item>Acer Laptop</Dropdown.Item>
          <Dropdown.Item>Asus Laptop</Dropdown.Item>
          <Dropdown.Item>Dell Laptop</Dropdown.Item>
          <DropdownDivider></DropdownDivider>
          {/* Link veya NavLink*/}
          <DropdownItem as={NavLink} to="/cart">Sepete Git</DropdownItem>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
