export const productBacklogCard = {
  type: "Work Product",
  title: "Product Backlog",
  description:
    "An ordered list of things to build into the product to enhance its value.",
  status: 0,
  states: [
    {
      name: "Items Gathered",
      status: 0,
      checklist: [
        {
          name: "There is a list of things of value to build into the product",
          checked: false,
        },
        {
          name: "The list is visible to the team and stakeholders",
          checked: false,
        },
        {
          name: "The list is understood by the team and stakeholders",
          checked: false,
        },
      ],
      optional: false,
    },
    {
      name: "Items Prioritized",
      status: 0,
      checklist: [
        {
          name: "The list of items is sorted in priority order from highest to lowest",
          checked: false,
        },
        {
          name: "The priority ordering is communicated to the stakeholders and the team",
          checked: false,
        },
        {
          name: "The stakeholders and the team accept the priorities as reasonable",
          checked: false,
        },
      ],
      optional: false,
    },
    {
      name: "Cost-Benefit Quantified",
      status: 0,
      checklist: [
        {
          name: "The value of each item has been quatified at least relative to the other items",
          checked: false,
        },
        {
          name: "The size / cost to implement of each item has been quantified at least relative to the other items",
          checked: false,
        },
        {
          name: "The priority ordering reflects the relative value-for-money that is anticipated to result from implementing each item",
          checked: false,
        },
      ],
      optional: true,
    },
  ],
};

export const relativeEstimating = {
  type: "Pattern",
  title: "Relative Estimating",
  description:
    "Effort to get Product Backlog Items done is estimated not in absolute units of time, but relative to each other. This allows progress to be predicted based on performance.\\nThe unit is often called a “Point”, e.g. a “Story Point” when sizing User Stories.\\nTeams track the Points they earn per time period by getting Items done. This is used to forecast progress, with confidence levels based on the number of data points and stability of conditions.",
  status: 0,
  states: [],
};

export const splittingProductBacklogItems = {
  type: "Pattern",
  title: "Splitting Product Backlog Items",
  description:
    "Small things get done faster. In agile development there is a continuous and relentless drive to reduce the size of backlog items by splitting bigger items into smaller ones. The key is to ensure that each item delivers value:\\nSplits should support meaningful user interactions, no matter how small or “specialized” (think “thin end-to-end journey / slice”) not technical architecture “dice” (e.g. front-end without back-end)\\nRemember: each and every Test Case is a potential backlog item.",
  status: 0,
  states: [],
};
