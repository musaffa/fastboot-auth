import jwt from 'jwt-simple';
import { assign } from '@ember/polyfills';

export default function(payload) {
  let expiresIn = new Date().getTime() + 86400000; // one day from now
  let payloadWithExp = assign({}, payload, { exp: expiresIn });
  let token = jwt.encode(payloadWithExp, 'secret');
  return { token };
}
