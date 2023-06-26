import { Block } from "../../components/block/Block.jsx";
import { MenuLayout } from "../../components/layout/menuLayout/MenuLayout.js";

export const FooterPage = (props) => {
  return (
    <MenuLayout>
      <Block height={"300px"} title={props.title}>
        <div id={"footer"}>Footer</div>
      </Block>
    </MenuLayout>
  );
};
