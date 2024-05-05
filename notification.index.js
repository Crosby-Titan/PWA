const sendNotificationBtn = document.getElementById("send_notification_btn");

sendNotificationBtn.addEventListener("click", async (event)=>{
    const tokens = await getAllTokens();

    for(let i = 0; i < tokens.length; i++){
        sendNotification(tokens[i].user_token);
    }
});

async function sendNotification(device_token){
    await fetch('https://fcm.googleapis.com/fcm/send', {
        'method': 'POST',
        'headers': {
            'Authorization': 'Bearer AAAAeyoYsSs:APA91bEf14BQ-J4L5ygfVNUJ0iTQgpNyHKDgea9ajNICIYZ0iRvrEPFfoSvyi1Wef2RCBuc96HS67uGjpHrwLJ0cSIDoOoQDNlmRRkqTIfcTnrdJt_qDTeyLZspd5iiaemtcc-COOOCt',
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify({
            'to': device_token,
            'notification': {
                'title': document.getElementById("title").value,
                'body': document.getElementById("description").value
            }
        })
    });
}

async function getAllTokens(){
    const response = await fetch('https://functions.yandexcloud.net/d4e5ons68nu2do178hqu');

    return await response.json();
}