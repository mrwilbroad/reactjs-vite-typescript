import FullList from "../model/FullList";
import DomList from "../Component/DomList";
import { Component } from "react";
import Listitem from "../model/Listitem";

type templateprops = {
  fulllist: FullList;
};

export default class Listtemplate extends Component<templateprops> {
  constructor(props: templateprops) {
    super(props);
  }

  render() {
    const { removeItem, PushItem, clearList } = this.props.fulllist;

    return (
      <DomList
        fullist={this.props.fulllist}
        onRemoveItem={(id: string) => removeItem(id)}
        onAddItem={(itemObj: Listitem) => PushItem(itemObj)}
        onClearList={() => clearList()}
        buttontitle={"Remove"}
      />
    );
  }
}
