import { Block } from "../../components/block/Block.jsx";
import { MenuLayout } from "../../components/layout/menuLayout/MenuLayout.js";

export const HeaderPage = (props) => {
  return (
    <MenuLayout>
      <Block height={"auto"} title={props.title}>
        <div>Header</div>
        <div>
          <a href={"#footer"}>footer</a>
        </div>
        <div>
          <a href={"#client"}>client</a>
        </div>
        <div>
          <a href={"#about"}>about</a>
        </div>
      </Block>
    </MenuLayout>
  );
};
