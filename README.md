# firstproject
my first project
<br>
<p>hello world</p>
<h1>hello</h1>


<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Procedural Dragon/Creature Simulation</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      overflow: hidden;
    }
    body {
      background-color: #e5e3d7; /* Canvas background light beige tint */
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
  </style>
</head>
<body>

  <canvas id="creatureCanvas"></canvas>

  <script>
    const canvas = document.getElementById('creatureCanvas');
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Mouse Position Track
    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    });

    // Spine Configuration
    const numJoints = 35;
    const jointSpacing = 16;
    const joints = [];

    for (let i = 0; i < numJoints; i++) {
      joints.push({
        x: mouse.x,
        y: mouse.y,
        angle: 0
      });
    }

    let waveOffset = 0;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      waveOffset += 0.08;

      // 1. Head follows Mouse smoothly
      const head = joints[0];
      head.x += (mouse.x - head.x) * 0.15;
      head.y += (mouse.y - head.y) * 0.15;

      // 2. Inverse Kinematics for Body Joints
      for (let i = 1; i < numJoints; i++) {
        const prev = joints[i - 1];
        const current = joints[i];

        const dx = prev.x - current.x;
        const dy = prev.y - current.y;
        current.angle = Math.atan2(dy, dx);

        current.x = prev.x - Math.cos(current.angle) * jointSpacing;
        current.y = prev.y - Math.sin(current.angle) * jointSpacing;
      }

      // 3. Draw Side Ribs / Wings / Feather Fins
      for (let i = 2; i < numJoints - 5; i += 2) {
        const j = joints[i];
        const perpAngle = j.angle + Math.PI / 2;
        
        // Dynamic wave movement for fins
        const wave = Math.sin(waveOffset - i * 0.2) * 15;
        const finLength = Math.sin((i / numJoints) * Math.PI) * 90 + 20;

        ctx.strokeStyle = '#1a1a1a';
        ctx.lineWidth = 2;

        // Both Sides Fins
        [-1, 1].forEach(side => {
          ctx.beginPath();
          ctx.moveTo(j.x, j.y);

          const controlX = j.x + Math.cos(perpAngle * side) * (finLength * 0.5) + Math.cos(j.angle) * wave;
          const controlY = j.y + Math.sin(perpAngle * side) * (finLength * 0.5) + Math.sin(j.angle) * wave;

          const endX = j.x + Math.cos(perpAngle * side) * finLength;
          const endY = j.y + Math.sin(perpAngle * side) * finLength;

          ctx.quadraticCurveTo(controlX, controlY, endX, endY);
          ctx.stroke();
        });
      }

      // 4. Draw Central Spine & Segment Shells
      for (let i = numJoints - 1; i >= 0; i--) {
        const j = joints[i];
        const size = Math.sin((i / numJoints) * Math.PI) * 14 + 3;

        ctx.save();
        ctx.translate(j.x, j.y);
        ctx.rotate(j.angle);

        // Black Scale/Segment Shell
        ctx.fillStyle = '#111111';
        ctx.beginPath();
        ctx.arc(0, 0, size, 0, Math.PI * 2);
        ctx.fill();

        // White inner detail for spine texture
        if (i % 2 === 0) {
          ctx.fillStyle = '#e5e3d7';
          ctx.beginPath();
          ctx.arc(-size * 0.3, 0, size * 0.4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      // 5. Draw Head
      const headAngle = joints[0].angle;
      ctx.save();
      ctx.translate(head.x, head.y);
      ctx.rotate(headAngle);

      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.ellipse(5, 0, 18, 12, 0, 0, Math.PI * 2);
      ctx.fill();

      // White Eye
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(6, -4, 3, 0, Math.PI * 2);
      ctx.arc(6, 4, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      requestAnimationFrame(animate);
    }

    animate();
  </script>
</body>
</html>

/////////////

/* style.css */

body {
    font-family: Arial, sans-serif;
    background: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
}

.card {
    width: 300px;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px #ccc;
}

.card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.card-content {
    padding: 20px;
}

.card h2 {
    margin: 0 0 10px;
}

.card p {
    color: #666;
}

.card button {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
}

//////

// script.js

// 1. Object
const product = {
    title: "Mountain Explorer",
    price: 999,
    description: "Explore beautiful mountains.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600"
};


// 2. Function
function createCard(data) {

    const container = document.getElementById("card-container");

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <img src="${data.image}" alt="Product">

        <div class="card-content">

            <h2>${data.title}</h2>

            <p>${data.description}</p>

            <h3>₹${data.price}</h3>

            <button onclick="buyProduct()">
                Buy Now
            </button>

        </div>
    `;

    container.appendChild(card);
}


// 3. Button Function
function buyProduct() {
    alert("Product Added!");
}


// 4. Function call
createCard(product);

#####first code  ...... 
<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Creature Product Showcase</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    body {
      background: #0d0f12; /* Dark Futuristic Background */
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* Interactive Background Canvas */
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    /* Container Overlay */
    .app-container {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      pointer-events: none;
    }

    .app-header {
      color: #00f0ff;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-size: 24px;
      text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
      pointer-events: auto;
    }

    /* Glassmorphism Product Card */
    .product-card {
      width: 320px;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
      pointer-events: auto;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 40px 0 rgba(0, 240, 255, 0.25);
    }

    .card-img-wrapper {
      width: 100%;
      height: 200px;
      overflow: hidden;
      position: relative;
    }

    .card-img-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .product-card:hover .card-img-wrapper img {
      transform: scale(1.08);
    }

    .card-content {
      padding: 20px;
      color: #ffffff;
    }

    .card-title {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 8px;
      color: #ffffff;
    }

    .card-desc {
      font-size: 14px;
      color: #b0b8c4;
      margin-bottom: 15px;
      line-height: 1.4;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
    }

    .card-price {
      font-size: 22px;
      font-weight: bold;
      color: #00f0ff;
    }

    .btn-buy {
      background: linear-gradient(135deg, #00f0ff 0%, #7000ff 100%);
      color: #ffffff;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.2s, transform 0.1s;
    }

    .btn-buy:hover {
      opacity: 0.9;
    }

    .btn-buy:active {
      transform: scale(0.96);
    }

    /* Controls for Changing Product */
    .card-nav {
      display: flex;
      gap: 15px;
      margin-top: 10px;
      pointer-events: auto;
    }

    .nav-btn {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      cursor: pointer;
      backdrop-filter: blur(5px);
      transition: background 0.3s;
    }

    .nav-btn:hover {
      background: rgba(0, 240, 255, 0.3);
    }
  </style>
</head>
<body>

  <!-- Background Animated Canvas -->
  <canvas id="creatureCanvas"></canvas>

  <!-- Foreground Interface -->
  <div class="app-container">
    <div class="app-header">Product Collection</div>
    
    <div id="card-container"></div>

    <div class="card-nav">
      <button class="nav-btn" onclick="prevProduct()">◀ Prev</button>
      <button class="nav-btn" onclick="nextProduct()">Next ▶</button>
    </div>
  </div>

  <script>
    /* ===================================================
       1. PROCEDURAL CREATURE (DRAGON) ANIMATION
       =================================================== */
    const canvas = document.getElementById('creatureCanvas');
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    });

    const numJoints = 40;
    const jointSpacing = 14;
    const joints = [];

    for (let i = 0; i < numJoints; i++) {
      joints.push({ x: mouse.x, y: mouse.y, angle: 0 });
    }

    let waveOffset = 0;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      waveOffset += 0.06;

      // 1. Head Movement
      const head = joints[0];
      head.x += (mouse.x - head.x) * 0.12;
      head.y += (mouse.y - head.y) * 0.12;

      // 2. Inverse Kinematics
      for (let i = 1; i < numJoints; i++) {
        const prev = joints[i - 1];
        const current = joints[i];

        const dx = prev.x - current.x;
        const dy = prev.y - current.y;
        current.angle = Math.atan2(dy, dx);

        current.x = prev.x - Math.cos(current.angle) * jointSpacing;
        current.y = prev.y - Math.sin(current.angle) * jointSpacing;
      }

      // 3. Draw Fins (Glowing Cyan Lines)
      for (let i = 2; i < numJoints - 6; i += 2) {
        const j = joints[i];
        const perpAngle = j.angle + Math.PI / 2;
        const wave = Math.sin(waveOffset - i * 0.25) * 18;
        const finLength = Math.sin((i / numJoints) * Math.PI) * 100 + 15;

        ctx.strokeStyle = 'rgba(0, 240, 255, 0.6)';
        ctx.lineWidth = 2;

        [-1, 1].forEach(side => {
          ctx.beginPath();
          ctx.moveTo(j.x, j.y);

          const controlX = j.x + Math.cos(perpAngle * side) * (finLength * 0.5) + Math.cos(j.angle) * wave;
          const controlY = j.y + Math.sin(perpAngle * side) * (finLength * 0.5) + Math.sin(j.angle) * wave;

          const endX = j.x + Math.cos(perpAngle * side) * finLength;
          const endY = j.y + Math.sin(perpAngle * side) * finLength;

          ctx.quadraticCurveTo(controlX, controlY, endX, endY);
          ctx.stroke();
        });
      }

      // 4. Draw Spine/Body Joints
      for (let i = numJoints - 1; i >= 0; i--) {
        const j = joints[i];
        const size = Math.sin((i / numJoints) * Math.PI) * 12 + 3;

        ctx.save();
        ctx.translate(j.x, j.y);
        ctx.rotate(j.angle);

        ctx.fillStyle = '#0a1118';
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.arc(0, 0, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.restore();
      }

      // 5. Draw Head
      const headAngle = joints[0].angle;
      ctx.save();
      ctx.translate(head.x, head.y);
      ctx.rotate(headAngle);

      ctx.fillStyle = '#00f0ff';
      ctx.beginPath();
      ctx.ellipse(6, 0, 16, 10, 0, 0, Math.PI * 2);
      ctx.fill();

      // Glowing Eyes
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(8, -4, 2.5, 0, Math.PI * 2);
      ctx.arc(8, 4, 2.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      requestAnimationFrame(animate);
    }

    animate();

    /* ===================================================
       2. DYNAMIC PRODUCT CARD CONTROLLER
       =================================================== */
    const products = [
      {
        title: "Mountain Explorer",
        price: "₹999",
        description: "Conquer peak altitudes with durable adventure gear designed for high mountain trails.",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600"
      },
      {
        title: "Cyberpunk Visor",
        price: "₹1,499",
        description: "Futuristic HUD display with real-time navigation and creature tracking.",
        image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600"
      },
      {
        title: "Forest Expedition",
        price: "₹1,250",
        description: "Lightweight weather-resistant equipment tailored for deep wilderness travel.",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600"
      }
    ];

    let currentIndex = 0;

    function renderCard(index) {
      const container = document.getElementById("card-container");
      const data = products[index];

      container.innerHTML = `
        <div class="product-card">
          <div class="card-img-wrapper">
            <img src="${data.image}" alt="${data.title}">
          </div>
          <div class="card-content">
            <h2 class="card-title">${data.title}</h2>
            <p class="card-desc">${data.description}</p>
            <div class="card-footer">
              <span class="card-price">${data.price}</span>
              <button class="btn-buy" onclick="buyProduct('${data.title}')">Buy Now</button>
            </div>
          </div>
        </div>
      `;
    }

    function nextProduct() {
      currentIndex = (currentIndex + 1) % products.length;
      renderCard(currentIndex);
    }

    function prevProduct() {
      currentIndex = (currentIndex - 1 + products.length) % products.length;
      renderCard(currentIndex);
    }

    function buyProduct(name) {
      alert(`🎉 Thank you! ${name} has been added to your cart.`);
    }

    // Initial Render
    renderCard(currentIndex);
  </script>
</body>
</html>

