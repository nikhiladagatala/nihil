let personas = JSON.parse(localStorage.getItem("personas")) || [];

function createPersona() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let profession = document.getElementById("profession").value;
  let personality = document.getElementById("personality").value;

  if (!name || !age || !profession || !personality) {
    alert("Please fill all fields");
    return;
  }

  let avatar = `https://api.dicebear.com/7.x/adventurer/svg?seed=${name}`;

  let persona = { name, age, profession, personality, avatar };

  personas.push(persona);
  localStorage.setItem("personas", JSON.stringify(personas));

  displayPersonas();
  clearForm();
}

function displayPersonas() {
  let list = document.getElementById("personaList");
  list.innerHTML = "";

  personas.forEach((p, index) => {
    list.innerHTML += `
      <div class="persona-card">
        <img src="${p.avatar}">
        <h3>${p.name}</h3>
        <p><strong>Age:</strong> ${p.age}</p>
        <p><strong>Profession:</strong> ${p.profession}</p>
        <p><strong>Personality:</strong> ${p.personality}</p>
        <button class="delete-btn" onclick="deletePersona(${index})">Delete</button>
      </div>
    `;
  });
}

function deletePersona(index) {
  personas.splice(index, 1);
  localStorage.setItem("personas", JSON.stringify(personas));
  displayPersonas();
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("personality").value = "";
}

// Load on start
displayPersonas();
