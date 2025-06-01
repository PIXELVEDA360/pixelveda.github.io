// Navigation SPA logic
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

function showPage(hash) {
  pages.forEach(page => {
    if (page.id === hash) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
  navLinks.forEach(link => {
    if (link.getAttribute('href') === '#' + hash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.substring(1) || 'home';
  showPage(hash);
});

// On page load, show initial section
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.substring(1) || 'home';
  showPage(hash);
});

// Contact Form (Dummy submission)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-status').textContent = 'Thank you for your message! We will get back to you soon.';
  this.reset();
});

const messagesDiv = document.getElementById('ai-bot-messages');
const form = document.getElementById('ai-bot-input-row');
const input = document.getElementById('ai-bot-input');

// Simulate a bot reply (replace this with real API call)
async function fetchBotReply(userMsg) {
  // Example: Replace with OpenAI API fetch or your backend
  // For now, use hardcoded/witty responses for common coding topics
  if (/hello|hi|hey/i.test(userMsg)) {
    return "Hello! 👋 Ask me any coding question.";
  }
  if (/javascript|js/i.test(userMsg)) {
    return "JavaScript is a versatile language for web development. Need code examples?";
  }
  if (/css/i.test(userMsg)) {
    return "CSS helps style your pages. Want tips on layouts or animations?";
  }
  if (/html/i.test(userMsg)) {
    return "HTML structures your web content. What do you want to build?";
  }
  if (/python/i.test(userMsg)) {
    return "Python is great for beginners and pros! Need help with syntax or libraries?";
  }
  if (/error|bug|issue/i.test(userMsg)) {
    return "Describe your error or bug in detail and I’ll try to help debug!";
  }
  // Default fallback:
  return "I'm just a demo bot right now! Connect me to an AI API for real answers. 😊";
}

// Add message to chat
function appendMessage(msg, sender='bot') {
  const div = document.createElement('div');
  div.className = `ai-bot-message ai-bot-${sender}`;
  div.innerText = msg;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userMsg = input.value.trim();
  if (!userMsg) return;
  appendMessage(userMsg, 'user');
  input.value = '';
  appendMessage('Thinking...', 'bot');
  const reply = await fetchBotReply(userMsg);
  // Remove 'Thinking...' placeholder
  messagesDiv.lastChild.remove();
  appendMessage(reply, 'bot');
});

// Greet on load
appendMessage("Hi! I'm your coding assistant. Ask me any programming question.", 'bot');
</script>
<!-- AI Bot Chat Widget End -->
