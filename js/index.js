$(function(){
    // Control();
    //代码初始化
    var size = $(".img li").size();
    for(var i = 1;i<=size;i++){
        var li = "<li></li>";
        $(".num").append(li);
    }

    $(".img li").eq(0).show();
    $(".num li").eq(0).addClass();
    $(".num li").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        i = index;
        $(".img li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
    });

    var i = 0;
    var t = setInterval(move,1500);
    function move(){
        i++;
        if(i == size){
            i = 0;
        }
        $(".num li").eq(i).addClass("active").siblings().removeClass("active");
        $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);
    }
    function moveL(){
        i--;
        if(i == -1){
            i = size-1;
        }
        $(".num li").eq(i).addClass("active").siblings().removeClass("active");
        $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);
    }

    $(".banner .left").click(function(){
        moveL();
    });
    $(".banner .right").click(function(){
        move();
    });
    $(".banner").hover(function(){
        clearInterval(t);
    },function(){
        t = setInterval(move,1500);
    });
    // 搜索功能
    $('.search').on('click',function () {
        $('.searchPart').toggleClass('active');
        Control();
    });
    // part1中图片变化功能
    $(".img-group li").hover(function(){
        //当鼠标经过li的时候，执行下面的事件
        $(this).stop(true).animate({width:"358px"},100).siblings().stop(true).animate({width:"280px"},100);
        $(this).addClass('active').siblings().removeClass('active');
        $(".img-group li").find('.introduction').hide();
        $(this).find('.introduction').show();
    })
    // part2
    $('.help-group li').on('click',function (e) {
        e.preventDefault();
        $('.help-group li a').removeClass('active');
        $(this).children('a').addClass('active');
        var n=$(this).index();
        $('.video a.sp').each(function (i,a) {
            var imgs=$('.video a.sp');
            if(n==i){
                $('.video a.sp').hide();
                $(imgs[i]).css('display','inline-block');
            }
        });
        // console.log(imgs);
    });
    // 服务案例
    $('.service-item a').on('click',function () {
        $(this).addClass('active').siblings().removeClass('active')
    });
    // 伸缩框的背景颜色控制
    function Control() {
        var h=$('.searchPart').width();
        // console.log(h);
        if(h==183){
            $('.content').css('background','#fff');
        }else if(h==30){
            $('.content').css('background','#F2F2F2');
        }
    }
    // 返回顶部
    var getDiv=document.getElementById('returntop');
    getDiv.onclick=function () { window.scrollTo(0,0); }
    window.onscroll=function(){
        var h=$(window).scrollTop();
        if(h>900){
            getDiv.style.display="block";
        }else{
            getDiv.style.display="none";
        }
    }
    function getWinSize(){
        var winHeight=window.innerHeight,winWidth=window.innerWidth;
        if(document.documentElement.clientHeight){
            winHeight=document.documentElement.clientHeight;
            winWidth=document.documentElement.clientWidth;
        }else{
            winHeight=document.body.clientHeight;
            winWidth=document.body.clientWidth;
        }
        var height=winHeight-50;
        var width=winWidth-58;
        getDiv.style.top=height+"px";
        getDiv.style.left=width+"px";
    }
    getWinSize();
    window.onresize=getWinSize;
})