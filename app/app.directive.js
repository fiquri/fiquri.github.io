var app = angular.module('fiquri');

app.directive('a', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            $(element).on('click', function(){
                $('html, body').animate({
                    scrollTop: 0
                }, 200);
            });
        }
    };
});
app.directive('portfolio', function($state) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            var el = $(element);
            setTimeout(function() {
                el.addClass("active");

            }, 600);
        }
    };
});
app.directive('back', function($state) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            var el = $(element);
            element.on('click', function(e) {
             // $window.history.back();
             e.preventDefault();
             $(".fq-portfolio").removeClass("active");
             setTimeout(function() {
                $state.go("home");
            }, 600);
             
         });
        }
    };
});
app.directive('countUp', ['$compile',function($compile,$timeout) {
    return {
        restrict: 'E',
        replace: false,
        scope: {
            countTo: "@countTo",
            interval: '=interval',
            nameSkill: "@nameSkill"
        },
        controller: ['$scope', '$element', '$attrs', '$timeout', function ($scope, $element, $attrs, $timeout) {
            $scope.millis = 0;
            if ($element.html().trim().length === 0) {
                $element.append($compile('<h5 class="fq-skill__name">{{nameSkill}} {{millis}}%</h5><div class="fq-skill__bar" style="width:{{millis}}%"></div>')($scope));
            } else {
                $element.append($compile($element.contents())($scope));
            }

            var i=0;
            function timeloop () {
                setTimeout(function () {
                    $scope.millis++;
                    $scope.$digest();
                    i++;
                    if (i<$scope.countTo) {
                        timeloop();
                    }
                }, $scope.interval)
            }
            timeloop();
        }]
    }}])