import { Block } from "../components/block/Block.jsx";
import { MenuLayout } from "../../components/layout/menuLayout/MenuLayout.js";

export const ClientPage = (props) => {
  return (
    <MenuLayout>
      <Block height={"300px"} title={props.title}>
        <div id={"client"}>Client</div>
      </Block>
    </MenuLayout>
  );
};
