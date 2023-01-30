


import Logo from "../atoms/Logo";
import ChecklistItem from "../atoms/ChecklistItem";
import AddAlpha from "../atoms/AddAlpha";
import Card from "../molecules/Card";

import logo from "../../icons/pbIcon.svg";
import add from "../../icons/add.svg";
import workproduct from "../../icons/workProduct.svg";

const Sidebar = (props: any) => {
  return (
    <div className="bg-gradient-to-b from-primary-100 to-primary-200 w-100 h-220 rounded-3xl m-8 overflow-hidden">
      <Logo logo={logo} />

      <AddAlpha icon={add} text="Add Product Backlog Item" />

      <div className="flex flex-col justify-center mt-14">
        <ChecklistItem icon={workproduct} text="Product Backlog" />
        <ChecklistItem icon={workproduct} text="Product Backlog" />
        <ChecklistItem icon={workproduct} text="Product Backlog" />
        <ChecklistItem icon={workproduct} text="Product Backlog" />
      </div>

      <div className="flex justify-center mt-6">
        <Card title={"Product Backlog"} />
      </div>
    </div>
  );
};

export default Sidebar;
