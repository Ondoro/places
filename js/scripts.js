//business logic
function Place(place, location, landmark, timeOfYear, notes) {
  this.placeName = place;
  this.locationName = location;
  this.landmarkName = landmark;
  this.timeOfTheYear = timeOfYear;
  this.notesMade = notes;
}

Place.prototype.placeDetails = function() {
  return this.placeName;

}

//userInterface logic

$(document).ready(function() {
  $("form#places").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#place").val();
    var inputtedLocation = $("input#location").val();
    var inputtedLandmark = $("input#landmark").val();
    var inputtedTime = $("input#timeOfYear").val();
    var inputtedNotes = $("input#notes").val();

    var newPlace = new Place(inputtedPlace, inputtedLocation, inputtedLandmark, inputtedTime, inputtedNotes);

    $("ul#maeneo").append("<li><span class='visits'>" + newPlace.placeDetails() + "</span></li>");
    $(".visits").last().click(function() {
      $("#show-maeneo").show();
      $("#show-maeneo h2").text(newPlace.placeName);
      $(".destination").text(newPlace.placeName);
      $(".mahali").text(newPlace.locationName);
      $(".mark").text(newPlace.landmarkName);
      $(".saa").text(newPlace.timeOfTheYear);
      $(".nakala").text(newPlace.notesMade);

    });


    $("input#place").val("");
    $("input#location").val("");
    $("input#landmark").val("");
    $("input#timeOfYear").val("");
    $("input#notes").val("");


  });
});
// //business logic
// function Contact(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }
//
// Contact.prototype.fullName=function(){
//   return this.firstName + " " + this.lastName;
// }
// $(document).ready(function() {
//   $("form#new-contact").submit(function(event) {
//     event.preventDefault();
//
//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();
//
//
//     var newContact = new Contact(inputtedFirstName, inputtedLastName);
//
//
//      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
//
//     $(".contact").last().click(function() {
//       $("#show-contact").show();
//       $("#show-contact h2").text(newContact.firstName);
//       $(".first-name").text(newContact.firstName);
//       $(".last-name").text(newContact.lastName);
//     });
//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//
//   });
// });
