function scrollToLevel1() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('show'));
    document.getElementById('level1Page').classList.add('show');
}
function scrollToWelcome() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('show'));
    document.getElementById('welcomePage').classList.add('show');
    } 

function scrollToLevel2() {
    let phoneNumber = "";
    while (phoneNumber !== "0963581790") {
        phoneNumber = prompt("Nhập số điện thoại của anh:");

        if (phoneNumber !== "0963581790") {
            alert("Số điện thoại không đúng. Hãy thử lại.");
        }
    }
    document.querySelectorAll('.page').forEach(page => page.classList.remove('show'));
    document.getElementById('level2Page').classList.add('show');
}

function scrollToLevel3() {
    let answer = "";
    const keywords = ["hít", "ngửi", "vú", "sờ"];
    let isCorrect = false;

    while (!isCorrect) {
        answer = prompt("Anh thích làm gì nhất khi ở bên em:");

        for (const keyword of keywords) {
            if (answer.toLowerCase().includes(keyword)) {
                isCorrect = true;
                break;
            }
        }

        if (!isCorrect) {
            alert("Câu trả lời không đúng. Hãy thử lại.");
        }
    }
    document.querySelectorAll('.page').forEach(page => page.classList.remove('show'));
    document.getElementById('level3Page').classList.add('show');
}

function scrollToLevel4() {
    alert("Phía trước nguy hiểm, ai râm sẽ đi tiếp!!!");
    document.querySelectorAll('.page').forEach(page => page.classList.remove('show'));
    document.getElementById('level4Page').classList.add('show');
}

function scrollToPhotoAlbum() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('show'));
    document.getElementById('photoAlbumPage').classList.add('show')
}
function goBackToWelcome() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('show'));
    document.getElementById('welcomePage').classList.add('show');
    } 
document.querySelector('.scroll-right').addEventListener('click', scrollToPhotoAlbum);

// Function to create floating bubbles
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'floating-bubble';
    document.body.appendChild(bubble);

    // Randomize bubble position and size
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.animationDuration = `${5 + Math.random() * 5}s`;
    bubble.style.width = `${20 + Math.random() * 30}px`;
    bubble.style.height = bubble.style.width;

    // Remove bubble after animation
    bubble.addEventListener('animationend', () => {
        document.body.removeChild(bubble);
    });
}

// Create bubbles at random intervals
setInterval(createBubble, 500);

// Event listener for revealing bubble content
document.querySelectorAll('.bubble').forEach(bubble => {
    bubble.addEventListener('click', () => {
        bubble.classList.toggle('active');
    });
});
