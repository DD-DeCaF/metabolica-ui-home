import angular from 'angular';
import {DevAppModule} from 'metabolica';
import {HomeModule} from './home/home.module';
export {HomeModule} from './home/home.module';

export const HomeAppModule = angular.module('HomeApp', [
  DevAppModule.name,
  HomeModule.name
]);
