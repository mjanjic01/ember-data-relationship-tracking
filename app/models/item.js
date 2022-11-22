import Model, { attr, belongsTo } from '@ember-data/model';

export default class ItemModel extends Model {
  @attr('string') name;

  @belongsTo('main', { async: false }) main;
}
