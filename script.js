const scriptURL = 'https://script.google.com/macros/s/AKfycbzvqWUzayaz6VbeU8Ozd-LL9YRcuGc4ZeHHIDHZyDpjBqI_0elG9El57m_PytYAg-jX/exec';
  
document.getElementById('contactForm').addEventListener('submit', function (e) {
e.preventDefault();

const form = new FormData(this);
const submitBtn = this.querySelector('button[type="submit"]');
submitBtn.disabled = true;
submitBtn.textContent = 'Sending...';

fetch(scriptURL, {
method: 'POST',
body: form
})
.then(response => response.text())
.then(result => {
  alert('✅ Message sent!');
  this.reset();
})
.catch(error => {
  console.error('❌ Submission error:', error.message);
  alert('❌ Failed to send message. Please try again.');
})
.finally(() => {
  submitBtn.disabled = false;
  submitBtn.textContent = 'Send';
});
});
