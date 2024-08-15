function handleFormSubmit(event) {
  event.preventDefault();

  const amount = event.target.amount.value;
  const description = event.target.description.value;
  const type = event.target.type.value;

  const userDetails = {
       amount,
       description,
       type
  };

  let users = JSON.parse(localStorage.getItem('User Details'));

  if (!Array.isArray(users)) {
      users = [];
  }
  const editingIndex = localStorage.getItem('editingIndex');
  if (editingIndex !== null) {
      users[editingIndex] = userDetails;
      localStorage.removeItem('editingIndex');
  } else {
      users.push(userDetails);
  }
 
  localStorage.setItem('User Details', JSON.stringify(users));

  displayUsers();

}

function displayUsers() {

  let users = JSON.parse(localStorage.getItem('User Details'));

  if (!Array.isArray(users)) {
      users = [];
  }

  const userListElement = document.getElementById('user-list');
 
  userListElement.innerHTML = '';

  users.forEach((user, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `Amount: ${user.amount} Description: ${user.description} ${user.type}`;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete Expense';
      deleteButton.className = 'delete-btn';
      deleteButton.addEventListener('click', () => deleteUser(index));
      listItem.appendChild(deleteButton);

      userListElement.appendChild(listItem);

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit Expense';
      editButton.className = 'edit-btn';
      editButton.addEventListener('click', () => editUser(index));
      listItem.appendChild(editButton);

      userListElement.appendChild(listItem);
  });
}


function deleteUser(index) {

  let users = JSON.parse(localStorage.getItem('User Details'));

  if (Array.isArray(users)) {
      users.splice(index, 1);

      localStorage.setItem('User Details', JSON.stringify(users));

      displayUsers();
  }
}

function editUser(index) {

  let users = JSON.parse(localStorage.getItem('User Details'));

    if (Array.isArray(users)) {
        const user = users[index];
        document.getElementById('amount').value = user.amount;
        document.getElementById('description').value = user.description;
        document.getElementById('type').value = user.type;
        localStorage.setItem('editingIndex', index);
    }
}
window.onload = displayUsers;