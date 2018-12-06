(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('rhasesAngularJSCommons.config', [])
      .value('rhasesAngularJSCommons.config', {
          debug: true
      });

  // Modules
  angular.module('rhasesAngularJSCommons.directives', []);
  angular.module('rhasesAngularJSCommons.filters', []);
  angular.module('rhasesAngularJSCommons.services', []);
  angular.module('rhasesAngularJSCommons',
      [
          'rhasesAngularJSCommons.config',
          'rhasesAngularJSCommons.directives',
          'rhasesAngularJSCommons.filters',
          'rhasesAngularJSCommons.services'
      ]);

})(angular);
