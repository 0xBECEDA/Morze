var catalog =[ "@"];

function find_in_catalog(param) {
  if (-1 === catalog.indexOf(param)) {
    return false;
  } else {
    return true;
  }
}

function search() {
  // "si" is object of type "HTMLInputElement"
  // OR null (if not found by id)
  var si = window.document.getElementById("search_input");
  // alert(si);
  if (!si) {
    alert("bad search_form_id");
  } else {
    // Get contents of input
    var si_contents = si.value;
    // Check empty string
    if (!si_contents) {
      alert("error: empty search string");
    } else {
      // There is non empty string
      if (find_in_catalog(si_contents)) {
        alert("book exists");
      } else {
        alert("book DOES NOT exist");
      }
    }
  }
}
