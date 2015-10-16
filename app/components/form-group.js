import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form-group'],
  type: 'text',
  placeholder: 'text',
  actions: {
    updateValue() {
      this.set('value', this.$().find('input').val());
      this.get('updateProperty')(this.get('name'), this.get('value'));
    }
  }
});
