import Component from '@ember/component';
import { service } from '@ember-decorators/service';
import { action } from '@ember-decorators/object';
import { get } from '@ember/object';

export default class LoginMenu extends Component {
  @service session

  @action
  authenticate() {
    let authData = {
      data: {
        type: 'tokens',
        attributes: '12345'
      }
    };

    get(this, 'session').authenticate('authenticator:jwt', authData);
  }

  @action
  invalidateSession() {
    get(this, 'session').invalidate();
  }
}
