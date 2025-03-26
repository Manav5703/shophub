"use client";

import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function UserDropdown({ logoutHandler }) {
  const { userInfo } = useSelector((state) => state.userLoginReducer);
  
  return (
    <Dropdown label={userInfo?.username || userInfo?.name} dismissOnClick={false}>
      <Link to="/order-history">
        <Dropdown.Item>Order History</Dropdown.Item>
      </Link>
      <Dropdown.Item onClick={logoutHandler}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
