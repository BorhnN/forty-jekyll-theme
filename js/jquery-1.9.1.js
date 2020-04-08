$(document).on("pagecreate", function () {
    $("#foo").on("click", function () {
        // close button
        var closeBtn = $('<a href="#" data-rel="back" class="ui-btn-right ui-btn ui-btn-b ui-corner-all ui-btn-icon-notext ui-icon-delete ui-shadow">Close</a>');

        // text you get from Ajax
        var content = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing. Morbi convallis sem et dui sollicitudin tincidunt.</p>";

        // Popup body - set width is optional - append button and Ajax msg
        var popup = $("<div/>", {
            "data-role": "popup"
        }).css({
            width: $(window).width() / 2.5 + "px",
            padding: 5 + "px"
        }).append(closeBtn).append(content);

        // Append it to active page
        $.mobile.pageContainer.append(popup);

        // Create it and add listener to delete it once it's closed
        // open it
        $("[data-role=popup]").popup({
            dismissible: false,
            history: false,
            theme: "b",
            /* or a */
            positionTo: "window",
            overlayTheme: "b",
            /* "b" is recommended for overlay */
            transition: "pop",
            beforeposition: function () {
                $.mobile.pageContainer.pagecontainer("getActivePage")
                    .addClass("blur-filter");
            },
            afterclose: function () {
                $(this).remove();
                $(".blur-filter").removeClass("blur-filter");
            },
            afteropen: function () {
                /* do something */
            }
        }).popup("open");
    });
});
