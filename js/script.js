"use strict";

// ========== Slider ==========

document.addEventListener("DOMContentLoaded", () => {
  const reviewsList = document.getElementById("reviewsList");
  const reviewsItems = reviewsList.querySelectorAll(".reviews-list-item");
  let currentIndex = 0;

  function showReview(index) {
    reviewsItems.forEach((item, idx) => {
      item.style.opacity = idx === index ? "1" : "0";
      item.style.zIndex = idx === index ? "1" : "0";
    });
  }

  document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex =
      currentIndex > 0 ? currentIndex - 1 : reviewsItems.length - 1;
    showReview(currentIndex);
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex =
      currentIndex < reviewsItems.length - 1 ? currentIndex + 1 : 0;
    showReview(currentIndex);
  });

  showReview(currentIndex);
});

// ========== Mobile menu ==========

const burgeerMenuBtn = document.querySelector(".burger-menu-btn");
const closeBtn = document.querySelector(".close-button");
const backdrop = document.querySelector(".backdrop");

burgeerMenuBtn.addEventListener("click", () => {
  backdrop.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  backdrop.style.display = "none";
});

backdrop.addEventListener("click", () => {
  backdrop.style.display = "none";
});
