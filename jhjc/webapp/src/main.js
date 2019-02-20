(function(){
    $(document).ready(function() {
        var indexMsgTimer = false;
        $('#fullpage').fullpage({
            css3: true,
            sectionsColor: ['#FAF0EB', '#FAF0EB', '#FAF0EB', '#FAF0EB'],
            anchors: ['index', 'example', 'page3', 'support'],
            menu: '.g-menu',
            navigation: true,
            navigationColor: '#000',
            scrollOverflow: true,
            easing: "easeInCubic",
            navigationPosition: 'right',
            navigationTooltips: ['fullPage.js', 'Powerful'],
            easingcss3: 'cubic-bezier(0.77, 0, 0.175, 1)',
            onLeave: function(index, nextIndex) {
                if(index == 1){
                    startAnimation('.index-left', 'out')
                }
            },
            afterLoad: function(anchorLink, index){
                if(index == 1){
                    showMessage();
                    startAnimation('.index-left', 'in');
                }
            },
            afterRender: function(){
                //
            }
        });

        function showMessage(){
            clearInterval(indexMsgTimer);
            var indexMsg = $('.index-msg');
            indexMsg.text('');
            var message = '我公司是一家专业生产压模地坪和透水地坪以及彩色混凝土材料的专业地坪厂家。\
            压模地坪也叫作压花地坪、压印地坪、印花地坪，根据其特色款式也包括了仿石地坪、仿木地坪、仿砖地坪；\
            透水地坪也叫作透水混凝土、透水砼、多孔混凝土，是一种新型的生态环保具有透水性能的地坪产品，具有丰富的色彩，\
            所以也被人们称之为彩色透水混凝土。多年以来，河北虹彩建材科技有限公司一直以质量为根本，以客户为主体的理念，\
            为客户提供优质的地坪材料，企业实力雄厚，供货充足，全国六大生产基地就近发货，无论是在货源、质量、价格、\
            发货速度方面都有着独特的优势，欢迎广大客户咨询与合作。';
            var counter = 1;
            indexMsgTimer = setInterval(function() {
                indexMsg.text(message.substring(0, counter++));
                if (counter == message.length + 1) {
                    clearInterval(indexMsgTimer);
                }
            }, 50);
        }
        function startAnimation(selector, type){
            var el = $(selector);
            if(type == 'in'){
                el.removeClass('out');
                el.addClass("in");
                // var newOne = $(selector).clone(true);
                // el.replaceWith(newOne);
            }else{
                el.removeClass('in');
                el.addClass("out");
            }
        }
    });
})();