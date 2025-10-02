if (window.location.pathname.includes("review.html")) {
    let reviewCount = localStorage.getItem("reviewCount");

    if (!reviewCount) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount);
    }

    reviewCount += 1;
    localStorage.setItem("reviewCount", reviewCount);

    const counter = document.getElementById("reviewCounter");
    const thanks = document.getElementById("thanks");

    if (thanks) {
        thanks.textContent = "Thank you for your review!";
    }

    if (counter) {
        counter.textContent = `You have submitted ${reviewCount} review(s).`;
    }

};