(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('rhasesAngularjsCommons.config', [])
      .value('rhasesAngularjsCommons.config', {
          debug: true
      });

  // Modules
  angular.module('rhasesAngularjsCommons.directives', []);
  angular.module('rhasesAngularjsCommons.filters', []);
  angular.module('rhasesAngularjsCommons.services', []);
  angular.module('rhasesAngularjsCommons',
      [
          'rhasesAngularjsCommons.config',
          'rhasesAngularjsCommons.directives',
          'rhasesAngularjsCommons.filters',
          'rhasesAngularjsCommons.services'
      ]);

})(angular);
