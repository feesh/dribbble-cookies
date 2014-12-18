$(document).ready(function() {
	// var headertabs = $("#header .tabmenu");
	// headertabs.append('<li><div class="searcher"><input type="text" id="sids-search-field" placeholder="Search Reddit titles" /><button id="sids-search-btn">Search!</button> <a class="trigger-like">test</a></div></li>');
	$("body").prepend('<div id="site"><div id="snowZone">');
	$("body").append('</div></div>');

	$("svg.cookie").click(function() {
		// Snow Falling
		function fallingSnow() {
		    var $snowflakes = $(),
		        createSnowflakes = function () {
		            var qt = 20;
		            for (var i = 0; i < qt; ++i) {
		                var $snowflake = $('<div class="cookies"><img src="http://f.cl.ly/items/2R0V3m0Q1h0O1S262N3u/cookie.png" alt="Cookies for Albert!!" /></div>');
		                $snowflake.css({
		                    'left': (Math.random() * $('#site').width()) + 'px',
		                    'top': (- Math.random() * $('#site').height()) + 'px'
		                });
		                // add this snowflake to the set of snowflakes
		                $snowflakes = $snowflakes.add($snowflake);
		            }
		            $('#snowZone').prepend($snowflakes);
		        },
		        
		        runSnowStorm = function() {
		            $snowflakes.each(function() {
		                
		                var singleAnimation = function($flake) {
		                    $flake.animate({
		                        top: "500px",
		                        opacity : "0",
		                    }, Math.random()*-2500 + 5000, function(){
		                        // this particular snow flake has finished, restart again
		                        $flake.css({
		                            'left': (Math.random() * $('#site').width()) + 'px',
		                            'top': (- Math.random() * $('#site').height()) + 'px',
		                            'opacity': 1
		                        });
		                        singleAnimation($flake);
		                    });
		                };
		                singleAnimation($(this));
		            });
		    };
		    
		    createSnowflakes();
		    runSnowStorm();
		}

		fallingSnow();

	});
});
