import { FC, useEffect, useState } from "react";
import { Wrapper } from "./styled";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  icon: any;
  count?: number;
  linkActive?: boolean;
  link: string;
}

const MenuIcon: FC<Props> = ({ icon, count, linkActive, link }) => {
  const [yPosition, setYPosition] = useState<number>(0);
  const [iconSize, setIconSize] = useState<string>("23px");
  const [iconBgColor, setIconBgColor] = useState<string>("");

  useEffect(() => {
    setYPosition(-5);
    setIconSize("25px");
    setIconBgColor("pink");
    setTimeout(() => {
      setYPosition(0);
      setIconSize("23px");
      setIconBgColor("");
    }, 200);
  }, [count]);

  return (
    <Wrapper iconSize={iconSize} iconBgColor={iconBgColor}>
      {linkActive ? <Link to={link}>{icon}</Link> : icon}
      {count && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: yPosition,
            transition: { duration: 0.2, ease: "backInOut" },
          }}
        >
          {count}
        </motion.span>
      )}
    </Wrapper>
  );
};

export default MenuIcon;
