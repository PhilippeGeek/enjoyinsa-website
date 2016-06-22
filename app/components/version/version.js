'use strict';

angular.module('enjoyinsa.version', [
  'enjoyinsa.version.interpolate-filter',
  'enjoyinsa.version.version-directive'
])

.value('version', '0.1');
