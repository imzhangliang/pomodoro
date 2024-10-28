
function showNotification(msg) {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    } else {
        new Notification("Hello!", {
                            body: "This is a notification message.",
                            //icon: "icon.png" // Optional: add an icon URL
                        });

        alert("time's up");
    }
  }


export { showNotification }
