import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['panel', 'panel-default'],
  starList: Ember.computed('movie.stars', function() {
    let stars = this.get('movie.stars');

    return stars.join(', ');
  })
});
