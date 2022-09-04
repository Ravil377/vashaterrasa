$(".js-range-slider").ionRangeSlider({
    onChange: function (data) {
        // Called every time handle position is changed

        console.log(data.from);
    },
});
