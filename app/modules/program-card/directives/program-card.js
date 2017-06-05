angular.module('denomadesApp.programCard')

.directive('programCard', ['cardService', function(cardService) {
  return {
    restrict: 'E',
    scope: {
      info: '@'
    },
    templateUrl: 'modules/program-card/templates/program-card.html',
    link: function(scope, element, attrs) {
      cardService.getInfo(attrs.info).then(function(response) {
        scope.data = response.data;
        //console.log(response.data);
      }, function(response) {
        console.log('Error');
      });
      scope.showModal = function() {
        //console.log(selector);
        var modal = new tingle.modal({
          footer: true,
          stickyFooter: false,
          closeMethods: ['overlay', 'button', 'escape'],
          closeLabel: "Close",
        });
        modal.setContent(document.querySelector('.modal-'+attrs.info).innerHTML);
        modal.addFooterBtn('Reserva ahora', 'tingle-btn tingle-btn--primary', function() {
          modal.close();
        });
        modal.open();
      }
    }
  }
}]);
