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
    $(".waveObjectArea__item").each(function (n) {
      objectTime = (n * 0.07 - n * 0.045) * 1.5;
      $(this).css({ transitionDelay: objectTime + "s" });
      $(this)
        .find(".waveObject")
        .css({ transitionDelay: objectTime + "s" });
    });
  }

  function objectDelayMidSet() {
    $(".waveObjectArea__item").each(function (n) {
      objectTime = (n * 0.1 - n * 0.045) * 1.5;
      $(this).css({ transitionDelay: objectTime + "s" });
      $(this)
        .find(".waveObject")
        .css({ transitionDelay: objectTime + "s" });
    });
  }

  function objectDelayMainSet() {
    $(".waveObjectArea__item").each(function (n) {
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
    $(".waveObjectArea__item")
      .attr("class", "waveObjectArea__item")
      .addClass("waveObjectArea__item--start");

    setTimeout(function () {
      upDown();
    }, 1500);
  }

  function upDownAnimation(item, delay) {
    setTimeout(function () {
      item
        .removeClass("waveObjectArea__item--start waveObjectArea__item--up")
        .addClass("waveObjectArea__item--down");
    }, delay);

    setTimeout(function () {
      item
        .removeClass("waveObjectArea__item--down")
        .addClass("waveObjectArea__item--up");
    }, delay + 2000);

    setTimeout(function () {
      item
        .removeClass("waveObjectArea__item--start waveObjectArea__item--up")
        .addClass("waveObjectArea__item--down");
    }, delay + 3500);

    setTimeout(function () {
      item
        .removeClass("waveObjectArea__item--down")
        .addClass("waveObjectArea__item--up");
    }, delay + 4900);
  }

  function upDownLoop(item, delay, count) {
    animationCount++;

    $(".waveObjectArea")
      .attr("class", "waveObjectArea")
      .addClass("waveObjectArea--phase" + phase);

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

  function upDown() {
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

    setTimeout(function () {
      objectDelayMidSet();
      startPosiSet();
      setTimeout(function () {}, 160);
    }, 2000);
  }

  ttlCharaSet();

  setTimeout(function () {
    start();
  }, 1000);
});
