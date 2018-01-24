import angular from 'angular';
import {AppModule} from 'metabolica';
import {HomeModule} from './home/home.module';
export {HomeModule} from './home/home.module';

export const HomeAppModule = angular.module('HomeApp', [
  AppModule.name,
  HomeModule.name
]);
