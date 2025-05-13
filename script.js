// Event Handling 
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("You clicked the button!");
    document.getElementById("clickBtn").textContent = "Clicked!";
  });
  
  document.getElementById("hoverBox").addEventListener("mouseover", () => {
    document.getElementById("hoverBox").style.backgroundColor = "#fdcb6e";
  });
  document.getElementById("hoverBox").addEventListener("mouseout", () => {
    document.getElementById("hoverBox").style.backgroundColor = "";
  });
  
  document.addEventListener("keydown", (e) => {
    document.getElementById("keyOutput").textContent = `Key pressed: ${e.key}`;
  });
  
  document.getElementById("secretArea").addEventListener("dblclick", () => {
    alert(" Secret unlocked!");
    document.getElementById("secretArea").textContent = "You found the Easter egg!";
  });
  
  // Interactive Elements 
  document.getElementById("colorBtn").addEventListener("click", () => {
    document.getElementById("colorBtn").style.backgroundColor = "#74b9ff";
    document.getElementById("colorBtn").textContent = "Color Changed!";
  });
  
  const images = [
    "https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2896135/pexels-photo-2896135.jpeg?auto=compress&cs=tinysrgb&w=400"
  ];
  let current = 0;
  function nextImage() {
    current = (current + 1) % images.length;
    document.getElementById("gallery").src = images[current];
  }
  
  function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.add("hidden"));
    document.getElementById(tabId).classList.remove("hidden");
    document.getElementById(tabId).classList.add("animated");
  }
  
  // Form Validation 
  document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const feedback = document.getElementById("formFeedback");
  
    const emailPattern = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(email)) {
      feedback.textContent = "Invalid format.";
      return;
    }
  
    if (pass.length < 8) {
      feedback.textContent = "Password must be more than 8 characters.";
      return;
    }
  
    feedback.textContent = " Form submission successful!";
  });
  
  // Real-time password feedback
  document.getElementById("password").addEventListener("input", function(e) {
    const pass = e.target.value;
    const feedback = document.getElementById("formFeedback");
    if (pass.length < 8) {
      feedback.textContent = " too short.";
    } else {
      feedback.textContent = "great!";
    }
  });
  