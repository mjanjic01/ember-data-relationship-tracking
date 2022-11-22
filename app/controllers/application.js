import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @inject('store') store;

  @tracked mainModel;

  constructor(...args) {
    super(...args);

    this.mainModel = this.store.findRecord('main', '1');
  }

  get observed() {
    console.log('rerendered');
    return this.mainModel.get('items');
  }

  @action
  pushPayload() {
    this.store.pushPayload({
      data: [
        {
          id: '1',
          type: 'main',
          attributes: {},
        },
      ],
      included: [
        {
          type: 'item',
          id: '1',
          attributes: {
            name: 'Item 1',
          },
          relationships: {
            main: {
              data: {
                id: '1',
                type: 'main',
              },
            },
          },
        },
        {
          type: 'item',
          id: '2',
          attributes: {
            name: 'Item 2',
          },
          relationships: {
            main: {
              data: {
                id: '1',
                type: 'main',
              },
            },
          },
        },
        {
          type: 'item',
          id: '3',
          attributes: {
            name: 'Item 3',
          },
          relationships: {
            main: {
              data: {
                id: '1',
                type: 'main',
              },
            },
          },
        },
      ],
    });
  }
}
