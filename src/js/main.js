// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

var $ = require("./lib/qsa");

require("component-responsive-frame/child");

var buttons = $("input");
var bars = $(".bars");
var notes = $(".note");

var showStatInfo = function(y) {
  var stat = this.id;

  bars.forEach(e => e.classList.add("hidden"));

  var visibleBars = $(`.bars[data-type="${stat}"]`);
  visibleBars.forEach(e => e.classList.remove("hidden"));

  notes.forEach(e => e.classList.add("hidden"));
  var visibleNotes = $(`.note[data-type="${stat}"]`);
  visibleNotes.forEach(e => e.classList.remove("hidden"));

};


var onDefault = function(d) {
  bars.forEach(x => x.classList.add("hidden"));
  notes.forEach(x => x.classList.add("hidden"));

  var visibleRow = $(`.bars[data-type="ypg"]`);
  visibleRow.forEach(e => e.classList.remove("hidden")); 


  var visibleNote = $(`.note[data-type="ypg"]`);
  visibleNote.forEach(e => e.classList.remove("hidden"));

};

buttons.forEach(e => e.addEventListener("click", showStatInfo));

onDefault();