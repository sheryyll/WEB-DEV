let lightIndex = 0;

document.body.addEventListener("click", changeLight);

function changeLight() {
  const lights = {
    red: document.getElementById("red"),
    yellow: document.getElementById("yellow"),
    green: document.getElementById("green"),
  };

  const statusText = document.getElementById("status");

  // Remove all glows
  for (const light of Object.values(lights)) {
    light.classList.remove("glow-red", "glow-yellow", "glow-green");
  }

  // Remove old status classes
  statusText.classList.remove("status-stop", "status-wait", "status-go");

  // Add glow & update status
  if (lightIndex === 0) {
    lights.red.classList.add("glow-red");
    statusText.textContent = "STOP";
    statusText.classList.add("status-stop");
  } else if (lightIndex === 1) {
    lights.yellow.classList.add("glow-yellow");
    statusText.textContent = "WAIT";
    statusText.classList.add("status-wait");
  } else {
    lights.green.classList.add("glow-green");
    statusText.textContent = "GO";
    statusText.classList.add("status-go");
  }

  // Cycle to next light
  lightIndex = (lightIndex + 1) % 3;
}
