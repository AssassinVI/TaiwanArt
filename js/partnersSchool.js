const School = [
  {
    name: "臺北市立復興高中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  { name: "臺北市立中正高中音樂班", image: "./img/jpg/partners/中正高中.jpg" },
  {
    name: "國立臺灣師大附中音樂班",
    image: "./img/jpg/partners/台灣師大附中.jpg",
  },
  {
    name: "天主教光仁中學音樂班",
    image: "./img/jpg/partners/天主教光仁中學.jpg",
  },
  {
    name: "臺北市立南門國中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "臺北市立仁愛國中音樂班",
    image: "./img/jpg/partners/臺北市立仁愛國中.jpg",
  },
  {
    name: "臺北市立福星國小音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
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
    image: "./img/jpg/partners/新北高中.jpg",
  },
  {
    name: "國立基隆高中音樂班",
    image: "./img/jpg/partners/基隆高中.jpg",
  },
  {
    name: "桃園市立武陵高中音樂班",
    image: "./img/jpg/partners/武陵高中.jpg",
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
    image: "./img/jpg/partners/新竹高中.jpg",
  },
  {
    name: "臺中市立台中二中音樂班",
    image: "./img/jpg/partners/台中二中.jpg",
  },
  {
    name: "臺中市立清水高中音樂班",
    image: "./img/jpg/partners/清水高中.jpg",
  },
  {
    name: "國立南投高中音樂班",
    image: "./img/jpg/partners/臺北市立復興高中.jpg",
  },
  {
    name: "高雄市立高雄中學音樂班",
    image: "./img/jpg/partners/高雄中學.jpg",
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
    image: "./img/jpg/partners/嘉義高中.jpg",
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
    image: "./img/jpg/partners/屏東女中.jpg",
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
{
  /* <img
class="partner-school-hexagon-content"
src=${item.image}
alt=${item.name}
/> */
}
$(function () {
  let src = "";
  if (window.innerWidth <= 500) {
    let pageNumber = Math.ceil(School.length / 10);
    let prevPage = 0;
    let currentPage = 10;
    function schoolRender(prev, current) {
      src = ""; //換頁時初始化
      School.slice(prev, current).forEach(function (item, index) {
        src += `<div class="partner-school-hexagon">
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
        <div class='hexagon'></div>
        <p>${item.name}</p>
        <div class='partner-school-icon-container'>
        <li class='partner-school-fb'>
        <img class='partner-school-fb-gold' src='img/svg/index/facebook-gold.svg'/>
        <img class='partner-school-fb-white' src='img/svg/index/facebook-white.svg'/>
        </li>
        <li class='partner-school-ig'>
        <img  class='partner-school-ig-gold' src='img/svg/index/instagram-gold.svg'/>
        <img class='partner-school-ig-white' src='img/svg/index/instagram-white.svg'/>
        </li>
        </div>
        </div>
        `;
      });
    }

    let page = "";
    for (let i = 1; i <= pageNumber; i++) {
      page += `<a class="partner-bottom-nav"  data-number="${i}">${i}</a>`;
    }
    $(".partner-page").on("click", ".partner-bottom-nav", function (e) {
      currentPage = $(e.target).data("number") * 10;
      prevPage = currentPage - 10;
      schoolRender(prevPage, currentPage); //點擊是異步事件 所以需要再執行一次
      $(".partner-bottom-nav").removeClass("partner-bottom-nav-active"); //移除全部的active class
      $(e.target).addClass("partner-bottom-nav-active"); //新增被點擊的active class
      //一開始的jquery的css畫面事件
      $("#partner-school").empty().append(src);
      $(".hexagon").css({ opacity: 1 });
      $(".partner-school-hexagon")
        .children(
          ".partner-school-hexagon-content , .partner-school-icon-container"
        )
        .css({ opacity: 1 });
      $(".partner-school-hexagon").children("p").css("color", "white");
    });
    schoolRender(prevPage, currentPage);
    $("#partner-school").append(src); //第一次的渲染
    $(".partner-page").append(page);
    $(".partner-bottom-nav[data-number='1']").addClass(
      "partner-bottom-nav-active"
    ); //第一次的addClass
  } else {
    // <img
    // class="partner-school-hexagon-content"
    // src='./img/svg/school-icon/復興icon.svg'
    // alt="學校icon"
    // />
    School.forEach(function (item, index) {
      src += ` <div class="partner-school-hexagon">
      <img
        class="partner-school-hexagon-border"
        src="./SVG/資產 2.svg"
        alt="邊框"
      />
      <div class='hexagon'></div>
      <p>${item.name}</p>
      <div class='partner-school-icon-container'>
      <li class='partner-school-fb'>
      <img class='partner-school-fb-gold' src='img/svg/index/facebook-gold.svg'/>
      <img class='partner-school-fb-white' src='img/svg/index/facebook-white.svg'/>
      </li>
      <li class='partner-school-ig'>
      <img  class='partner-school-ig-gold' src='img/svg/index/instagram-gold.svg'/>
      <img class='partner-school-ig-white' src='img/svg/index/instagram-white.svg'/>
      </li>
    </div>
    </div>`;
    });
    $("#partner-school").append(src);
  }

  $(".partner-main").after(` 
  <ul class="community">
      <li>
        <a href="https://lin.ee/qjOfRoW">
          <img src="./img/svg/index/line-white.svg" class="white" />
          <img src="./img/svg/index/line-gold.svg" class="gold" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/profile.php?id=100071048064122">
          <img src="./img/svg/index/facebook-white.svg" class="white" />
          <img src="./img/svg/index/facebook-gold.svg" class="gold" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/taeshamusic">
          <img src="./img/svg/index/instagram-white.svg" class="white" />
          <img src="./img/svg/index/instagram-gold.svg" class="gold" />
        </a>
      </li>
    </ul>
  <footer>
  <p>
  ©2023 Taiwan Arts Education Senior High School Alliance.
    <span class="ph"></span> All Rights Reserved.
    <span class="ph"></span>Email: art.edu.assoc@gmail.com
  </p>
</footer>`);
});
