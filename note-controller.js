
function changeText() {
  elem = document.getElementsByClassName('app')[0]
  elem.innerHTML = 'Goodbye';
}

(function(exports) {

  function NoteController(noteList) {
    this.noteList = noteList;
  }

  NoteController.prototype.addNotes = function() {
    this.noteList.addNote("Favourite drink: seltzer")
  }

  NoteController.prototype.makeView = function() {
    this.noteListView = new ListView(this.noteList);
  }

  NoteController.prototype.writeHtml = function() {
    elem = document.getElementsByClassName('app')[0];
    elem.innerHTML = this.noteListView.list();
  }

  exports.NoteController = NoteController;
})(this);
