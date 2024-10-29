
function showNotification(msg) {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    } else {
        new Notification("Pomodoro", {
                            body: msg
                            //icon: "icon.png" // Optional: add an icon URL
                        });

    }
  }


export { showNotification }
