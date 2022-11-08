import $ from "jquery";
import "what-input";

import { Swiper, Navigation, Pagination } from "swiper";

import { customSelect } from "./select.js";
// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require("foundation-sites");

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

$(function () {
  //main-slides
  if ($(".main-slides").length > 0) {
    Swiper.use([Navigation, Pagination]);
    let swiper = new Swiper(".main-slides .swiper", {
      slidesPerView: 1,
      speed: 500,
      pagination: {
        el: ".main-slides .swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  }

  if ($(".slider-products").length > 0) {
    let number = 1;
    $(".slider-products .slider-products__slider").each(function (index, value) {
      const nextStr = ".js-tabs-panel_" + number + " .swiper-button-next";
      const prevStr = ".js-tabs-panel_" + number + " .swiper-button-prev";
      let swiper2 = new Swiper(".slider-products__slider_" + number, {
        slidesPerView: 3,
        spaceBetween: 40,
        speed: 500,
        navigation: {
          nextEl: nextStr,
          prevEl: prevStr,
        },
      });
      number++;
    });
  }

  //spoiler
  if ($(".js-spoiler__btn").length > 0) {
    const SPOILER_BTN = document.querySelectorAll(".js-spoiler__btn");
    SPOILER_BTN.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        el.closest(".spoiler-block").classList.add("spoiler-block_active");
      });
    });
  }

  if ($(".product-page__compound").length > 0) {
    let swiper3 = new Swiper(".product-page__compound .swiper", {
      slidesPerView: 3,
      speed: 500,
      navigation: {
        nextEl: ".product-page__compound .swiper-button-next",
        prevEl: ".product-page__compound .swiper-button-prev",
      },
    });
  }

  if ($(".recommended-products").length > 0) {
    let numberCount = 1;
    $(".recommended-products .swiper").each(function (index, value) {
      const nextStr = ".js-recommended-products_" + numberCount + " .swiper-button-next";
      const prevStr = ".js-recommended-products_" + numberCount + " .swiper-button-prev";
      let swiper4 = new Swiper(
        ".js-recommended-products_" + numberCount + " .recommended-products__slider",
        {
          slidesPerView: 2,
          speed: 500,
          navigation: {
            nextEl: nextStr,
            prevEl: prevStr,
          },
          breakpoints: {
            768: {
              slidesPerView: 3,
            },
          },
        }
      );
      numberCount++;
    });
  }

  if ($(".js-basket-info__label-icon").length > 0) {
    const TYPE_PAY__BTN = document.querySelectorAll(".js-basket-info__label-icon");
    const TAB_TYPE_PAY = document.querySelector(".js-basket-info__tabs-label-icon");
    TYPE_PAY__BTN.forEach((el, i) => {
      el.addEventListener("click", (e) => {
        let link = TAB_TYPE_PAY.querySelectorAll(".tabs-title")[i].querySelector("a");
        link.click();
      });
    });
  }

  if ($(".js-basket-info__prepare-change").length > 0) {
    const ACTIVE_PREPARE_CHANGE = document.querySelector(".js-basket-info__prepare-change");

    ACTIVE_PREPARE_CHANGE.addEventListener("click", function (el) {
      const inputCount = this.closest(".basket-info__flex").querySelector(
        ".js-prepare-change-count"
      );
      if (el.checked) {
        el.checked = false;
        inputCount.disabled = false;
      } else {
        el.checked = true;
        inputCount.disabled = true;
      }
    });
  }

  if ($(".product-count-item__count").length > 0) {
    const CHANGE_COUNT = document.querySelectorAll(".product-count-item__btn");

    CHANGE_COUNT.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        let countProduct = el
          .closest(".product-count-item")
          .querySelector(".product-count-item__count");
        if (el.classList.contains("js-product-count-btn-add")) {
          countProduct.innerHTML = Number(countProduct.innerHTML) + 1;
        } else {
          if (Number(countProduct.innerHTML) < 2) {
            countProduct.innerHTML = 1;
          } else {
            countProduct.innerHTML = Number(countProduct.innerHTML) - 1;
          }
        }
      });
    });
  }

  const MOBILE_MENU = document.querySelector(".js-mobile-menu");

  MOBILE_MENU.addEventListener("click", () => {
    const ASIDE_LEFT = document.querySelector(".aside-left");
    ASIDE_LEFT.classList.toggle("aside-left_active");
  });

  customSelect();
});
