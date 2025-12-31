// Lấy các phần tử
const letter = document.getElementById('letter');
const modal = document.getElementById('message-modal');
const closeBtn = document.getElementsByClassName('close')[0];

// Biến cho YouTube player
let player;

// Hàm callback khi API ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'z4o33kF8DKg',
        playerVars: {
            'autoplay': 1,
            'loop': 1,
            'playlist': 'z4o33kF8DKg'
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// Hàm khi player ready
function onPlayerReady(event) {
    event.target.playVideo();
}

// Khi nhấp vào lá thư, hiển thị modal
letter.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Khi nhấp vào nút đóng, ẩn modal
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Khi nhấp bên ngoài modal, ẩn modal
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});