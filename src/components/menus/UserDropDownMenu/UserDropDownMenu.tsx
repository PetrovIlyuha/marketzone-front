import React from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

import { RiRefund2Line, RiAccountPinCircleLine } from "react-icons/ri";
import { MdOutlineInventory2 } from "react-icons/md";
import { GiChoice } from "react-icons/gi";
import { Space, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { paths } from "routes/helpers";

const userMenuItems = [
  {
    key: "1",
    label: <Link to="/orders">Orders</Link>,
    icon: <MdOutlineInventory2 size={20} />,
  },
  {
    key: "2",
    label: <Link to="/returns">Refund & Returns</Link>,
    icon: <RiRefund2Line size={20} />,
  },

  {
    key: "3",
    label: <Link to="/favorites">Favorites</Link>,
    icon: <GiChoice size={20} />,
  },
  {
    key: "4",
    label: <Link to={paths.accountSettings}>Account Settings</Link>,
    icon: <RiAccountPinCircleLine size={20} />,
  },
  {
    key: "5",
    label: <hr />,
    disabled: true,
  },
  {
    key: "6",
    label: (
      <Row>
        <Col span={12} offset={5}>
          <Space style={{ padding: "2px 4px" }}>
            <Button type="primary">
              <Link to={paths.logout}></Link>
            </Button>
          </Space>
        </Col>
      </Row>
    ),
  },
];

const UserDropDownMenu = () => {
  return <DropDownMenu items={userMenuItems} />;
};

export default UserDropDownMenu;
