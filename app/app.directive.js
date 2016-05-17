var app = angular.module('fiquri');

app.directive('typed', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            setTimeout(function() {
            $(element).typed({
                // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
                stringsElement: $('.fq-typed-strings'),
                typeSpeed: 30,
                backDelay: 500,
                loop: false,
                contentType: 'html', // or text
                // defaults to false for infinite loop
                loopCount: false,
                callback: function(){ visibility(); },
                resetCallback: function() { newTyped(); }
            });}, 10);

            function visibility(){
                $(".fq-start").addClass("visible")
            }
        }
    };
});
app.directive('masonry', function() {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            setTimeout(function() {
            $(element).masonry({
              // options
              gutter: '.fq-dishes--gutter',
              itemSelector: '.fq-dishes--item',
              percentPosition: true
            });
        }, 1);
        }
    };
});
app.directive('masonrySkill', function() {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            setTimeout(function() {

                $(element).masonry({
                  // options
                  itemSelector: '.fq-skill--item',
                  percentPosition: true,
                  fitWidth: true
                });
            }, 1);

        }
    };
});
app.directive('nano', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).nanoScroller();
        }
    };
});
app.directive('robot', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var $robot = $(element);
            var $robotHead = $(element).find("#robot-neck");
            var $robotLeft = $(element).find("#robot-arm--left");
            var $robotHandLeft = $(element).find("#robot-hand--left");
            var $monster = $(element).find(".fq-monster");
            var tl = new TimelineMax({
                repeat:-1,
                yoyo: true,
                delay: 0
            });
            tl
            .set("#monster", {y:0})
            .set("#monster-pupil", {x:-10})

            .fromTo("#monster-pupil",2, {x:-10, ease: Power0.easeNone},{x:10, ease: Power0.easeNone})
            .fromTo("#monster-pupil",2, {rotation:90, transformOrigin:"50% 50%"},{rotation:00, transformOrigin:"50% 50%"},"-=2")

              .to("#monster", 0.6, {y:300});

            //  var tl2 = new TimelineMax({
            //     yoyo: true,
            //     delay: 1
            // });
            // tl2
            //   .set(".fq-monster",{className:"+=kanan"})
            //   .to(".fq-monster",0.5, {rotation:15})
            //   .to(".fq-monster",0.5, {y:-30},"-=0.2")
            //   .to("#monster-leg-left",0.3, {rotation:40, transformOrigin:"top right"},"-=0.2")
            //   .to("#monster-hand-left",0.3, {rotationX:-180},"-=0.2")
            //   .to("#monster-hand-right",0.3, {rotationX:-180},"-=0.2")
            //   .to("#monster-pupil",0.3, {scale:1.5, transformOrigin:"center"},"-=0.2")
            //   .to("#monster-eyebrow",1,{y:-30},"-=0.3")


            //   var tl3 = new TimelineMax({
            //     yoyo: true,
            //     delay: 0,
            //     repeat: -1
            // });
            // tl3
            //   .to("#robot-hand-left1",0.2, {rotation:-8,transformOrigin:"right"})
            //   .to("#robot-hand-left2",0.2, {rotation:8,transformOrigin:"right"},"-=0.2")
            //   .to("#robot-hand-right1",0.2, {rotation:-8,transformOrigin:"bottom"},"-=0.2")
            //   .to("#robot-hand-right2",0.2, {rotation:8,transformOrigin:"bottom"},"-=0.2")
            //   .to("#robot-long-right1",0.2, {rotation:-8,transformOrigin:"left bottom"},"-=0.2")
            //   .to("#robot-long-right2",0.2, {rotation:8},"-=0.2")

              
            //   var tl4 = new TimelineMax({
            //     yoyo: true,
            //     delay: 2
            // });
            // tl4
            //     .set("#robot-hand-long",{autoAlpha:0})
            //     // .set("#robot-arm--right",{autoAlpha:0})
            //     .to("#robot-arm--right,#robot-hand-right1,#robot-hand-right2",0.1,{autoAlpha:0})
            //   .to("#robot-hand-long",0.1,{autoAlpha:1},"-=0.1")
            //   .to("#robot-hand-long",3, {scaleX:2, scaleY:1.5,transformOrigin:"left"})
            //   .to("#robot-long-right2",3, {scaleX:0.5, scaleY:1,x:10},"-=3")
            //   .to("#robot-long-right1",3, {scaleX:0.5, scaleY:1,x:10},"-=3")
              

            
            // tl
            //     .to($robotHandLeft,0.3,{rotation:0, transformOrigin:"50% 50%"})
            //     .to($robotHandLeft,0.3,{x:"100%"})
            //     .to($robotHandLeft,0.3,{rotation:180,transformOrigin:"50% 50%"}, "+=1")
            // tl
            //     .to($robotHead,0.3,{rotation:0})
            //     .to($robotHead,0.3,{rotation:30})
            //     .to($robotHead,0.3,{rotation:-30})
            //     .to($robotHead,0.3,{rotation:0})
            //     .to($robotHead,0.3,{rotation:0})
            //     .to($robotHead,0.3,{rotation:30})
            //     .to($robotHead,0.3,{rotation:-30})
            //     .to($robotHead,0.3,{rotation:0})
            //     .to($robotHead,0.3,{rotation:0})
            //     .to($robotHead,0.3,{rotation:30})
            //     .to($robotHead,0.3,{rotation:-30})
            //     .to($robotHead,0.3,{rotation:0})
            //     .to($robotLeft, 1, {rotation:-150}, "-=.3")
            //     .to($robotLeft, 0.3, {rotation:-140})
            //     .to($robotLeft, 0.3, {rotation:-150})
            //     .to($robotLeft, 0.3, {rotation:-140})
            //     .to($robotLeft, 0.3, {rotation:-150})
            //     .to($robotLeft, 0.6, {rotation:0}, "+=.6");

            // var tl2 = new TimelineMax({
            //     repeat:-1,
            //     paused: true
            // });
            // tl2
            //     .to($robotLeft,0.3,{scaleY:1})
            //     .to($robotLeft,1,{scaleY:-1})
            //     .to($robotLeft,0.3,{scaleY:1}, "+=10")
            //     .to($robot,0.3,{y:10}, "-=10")
            //     .to($robot,0.3,{y:0}, "-=9.7")
            //     .to($robot,0.3,{y:10}, "-=9.4")
            //     .to($robot,0.3,{y:0}, "-=9.1")
            //     .to($robot,0.3,{y:10}, "-=8.8")
            //     .to($robot,0.3,{y:0}, "-=8.5")
            //     .to($robot,0.3,{y:10}, "-=8.2")
            //     .to($robot,0.3,{y:0}, "-=7.9")
            //     .to($robot,0.3,{y:10}, "-=7.6")
            //     .to($robot,0.3,{y:0}, "-=7.3")
            //     .to($robot,0.3,{y:10}, "-=7")
            //     .to($robot,0.3,{y:0}, "-=6.7")
            //     .to($robot,0.3,{y:10}, "-=6.4")
            //     .to($robot,0.3,{y:0}, "-=6.1")
            //     .to($robot,0.3,{y:10}, "-=5.8")
            //     .to($robot,0.3,{y:0}, "-=5.5")
            //     .to($robot,0.3,{y:10}, "-=5.2")
            //     .to($robot,0.3,{y:0}, "-=4.9")
            //     .to($robot,0.3,{y:10}, "-=4.6")
            //     .to($robot,0.3,{y:0}, "-=4.3")
            //     .to($robot,0.3,{y:10}, "-=4")
            //     .to($robot,0.3,{y:0}, "-=3.7")
            //     .to($robot,0.3,{y:10}, "-=3.4")
            //     .to($robot,0.3,{y:0}, "-=3.1")
            //     .to($robot,0.3,{y:10}, "-=2.8")
            //     .to($robot,0.3,{y:0}, "-=2.5")
            //     .to($robot,0.3,{y:10}, "-=2.2")
            //     .to($robot,0.3,{y:0}, "-=2.9")
            //     .to($robot,0.3,{y:10}, "-=1.6")
            //     .to($robot,0.3,{y:0}, "-=1.3")
            //     .to($robot,0.3,{y:10}, "-=1")
            //     .to($robot,0.3,{y:0}, "-=0.7")
            //     .to($robot,0.3,{y:10}, "-=0.4")
            //     .to($robot,0.3,{y:0}, "-=0.1");
            // $(element).on("click", function () {
            //     tl.restart();
            //     tl.stop();
            //     tl2.play();
            // })
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
                $element.append($compile('<h5 class="fq-count">{{millis}}%</h5>')($scope));
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
            var a = $(window).height();
            var b, c = 0;
            var flag = false;
            $(window).scroll(function() {
               b = $(".fq-skill").offset().top;
              c = $(window).scrollTop() + a;
                console.log(b); 

              if (c > b && !flag) {
                timeloop();
                flag= true;
              };

            });
        }]
    }}])