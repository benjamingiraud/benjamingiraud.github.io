$(document).ready(function() {

    $(".code-container").slideDown("500", "swing", function() {
        startTyping();
        $(".typing-container").show("slide", {direction: 'left'}, 500, function() {
            $("nav").animate({ opacity: 1 }, 1000, function() {
                $(this).sticky({topSpacing:0});
                $("#presentation").show("slide", {direction: 'right'}, 500);
            });
        });
    });
    $('nav').on('sticky-start', function() {
        $(this).children().css('box-shadow', '0 0 5px black');
        $(this).children().css('background-color', 'rgba(0, 0, 0, 0.75)');
        $(this).children().css('color', 'white');
    });
    $('nav').on('sticky-end', function() {
        $(this).children().css('box-shadow', 'none');
        $(this).children().css('background-color', 'white');
        $(this).children().css('color', 'black');
    });
    $(".menu").on("click", function() {
        var self = $(this);
        $(".menu").not($(this)).each(function() {
            $(this).removeClass("selected");
            $("#" + $(this).attr("id").replace('-trigger', '')).slideUp("750", "swing", function() {
            });
        });
        self.addClass("selected");
        $("#" + self.attr("id").replace('-trigger', '')).fadeIn("1500", "swing", function() {
            location = "#" + self.attr("id").replace('-trigger', '');
        });
    });

    function startTyping() {
        $("#typing").typeIt({
            loop: true,
            speed: 100,
            callback: function() {
            }
        })
        .tiType("Junior Developpe")
        .tiPause(250)
        .tiDelete(2)
        .tiPause(250)
        .tiType("er")
        .tiPause(500)
        .tiDelete()
        .tiPause(250)
        .tiType("Web & Software")
        .tiPause(500)
        .tiDelete()
        .tiType("Back-end & Front-end")
        .tiPause(250)
        .tiDelete();
    }
});
