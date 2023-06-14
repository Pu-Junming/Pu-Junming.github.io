/* 手机侧边栏默认不展开 */
/**
 * var mobile_sidebar_menus = document.getElementById("sidebar-menus");
if (mobile_sidebar_menus) {
    var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
        "menus_item_child"
    );
    var menus_expand = mobile_sidebar_menus.getElementsByClassName("expand");
    for (var i = 0; i < menus_item_child.length; i++) {
        menus_item_child[i].style.display = "none";
    }
} 
 */

// 禁止右键及F12等事件
function forbidden_control() {
    $.extend({
        message: function(a) {
            var b = {
                title: "",
                message: "操作成功",
                time: "3000",
                type: "success",
                showClose: !0,
                autoClose: !0,
                onClose: function() {}
            };
            "string" == typeof a && (b.message = a), "object" == typeof a && (b = $.extend({}, b, a));
            var c, d, e, f = b.showClose ? '<div class="c-message--close">×</div>' : "",
                g = "" !== b.title ? '<h2 class="c-message__title">' b.title "</h2>" : "",
                h = '<div class="c-message animated animated-lento slideInRight"><i class=" c-message--icon c-message--' b.type '"></i><div class="el-notification__group">' g '<div class="el-notification__content">' b.message "</div>" f "</div></div>",
                i = $("body"),
                j = $(h);
            d = function() {
                j.addClass("slideOutRight"), j.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    e()
                })
            }, e = function() {
                j.remove(), b.onClose(b), clearTimeout(c)
            }, $(".c-message").remove(), i.append(j), j.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                j.removeClass("messageFadeInDown")
            }), i.on("click", ".c-message--close", function(a) {
                d()
            }), b.autoClose && (c = setTimeout(function() {
                d()
            }, b.time))
        }
    }),
    document.onkeydown = function(e) {
        if (123 == e.keyCode || e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode) || (e.ctrlKey && 85 === e.keyCode)) return $.message({
            message: "采用本站js及css请注明来源，禁止商业使用！",
            title: "你真坏，不能打开控制台喔!",
            type: "error",
            autoHide: !1,
            time: "3000"
        }), event.keyCode = 0, event.returnValue = !1, !1
    }, document.oncontextmenu = function() {
        return $.message({
            message: "采用本站js及css请注明来源，禁止商业使用！",
            title: "不能右键/长按喔！",
            type: "error",
            autoHide: !1,
            time: "3000"
        }), !1
    }
}

// 禁止右键及F12等事件
document.onkeydown = function (e) {
    if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) return btf.snackbarShow("你真坏，不能打开控制台喔!"), event.keyCode = 0, event.returnValue = !1, !1
};
