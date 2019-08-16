/**
 * Created by bjwsl-001 on 2016/10/31.
 */
$(function(){

    $(function() {
        var DATA = {
            "big": [
                {"durl": "draw_yoo/big10.jpg"},
                {"durl": "draw_yoo/big2.jpg"},
                {"durl": "draw_yoo/big3.jpg"},
                {"durl": "draw_yoo/big4.jpg"},
                {"durl": "draw_yoo/big5.jpg"},
                {"durl": "draw_yoo/big6.jpg"},
                {"durl": "draw_yoo/big7.jpg"},
                {"durl": "draw_yoo/big8.jpg"},
                {"durl": "draw_yoo/big1.jpg"},
                {"durl": "draw_yoo/big9.jpg"}
            ],
            "small": [
                {"durl": "draw_yoo/w1.jpg"},
                {"durl": "draw_yoo/w2.jpg"},
                {"durl": "draw_yoo/w3.jpg"},
                {"durl": "draw_yoo/w4.jpg"},
                {"durl": "draw_yoo/w5.jpg"},
                {"durl": "draw_yoo/w6.jpg"},
                {"durl": "draw_yoo/w7.jpg"},
                {"durl": "draw_yoo/w8.jpg"},
                {"durl": "draw_yoo/w9.jpg"},
                {"durl": "draw_yoo/w10.jpg"},
                {"durl": "draw_yoo/w11.jpg"},
                {"durl": "draw_yoo/w12.jpg"},
                {"durl": "draw_yoo/w13.jpg"},
                {"durl": "draw_yoo/w14.jpg"},
                {"durl": "draw_yoo/w15.jpg"},
                {"durl": "draw_yoo/w16.jpg"},
                {"durl": "draw_yoo/w17.jpg"},
                {"durl": "draw_yoo/w18.jpg"},
                {"durl": "draw_yoo/w19.jpg"},
                {"durl": "draw_yoo/w20.jpg"},
                {"durl": "draw_yoo/w21.jpg"},
                {"durl": "draw_yoo/w22.jpg"},
                {"durl": "draw_yoo/w24.jpg"},
                {"durl": "draw_yoo/w25.jpg"},
                {"durl": "draw_yoo/w26.jpg"},
                {"durl": "draw_yoo/w27.jpg"},
                {"durl": "draw_yoo/w30.jpg"},
                {"durl": "draw_yoo/w31.jpg"},
                {"durl": "draw_yoo/w32.jpg"},
                {"durl": "draw_yoo/w33.jpg"},
                {"durl": "draw_yoo/w34.jpg"},
                {"durl": "draw_yoo/w35.jpg"},
                {"durl": "draw_yoo/w36.jpg"},
                {"durl": "draw_yoo/w37.jpg"},
                {"durl": "draw_yoo/w38.jpg"},
                {"durl": "draw_yoo/w39.jpg"},
                {"durl": "draw_yoo/w40.jpg"},
                {"durl": "draw_yoo/w41.jpg"},
                {"durl": "draw_yoo/w42.jpg"},
                {"durl": "draw_yoo/w44.jpg"},
                {"durl": "draw_yoo/w45.jpg"},
                {"durl": "draw_yoo/w46.jpg"},
                {"durl": "draw_yoo/w47.jpg"},
                {"durl": "draw_yoo/w48.jpg"},
                {"durl": "draw_yoo/w49.jpg"},
                {"durl": "draw_yoo/w50.jpg"},
                {"durl": "draw_yoo/w51.jpg"},
                {"durl": "draw_yoo/w52.jpg"},
                {"durl": "draw_yoo/w53.jpg"},
                {"durl": "draw_yoo/w54.jpg"},
                {"durl": "draw_yoo/w55.jpg"},
                {"durl": "draw_yoo/w56.jpg"},
                {"durl": "draw_yoo/w57.jpg"},
                {"durl": "draw_yoo/w58.jpg"},
                {"durl": "draw_yoo/w59.jpg"},
                {"durl": "draw_yoo/w60.jpg"},
                {"durl": "draw_yoo/w61.jpg"},
                {"durl": "draw_yoo/w62.jpg"},
                {"durl": "draw_yoo/w63.jpg"},
                {"durl": "draw_yoo/w64.jpg"},
                {"durl": "draw_yoo/w65.jpg"},
                {"durl": "draw_yoo/w69.jpg"},
                {"durl": "draw_yoo/w70.jpg"},
                {"durl": "draw_yoo/w71.jpg"},
                {"durl": "draw_yoo/w72.jpg"},
                {"durl": "draw_yoo/w73.jpg"},
                {"durl": "draw_yoo/w74.jpg"},
                {"durl": "draw_yoo/w75.jpg"},
                {"durl": "draw_yoo/w76.jpg"},
                {"durl": "draw_yoo/w78.jpg"},
                {"durl": "draw_yoo/w79.jpg"},
                {"durl": "draw_yoo/w80.jpg"},
                {"durl": "draw_yoo/w81.jpg"},
                {"durl": "draw_yoo/w1.jpg"},
                {"durl": "draw_yoo/t1.jpg"},
                {"durl": "draw_yoo/big2.jpg"},
                {"durl": "draw_yoo/w7.jpg"},
                {"durl": "draw_yoo/w11.jpg"},
                {"durl": "draw_yoo/w10.jpg"},
                {"durl": "draw_yoo/big10.jpg"},
                {"durl": "draw_yoo/big8.jpg"},
                {"durl": "draw_yoo/w12.jpg"},
                {"durl": "draw_yoo/w22.jpg"},
                {"durl": "draw_yoo/big8.jpg"},
                {"durl": "draw_yoo/big9.jpg"},
                {"durl": "draw_yoo/w2.jpg"},
                {"durl": "draw_yoo/w8.jpg"},
                {"durl": "draw_yoo/big10.jpg"},
                {"durl": "draw_yoo/w3.jpg"},
                {"durl": "draw_yoo/big8.jpg"},
                {"durl": "draw_yoo/w11.jpg"},
                {"durl": "draw_yoo/w65.jpg"},
                {"durl": "draw_yoo/big3.jpg"},
                {"durl": "draw_yoo/big6.jpg"},
                {"durl": "draw_yoo/w16.jpg"}
            ],
            "tag": [
                {"tag": "JK", "ref": "126", "key_word": "%E9%BB%91%E4%B8%9D"},
                {"tag": "表情", "ref": "57", "key_word": "%E8%A1%A8%E6%83%85"},
                {"tag": "双马尾", "ref": "378", "key_word": "%E5%8F%8C%E9%A9%AC%E5%B0%BE"},
                {"tag": "云", "ref": "111", "key_word": "%E4%BA%91"},
                {"tag": "Ｑ版", "ref": "54", "key_word": "%EF%BC%B1%E7%89%88"},
                {"tag": "魔法", "ref": "51", "key_word": "%E9%AD%94%E6%B3%95"},
                {"tag": "驱魔少年", "ref": "63", "key_word": "%E9%A9%B1%E9%AD%94%E5%B0%91%E5%B9%B4"},
                {"tag": "万花", "ref": "87", "key_word": "%E4%B8%87%E8%8A%B1"},
                {"tag": "鸟", "ref": "52", "key_word": "%E9%B8%9F"},
                {"tag": "剑网三", "ref": "402", "key_word": "%E5%89%91%E7%BD%91%E4%B8%89"},
                {"tag": "鹤丸国永", "ref": "66", "key_word": "%E9%B9%A4%E4%B8%B8%E5%9B%BD%E6%B0%B8"},
                {"tag": "游戏", "ref": "192", "key_word": "%E6%B8%B8%E6%88%8F"},
                {"tag": "魂魄妖梦", "ref": "117", "key_word": "%E9%AD%82%E9%AD%84%E5%A6%96%E6%A2%A6"},
                {"tag": "鼠绘上色", "ref": "117", "key_word": "%E9%AD%82%E9%AD%84%E5%A6%96%E6%A2%A6"},
                {"tag": "缠流子", "ref": "51", "key_word": "%E7%BC%A0%E6%B5%81%E5%AD%90"}
            ]
        }

        var picWall = {
            MAX_COL: 6,
            MAX_ROW: 0,
            Xgap: 2,
            Ygap: 2,
            BWIDTH: 150,
            BHEIGHT: 150,
            ruleBig: 3,
            ruleTag: 2,
            data: [],//最初的资源列表
            warapper: $('.pic_scroll_warpper'),//容器DIV
            temp: {},//放内存里存图片属性
            grid: [],
            pageNum: 0,
            colors: [  //随机皂片框的背景
                "#FF931E",
                "#8CD41E",
                "#854CAF",
                "#8C6239",
                "#1EBDB8",
                "#EBD700",
                "#29ABE2",
                "#ED1E79",
                "#009245"
            ],
            list: [],//图片列表
            init: function () {
                this.data = DATA;
                this.temp = {
                    small: [],
                    big: [],
                    tag: []
                }
                if ($(window).height() >= 768) {
                    this.MAX_ROW = 10;
                    $('.top_pic_innerC').css('height', '600px')
                } else if ($(window).height() < 768) {
                    this.MAX_ROW = 10;
                    $('.top_pic_innerC').css('height', '500px')
                }
                this.renderAll();
            },
            renderAll: function () {
                this.renderRom();
                this.renderHtml();
                //this.pager();
            },
            renderRom: function () {
                var _this = this;
                _this.pushData(_this.data, _this.temp, 'big');
                _this.pushData(_this.data, _this.temp, 'small');
                _this.pushData(_this.data, _this.temp, 'tag');
                for (var r = 0; r < _this.MAX_ROW; r++) {
                    var row = [];
                    for (var c = 0; c < _this.MAX_COL; c++) {
                        row.push(0)
                    }
                    _this.grid.push(row)
                }
                _this.renderPosition(_this.temp.big, 2, _this.ruleBig);
                _this.renderPosition(_this.temp.tag, 1, _this.ruleTag, /*新加一个参数*/'width');
                _this.renderPosition(_this.temp.small, 1);
            },
            //把dom元素挂进去
            pushData: function (data, temp, type) {
                for (var i = 0; i < data[type].length; i++) {
                    var d = data[type][i];
                    if (d != null) {
                        if (type != 'tag') {
                            if (type == 'big') {
                                var obj = $(`<div class="box_mar big_box" style="width: 300px;height: 300px;;background-color: #000; background: url('${d.durl}') no-repeat center center;" >
                         <div class="index-hover">
                            <a href="javascript:;" class="index-message">信息</a>
                            <!-- 信息-->
                            <div class="message-box">
                            <p>
                            <a href="javascript:;" class="message-tou"></a>
                                <span class="message-txt">央视新闻</span>
                                <span class="message-approve"></span>
                                <span class="message-close box-close">&times;</span>
                            </p>
                            </div>
                            <a href="javascript:;" class="index-inform">举报</a>
                            <!-- 举报-->
                             <div class="inform-box">
                              <p class="inform-why">
                                    <span class="inform-report"></span>
                                    举报原因
                                    <span class="inform-close box-close">&times;</span>
                                    </p>

                                <form action="" class="inform-form">

                                    <textarea name="informTxt" id="informEare" class="inform-textarea"></textarea>
                                    <a href="javascript:;" class="inform-btn">提交</a>
                                </form>
                            </div>
                            <a href="javascript:;" class="index-detail">详情</a>
                            <!-- 详情-->
                            <div class="details-box">
                                 <p class="details-infro">
                                    <span class="details-img"></span>
                                    详情介绍
                                    <span class="inform-close box-close">&times;</span>
                                 </p>
                                 <div class="details-txt">
                                    央视网(cctv.com)新闻频道是面向全球，多语种，多终端的立体化新闻信息共享平台。
                                    以视听与互动为核心，24小时不间断提供最快捷，最权威，最全面，最丰富的新闻视听
                                    与互动服务，传播中国，了解世界。
                                 </div>
                            </div>
                            <a href="#" class="index-link">链接</a>
                        </div>
                        </div>`);
                            }
                            if (type == 'small') {
                                var obj = $(`<div class="box_mar little_box" style="width: 150px;height: 150px;;background-color: #ec4040;background: url('${d.durl}') no-repeat center center;>
                        <img src="${d.durl}">
                        <div class="index-hover">
                            <a href="javascript:;" class="index-message">信息</a>
                             <!-- 信息-->
                            <div class="message-box small-messageBox">
                            <p>
                             <a href="javascript:;" class="message-tou"></a>
                                <span class="message-txt">央视新闻</span>
                                <span class="message-approve"></span>
                                <span class="message-close box-close">&times;</span>
                            </p>
                            </div>
                            <a href="javascript:;" class="index-inform">举报</a>
                             <!-- 举报-->
                             <div class="inform-box small-informBox">
                              <p class="inform-why">
                                    <span class="inform-report"></span>
                                    举报原因
                                    <span class="inform-close box-close">&times;</span>
                                    </p>
                                <form action="" class="inform-form">
                                    <textarea name="informTxt" id="informEare" class="inform-textarea"></textarea>
                                    <a href="javascript:;" class="inform-btn">提交</a>
                                </form>
                            </div>
                            <a href="javascript:;" class="index-detail">详情</a>
                             <!-- 详情-->
                            <div class="details-box small-detailsBox">
                                 <p class="details-infro">
                                    <span class="details-img"></span>
                                    详情介绍
                                    <span class="inform-close box-close">&times;</span>
                                 </p>
                                 <div class="details-txt">
                                    央视网(cctv.com)新闻频道是面向全球，多语种，多终端的立体化新闻信息共享平台。
                                    以视听与互动为核心，24小时不间断提供最快捷，最权威，最全面，最丰富的新闻视听
                                    与互动服务，传播中国，了解世界。
                                 </div>
                            </div>
                            <a href="#" class="index-link">链接</a>
                        </div>
                        </div>`);
                            }
                        } else if (type == 'tag') {
                            var color = this.Rc();
                            var obj = $(`<div class="box_mar tag_tip" style="width: 300px;height: 150px;;background-color: #666;">

                    <div class="index-hover index-tagHover">
                    <a href="javascript:;" class="index-message">信息</a>
                      <!-- 信息-->
                            <div class="message-box tag-messageBox">
                            <p>
                            <a href="javascript:;" class="message-tou"></a>
                                <span class="message-txt">央视新闻</span>
                                <span class="message-approve"></span>
                                <span class="message-close box-close">&times;</span>
                            </p>

                            </div>
                    <a href="javascript:;" class="index-inform">举报</a>
                    <!-- 举报-->
                             <div class="inform-box tag-informBox">
                              <p class="inform-why">
                                    <span class="inform-report"></span>
                                    举报原因
                                    <span class="inform-close box-close">&times;</span>
                                    </p>
                                <form action="" class="inform-form">
                                    <textarea name="informTxt" id="informEare" class="inform-textarea"></textarea>
                                    <a href="javascript:;" class="inform-btn">提交</a>
                                </form>
                            </div>
                    <a href="javascript:;" class="index-detail">详情</a>
                      <!-- 详情-->
                            <div class="details-box tag-detailsBox">
                                 <p class="details-infro">
                                    <span class="details-img"></span>
                                    详情介绍
                                    <span class="inform-close box-close">&times;</span>
                                 </p>
                                 <div class="details-txt">
                                    央视网(cctv.com)新闻频道是面向全球，多语种，多终端的立体化新闻信息共享平台。
                                    以视听与互动为核心，24小时不间断提供最快捷，最权威，最全面，最丰富的新闻视听
                                    与互动服务，传播中国，了解世界。
                                 </div>
                            </div>
                    <a href="#" class="index-link">链接</a>
                    </div>
                    </div>`);
                            obj.css('background', color);
                            obj.css('width', this.BWIDTH * 2 + "px");
                        }
                        temp[type].push(obj);
                    }
                }
            },
            Rc: function () {//随机
                var r = Math.floor(Math.random() * 156 + 100)
                var g = Math.floor(Math.random() * 156 + 100)
                var b = Math.floor(Math.random() * 156 + 100)
                return `rgb(${r},${g},${b})`;
            },
            renderPosition: function (list, size, rule, type) {
                var _this = this;
                type = type || "";
                for (var i = 0; i < list.length; i++) {
                    var gridC = [];
                    var max_row = _this.MAX_ROW - size;
                    for (var r = 0; r <= max_row; r++) {
                        var startC = 0, endC = _this.MAX_COL - size;
                        if (rule) {
                            startC = i * rule;
                            endC = (i + 1) * rule - size;
                        }
                        for (var c = startC; c <= endC; c++) {
                            if (type == "width") {
                                if (c + size + 1 > _this.MAX_COL)
                                    continue;
                                if (!_this.check(_this.grid, r, c, size, 'w')) {
                                    continue;
                                }
                            } else {
                                if (!_this.check(_this.grid, r, c, size)) {
                                    continue;
                                }
                            }

                            gridC.push({row: r, col: c})
                        }
                    }
                    if (gridC.length == 0) {
                        return
                    }
                    var posi = Math.floor(Math.random() * gridC.length)
                    var pic = list[i];
                    //宽格子
                    if (type == "width") {
                        _this.fillGrid(_this.grid, gridC[posi].row, gridC[posi].col, size, 'w');
                    } else {
                        _this.fillGrid(_this.grid, gridC[posi].row, gridC[posi].col, size);
                    }

                    _this.list.push({
                        obj: pic,
                        col: gridC[posi].col,
                        row: gridC[posi].row
                    })
                }
            },
            //判断是否重复
            check: function (grid, row, col, size, ifWidth) {
                var _this = this;
                ifWidth = ifWidth || "";
                var siz = size || 1;
                if (size + col > _this.MAX_COL) {
                    return false
                }
                for (var x = 0; x < siz; x++) {
                    if (ifWidth == "w") {
                        for (var y = 0; y < siz + 1; y++) {
                            if (grid[row + x][col + y] == 1) {
                                return false
                            }
                        }
                    } else {
                        for (var y = 0; y < siz; y++) {
                            if (grid[row + x][col + y] == 1) {
                                return false
                            }
                        }
                    }

                }
                return true
            },
            fillGrid: function (list, row, col, size, ifWidth) {
                var _this = this;
                var siz = size || 1;
                ifWidth = ifWidth || "";
                for (var x = 0; x < siz; x++) {
                    if (ifWidth == "w") {
                        for (var y = 0; y < siz + 1; y++) {
                            _this.grid[row + x][col + y] = 1;//等于1代表二维数组里的这块被占了
                        }
                    } else {
                        for (var y = 0; y < siz; y++) {
                            _this.grid[row + x][col + y] = 1;
                        }
                    }

                }
            },
            renderNormal: function (list, size) {
                var _this = this;
                var i = 0;
                for (var r = 0; r < _this.MAX_ROW; r++) {
                    for (var c = 0; c <= _this.MAX_COL; c++) {
                        if (_this.check(_this.grid, r, c, size)) {
                            var pic = list[i];
                            _this.fillGrid(_this.grid, r, c, size);
                            _this.list.push({
                                obj: pic,
                                col: c,
                                row: r
                            })
                        }
                        i++;
                        if (i >= list.length) {
                            break
                        }
                    }
                    if (i >= list.length) {
                        break
                    }
                }
            },
            //按内存里的数据渲染
            renderHtml: function () {
                var _this = this;
                //_this.warapper.width(_this.MAX_COL*(_this.Xgap+_this.BWIDTH)-_this.BWIDTH);
                console.log(_this.warapper.width());
                var picWrapper = $('<div class="pic-list clearfix"></div>').appendTo(_this.warapper).fadeIn();
                _this.list.sort(function (a, b) {
                    if (a.row > b.row) {
                        return 1;
                    } else if (a.row < b.row) {
                        return -1;
                    } else {
                        return a.col - b.col;
                    }
                });
                for (var i = 0; i < _this.list.length; i++) {
                    var img = _this.list[i];
                    var top = img.top = _this.Ygap * img.row + _this.BHEIGHT * img.row;
                    var left = img.left = _this.Xgap * img.col + _this.BWIDTH * img.col;
                    //console.log([top,left]);
                    img.obj.appendTo(picWrapper).css({'top': top, 'left': left});
                    //img.obj.appendTo(picWrapper).css({'marginTop':10,'marginLeft':15});
                }
            }


        }
        picWall.init();
    })
})




$(function(){
    // 信息的弹窗
    $("#picWrapper").on("click",".index-message",function(){
        $(this).next().fadeIn(300);
    });
    //举报的弹窗
    $("#picWrapper").on("click",".index-inform",function(){
        $(this).next().fadeIn(300);
    });
    //详情的弹窗
    $("#picWrapper").on("click",".index-detail",function(){
        $(this).next().fadeIn(300);
    });
    $("#picWrapper").on("click",".box-close",function(){
        $(this).parent().parent().fadeOut(300);
    });

//    当前特惠市场的点击
    $("#classifySel").click(function(){
        $("#vClassifyBox").fadeToggle(300);
    });
    //弹出部分的span点击
    $("#vClassifyBox").on("click","span",function(){
        var index=$(this).index();
        $("#classifySel>span").eq(index).siblings("span").hide();
        $("#classifySel>span").eq(index).fadeIn(300);
        $("#vClassifyBox").fadeOut(300);
    })
})