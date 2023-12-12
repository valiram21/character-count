const textarea1 = document.getElementById('textarea')
const totalcharacter1 = document.getElementById('total-character');
const remainingcharacter1 = document.getElementById('remaining-character');
// const textarea2=textarea1.value


textarea1.addEventListener('keyup', () => {
    updateCounter()
});

function updateCounter() {
    totalcharacter1.innerText = textarea1.value.length;
    remainingcharacter1.innerText = textarea1.getAttribute('maxlength') - textarea1.value.length;

}
updateCounter();