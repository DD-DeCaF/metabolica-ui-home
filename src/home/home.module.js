// Copyright 2018 Novo Nordisk Foundation Center for Biosustainability, DTU.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import angular from 'angular';
import template from './home.content.html';
import './home.component.scss';


export const HomeComponent = {
    template: `<div class="md-padding"><md-content>${template}</md-content></div>`,
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
      });
  });
