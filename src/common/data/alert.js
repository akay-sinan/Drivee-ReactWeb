const alerts = [
  {
    id: 1,
    title: "Example",
    alerts: [
      {
        id: 11,
        description: "Create a Skote Dashboard UI",
        members: [
          {
            username: "",
            userImg: "avatar2",
          },
          {
            username: "",
            userImg: "avatar1",
          },
        ],
        status: "Waiting",
        budget: "$145",
      },
      {
        id: 12,
        description: "Create a New Landing UI",
        members: [
          {
            username: "",
            userImg: "avatar4",
          },
          {
            username: "",
            userImg: "avatar5",
          },
          { username: "" },
          { username: "" },
          { username: "" },
        ],
        status: "Approved",
        budget: "$225",
      },
      {
        id: 13,
        description: "Create a Skote Logo",
        members: [
          {
            username: "Fransis",
          },
        ],
        status: "Waiting",
        budget: "$105",
      },
    ],
  },
  {
    id: 2,
    title: "In Progress",
    alerts: [
      {
        id: 21,
        description: "Brand logo design",
        members: [
          {
            username: "",
            userImg: "avatar7",
          },
        ],
        status: "Complete",
        budget: "$198",
      },
      {
        id: 22,
        description: "Create a Blog Template UI",
        members: [
          {
            username: "Stephen",
          },
          {
            username: "",
            userImg: "avatar8",
          },
          {
            username: "",
            userImg: "avatar1",
          },
        ],
        status: "Pending",
        budget: "$125",
      },
    ],
  },
  {
    id: 3,
    title: "Completed",
    alerts: [
      {
        id: 31,
        description: "Redesign - Landing page",
        members: [
          {
            username: "",
            userImg: "avatar6",
          },
          {
            username: "Fransis",
          },
        ],
        status: "Complete",
        budget: "$175",
      },
      {
        id: 32,
        description: "Multipurpose Landing",
        members: [
          {
            username: "",
            userImg: "avatar7",
          },
        ],
        status: "Complete",
        budget: "$135",
      },
      {
        id: 33,
        description: "Create a Blog Template UI",
        members: [
          {
            username: "",
            userImg: "avatar4",
          },
          {
            username: "Stephen",
          },
          {
            username: "",
            userImg: "avatar2",
          },
        ],
        status: "Complete",
        budget: "$95",
      },
    ],
  },
  {
    id: 4,
    title: "Recent alerts",
    alerts: [
      {
        id: 41,
        description: " Brand logo design",
        members: [
          {
            username: "",
            userImg: "avatar7",
          },
        ],
        status: "Complete",
        budget: "$100",
      },
      {
        id: 42,
        description: "Create a Blog Template UI",
        members: [
          {
            username: "Stephen",
          },
          {
            username: "",
            userImg: "avatar8",
          },
          {
            username: "",
            userImg: "avatar1",
          },
        ],
        status: "Complete",
        budget: "$75",
      },
      {
        id: 43,
        description: "Redesign - Landing page",
        members: [
          {
            username: "",
            userImg: "avatar7",
          },
          {
            username: "",
            userImg: "avatar4",
          },
        ],
        status: "Complete",
        budget: "$95",
      },
    ],
  },
]

const seriesAlerts = [
  {
    name: "Kapatılan Uyarılar",
    type: "column",
    data: [23, 11, 22, 27, 13, 22, 52, 21, 44, 22, 30, 0],
  },
  {
    name: "Uyarılar",
    type: "line",
    data: [23, 11, 34, 27, 17, 22, 80, 32, 44, 22, 39, 0],
  },
]

const optionsAlerts = {
  chart: { height: 380, type: "line", stacked: !1, toolbar: { show: !1 },dropShadow: {
    enabled: !0,
    color: "#000",
    top: 18,
    left: 7,
    blur: 8,
    opacity: 0.2,
  }, },
  stroke: { width: [0, 2, 5], curve: "smooth" },
  plotOptions: {
    bar: { columnWidth: "15%", endingShape: "rounded",borderRadius: 5, }
  },
  colors: ["#556ee6", "#f1b44c"],
  fill: {
    gradient: {
      inverseColors: !1,
      shade: "light",
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100],
    },
  },
  labels: [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
  ],
  markers: { size: 0 },
  yaxis: { min: 0 },
}

const statusClasses = {
  waiting: "badge-soft-secondary",
  approved: "badge-soft-primary",
  complete: "badge-soft-success",
  pending: "badge-soft-warning",
}

export { alerts, seriesAlerts, optionsAlerts, statusClasses }
