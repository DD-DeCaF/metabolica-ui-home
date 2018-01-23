import angular from 'angular';
import template from './home.component.html';


export const HomeComponent = {
    template: template
};


export const HomeModule = angular.module('home', [])
  .component('home', HomeComponent)
  .config(function ($stateProvider) {
    $stateProvider
      .state({
        name: 'app.home',
        url: '/home',
        component: 'home',
        data: {
          title: 'Home',
        }
      })
  });
