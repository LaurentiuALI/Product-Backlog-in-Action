import {
  type IStateChecklist,
  type IComponentState,
} from "../../../../stores/ComponentStore";

export const componentState: IComponentState = {
  name: "Identified",
  status: 3,
  checklist: [
    {
      name: "A way to enchance the value of a product has been found",
      checked: true,
      _id: "64311c04cc8463d803ecae65",
    },
    {
      name: "The item has an agreed name that is unique and meaningful",
      checked: true,
      _id: "64311c04cc8463d803ecae66",
    },
    {
      name: "There is a shared high-level understanding of whate the item is and why it is needed",
      checked: true,
      _id: "64311c04cc8463d803ecae67",
    },
  ],
  optional: false,
  _id: "64311c04cc8463d803ecae64",
};

export const stateChecklist: IStateChecklist = {
  name: "The item has an agreed name that is unique and meaningful",
  checked: true,
  _id: "64311c04cc8463d803ecae66",
};
