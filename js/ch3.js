$('#ch3form').submit(function () {
  var standing = $('input[name="standing"]');
  var fruit = $('input[name="fruit"]');

  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i].checked) {
      for (let n = 0; n < standing.length; n++) {
        if (standing[n].checked) {
          return true
        }
      } alert("You must pick a standing!"); return false;

    }
  } alert("You must pick a fruit!"); return false;

})


