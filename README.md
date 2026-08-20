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

        
