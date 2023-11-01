const mainVisual = document.querySelector("#main-visual");

if (mainVisual != null) {
  let content = `<div class="mainVisual">
  <div class="waveObjectArea waveObjectArea--blur" >`;

  for (let i = 0; i < 8; i++) {
    content += `
    <div class="waveObjectArea__item waveObjectArea__item--set">
    <span class="waveObject waveObject--0"></span>
    <span class="waveObject waveObject--1"></span>
    <span class="waveObject waveObject--2"></span>
    <span class="waveObject waveObject--3"></span>
    <span class="waveObject waveObject--4"></span>
        </div>`;
  }

  content += `</div>
  </div>`;
  mainVisual.innerHTML = content;
}

$(function () {
  let objectTime;
  let animationCount = 0;
  let startCount = 0;
  let phase = 0;

  function ttlCharaSet() {}

  function objectDelaySubSet() {
    // console.log("objectDelaySubSet開始");
    $(".waveObjectArea__item").each(function (n) {
      //n為data-delay的值
      objectTime = (n * 0.07 - n * 0.045) * 1.5;
      $(this).css({ transitionDelay: 1 + "s" });
      $(this)
        .find(".waveObject")
        .css({ transitionDelay: 1 + "s" });
    });
  }

  function objectDelayMidSet() {
    // console.log("objectDelayMidSet開始");
    $(".waveObjectArea__item").each(function (n) {
      //n為data-delay的值
      objectTime = (n * 0.1 - n * 0.045) * 1.5;
      $(this).css({ transitionDelay: objectTime + "s" });
      $(this)
        .find(".waveObject")
        .css({ transitionDelay: objectTime + "s" });
    });
  }

  function objectDelayMainSet() {
    // console.log("objectDelayMainSet開始");
    $(".waveObjectArea__item").each(function (n) {
      //n為data-delay的值
      objectTime = n * 70;
      $(this)
        .attr("data-delay", objectTime)
        .css({ transitionDelay: 0 + "s" });
      $(this)
        .find(".waveObject")
        .attr("data-delay", objectTime)
        .css({ transitionDelay: 0 + "s" });
    });
  }

  function startPosiSet() {
    // console.log("startPosiSet開始");
    $(".waveObjectArea__item")
      .attr("class", "waveObjectArea__item")
      .addClass("waveObjectArea__item--start");

    setTimeout(function () {
      upDown();
    }, 1500);
  }

  //單個物體上下動畫的播放處理
  function upDownAnimation(item, delay) {
    // console.log("upDownAnimation開始");
    setTimeout(function () {
      // console.log("第一");
      item
        .removeClass("waveObjectArea__item--start waveObjectArea__item--up")
        .addClass("waveObjectArea__item--down");
    }, delay);

    setTimeout(function () {
      // console.log("第二");
      item
        .removeClass("waveObjectArea__item--down")
        .addClass("waveObjectArea__item--up");
    }, delay + 2000);

    setTimeout(function () {
      // console.log("第三");
      item
        .removeClass("waveObjectArea__item--start waveObjectArea__item--up")
        .addClass("waveObjectArea__item--down");
    }, delay + 3500);

    setTimeout(function () {
      // console.log("第四");
      item
        .removeClass("waveObjectArea__item--down")
        .addClass("waveObjectArea__item--up");
    }, delay + 4900);
  }

  //上下動畫的循環處理
  function upDownLoop(item, delay, count) {
    animationCount++;
    const removePhase = changePhase(phase);
    $(".waveObjectArea")
      .attr("class", "waveObjectArea")
      .addClass("waveObjectArea--phase" + phase); //換色

    // $(".waveObjectArea")
    //   .attr("class", "waveObjectArea")
    //   .addClass("waveObjectArea--phase" + phase);
    // if ($(".waveObject--4").length > 0 && phase === 0) {
    //   $(".waveObjectArea__item").append(
    //     '<span class="waveObject waveObject--0"></span>'
    //   );
    //   $(".waveObject--4").remove();
    // } else if ($(".waveObject--4").length === 0 && phase === 0) {
    //   console.log(0);
    // } else {
    //   $(`.waveObject--${removePhase}`).remove();
    //   $(".waveObjectArea__item").append(
    //     `<span class="waveObject waveObject--${phase}"></span>`
    //   );
    // }

    upDownAnimation(item, delay);

    if (animationCount === 11) {
      phase++;
      animationCount = 0;
    }
    if (phase === 5) {
      phase = 0;
    }
    setTimeout(function () {
      upDownLoop(item, delay, count);
    }, 7600);
  }
  //計算要減去哪一個tag
  function changePhase(phase) {
    let removePhase;
    if (phase === 0) {
      removePhase = 4;
    } else if (phase === 1 || phase === 2 || phase === 3) {
      removePhase = --phase;
    }
    return removePhase;
  }
  function upDown() {
    // console.log("upDown開始");
    objectDelayMainSet();

    $(".waveObjectArea__item").each(function (n) {
      const item = $(this),
        delay = Number(item.attr("data-delay"));
      count = n + 1;

      upDownLoop(item, delay, count);
    });
  }

  function start() {
    startCount++;
    // console.log("start開始");
    objectDelaySubSet();

    $(".mainVisual").addClass("mainVisual--fadeIn");

    $(".waveObjectArea")
      .attr("class", "waveObjectArea")
      .addClass("waveObjectArea--phase0");

    if (startCount === 1) {
      $(".waveObjectArea__item")
        .attr("class", "waveObjectArea__item")
        .addClass("waveObjectArea__item--ballStart");
    } else {
      $(".waveObjectArea__item")
        .attr("class", "waveObjectArea__item")
        .addClass("waveObjectArea__item--ball");
    }
    // console.log(0);
    setTimeout(function () {
      // console.log(2000);
      objectDelayMidSet();
      startPosiSet();
      setTimeout(function () {}, 160);
    }, 2000);
  }

  ttlCharaSet();
  setTimeout(function () {
    // console.log("第一步");
    start();
  }, 1000);
});
