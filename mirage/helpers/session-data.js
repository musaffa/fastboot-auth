import jwt from 'jwt-simple';
import { assign } from '@ember/polyfills';

export default function(payload) {
  let days = 30;
  let expiresIn = Math.floor(new Date().getTime() / 1000) + (days * 24 * 60 * 60);
  let payloadWithExp = assign({}, payload, { exp: expiresIn });
  let token = jwt.encode(payloadWithExp, 'secret');
  return { token };
}
