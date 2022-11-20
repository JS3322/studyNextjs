const notification = document.getElementById('notification-container')

const showNotification = () => {
    notification.classList.add('show')
    setTimeout(() => {
      notification.classList.remove('show')
    }, 2000)
  }

window.addEventListener('keyup', (e) => {
    
    if (true) {
      const letter = e.key
      alert(letter);
      showNotification()
      } else {
          showNotification()
        
      }
    }
  )