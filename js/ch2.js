// $('#useBilling').change(function () {
//   var home = $('#home');
//   var billing = $('#billing');

//   if (this.checked) {
//     console.log("Same address");
//     home.val(billing.val());
//     home.attr("disabled", true);
//   } else {
//     console.log("Different address");
//     home.val("");
//     home.attr("disabled", false);
//   }
// })

$("#useBilling").click(function () {
  if (this.checked) {
    $("#home").val($("#billing").val());
    $("#home").prop("disabled", true);
  }
  else {
    $("#home").val("");
    $("#home").prop("disabled", false);
  }
});