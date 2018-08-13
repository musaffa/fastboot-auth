import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const RouteWithMixin = Route.extend(ApplicationRouteMixin, {});

export default class ApplicationRoute extends RouteWithMixin {}
