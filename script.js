const timeframes = {
  daily: {
    work: ["5hrs", "7hrs"],
    play: ["1hrs", "2hrs"],
    study: ["0hrs", "1hrs"],
    exercise: ["1hrs", "1hrs"],
    social: ["1hrs", "3hrs"],
    selfCare: ["0hrs", "1hrs"]
  },
  weekly: {
    work: ["32hrs", "36hrs"],
    play: ["10hrs", "8hrs"],
    study: ["4hrs", "7hrs"],
    exercise: ["4hrs", "5hrs"],
    social: ["5hrs", "10hrs"],
    selfCare: ["2hrs", "2hrs"]
  },
  monthly: {
    work: ["103hrs", "128hrs"],
    play: ["23hrs", "29hrs"],
    study: ["13hrs", "19hrs"],
    exercise: ["11hrs", "18hrs"],
    social: ["21hrs", "23hrs"],
    selfCare: ["7hrs", "11hrs"]
  }
};

const updateData = (period) => {
  // Update selected period style
  document.querySelector(".day").style.color = period === "daily" ? "white" : "hsl(235, 45%, 61%)";
  document.querySelector(".week").style.color = period === "weekly" ? "white" : "hsl(235, 45%, 61%)";
  document.querySelector(".month").style.color = period === "monthly" ? "white" : "hsl(235, 45%, 61%)";

  // Update card data dynamically
  Object.keys(timeframes[period]).forEach((activity) => {
    document.querySelector(`.normal-${activity}`).textContent = timeframes[period][activity][0];
    document.querySelector(`.lastt-${activity}`).textContent = `Last Week - ${timeframes[period][activity][1]}`;
  });
};

// Event listeners for period switching
document.querySelector(".day").addEventListener("click", () => updateData("daily"));
document.querySelector(".week").addEventListener("click", () => updateData("weekly"));
document.querySelector(".month").addEventListener("click", () => updateData("monthly"));

// Set default data (e.g., weekly)
updateData("weekly");
