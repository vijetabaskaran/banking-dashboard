export const products =[
    {
        id:1,
        name:"Premium Savings Account",
        category:"Savings",
        status:"Active",
        icon:"PiggyBank",
        metrics:[
            {label:"Interest Rate",value : "4.5% p.a."},
            {label:"Available Balance",value : "$2,45,000"},
        ],
        description:
         "A high- yield savings account with zero maintenance fees ,  free UPI transfers and instant access to your funds.",
         cta: "View Details",
    },
    {
        id:2,
        name:"Platinum Credit Card",
        category:"Credit Card",
        status:"Active",
        icon:"CreditCard",
        metrics:[
             {label:"Available credit card limit",value : "$1,50,000"},
            {label:"Amount used",value : "$35,000"},

        ],
        description:
        "A premium rewards card with airport lounge access ,  5x points on travel and dining.",
        cta: "View Details",
    },
    {
        id:3,
        name:"Personal Loan",
        category:"Loan",
        status:"Active",
        icon:"Landmark",
        metrics:[
             {label:"Outstanding Amount",value : "$3,20,00"},
            {label:"Next due date",value : "15 Oct 2026"},
        ],
        description :
        "A flexible personal loan with fixed EMIs ,  no prepayment penalty",
        cta:"View Details",
    },

    {
        id:4,
        name:"Wealth Investment plan",
        category:"Investment",
        status:"Pending",
        icon:"TrendingUp",
        metrics:[
             {label:"Invested Amount",value : "$1,00,00"},
            {label:"Expected Returns",value : "8.5% p.a."},
        ],
        description :
        "A diversified wealth plan combining debt and equity funds",
        cta: "Continue Application",
    },
    {
        id:5,
        name:"Fixed deposit",
        category:"Savings",
        status:"closed",
        icon:"vault",
        metrics:[
             {label:"Interest rate",value :"7.1% p.a."},
            {label:"Maturity amount",value : "$1,25,000"},
        ],
        description :
        "A 2-year fixed deposit with guaranteed returns. This deposit has matured and been closed.",
        cta:"View Details",
    },
    {
        id:6,
        name:"Home Loan",
        category:"Loan",
        status:"Pending",
        icon:"Home",
        metrics:[
            { label: "Requested Amount", value: "₹45,00,000" },
      { label: "Interest Rate", value: "8.4% p.a." },
    ],
    description:
      "A long-tenure home loan with competitive rates. Your application is awaiting document verification.",
    cta: "Continue Application",
    },

];

export const categories = [
  "All Products",
  "Savings",
  "Credit Card",
  "Loan",
  "Investment",
];

export const statuses = ["All", "Active", "Pending", "Closed"];