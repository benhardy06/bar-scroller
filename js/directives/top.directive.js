app.directive('offTop', ['$window','$timeout', 'sectionData', function($window, $timeout, sectionData) {
    return function(scope, element, attrs) {
        var enableScroll;
        angular.element($window).on("scroll", scrollEffect)
        function scrollEffect(event) {
            var event = window.event || event;
            var data = event.wheelDelta || -event.detail;
            var menuAnchors = document.getElementsByClassName('menu-anchor')
                for (var i = 0; i < menuAnchors.length; i++) {
                    var top = menuAnchors[i].getClientRects()[0].top;
                    if (top >= 0) break;
                    
                }
            if (i >= 0 && i < menuAnchors.length && enableScroll != false) {
                sectionData.changeActive(i + 1);
               
                enableScroll = false
            }
            $timeout(function() {
                enableScroll = true
            },50)
        }
        scope.$on('$destroy', function() {
            angular.element($window).unbind('scroll', scrollEffect)
        });
    }
}])