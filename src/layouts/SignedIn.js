import React from "react";
import {
  Image,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Menu,
} from "semantic-ui-react";

//burada signOut PROPS
export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://res.cloudinary.com/dklvms3jy/image/upload/v1622760971/vh9faxn078oavoqpcvbm.jpg"
        ></Image>
        <Dropdown pointing="top left" text="Mert">
          <DropdownMenu>
            <DropdownItem text="Bilgilerim" icon="info"></DropdownItem>
            <DropdownItem
              onClick={signOut}
              text="Çıkış Yap"
              icon="sign-out"
            ></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
