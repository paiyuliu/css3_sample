$('.ball').on('webkitAnimationStart', function(e) {
    handler(e);
});

$('.ball').on('webkitAnimationEnd', function(e) {
    handler(e);
});

$('.ball').on('webkitAnimationIteration', function(e) {
    handler(e);
});


function handler(e) {
    switch (e.type) {
        case 'webkitAnimationStart':
            console.log('Start', e.originalEvent.elapsedTime);
            break;
        case 'webkitAnimationEnd':
            console.log('End', e.originalEvent.elapsedTime);
            break;
        case 'webkitAnimationIteration':
            console.log('New loop', e.originalEvent.elapsedTime);
            break;
    }
}

$('.ball').addClass('start');