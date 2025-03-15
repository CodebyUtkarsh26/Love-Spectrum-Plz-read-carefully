const febHolidays = [
  "Dear Aadya, please feel it",
  "Please ye pyaar ka cycle hai, achee se feel karna",
  "Dost bhi tum, pyaar bhi tum 😊",
  "ek bhi tum aur hazar bhi tum 🤩",
  "dukh me tum aur khushi me tum 🤨",
  "Jindagi ke safar me kaafi ho tum ❤",
  "Maine shiddat se chaha hai tumhe, I love you❤️",
  "You're my everything ✔",
  "You are my soulmate ✨💕",
  "And of course... wait Aadya.....",
  "My bestie too🤭",
  "I will always be there for you",
  "No matter how far we are🥰",
  "I promise I will never multi-thread on you",
  "You're the prettiest, cutest, funniest,",
  "sweetest girl alive. 🤞✍",
  "In one word, you're just perfect.😍",
  "I'm the happiest man alive bcuz🥰",
  "I'm so grateful I met you❤️",
  "I'll always do my best to keep you happy🥺",
  "Main humesa tumhre sath hun 🤞✔",
  "kabhi khud ko akela mat samjhna💓",
  "You are the most special person in my life🥰",
  "I don't want to lose you 😒",
  "And trust me I dont want anyone else 🥰",
  "There's no one better than you❤️",
  "You're the best Aadya!! 💖",
  "Or should I say, I miss you every second of my life",
  "I truly loves you and I swear this is not lust 🤨",
  "Acche lagte hai wo pal jo tumhare",
  "sath bitaye hain virtually 💓",
  "kaas kabhi aamne saamne baate karle hamlog 😢",
  "darr lagta hai samne aane me lekin ab sabar nahi hai 🥰",
  "Sorry agar aaj tak meri kisi baaton ka bura laga ho toh",
  "But you are important in my life❤️",
  "This complete love cycle is just for you, 😘",
  "my unconditional love will always for you💖",
  "Please take care of love who really loves you❤",
  "I'm binary in love; you're the one and only '1 in my life",
  "Thanks to God for helping us,ki hum logo ko milaya🙏",
  "You're the love of my life,",
  "I Love You So much❤️"
  " literally you are my happiness "
];
const ulEl = document.querySelector("ul");
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
let activeIndex = daynumber;
const rotate = -360 / febHolidays.length;
init();
function init() {
  febHolidays.forEach((holiday, idx) => {
    const liEl = document.createElement("li");
    liEl.style.setProperty("--day_idx", idx);
    liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
      }</time><span>${holiday}</span>`;
    ulEl.append(liEl);
  });
  ulEl.style.setProperty("--rotateDegrees", rotate);
  adjustDay(0);
}
function adjustDay(nr) {
  daynumber += nr;
  ulEl.style.setProperty("--currentDay", daynumber);
  const activeEl = document.querySelector("li.active");
  if (activeEl) activeEl.classList.remove("active");
  activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
  const newActiveEl = document.querySelector(
    `li:nth-child(${activeIndex + 1})`
  );
  document.body.style.backgroundColor = window.getComputedStyle(
    newActiveEl
  ).backgroundColor;
  newActiveEl.classList.add("active");
}
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      adjustDay(-1);
      break;
    case "ArrowDown":
      adjustDay(1);
      break;
    default:
      return;
  }
});
