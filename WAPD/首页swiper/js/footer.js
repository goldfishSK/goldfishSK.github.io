$(window).scroll(function(){
                var before = $(window).scrollTop();
                $(window).scroll(function() {
                    var after = $(window).scrollTop();
                    if (before<after) {
                        console.log('上');
                        $('footer').hide();
                        before = after;
                    };
                    if (before>after) {
                        console.log('下');
                        $('footer').show();
                        before = after;
                    };
                });
            });