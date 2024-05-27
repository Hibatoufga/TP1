// Sélectionner l'élément HTML où la liste sera affichée
const list = document.getElementById("toDoList");

// Fonction pour ajouter une tâche à la liste
function addTask() {
  // Récupérer la valeur de l'input
  const taskInput = document.getElementById("taskInput").value;

  // Créer un nouvel élément de liste
  const listItem = document.createElement("li");

  // Ajouter la valeur de l'input au texte de l'élément de liste
  listItem.innerText = taskInput;

  // Ajouter la nouvelle tâche à la liste
  list.appendChild(listItem);

  // Effacer le contenu de l'input après avoir ajouté la tâche
  document.getElementById("taskInput").value = "";
}

// Associer la fonction addTask au bouton "Ajouter"
document.getElementById("addButton").addEventListener("click", addTask);