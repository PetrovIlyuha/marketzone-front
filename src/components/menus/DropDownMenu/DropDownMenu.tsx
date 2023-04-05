import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import UserAvatar from "features/Header/userAvatar/UserAvatar";

interface DropDownMenuProps {
  items: MenuProps["items"];
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ items }) => (
  <Dropdown menu={{ items }}>
    <Space>
      <UserAvatar />
    </Space>
  </Dropdown>
);

export default DropDownMenu;
