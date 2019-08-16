/**
 * Created by bjwsl-001 on 2016/10/31.
 */
$(function() {
    var DATA = {
        "big": [
            {"durl": "draw_yoo/big/shejishi.PNG","title":"摆格网创始人","lianjie":"http://chenzezhen.zcool.com.cn/","content":"您好，我是摆格网的创始人——陈泽真。欢迎您的到来，希望摆格网可以为您实现梦想！"},
            {"durl": "draw_yoo/big/ribao.jpg","title":"光明日报","lianjie":"http://www.gmw.cn/","content":"光明网是光明日报在网络时代的新延伸,也是国内唯一一家定位于思想理论领域的中央重点新闻网站。"},
            {"durl": "draw_yoo/big/big3.jpg","title":"图片展示","lianjie":"http://baidu.com","content":"nihao"},
            {"durl": "draw_yoo/big/big4.jpg","title":"图片展示","lianjie":"http://baidu.com","content":"nihao"},
            {"durl": "draw_yoo/big/oppo.jpg","title":"oppo","lianjie":"http://baidu.com","content":"nihao"},
            {"durl": "draw_yoo/big/ribao.jpg","title":"光明日报","lianjie":"http://baidu.com","content":"nihao"},
            {"durl": "draw_yoo/big/oppo.jpg","title":"oppo","lianjie":"http://baidu.com","content":"nihao"},
            {"durl": "draw_yoo/big/ribao.jpg","title":"光明日报","lianjie":"http://baidu.com","content":"nihao"},
            {"durl": "draw_yoo/big/oppo.jpg","title":"oppo","lianjie":"http://baidu.com","content":"nihao"},
            {"durl": "draw_yoo/big/ribao.jpg","title":"光明日报","lianjie":"http://baidu.com","content":"nihao"}
        ],
        "small": [
            {"durl": "draw_yoo/baidu.jpg","title":"百度","lianjie":"http://baidu.com","content":"全球最大的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。"},
            {"durl": "draw_yoo/huawei.jpg","title":"华为","lianjie":"http://www.huawei.com/cn/","content":"华为目前已成长为年销售规模超5216亿人民币的世界500强公司.面向未来,华为将与众多伙伴开放合作,努力共建全联接世界."},
            {"durl": "draw_yoo/maidanglao.jpg","title":"麦当劳","lianjie":"http://www.mcdonalds.com.cn/","content":"麦当劳中国官方网站。发现麦当劳的经典汉堡、当期新品、优惠活动和最新优惠券,了解麦当劳企业和招聘信息,还可以寻找附近门店,登陆麦乐送订餐。"},
            {"durl": "draw_yoo/miaosha.jpg","title":"京东秒杀","lianjie":"https://miaosha.jd.com/","content":"京东JD.COM-专业的综合网上购物商城，销售超数万品牌、4020万种商品，囊括家电、手机、电脑、服装、图书、母婴、个护、食品、旅游等13大品类。"},
            {"durl": "draw_yoo/shangxin.jpg","title":"淘宝上新","lianjie":"https://www.taobao.com/","content":"淘宝网 - 淘宝商城,想得到就淘得到的亚洲大型网上购物平台！淘宝网-淘宝商城,'惠'聚各类时尚风格,流行元素,超高性价比,让你畅享潮流,魅力爆棚!"},
            {"durl": "draw_yoo/shishang.jpg","title":"1号店","lianjie":"http://www.yhd.com","content":"1号店网上超市,最经济实惠的网上购物商城,用鼠标逛超市,不用排队,方便实惠送上门,网上购物新生活。"},
            {"durl": "draw_yoo/shouji.jpg","title":"360手机","lianjie":"http://i360mall.com/","content":"360商城是一家智能硬件体验平台。这里能免费试用智能硬件,查看全方位试用报告,还可以预约、抢购并体验新上市的智能产品。"},
            {"durl": "draw_yoo/songshu.jpg","title":"三只松鼠","lianjie":"http://www.3songshu.com/","content":"三只松鼠成立于2012年,是中国当前最大的互联网食品品牌。其坚果系列位居全网销量第一,凭借互联网商业模式为消费者提供更新鲜、品质更优、更具性价比的产品。"},
            {"durl": "draw_yoo/taobao.jpg","title":"淘宝","lianjie":"http://www.taobao.com/","content":"淘宝网 - 淘宝商城,想得到就淘得到的亚洲大型网上购物平台！淘宝网-淘宝商城,'惠'聚各类时尚风格,流行元素,超高性价比,让你畅享潮流,魅力爆棚!"},
            {"durl": "draw_yoo/waimai.jpg","title":"百度外卖","lianjie":"http://waimai.baidu.com","content":"百度地图外卖是由百度打造的一个专业外卖服务平台,覆盖众多优质外卖商家,提供方便快捷的网上外卖订餐服务。"},
            {"durl": "draw_yoo/xiaomi.jpg","title":"小米","lianjie":"http://www.xiaomi.com","content":"小米公司是一家专注于高端智能手机、互联网电视以及智能家居生态链建设的创新型科技企业。"},
            {"durl": "draw_yoo/xingbake.jpg","title":"星巴克","lianjie":"https://www.starbucks.com.cn/","content":"我们希望通过每一杯咖啡,将星巴克的咖啡传承与独一无二的咖啡体验带给我们的顾客。"},
            {"durl": "draw_yoo/yangshi.jpg","title":"央视新闻","lianjie":"http://news.cctv.com/","content":"央视网(cctv.com)新闻频道是面向全球，多语种，多终端的立体化新闻信息共享平台。以视听与互动为核心，24小时不间断提供最快捷，最权威，最全面，最丰富的新闻视听与互动服务，传播中国，了解世界。"},
            {"durl": "draw_yoo/yingke.jpg","title":"映客直播","lianjie":"http://www.inke.cn/","content":"映客直播,实时、高清、快捷、流畅的视频直播平台,中国全新的视频社交媒体,明星大咖、网络红人、时尚娱乐、高颜值、视频交友等尽在映客直播app。"},
            {"durl": "draw_yoo/yunyinyue.jpg","title":"网易云音乐","lianjie":"http://music.163.com/","content":"网易云音乐是一款专注于发现与分享的音乐产品,依托专业音乐人、DJ、好友推荐及社交功能,为用户打造全新的音乐生活。"},
            {"durl": "draw_yoo/baidu.jpg","title":"百度","lianjie":"http://baidu.com","content":"全球最大的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。"},
            {"durl": "draw_yoo/huawei.jpg","title":"华为","lianjie":"http://www.huawei.com/cn/","content":"华为目前已成长为年销售规模超5216亿人民币的世界500强公司.面向未来,华为将与众多伙伴开放合作,努力共建全联接世界."},
            {"durl": "draw_yoo/maidanglao.jpg","title":"麦当劳","lianjie":"http://www.mcdonalds.com.cn/","content":"麦当劳中国官方网站。发现麦当劳的经典汉堡、当期新品、优惠活动和最新优惠券,了解麦当劳企业和招聘信息,还可以寻找附近门店,登陆麦乐送订餐。"},
            {"durl": "draw_yoo/miaosha.jpg","title":"京东秒杀","lianjie":"https://miaosha.jd.com/","content":"京东JD.COM-专业的综合网上购物商城，销售超数万品牌、4020万种商品，囊括家电、手机、电脑、服装、图书、母婴、个护、食品、旅游等13大品类。"},
            {"durl": "draw_yoo/shangxin.jpg","title":"淘宝上新","lianjie":"https://www.taobao.com/","content":"淘宝网 - 淘宝商城,想得到就淘得到的亚洲大型网上购物平台！淘宝网-淘宝商城,'惠'聚各类时尚风格,流行元素,超高性价比,让你畅享潮流,魅力爆棚!"},
            {"durl": "draw_yoo/shishang.jpg","title":"1号店","lianjie":"http://www.yhd.com","content":"1号店网上超市,最经济实惠的网上购物商城,用鼠标逛超市,不用排队,方便实惠送上门,网上购物新生活。"},
            {"durl": "draw_yoo/shouji.jpg","title":"360手机","lianjie":"http://i360mall.com/","content":"360商城是一家智能硬件体验平台。这里能免费试用智能硬件,查看全方位试用报告,还可以预约、抢购并体验新上市的智能产品。"},
            {"durl": "draw_yoo/songshu.jpg","title":"三只松鼠","lianjie":"http://www.3songshu.com/","content":"三只松鼠成立于2012年,是中国当前最大的互联网食品品牌。其坚果系列位居全网销量第一,凭借互联网商业模式为消费者提供更新鲜、品质更优、更具性价比的产品。"},
            {"durl": "draw_yoo/taobao.jpg","title":"淘宝","lianjie":"http://www.taobao.com/","content":"淘宝网 - 淘宝商城,想得到就淘得到的亚洲大型网上购物平台！淘宝网-淘宝商城,'惠'聚各类时尚风格,流行元素,超高性价比,让你畅享潮流,魅力爆棚!"},
            {"durl": "draw_yoo/waimai.jpg","title":"百度外卖","lianjie":"http://waimai.baidu.com","content":"百度地图外卖是由百度打造的一个专业外卖服务平台,覆盖众多优质外卖商家,提供方便快捷的网上外卖订餐服务。"},
            {"durl": "draw_yoo/xiaomi.jpg","title":"小米","lianjie":"http://www.xiaomi.com","content":"小米公司是一家专注于高端智能手机、互联网电视以及智能家居生态链建设的创新型科技企业。"},
            {"durl": "draw_yoo/xingbake.jpg","title":"星巴克","lianjie":"https://www.starbucks.com.cn/","content":"我们希望通过每一杯咖啡,将星巴克的咖啡传承与独一无二的咖啡体验带给我们的顾客。"},
            {"durl": "draw_yoo/yangshi.jpg","title":"央视新闻","lianjie":"http://news.cctv.com/","content":"央视网(cctv.com)新闻频道是面向全球，多语种，多终端的立体化新闻信息共享平台。以视听与互动为核心，24小时不间断提供最快捷，最权威，最全面，最丰富的新闻视听与互动服务，传播中国，了解世界。"},
            {"durl": "draw_yoo/yingke.jpg","title":"映客直播","lianjie":"http://www.inke.cn/","content":"映客直播,实时、高清、快捷、流畅的视频直播平台,中国全新的视频社交媒体,明星大咖、网络红人、时尚娱乐、高颜值、视频交友等尽在映客直播app。"},
            {"durl": "draw_yoo/yunyinyue.jpg","title":"网易云音乐","lianjie":"http://music.163.com/","content":"网易云音乐是一款专注于发现与分享的音乐产品,依托专业音乐人、DJ、好友推荐及社交功能,为用户打造全新的音乐生活。"},
            {"durl": "draw_yoo/baidu.jpg","title":"百度","lianjie":"http://baidu.com","content":"全球最大的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。"},
            {"durl": "draw_yoo/huawei.jpg","title":"华为","lianjie":"http://www.huawei.com/cn/","content":"华为目前已成长为年销售规模超5216亿人民币的世界500强公司.面向未来,华为将与众多伙伴开放合作,努力共建全联接世界."},
            {"durl": "draw_yoo/maidanglao.jpg","title":"麦当劳","lianjie":"http://www.mcdonalds.com.cn/","content":"麦当劳中国官方网站。发现麦当劳的经典汉堡、当期新品、优惠活动和最新优惠券,了解麦当劳企业和招聘信息,还可以寻找附近门店,登陆麦乐送订餐。"},
            {"durl": "draw_yoo/miaosha.jpg","title":"京东秒杀","lianjie":"https://miaosha.jd.com/","content":"京东JD.COM-专业的综合网上购物商城，销售超数万品牌、4020万种商品，囊括家电、手机、电脑、服装、图书、母婴、个护、食品、旅游等13大品类。"},
            {"durl": "draw_yoo/shangxin.jpg","title":"淘宝上新","lianjie":"https://www.taobao.com/","content":"淘宝网 - 淘宝商城,想得到就淘得到的亚洲大型网上购物平台！淘宝网-淘宝商城,'惠'聚各类时尚风格,流行元素,超高性价比,让你畅享潮流,魅力爆棚!"},
            {"durl": "draw_yoo/shishang.jpg","title":"1号店","lianjie":"http://www.yhd.com","content":"1号店网上超市,最经济实惠的网上购物商城,用鼠标逛超市,不用排队,方便实惠送上门,网上购物新生活。"},
            {"durl": "draw_yoo/shouji.jpg","title":"360手机","lianjie":"http://i360mall.com/","content":"360商城是一家智能硬件体验平台。这里能免费试用智能硬件,查看全方位试用报告,还可以预约、抢购并体验新上市的智能产品。"},
            {"durl": "draw_yoo/songshu.jpg","title":"三只松鼠","lianjie":"http://www.3songshu.com/","content":"三只松鼠成立于2012年,是中国当前最大的互联网食品品牌。其坚果系列位居全网销量第一,凭借互联网商业模式为消费者提供更新鲜、品质更优、更具性价比的产品。"},
            {"durl": "draw_yoo/taobao.jpg","title":"淘宝","lianjie":"http://www.taobao.com/","content":"淘宝网 - 淘宝商城,想得到就淘得到的亚洲大型网上购物平台！淘宝网-淘宝商城,'惠'聚各类时尚风格,流行元素,超高性价比,让你畅享潮流,魅力爆棚!"},
            {"durl": "draw_yoo/waimai.jpg","title":"百度外卖","lianjie":"http://waimai.baidu.com","content":"百度地图外卖是由百度打造的一个专业外卖服务平台,覆盖众多优质外卖商家,提供方便快捷的网上外卖订餐服务。"},
            {"durl": "draw_yoo/xiaomi.jpg","title":"小米","lianjie":"http://www.xiaomi.com","content":"小米公司是一家专注于高端智能手机、互联网电视以及智能家居生态链建设的创新型科技企业。"},
            {"durl": "draw_yoo/xingbake.jpg","title":"星巴克","lianjie":"https://www.starbucks.com.cn/","content":"我们希望通过每一杯咖啡,将星巴克的咖啡传承与独一无二的咖啡体验带给我们的顾客。"},
            {"durl": "draw_yoo/yangshi.jpg","title":"央视新闻","lianjie":"http://news.cctv.com/","content":"央视网(cctv.com)新闻频道是面向全球，多语种，多终端的立体化新闻信息共享平台。以视听与互动为核心，24小时不间断提供最快捷，最权威，最全面，最丰富的新闻视听与互动服务，传播中国，了解世界。"},
            {"durl": "draw_yoo/yingke.jpg","title":"映客直播","lianjie":"http://www.inke.cn/","content":"映客直播,实时、高清、快捷、流畅的视频直播平台,中国全新的视频社交媒体,明星大咖、网络红人、时尚娱乐、高颜值、视频交友等尽在映客直播app。"},
            {"durl": "draw_yoo/yunyinyue.jpg","title":"网易云音乐","lianjie":"http://music.163.com/","content":"网易云音乐是一款专注于发现与分享的音乐产品,依托专业音乐人、DJ、好友推荐及社交功能,为用户打造全新的音乐生活。"},
            {"durl": "draw_yoo/baidu.jpg","title":"百度","lianjie":"http://baidu.com","content":"全球最大的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。"}
        ],
        "tag": [
            {"durl": "draw_yoo/final/chang4.png","title":"聚划算","lianjie":"https://ju.taobao.com/","content":"淘宝聚划算是团购的一种形式，由淘宝网官方开发平台，并由淘宝官方组织的一种线上团购活动形式。"},
            {"durl": "draw_yoo/final/chang5.png","title":"虎牙直播","lianjie":"http://www.huya.com/","content":"虎牙直播是中国领先的互动直播平台,可提供同时300万人在线高清观看、赛事直播与游戏直播,热门手游直播等。"},
            {"durl": "draw_yoo/final/chang3.png","title":"vivo","lianjie":"http://www.vivo.com.cn/","content":"nihao"},
            {"durl": "draw_yoo/final/chang4.png","title":"baidu","lianjie":"http://baidu.com","content":"nihao"},
            {"durl": "draw_yoo/final/chang5.png","title":"baidu","lianjie":"http://baidu.com","content":"nihao"},
            {"durl": "draw_yoo/final/chang6.png","title":"baidu","lianjie":"http://baidu.com","content":"nihao"},
            {"durl": "draw_yoo/final/chang7.png","title":"baidu","lianjie":"http://baidu.com","content":"nihao"},
            {"durl": "draw_yoo/final/chang2.png","title":"baidu","lianjie":"http://baidu.com","content":"nihao"},
            {"durl": "draw_yoo/final/chang1.png","title":"baidu","lianjie":"http://baidu.com","content":"nihao"},
            {"durl": "draw_yoo/final/chang6.png","title":"baidu","lianjie":"http://baidu.com","content":"nihao"},
            {"durl": "draw_yoo/final/chang5.png","title":"baidu","lianjie":"http://baidu.com","content":"nihao"},
            {"durl": "draw_yoo/final/chang1.png","title":"baidu","lianjie":"http://baidu.com","content":"nihao"},
            {"durl": "draw_yoo/final/chang2.png","title":"baidu","lianjie":"http://baidu.com","content":"nihao"},
            {"durl": "draw_yoo/final/chang3.png","title":"baidu","lianjie":"http://baidu.com","content":"nihao"},
            {"durl": "draw_yoo/final/chang4.png","title":"baidu","lianjie":"http://baidu.com","content":"nihao"}
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
                            <a href="javascript:;" class="message-tou" style="background-image:url('${d.durl}');background-position:center center;background-size:cover;"></a>
                                <span class="message-txt">${d.title}</span>
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
                                 <div class="details-txt">${d.content}</div>
                            </div>
                            <a href="${d.lianjie}" class="index-link">链接</a>
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
                             <a href="javascript:;" class="message-tou" style="background-image:url('${d.durl}');background-position:center center;background-size:cover;"></a>
                                <span class="message-txt">${d.title}</span>
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
                                 <div class="details-txt">${d.content}</div>
                            </div>
                            <a href="${d.lianjie}" class="index-link">链接</a>
                        </div>
                        </div>`);
                        }
                    } else if (type == 'tag') {
                        var color = this.Rc();
                        var obj = $(`<div class="box_mar tag_tip" style="width: 300px;height: 150px; background-image:url('${d.durl}');background-position:center center;background-size:cover;">

                    <div class="index-hover index-tagHover">
                    <a href="javascript:;" class="index-message">信息</a>
                      <!-- 信息-->
                            <div class="message-box tag-messageBox">
                            <p>
                            <a href="javascript:;" class="message-tou" style="background-image:url('${d.durl}');background-position:center center;background-size:cover;"></a>
                                <span class="message-txt">${d.title}</span>
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
                                 <div class="details-txt">${d.content} </div>
                            </div>
                    <a href="${d.lianjie}" class="index-link">链接</a>
                    </div>
                    </div>`);
//                      obj.css('background', color);
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
    })
})