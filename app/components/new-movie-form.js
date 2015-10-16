import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  actions: {
    submitNewMovie() {
      this.get('submitForm');
    }
  }
});
