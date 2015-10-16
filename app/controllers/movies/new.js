import Ember from 'ember';

export default Ember.Controller.extend({
  movie: {},
  actions: {
    updateProperties(name, value) {
      this.set('movie.' + name, value);
      console.log(this.get('movie'));
    },
    postNewMovie() {
      debugger
      $.ajax({
        url: 'http://localhost:3000/movies',
        method: 'POST',
        data: JSON.stringify(this.get('movie'))
      }).done(data => {console.log(data);})
    }
  }
});
