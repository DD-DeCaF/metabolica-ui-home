import angular from 'angular';

import {HomeComponent} from './home.component.js';


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
