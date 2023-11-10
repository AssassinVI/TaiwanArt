let indexWebPositon = "index.html";
let logoPicPositon = "./img/svg/menu-logo.svg";

let menuData = [
  {
    title: "關於聯盟",
    enTitle: "ABOUT",
    link: "#",
    id: "menu10",
    subMenu: [
      {
        title: "聯盟故事",
        enTitle: "STORY",
        link: "About.html",
        id: "menu14",
      },
      {
        title: "聯盟大事記",
        enTitle: "HISTORY",
        link: "About_History.html",
        id: "menu13",
      },
      {
        title: "聯盟形象",
        enTitle: "BRAND",
        link: "About_Recommend.html",
        id: "menu11",
      },
    ],
  },
  {
    title: "新世代人才培育策略",
    enTitle: "CONTACT",
    link: "#",
    id: "menu20",
    subMenu: [
      {
        title: "築底計畫",
        enTitle: "PLAN",
        link: "Plan.html",
        id: "menu21",
      },
      {
        title: "高校音樂節",
        enTitle: "",
        link: "About_Concert.html",
        id: "menu22",
      },
      {
        title: "名家系列",
        enTitle: "",
        link: "About_Famous.html",
        id: "menu23",
      },
    ],
  },
  {
    title: "聯盟夥伴",
    enTitle: "CONTACT",
    link: "#",
    id: "menu30",
    subMenu: [
      {
        title: "聯盟音樂家",
        enTitle: "",
        link: "About_Musician.html",
        id: "menu31",
      },
      {
        title: "聯盟活動學校",
        enTitle: "SCHOOL",
        link: "About_Partners.html",
        id: "menu32",
      },
      {
        title: "聯盟國際合作",
        enTitle: "",
        link: "About_IntPartner.html",
        id: "menu33",
      },
    ],
  },
  {
    title: "聯絡我們",
    enTitle: "CONTACT",
    link: "About_Contact.html",
    id: "menu40",
    subMenu: [],
  },
  {
    title: "贊助",
    enTitle: "SPONSOR",
    link: "About_Sponsor.html",
    id: "menu50",
    subMenu: [],
  },
];

$(document).ready(function () {
  var src = "";
  src += `<nav class="menu navbar navbar-expand-lg navbar-light" id="innerMenu">`;
  src += `<a class="logoBox navbar-brand transitions-link" href="${indexWebPositon}">`;
  src += `<img src=${logoPicPositon} alt=""></a>`;
  src += `<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">`;
  src += ` <span class="icon"></span><span class="icon"></span><span class="icon"></span></button>`;
  src += `<div class="collapse navbar-collapse" id="navbarSupportedContent">`;
  src += ` <ul class="navbar-nav">`;

  menuData.forEach(function (item, index) {
    if (item.link == "#") {
      src += ` <li class="nav-item dropdown" id=${item.id}>
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
                <span class="menuTitle">${item.title}</span>
            </a>
            <div class="dropdown-menu">`;
      item.subMenu.forEach(function (item, index) {
        src += `
                <a class="dropdown-item transitions-link" id="${item.id}" href="${item.link}">
                ${item.title}
                </a>`;
      });

      src += `</div></li>`;
    } else {
      src += `<li class="nav-item" id=${item.id}>
            <a class="nav-link transitions-link" href="${item.link}">
                <span class="menuTitle">${item.title}</span>
            </a>
        </li>`;
    }
  });

  src += `</ul></div></nav></div>`;

  $("#navDiv").html(src);
});
