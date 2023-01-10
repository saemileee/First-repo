
        // 라이트 박스
        $(".lightgallery").lightGallery( );

        // 버튼을 클릭하면 백그라운드 색상 변경 연습
        $(".night_btn").click(function(){
            $("body").css("background","#333");
        })

        // 탭메뉴
        var $tab_list = $(".tb_menu");
        $tab_list.find("ul ul").hide();
        $tab_list.find("li.active > ul") .show();

        function tabMenu(e){
            e.preventDefault();
            var $this = $(this);
            $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
        }
        $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

        // 배너
        //html 마크업 셋팅 -> CSS 연동 -> 제이쿼리 연동 --> 제이쿼리 호출
        $(".ban").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
        });

        // 갤러리
        $(".gallery_img").slick({
            arrows: false,
            fade: true,
            pauseOnHover: true,
            infinite: true,
            autoplay: true,
            slidesToShow: 1
        });

        $(".play").click(function(){
            $(".gallery_img").slick("slickPlay");
        })

        $(".pause").click(function(){
            $(".gallery_img").slick("slickPause");
        })

        $(".prev").click(function(){
            $(".gallery_img").slick("slickPrev");
        })

        $(".next").click(function(){
            $(".gallery_img").slick("slickNext");
        })

        // // 버튼을 클릭하면 전체 메뉴를 보이게 하세요.
        $(".tit .btn").click(function(e){
            e.preventDefault();
             // #의 기능(새로고침 되면서 스크롤 값이 바뀌는) 깨주는 기능 
        //     1. $("#cont_nav").css("display","block");
        //      // [css.ver] #cont_nav {display:block}
        //     2. $("#cont_nav").show();
        //      //.show() > display:none을 block으로 바꿔주는 method
        //     3. $("#cont_nav").fadeIn();
        //     4. $("#cont_nav").slideDown();
        //     5. $("#cont_nav").fadeToggle();       
            $("#cont_nav").slideToggle(500);        
            $(this).toggleClass("on");
        })

        // 레이어팝업
        $(".layer").click(function(e){
            e.preventDefault();
            $("#layer").css("display", "block");
            //$("#layer").show;
            //$("layer").slideDown();
        })

        $(".close").click(function(e){
            e.preventDefault();
            $("#layer").css("display", "none")
        })

        // 윈도우팝업
        $(".window").click(function(e){
            e.preventDefault();
            // window.open("파일명", "팝업이름", "옵션설정");
            // 옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbar, full-screen
            window.open("popup.html","popup01","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
            //$("#layer").show;
            //$("layer").slideDown();
        })

        