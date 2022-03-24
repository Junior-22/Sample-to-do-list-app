function newItem() {

  // Get element & value
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  // if input value is empty
  if ($("#input").val() === "") {
    alert("info required");
    return;
  }

  // Add item to List with Add button
  $("#list").append(li);

  // Cross out an item upon a click
  function crossOut() {
    li.toggleClass("strike");
  }
  li.on("dblclick", crossOut);

  // Add delete button
  let deleteButton = $("<crossOutButton></crossOutButton>");
  deleteButton.append(document.createTextNode("X"));
  li.append(deleteButton);

  // Delete items using delete button
  function deleteItems() {
    li.addClass("delete");
  }
  deleteButton.on("click", deleteItems);

  // Change order of items on the list
  $("#list").sortable();


};
