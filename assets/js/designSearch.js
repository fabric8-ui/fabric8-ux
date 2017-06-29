$(document).ready(function () {
  $('#design').click(function() {
    $("#designFilter").removeClass('hide');
    $("#designFilter").addClass('show');
    $("#designerFilter").removeClass('show');
    $("#designerFilter").addClass('hide');
  });
  $('#designer').click(function() {
    $("#designerFilter").addClass('show');
    $("#designerFilter").removeClass('hide');
    $("#designFilter").addClass('hide');
    $("#designFilter").removeClass('show');
  });
});

function titleFunction() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("designFilter");
  filter = input.value.toUpperCase();
  table = document.getElementById("designTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function designerFunction() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("designerFilter");
  filter = input.value.toUpperCase();
  table = document.getElementById("designTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
