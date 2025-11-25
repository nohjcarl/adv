const photos = [
  { src: "photos/worldtech/worldtech1.jpg", experience: "WORLDTECH INFORMATION SOLUTIONS,INC." },
  { src: "photos/worldtech/worldtech2.jpg", experience: "WORLDTECH INFORMATION SOLUTIONS,INC." },
  { src: "photos/worldtech/worldtech3.jpg", experience: "WORLDTECH INFORMATION SOLUTIONS,INC." },
  { src: "photos/rivan/rivan1.jpg", experience: "RIVAN IT CEBU" },
  { src: "photos/rivan/rivan2.jpg", experience: "RIVAN IT CEBU" },
  { src: "photos/rivan/rivan3.jpg", experience: "RIVAN IT CEBU" },
  { src: "photos/rivan/rivan4.jpg", experience: "RIVAN IT CEBU" },
  { src: "photos/rivan/rivan5.jpg", experience: "RIVAN IT CEBU" },
  { src: "photos/rivan/rivan6.jpg", experience: "RIVAN IT CEBU" },
  { src: "photos/rivan/rivan7.jpg", experience: "RIVAN IT CEBU" },
  { src: "photos/rivan/rivan8.jpg", experience: "RIVAN IT CEBU" },
  { src: "photos/rivan/rivan9.jpg", experience: "RIVAN IT CEBU" },
  { src: "photos/rivan/rivan10.jpg", experience: "RIVAN IT CEBU" },
  { src: "photos/rivan/rivan11.jpg", experience: "RIVAN IT CEBU" },
   { src: "photos/codechum/codechum1.jpg", experience: "CODECHUM" },
   { src: "photos/codechum/codechum2.jpg", experience: "CODECHUM" },
   { src: "photos/codechum/codechum3.jpg", experience: "CODECHUM" },
   { src: "photos/mata/mata1.jpg", experience: "MATA TECHNOLOGIES,INC." },
   { src: "photos/mata/mata2.jpg", experience: "MATA TECHNOLOGIES,INC." },
   { src: "photos/mata/mata3.jpg", experience: "MATA TECHNOLOGIES,INC." },
   { src: "photos/mata/mata4.jpg", experience: "MATA TECHNOLOGIES,INC." },
   { src: "photos/mata/mata5.jpg", experience: "MATA TECHNOLOGIES,INC." },
   { src: "photos/mata/mata6.jpg", experience: "MATA TECHNOLOGIES,INC." },
   { src: "photos/tarsier/tarsier1.jpg", experience: "T.A.R.S.I.E.R 117" },
   { src: "photos/tarsier/tarsier2.jpg", experience: "T.A.R.S.I.E.R 117" },
   { src: "photos/tarsier/tarsier3.jpg", experience: "T.A.R.S.I.E.R 117" },
   { src: "photos/tarsier/tarsier4.jpg", experience: "T.A.R.S.I.E.R 117" },
   { src: "photos/tarsier/tarsier5.jpg", experience: "T.A.R.S.I.E.R 117" },
   { src: "photos/tarsier/tarsier6.jpg", experience: "T.A.R.S.I.E.R 117" },
   { src: "photos/sidetrip/sidetrip1.jpg", experience: "lapu lapu park" },
   { src: "photos/sidetrip/sidetrip2.jpg", experience: "lapu lapu park" },
   { src: "photos/sidetrip/sidetrip3.jpg", experience: "lapu lapu park" },
   { src: "photos/sidetrip/sidetrip4.jpg", experience: "lapu lapu park" },
   { src: "photos/sidetrip/sidetrip5.jpg", experience: "lapu lapu park" },
  
   { src: "photos/sidetrip/sidetrip8.jpg", experience: "davao international airport" },
   { src: "photos/sidetrip/sidetrip9.jpg", experience: "my first plane flight going to cebu" },
   { src: "photos/sidetrip/sidetrip10.jpg", experience: "we arrived at mactan airport" },
   { src: "photos/sidetrip/sidetrip11.jpg", experience: "we arrived at mactan airport" },
   { src: "photos/sidetrip/sidetrip12.jpg", experience: "we arrived at mactan airport" },
   { src: "photos/sidetrip/sidetrip13.jpg", experience: "our bus going through CCLEX" },
   { src: "photos/sidetrip/sidetrip14.jpg", experience: "our bus going through CCLEX" },
   { src: "photos/sidetrip/sidetrip15.jpg", experience: "CCLEX" },
   { src: "photos/sidetrip/sidetrip16.jpg", experience: "SM sea side" },
   { src: "photos/sidetrip/sidetrip17.jpg", experience: "korean restaurant so yummy" },
   { src: "photos/sidetrip/sidetrip18.jpg", experience: "magellan's cross" },
   { src: "photos/sidetrip/sidetrip19.jpg", experience: "magellan's cross" },
   { src: "photos/sidetrip/sidetrip20.jpg", experience: "lighting candle at sto nino church" },
   { src: "photos/sidetrip/sidetrip21.jpg", experience: "sto nino church" },
   { src: "photos/sidetrip/sidetrip22.jpg", experience: "sto nino church" },
   { src: "photos/sidetrip/sidetrip23.jpg", experience: "church relics" },
   { src: "photos/sidetrip/sidetrip24.jpg", experience: "church relics" },
   { src: "photos/sidetrip/sidetrip25.jpg", experience: "magellan tribute" },
   { src: "photos/sidetrip/sidetrip26.jpg", experience: "baclayon church" },
   { src: "photos/sidetrip/sidetrip27.jpg", experience: "bohol sea view" },
   { src: "photos/sidetrip/sidetrip28.jpg", experience: "miracle church bohol" },
   { src: "photos/sidetrip/sidetrip29.jpg", experience: "we arrive at tagbiliran airport" },
   { src: "photos/sidetrip/sidetrip30.jpg", experience: "quick stop manila meal" },
   { src: "photos/sidetrip/sidetrip31.jpg", experience: "quick stop manila meal" },
   { src: "photos/sidetrip/sidetrip32.jpg", experience: "airplane view" },
   { src: "photos/sidetrip/sidetrip33.jpg", experience: "magellan's cross" },
   { src: "photos/sidetrip/sidetrip34.jpg", experience: "Group picture at sto nino church" },
   { src: "photos/sidetrip/sidetrip35.jpg", experience: "Last Group Picture at Bai hotel" },
   

];

const gallery = document.getElementById("gallery");

photos.forEach(photo => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${photo.src}" alt="Tour photo">
    <p>${photo.experience}</p>
  `;
  gallery.appendChild(card);
});

// --- Zoom functionality ---
const modal = document.getElementById("zoomModal");
const zoomedImg = document.getElementById("zoomedImg");
const caption = document.getElementById("zoomCaption");
const closeBtn = document.querySelector(".close");

document.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG" && e.target.closest(".card")) {
    modal.style.display = "flex";
    zoomedImg.src = e.target.src;
    caption.textContent = e.target.nextElementSibling.textContent;
  }
});

closeBtn.addEventListener("click", () => modal.style.display = "none");

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
