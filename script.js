
document.addEventListener("DOMContentLoaded", function () {
  const campaignCards = document.querySelectorAll(".campaign-card");
  const detailContainer = document.getElementById("campaign-detail");
  const paymentButton = document.getElementById("payment-history-btn");
  const paymentContainer = document.getElementById("payment-history");

  const campaignData = [
    { clicks: 212, costPerClick: 0.81, spent: 171.24, reach: 4754, impressions: 4918 },
    { clicks: 1432, costPerClick: 1.22, spent: 1746.04, reach: 15234, impressions: 15987 },
    { clicks: 8433, costPerClick: 0.91, spent: 7663.03, reach: 20483, impressions: 22003 },
    { clicks: 7023, costPerClick: 1.10, spent: 7725.30, reach: 19475, impressions: 20992 },
    { clicks: 9302, costPerClick: 1.20, spent: 7291.00, reach: 24000, impressions: 26000 }
  ];

  const paymentData = [
    2024, 3910, 1643, 1022, 3456, 800, 2199, 4732, 3183, 1290,
    4111, 892, 2043, 2761, 920, 3728, 2600, 3055, 4123, 1744,
    3802, 1402, 1900, 2891, 2350, 1764, 2201, 1534, 1163, 3823,
    2110, 3901, 2981, 2489, 1863, 3100, 902, 4401, 2999, 2741,
    1278, 1200
  ];

  campaignCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      const data = campaignData[index % campaignData.length];
      detailContainer.innerHTML = `
        <h3>Campaign Results</h3>
        <p><strong>Link Clicks:</strong> ${data.clicks}</p>
        <p><strong>Cost per Click:</strong> ₹${data.costPerClick}</p>
        <p><strong>Amount Spent:</strong> ₹${data.spent}</p>
        <p><strong>Reach:</strong> ${data.reach}</p>
        <p><strong>Impressions:</strong> ${data.impressions}</p>
      `;
      detailContainer.style.display = "block";
      paymentContainer.style.display = "none";
    });
  });

  paymentButton.addEventListener("click", () => {
    let paymentHTML = "<h3>Payment History</h3><ul>";
    let total = 0;
    paymentData.forEach((amt, i) => {
      total += amt;
      paymentHTML += `<li>${11 + Math.floor(i / 3)} May 2025 - ₹${amt.toFixed(2)}</li>`;
    });
    paymentHTML += `</ul><p><strong>Total Paid:</strong> ₹${total.toFixed(2)}</p>`;
    paymentContainer.innerHTML = paymentHTML;
    paymentContainer.style.display = "block";
    detailContainer.style.display = "none";
  });
});
