export const productBacklogItem = {
  type: "Alpha",
  title: "Product Backlog Item",
  description: "Something to build into the product to enchance its value",
  status: 0,
  states: [
    {
      name: "Identified",
      status: 0,
      checklist: [
        {
          name: "A way to enchance the value of a product has been found",
          checked: false,
        },
        {
          name: "The item has an agreed name that is unique and meaningful",
          checked: false,
        },
        {
          name: "There is a shared high-level understanding of whate the item is and why it is needed",
          checked: false,
        },
      ],
      optional: false,
    },
    {
      name: "Ready for Development",
      status: 0,
      checklist: [
        {
          name: "The item is well-enough understood by the stakeholders and the team for it to be prioritized for development",
          checked: false,
        },
        {
          name: "The value is understood enough to proceed",
          checked: false,
        },
        {
          name: "The size of the item is understood enought to proceed",
          checked: false,
        },
        {
          name: "The relative priority of the item is agreed",
          checked: false,
        },
      ],
      optional: false,
    },
    {
      name: "Done",
      status: 0,
      checklist: [
        {
          name: "The item has been included in the product",
          checked: false,
        },
        {
          name: "The stakeholders are happy that the value associated with the item has been realized",
          checked: false,
        },
        {
          name: "The item has been verified as meeting all relevant quality criteria",
          checked: false,
        },
        {
          name: "The item has been validated as being usable and fit-for-purpose",
          checked: false,
        },
      ],
      optional: false,
    },
  ],
};

export const INVEST = {
  type: "Pattern",
  title: "INVEST",
  description:
    "An acronym of the quality criteria for a Product Backlog Item to be ready for development:\\nIndependent - can be independently built / tested\\nNegotiable - e.g. in its detail or even into or out of scope\\nValuable\\nEstimable - can be sized\\nSmall - enough e.g. to be implemented rapidly, e.g. in a week or less\\nTestable.",
  status: 0,
  states: [] as [],
};
export const splittingProductBacklogItems = {
  type: "Pattern",
  title: "Splitting Product Backlog Items",
  description:
    "Small things get done faster. In agile development there is a continuous and relentless drive to reduce the size of backlog items by splitting bigger items into smaller ones. The key is to ensure that each item delivers value:\\nSplits should support meaningful user interactions, no matter how small or “specialized” (think “thin end-to-end journey / slice”) not technical architecture “dice” (e.g. front-end without back-end)\\nRemember: each and every Test Case is a potential backlog item.",
  status: 0,
  states: [] as [],
};

export const agreeDefinitionOfDone = {
  type: "Activity",
  title: "Agree Definition of Done",
  description:
    "Agree the quality criteria that will be used to determine whether any change to the product is fully and correctly implemented.",
  status: 0,
  states: [] as [],
};

export const definitionOfDone = {
  type: "Work Product",
  title: "Definition of Done",
  description:
    "The quality criteria that will be used to determine whether the product is of acceptable / releasable quality.",
  status: 0,
  states: [
    {
      name: "Completion Condition Listed",
      status: 0,
      checklist: [
        {
          name: "The deliverables that need to be supplied are listed, including supporting documentation etc.",
          checked: false,
        },
        {
          name: "The quality criteria and levels that need to be achieved are described and justified ",
          checked: false,
        },
        {
          name: "It is clear who needs to accept which outputs for them to be accepted as done ",
          checked: false,
        },
      ],
      optional: false,
    },
    {
      name: "Quality Criteria and Evidence Described",
      status: 0,
      checklist: [
        {
          name: "The types of quality assurance check / test that need to be completed are described",
          checked: false,
        },
        {
          name: "It is clear how the test results will be evaluated, analysed and evidenced",
          checked: false,
        },
      ],
      optional: true,
    },
  ],
};

export const prepareAProductBacklogItem = {
  type: "Activity",
  title: "Prepare a Product Backlog Item",
  description:
    "Ensure that the Product Backlog Item is ready for development and that it is clear how it will be tested.",
  status: 0,
  states: [] as [],
};

export const testCase = {
  type: "Work Product",
  title: "Test Case",
  description:
    "Defines test inputs and expected results to help evaluate whether a specific aspect of the system works correctly.",
  status: 0,
  states: [
    {
      name: "Test Ideas Captured",
      status: 0,
      checklist: [
        {
          name: "The key things that we need to test for have been documented",
          checked: false,
        },
        {
          name: "The test ideas cover the usage scenarios that must be supported to achieve the value",
          checked: false,
        },
        {
          name: "The stakeholders are happy that the test ideas together verify an acceptable implementation of the item to be implemented",
          checked: false,
        },
      ],
      optional: false,
    },
    {
      name: "Scripted",
      status: 0,
      checklist: [
        {
          name: "The steps that need to be taken to execute the test case are documented",
          checked: false,
        },
        {
          name: "The inputs to and required results of each step are listed",
          checked: false,
        },
        {
          name: "The script ensures that the test is fully repeatable",
          checked: false,
        },
        {
          name: "The criteria are clear by which the test is to be judged either to have succeeded or to have failed",
          checked: false,
        },
      ],
      optional: false,
    },
    {
      name: "Automated",
      status: 0,
      checklist: [
        {
          name: "The Test Case is sufficiently documented to enable it to be automated",
          checked: false,
        },
        {
          name: "The Test Case has been automated with the appropriate test automation tool",
          checked: false,
        },
        {
          name: "The automated Test Case is included in the automated test suites for the product",
          checked: false,
        },
        {
          name: "The automated Test Case has been demonstrated to execute as expected",
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
  states: [] as [],
};
