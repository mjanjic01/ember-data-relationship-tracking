import Model, { hasMany } from '@ember-data/model';

export default class MainModel extends Model {
  @hasMany('item', { async: false }) items;
}
