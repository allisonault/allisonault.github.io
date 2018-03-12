
// When user clicks openDropdown button
  // dropdownMenu slideToggles down

$("#openDropdown").on('click', function() {
  $("#dropdownMenu").removeClass('hidden');
  $("#dropdownMenu").slideToggle(300);
});

// When user clicks on list item with id question1
  // slideDown answer1
  // slideUp answer2
  // remove the class active from all list items
  // add class actove to question1

$("#question1").on('click', function() {
  $('answer2').removeClass('hidden');
  $('#answer1').slideDown(300);
  $('#answer2').slideUp(300);
  $('li').removeClass("active");
  $('#question1').addClass("active");
})

// When user clicks on list item with id question2
  // slideUp answer1
  // slideDown answer2
  // remove the class active from all list items
  // add class actove to questions

  $("#question2").on('click', function() {
    $('#answer1').slideUp(300);
    $('#answer2').slideDown(300);
    $('li').removeClass("active");
    $('#question2').addClass("active");
  })

// When user clicks on button with class showYellowCircles
  // show all of the circles with the class yellow
  // hide all of the circles with the class blue

$('#showYellowCircles').on('click', function() {
  $('.yellow').show();
  $('.blue').hide();
});

// When user clicks on button with class showBlueCircles
  // show all of the circles with the class blue
  // hide all of the circles with the class yellow

$('#showBlueCircles').on('click', function() {
  $('.blue').show();
  $('.yellow').hide();
});
