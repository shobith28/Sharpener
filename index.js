function handleFormSubmit(event) {
    event.preventDefault();
  
    const vegDetails = {
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
    };
  
    axios
      .post(
        "https://crudcrud.com/api/4bae3be4a80f4623acb2ff9eeddc722d/vege",
        vegDetails
      )
      .then((response) => {
        displayUserOnScreen(response.data);
      })
      .catch((error) => console.log(error));
  
    // Clear input fields after submission
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
  }
  
  function displayUserOnScreen(vegDetails) {
    const vegItem = document.createElement("li");
    vegItem.appendChild(
      document.createTextNode(
        `${vegDetails.name} RS: ${vegDetails.price}  ${vegDetails.quantity} KG`
      )
    );

    const buyVal=document.createElement("input")
    buyVal.setAttribute("id","val")
    vegItem.appendChild(buyVal)
  
    const buyBtn = document.createElement("button");
    buyBtn.appendChild(document.createTextNode("Buy"));
    vegItem.appendChild(buyBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    vegItem.appendChild(deleteBtn);
  
    const vegList = document.querySelector("ul");
    vegList.appendChild(vegItem);
  
    deleteBtn.addEventListener("click", function () {
      axios
        .delete(`https://crudcrud.com/api/4bae3be4a80f4623acb2ff9eeddc722d/vege/${vegDetails._id}`)
        .then(() => {
          vegList.removeChild(vegItem);
        })
        .catch((error) => console.log(error));
    });
  
    buyBtn.addEventListener("click", function () {

        const buyAmount = parseInt(buyVal.value);
        if (isNaN(buyAmount) || buyAmount <= 0 || buyAmount > vegDetails.quantity) {
        alert("Please enter a valid quantity to buy.");
        return;
      }

      const newQuantity = vegDetails.quantity - buyAmount;
        axios
        .put(`https://crudcrud.com/api/3265083775fc42bd912ec5fad3183501/vege/${vegDetails._id}`, {
            name: vegDetails.name,
            price: vegDetails.price,
            quantity: newQuantity
        })
        .then(() => {
          vegDetails.quantity = newQuantity;
          vegItem.firstChild.nodeValue = `${vegDetails.name} RS: ${vegDetails.price}  ${newQuantity} KG`;
          buyVal.setAttribute("max", newQuantity);
          if (newQuantity === 0) {
            buyBtn.disabled = true;
            buyVal.disabled = true;
          }
        })
        .catch((error) => {
            console.error("Error updating quantity:", error);
            if (error.response) {
              console.error("Response data:", error.response.data);
              console.error("Response status:", error.response.status);
              console.error("Response headers:", error.response.headers);
            }
          });
    });
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    axios
      .get("https://crudcrud.com/api/4bae3be4a80f4623acb2ff9eeddc722d/vege")
      .then((response) => {
        response.data.forEach((user) => displayUserOnScreen(user));
      })
      .catch((error) => console.log(error));
  });
  
