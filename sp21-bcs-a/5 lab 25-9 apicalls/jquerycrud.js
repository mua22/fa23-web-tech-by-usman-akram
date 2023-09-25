function fetchData() {
  console.log("Fetching Start....");
  $.ajax({
    url: "https://usman-fake-api.herokuapp.com/api/recipes",
    success: responseArrived,
  });
  console.log("Request Sent ...");
}
function responseArrived(response) {
  console.log("Request Response Received ...");
  console.log(response);
  $("#results").empty();
  for (let i = 0; i < response.length; i++) {
    let rec = response[i];
    // $("#results").append("<h1>" + rec.title + "</h1>");
    $("#results").append(`<div><h1>${rec.title}</h1>
    <button class="delBtn" data-id="${rec._id}">Delete</button>
    <p>${rec.body}</p>
    </div>`);
  }
}
$(function () {
  $("#fetchData").on("click", fetchData);
  $("#results").on("click", ".delBtn", function () {
    // alert("Del Btn CLicked");
    // $(this) will capture the tag which actually triggered the event

    let id = $(this).attr("data-id");
    console.log(id);
    deleteRec(id);
  });
});

function deleteRec(id) {
  $.ajax({
    url: "https://usman-fake-api.herokuapp.com/api/recipes/" + id,
    method: "DELETE",
    success: fetchData,
  });
}
