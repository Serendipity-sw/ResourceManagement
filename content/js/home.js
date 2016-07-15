/**
 * Created by wei on 2016/07/14.
 */

/**
 * 左部菜单滚动条
 * 创建人:邵炜
 * 创建时间:2016年7月14日14:38:35
 */
$("body>.leftArea").mCustomScrollbar();

/**
 * 用户名称点击事件
 * 创建人:邵炜
 * 创建时间:2016年7月15日13:59:32
 */
$(".userArea>.userName").click(function(e){
    $(".userAreaBox").toggle();
    return false;
});

/**
 * 退出按钮点击事件
 * 创建人:邵炜
 * 创建时间:2016年7月15日14:00:39
 */
$(".outBtn").click(function(){
    $(".userAreaBox").toggle();
    return false;
});

/**
 * 关闭用户框事件
 * 创建人:邵炜
 * 创建时间:2016年7月15日14:08:42
 */
$(":not(.userAreaBox):not(.userName)").click(function(){
    $(".userAreaBox").hide();
});

/**
 * 左侧菜单点击展示隐藏事件
 * 创建人:邵炜
 * 创建时间:2016年7月15日14:12:19
 */
$(".leftArea .column>.title").click(function(){
    var showArea=$(this).nextAll();
    showArea.slideToggle("slow");
});
