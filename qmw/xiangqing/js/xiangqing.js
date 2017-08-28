$(function() {
    //  选择颜色
    $(".ds_color ul li span").click(function() {

            $(".ds_color ul li span").removeClass().addClass("dscul_span");
            $(this).addClass("chice");
            getColor();
            getSpec();
        })
        // <!--选择材质-->
    $(".gs_cai ul li span").click(function() {
        $(".gs_cai ul li span").removeClass().addClass("dscul_span");
        $(this).addClass("chice");
        getSpec();
        getColor();
    });


    //  tab UI
    $("#tab li").click(function() {
        $("#tab li").removeClass("current");
        $(this).addClass("current");
    });
    //  
    $(".fn_item").click(function() {
        $(".mask").show();
        getSpec();
        getColor();
        $(".mane").show();
        $(".footer_nav").hide();

    });



    //   数量减
    $(".min_input").click(function() {
        var t = $(this).parents(".gs_input").find(".text_input");
        t.val(parseInt(t.val()) - 1);
        if (t.val() <= 1) {
            t.val(1)
        };
    });
    //  数量加
    $(".add_input").click(function() {
        var t = $(this).parents(".gs_input").find(".text_input");
        t.val(parseInt(t.val()) + 1);
        if (t.val() <= 1) {
            t.val(1)
        };
    });
    //  规格
    var _y = [{

            "attr_id": "625",
            "attr_name": "地地地地地地地地",
            "attr_sign": "color",
            "attr_img": "http://img.qmwjj.cc/shop/pic/thumb/OpPIaPMgdk_20170601_!!45603.jpg"
        }, {

            "attr_id": "626",
            "attr_name": "人人人人人人",
            "attr_sign": "spec",
            "attr_img": "http://img.qmwjj.cc/shop/pic/thumb/OpPIaPMgdk_20170601_!!45603.jpg"
        }, {
            "attr_id": "627",
            "attr_name": "在在在在在在在",
            "attr_sign": "spec",
            "attr_img": "http://img.qmwjj.cc/shop/pic/thumb/z7JFioCAL8_20170601_!!85219.jpg"
        }, {
            // 属性ID 
            "attr_id": "628",
            //  名字
            "attr_name": "膨胀有的的珠",
            // 规格
            "attr_sign": "spec",
            // 
            "attr_img": "http://img.qmwjj.cc/shop/pic/thumb/S6G6TymhVA_20170601_!!58352.jpg"
        },
        {
            // 属性ID 
            "attr_id": "620",
            //  名字
            "attr_name": "膨胀有的的珠",
            // 规格
            "attr_sign": "spec",
            // 
            "attr_img": ""
        }
    ];

    //  颜色价格
    var _x = [{
        "product_color": "625",
        //   652 red
        "product_spec": "626",
        //  626 实木
        "buyer": "46.15",
        "attribute": "0"
    }, {
        "product_color": "625",
        "product_spec": "627",
        "buyer": "47.15",
        "attribute": "0"
    }, {
        //  颜色
        "product_color": "625",
        //  规格
        "product_spec": "628",
        // 卖家
        "buyer": "48.15",
        //  默认属性  0标识不默认
        "attribute": "1"
    }, {
        "product_color": "626",
        //   652 red
        "product_spec": "626",
        //  626 实木
        "buyer": "4555.15",
        "attribute": "0"
    }, {
        "product_color": "627",
        //   652 red
        "product_spec": "626",
        //  626 实木
        "buyer": "45.15",
        "attribute": "0"

    }, {
        "product_color": "628",
        //   652 red
        "product_spec": "626",
        //  626 实木
        "buyer": "466.15",
        "attribute": "0"
    }];

    var tag = 0;

    function getColor() {
        var _ul = $(".dsc_ul");
        var _src = $(".enlarge").attr("src");
        var _name = "";

        _color = $(_ul[0]).find(".chice").attr("data-color");
        _spec = $(_ul[1]).find(".chice").attr("data-spec");
        for (var i = 0; i < _y.length; i++) {
            //     
            if (_color == _y[i].attr_id) {
                //  取出图片路径
                _src = _y[i].attr_img;
                //   取出商品名称





                $(".enlarge").attr("src", _src);

                if (_src.length <= 0) {
                    $(".meiyou").show();
                }
                if (_src.length > 0) {
                    $(".meiyou").hide();
                }
                _src = "";
            }
        }
    };

    function getSpec() {
        for (var i = 0; i < _x.length; i++) {
            var _ul = $(".dsc_ul");
            var _src = $(".enlarge").attr("src");
            var _money = "";
            _color = $(_ul[0]).find(".chice").attr("data-color");
            _spec = $(_ul[1]).find(".chice").attr("data-spec");
            console.log(_color, _spec);
            if (_spec == _x[i].product_spec && _color == _x[i].product_color) {
                //    取出价格
                console.log(_x[i]);
                _money = _x[i].buyer;
                $(".gscon_title").text(_money);
                //   取出图片

            }
        }

    }



    $(".fn_item2").click(function() {
        $(".mane").show();
        $(".footer_nav").hide();
        tag++;
        if (tag >= 2) {
            getColor();
            getSpec();
        }
    });


    $(".enlarge").click(function() {
        var this_src = $(this).attr("src");
        $(".bigmask_img").attr("src", this_src);
        $(".bigmask").show();
    });
    $(".bigmask").click(function() {
        $(".bigmask").hide();
    });
    $(".mane").click(function() {
        $(".mask").hide();
        $(".footer_nav").show();
    });








})