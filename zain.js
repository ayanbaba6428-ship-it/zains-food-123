const modal = document.getElementById("orderModal");
const selectedItemInput = document.getElementById("selectedItem");
const closeBtn = document.querySelector(".close-btn");
const orderButtons = document.querySelectorAll(".item-order-btn");

// --- ORDER MODAL ---
orderButtons.forEach(btn => {
  btn.addEventListener("click", function(){
    let card = this.closest(".food-card, .deal-card");
    let title = card.querySelector("h3").innerText;
    selectedItemInput.value = title;
    modal.classList.add("show");
  });
});
closeBtn.onclick = () => modal.classList.remove("show");
window.onclick = (e) => { if(e.target == modal){ modal.classList.remove("show"); } };
document.getElementById("deliveryForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert(selectedItemInput.value + " ka order receive ho gaya! Cash on Delivery");
  modal.classList.remove("show");
});

// --- FILTER LOGIC - HOME / MENU / DEALS ---
const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const dealsBtn = document.getElementById("dealsBtn");
const menuSection = document.getElementById("menu");
const dealsSection = document.getElementById("deals");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");

const chickenGroup = document.querySelector('[data-category="chicken"]');
const otherGroup = document.querySelector('[data-category="other"]');

function showOnlyChicken(){
  menuSection.style.display = "block";
  chickenGroup.classList.remove("hidden");
  otherGroup.classList.add("hidden");
  dealsSection.style.display = "none";
  document.getElementById("menuTitle").innerText = "Chicken Burgers Only";
  window.scrollTo({top: menuSection.offsetTop - 80, behavior: "smooth"});
}

function showOtherMenus(){
  menuSection.style.display = "block";
  chickenGroup.classList.add("hidden");
  otherGroup.classList.remove("hidden");
  dealsSection.style.display = "none";
  document.getElementById("menuTitle").innerText = "Our Menu - Beef, Fries, Fried Chicken & More";
  window.scrollTo({top: menuSection.offsetTop - 80, behavior: "smooth"});
}

function showDealsOnly(){
  menuSection.style.display = "none";
  dealsSection.style.display = "block";
  window.scrollTo({top: dealsSection.offsetTop - 80, behavior: "smooth"});
}

// Home pe click -> sirf Chicken Burger
homeBtn.addEventListener("click", function(e){
  e.preventDefault();
  showOnlyChicken();
});

// Menu pe click -> baaki sab
menuBtn.addEventListener("click", function(e){
  e.preventDefault();
  showOtherMenus();
});

// Deals pe click -> sirf deals
dealsBtn.addEventListener("click", function(e){
  e.preventDefault();
  showDealsOnly();
});

// Hero wala Order Now button -> Menu dikhaye
document.getElementById("heroOrderBtn").addEventListener("click", function(e){
  e.preventDefault();
  showOtherMenus();
});

// First time page load pe Home wala view (sirf chicken)
window.addEventListener("load", () => {
  showOnlyChicken();
});