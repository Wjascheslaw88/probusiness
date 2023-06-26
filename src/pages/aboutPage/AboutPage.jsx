import { Block } from "../../components/block/Block.jsx";
import { MenuLayout } from "../../components/layout/menuLayout/MenuLayout.js";

export const AboutPage = (props) => {
  return (
    <MenuLayout>
      <Block height={"300px"} title={props.title}>
        <div id={"123"}>About</div>
      </Block>
      <Block height={"300px"} title={props.title}>
        <div id={"21"}>About</div>
      </Block>
      <Block height={"300px"} title={props.title}>
        <div id={"ab2out"}>About</div>
      </Block>
      <Block height={"300px"} title={props.title}>
        <div id={"ab3out"}>About</div>
      </Block>
      <Block height={"300px"} title={props.title}>
        <div id={"abo5ut"}>About</div>
      </Block>
      <Block height={"300px"} title={props.title}>
        <div id={"abo6ut"}>About</div>
      </Block>
    </MenuLayout>
  );
};
