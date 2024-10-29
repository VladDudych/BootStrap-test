 function sendAutoReply() {
    const email = document.getElementById('email').value;
    
    fetch(`https://formspree.io/f/YOUR_FORM_ID`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _replyto: email, message: 'Bamboozled, Bamboozled' })
    }).then(response => {
      if (response.ok) {
        alert('Повідомлення надіслано!');
      } else {
        alert('Помилка при відправці.');
      }
    });
  }
