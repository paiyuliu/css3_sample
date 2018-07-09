// start animation
$('.part2').on('click', function(e) {
    $(this).addClass('move');
});

// revert animation
$('.part2').on('webkitTransitionEnd', function(e) {
    $(this).removeClass('move');
    console.log(e.originalEvent.propertyName); // font-size
    console.log(e.originalEvent.elapsedTime); // 0.4
});
