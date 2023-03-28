export const patternComponent = {
    "_id": "63f7a667df7276fe8bf3aca2",
    "type": "Pattern",
    "title": "Splitting Product Backlog Items",
    "description": "Small things get done faster. In agile development there is a continuous and relentless drive to reduce the size of backlog items by splitting bigger items into smaller ones. The key is to ensure that each item delivers value:\nSplits should support meaningful user interactions, no matter how small or “specialized” (think “thin end-to-end journey / slice”) not technical architecture “dice” (e.g. front-end without back-end)\nRemember: each and every Test Case is a potential backlog item.",
    "status": 0,
    "states": [],
    "createdAt": "2023-02-23T17:46:15.353Z",
    "updatedAt": "2023-02-23T17:46:15.353Z",
    "__v": 0
  }

export const workProductComponent = {
    "_id":"63d81677a73d9049dddb6319",
    "type":"Work Product",
    "title":"Product Backlog",
    "description":"An ordered list of things to build into the product to enhance its value.",
    "status":0,
    "states":[
       {
          "name":"Items Gathered",
          "status":3,
          "checklist":[
             {
                "name":"There is a list of things of value to build into the product",
                "checked":true,
                "_id":"6411ea3f412a482f86831841"
             },
             {
                "name":"The list is visible to the team and stakeholders",
                "checked":true,
                "_id":"6411ea3f412a482f86831842"
             },
             {
                "name":"The list is understood by the team and stakeholders",
                "checked":true,
                "_id":"6411ea3f412a482f86831843"
             }
          ],
          "optional":false,
          "_id":"6411ea3f412a482f86831840"
       },
       {
          "name":"Items Prioritized",
          "status":2,
          "checklist":[
             {
                "name":"The list of items is sorted in priority order from highest to lowest",
                "checked":true,
                "_id":"6411ea3f412a482f86831845"
             },
             {
                "name":"The priority ordering is communicated to the stakeholders and the team",
                "checked":false,
                "_id":"6411ea3f412a482f86831846"
             },
             {
                "name":"The stakeholders and the team accept the priorities as reasonable",
                "checked":true,
                "_id":"6411ea3f412a482f86831847"
             }
          ],
          "optional":false,
          "_id":"6411ea3f412a482f86831844"
       },
       {
          "name":"Cost-Benefit Quantified",
          "status":2,
          "checklist":[
             {
                "name":"The value of each item has been quatified at least relative to the other items",
                "checked":true,
                "_id":"6411ea3f412a482f86831849"
             },
             {
                "name":"The size / cost to implement of each item has been quantified at least relative to the other items",
                "checked":false,
                "_id":"6411ea3f412a482f8683184a"
             },
             {
                "name":"The priority ordering reflects the relative value-for-money that is anticipated to result from implementing each item",
                "checked":true,
                "_id":"6411ea3f412a482f8683184b"
             }
          ],
          "optional":true,
          "_id":"6411ea3f412a482f86831848"
       }
    ],
    "createdAt":"2023-01-30T19:11:51.522Z",
    "updatedAt":"2023-03-25T15:09:04.638Z",
    "__v":0
 }

export const stateComponent = {
    "name":"Items Gathered",
    "status":3,
    "checklist":[
       {
          "name":"There is a list of things of value to build into the product",
          "checked":false,
          "_id":"6411ea3f412a482f86831841"
       },
       {
          "name":"The list is visible to the team and stakeholders",
          "checked":true,
          "_id":"6411ea3f412a482f86831842"
       },
       {
          "name":"The list is understood by the team and stakeholders",
          "checked":true,
          "_id":"6411ea3f412a482f86831843"
       }
    ],
    "optional":false,
    "_id":"6411ea3f412a482f86831840"
 }