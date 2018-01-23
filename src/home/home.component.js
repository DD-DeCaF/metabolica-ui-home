import marked from 'marked';

import template from './home.component.html';


class HomeController {
  constructor($scope, $http, $sce) {
    const sourceRepo = 'https://raw.githubusercontent.com/DD-DeCaF/decaf-metabolica/getting-started-docs';

    $http({
      method: 'GET',
      url: sourceRepo + '/README.md',
    }).then(response => {
      try {
        const data = response.data.replace(/gifs\//g, sourceRepo + '/gifs/');
        $scope.content = $sce.trustAsHtml(marked(data));
      } catch(err) {
        $scope.content = err;
      }
    }, response => {
      $scope.content = response;
    });
  }
}


export const HomeComponent = {
  template: template,
  controller: HomeController
};
