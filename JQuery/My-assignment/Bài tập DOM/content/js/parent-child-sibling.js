$().ready(function(){
    $("#directParent").click(function(){
        $("*").removeClass("pick");
        var theCon = $("#nhapThe").val();
        var idCon = $("#nhapId").val();
        var classCon = $("#nhapClass").val();
        if(theCon != "")
            $(theCon).parent().addClass("pick");
        if(idCon != "")
            $(idCon).parent().addClass("pick");
        if(classCon != "")
            $(classCon).parent().addClass("pick");
    });
    $("#allParent").click(function(){
        $("*").removeClass("pick");
        var theCon = $("#nhapThe").val();
        var idCon = $("#nhapId").val();
        var classCon = $("#nhapClass").val();
        if(theCon != "")
            $(theCon).parents().addClass("pick");
        if(idCon != "")
            $(idCon).parents().addClass("pick");
        if(classCon != "")
            $(classCon).parents().addClass("pick");
    });
    $("#idParent").click(function(){
        $("*").removeClass("pick");
        var theCon = $("#nhapThe").val();
        var idCon = $("#nhapId").val();
        if(theCon != "" && idCon != "")
            $(theCon).parents(idCon).addClass("pick");
    });
    $("#classParent").click(function(){
        $("*").removeClass("pick");
        var theCon = $("#nhapThe").val();
        var classCon = $("#nhapClass").val();
        if(theCon != "" && classCon != "")
            $(theCon).parents(classCon).addClass("pick");
    });
    $("#directChild").click(function(){
        $("*").removeClass("pick");
        var theCha = $("#nhapTheCha").val();
        var idCha = $("#nhapIdCha").val();
        var classCha = $("#nhapClassCha").val();
        var theCon = $("#nhapTheCon").val();
        var idCon = $("#nhapIdCon").val();
        var classCon = $("#nhapClassCon").val();
        if(theCon != ""){
            if(theCha != "")
                $(theCha).children(theCon).addClass("pick");
            if(idCha != "")
                $(idCha).children(theCon).addClass("pick");
            if(classCha != "")
                $(classCha).children(theCon).addClass("pick");
        }
        if(idCon != ""){
            if(theCha != "")
                $(theCha).children(idCon).addClass("pick");
            if(idCha != "")
                $(idCha).children(idCon).addClass("pick");
            if(classCha != "")
                $(classCha).children(idCon).addClass("pick");
        }
        if(classCon != ""){
            if(theCha != "")
                $(theCha).children(classCon).addClass("pick");
            if(idCha != "")
                $(idCha).children(classCon).addClass("pick");
            if(classCha != "")
                $(classCha).children(classCon).addClass("pick");
        }
        if(theCon == "" && idCon == "" && classCon == ""){
            if(theCha != "")
                $(theCha).children().addClass("pick");
            if(idCha != "")
                $(idCha).children().addClass("pick");
            if(classCha != "")
                $(classCha).children().addClass("pick");
        }
    });
    $("#findChild").click(function(){
        $("*").removeClass("pick");
        var theCha = $("#nhapTheCha").val();
        var idCha = $("#nhapIdCha").val();
        var classCha = $("#nhapClassCha").val();
        var theCon = $("#nhapTheCon").val();
        var idCon = $("#nhapIdCon").val();
        var classCon = $("#nhapClassCon").val();
        if(theCon != ""){
            if(theCha != "")
                $(theCha).find(theCon).addClass("pick");
            if(idCha != "")
                $(idCha).find(theCon).addClass("pick");
            if(classCha != "")
                $(classCha).find(theCon).addClass("pick");
        }
        if(idCon != ""){
            if(theCha != "")
                $(theCha).find(idCon).addClass("pick");
            if(idCha != "")
                $(idCha).find(idCon).addClass("pick");
            if(classCha != "")
                $(classCha).find(idCon).addClass("pick");
        }
        if(classCon != ""){
            if(theCha != "")
                $(theCha).find(classCon).addClass("pick");
            if(idCha != "")
                $(idCha).find(classCon).addClass("pick");
            if(classCha != "")
                $(classCha).find(classCon).addClass("pick");
        }
        if(theCon == "" && idCon == "" && classCon == ""){
            if(theCha != "")
                $(theCha).find().addClass("pick");
            if(idCha != "")
                $(idCha).find().addClass("pick");
            if(classCha != "")
                $(classCha).find().addClass("pick");
        }
    });
    $("#directSibling").click(function(){
        $("*").removeClass("pick");
        var theChu = $("#nhapTheChu").val();
        var idChu = $("#nhapIdChu").val();
        var classChu = $("#nhapClassChu").val();
        var theAnhEm = $("#nhapTheAnhEm").val();
        var idAnhEm = $("#nhapIdAnhEm").val();
        var classAnhEm = $("#nhapClassAnhEm").val();
        if(theCon != ""){
            if(theCha != "")
                $(theCha).children(theCon).addClass("pick");
            if(idCha != "")
                $(idCha).children(theCon).addClass("pick");
            if(classCha != "")
                $(classCha).children(theCon).addClass("pick");
        }
        if(idCon != ""){
            if(theCha != "")
                $(theCha).children(idCon).addClass("pick");
            if(idCha != "")
                $(idCha).children(idCon).addClass("pick");
            if(classCha != "")
                $(classCha).children(idCon).addClass("pick");
        }
        if(classCon != ""){
            if(theCha != "")
                $(theCha).children(classCon).addClass("pick");
            if(idCha != "")
                $(idCha).children(classCon).addClass("pick");
            if(classCha != "")
                $(classCha).children(classCon).addClass("pick");
        }
        if(theCon == "" && idCon == "" && classCon == ""){
            if(theCha != "")
                $(theCha).children().addClass("pick");
            if(idCha != "")
                $(idCha).children().addClass("pick");
            if(classCha != "")
                $(classCha).children().addClass("pick");
        }
    });
});