const School = [
  {
    name: "臺北市立復興高中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  { name: "臺北市立中正高中音樂班", image: "./img/jpg/partners/中正高中.jpg" },
  {
    name: "國立台灣師大附中音樂班",
    image: "./img/jpg/partners/台灣師大附中.jpg",
  },
  {
    name: "天主教光仁中學音樂班",
    image: "./img/jpg/partners/天主教光仁中學.jpg",
  },
  {
    name: "臺北市立南門國中音樂班",
    image: "./img/jpg/partners/臺北市立南門國中.jpg",
  },
  {
    name: "臺北市立仁愛國中音樂班",
    image: "./img/jpg/partners/臺北市立仁愛國中.jpg",
  },
  {
    name: "臺北市立福星國小音樂班",
    image: "./img/jpg/partners/臺北市立福星國小.jpg",
  },
  {
    name: "新北市立新店高中音樂班",
    image: "./img/jpg/partners/臺北市立新店高中.jpg",
  },
  {
    name: "新北市私立淡江中學音樂班",
    image: "./img/jpg/partners/新北市私立淡江中學.jpg",
  },
  {
    name: "新北市立新北高中音樂班",
    image: "./img/jpg/partners/新北市立新北高中.jpg",
  },
  {
    name: "國立基隆高中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "桃園市立武陵高中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "桃園市立南崁高中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "國立中央大學附屬中壢高中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "桃園市立內壢高中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "桃園市立平鎮國中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "桃園市立大園國中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "國立新竹高中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "臺中市立台中二中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "臺中市立清水高中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "國立南投高中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "高雄市立高雄中學音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "國立鳳新高中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "高雄市立新莊高中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "高雄市立新興高中音樂班(國中部)",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "國立嘉義高中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "嘉義縣立新港國中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "嘉義縣立東石國中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "國立屏東女中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "國立羅東高中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "宜蘭縣立國華國中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "宜蘭縣立復興國中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "宜蘭縣北成國小音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "國立花蓮高中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  { name: "明義國小音樂班", image: "./img/jpg/partners/臺北市立復興高中.jpg" },
  { name: "馬公國小音樂班", image: "./img/jpg/partners/臺北市立復興高中.jpg" },
];

$(function () {
  let src = "";

  if (window.innerWidth <= 500) {
    for (let i = 0; i < 10; i++) {
      console.log(School[i].name);
      src += `<div class="partner-school-hexagon">
      <img
        class="partner-school-hexagon-content"
        src=${School[i].image}
        alt=${School[i].name}
      />
      <img
        class="partner-school-hexagon-border"
        src="./SVG/資產 2.svg"
        alt="邊框"
      />
      <p>${School[i].name}</p>
      <img class="partner-school-fb" src="./SVG/fb.svg"/>
      <img class="partner-school-ig" src="./SVG/ig.svg" />
    </div>
      `;
    }
  } else {
    School.forEach(function (item, index) {
      src += ` <div class="partner-school-hexagon">
      <img
        class="partner-school-hexagon-content"
        src=${item.image}
        alt=${item.name}
      />
      <img
        class="partner-school-hexagon-border"
        src="./SVG/資產 2.svg"
        alt="邊框"
      />
      <p>${item.name}</p>
      <img class="partner-school-fb" src="./SVG/fb.svg"/>
      <img class="partner-school-ig" src="./SVG/ig.svg" />
    </div>`;
    });
  }

  $("#partner-school").append(src);
  $(".partner-main").after(` <footer>
  <p>
    ©2023 Taiwan Arts Education College Alliance.
    <span class="ph"></span> All Rights Reserved.
    <span class="ph"></span>Email: art.edu.assoc@gmail.com
  </p>
</footer>`);
});
