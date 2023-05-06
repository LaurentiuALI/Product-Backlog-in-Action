export const MockStateAchieved = {
  name: "Items Gathered",
  status: 3,
  checklist: [
    {
      name: "There is a list of things of value to build into the product",
      checked: true,
      _id: "6411ea3f412a482f86831841",
    },
    {
      name: "The list is visible to the team and stakeholders",
      checked: true,
      _id: "6411ea3f412a482f86831842",
    },
    {
      name: "The list is understood by the team and stakeholders",
      checked: true,
      _id: "6411ea3f412a482f86831843",
    },
  ],
  optional: false,
  _id: "6411ea3f412a482f86831840",
};

export const MockStateUnachievedOpt = {
  name: "Cost-Benefit Quantified",
  status: 2,
  checklist: [
    {
      name: "The value of each item has been quatified at least relative to the other items",
      checked: true,
      _id: "6411ea3f412a482f86831849",
    },
    {
      name: "The size / cost to implement of each item has been quantified at least relative to the other items",
      checked: false,
      _id: "6411ea3f412a482f8683184a",
    },
    {
      name: "The priority ordering reflects the relative value-for-money that is anticipated to result from implementing each item",
      checked: true,
      _id: "6411ea3f412a482f8683184b",
    },
  ],
  optional: true,
  _id: "6411ea3f412a482f86831848",
};

export const MockStateUnachieved = {
  name: "Items Prioritized",
  status: 2,
  checklist: [
    {
      name: "The list of items is sorted in priority order from highest to lowest",
      checked: true,
      _id: "6411ea3f412a482f86831845",
    },
    {
      name: "The priority ordering is communicated to the stakeholders and the team",
      checked: false,
      _id: "6411ea3f412a482f86831846",
    },
    {
      name: "The stakeholders and the team accept the priorities as reasonable",
      checked: true,
      _id: "6411ea3f412a482f86831847",
    },
  ],
  optional: false,
  _id: "6411ea3f412a482f86831844",
};

export const MockStateInvalid = {
  name: "Items Prioritized",
  status: 2,
  checklist: [
    {
      name: "The list of items is sorted in priority order from highest to lowest",
      checked: true,
      _id: "6411ea3f412a482f86831845",
    },
    {
      name: "The priority ordering is communicated to the stakeholders and the team",
      checked: false,
      _id: "6411ea3f412a482f86831846",
    },
    {
      name: "The stakeholders and the team accept the priorities as reasonable",
      checked: true,
      _id: "6411ea3f412a482f86831847",
    },
  ],
  optional: false,
  _id: "6411ea3f412a482f86831844",
};
