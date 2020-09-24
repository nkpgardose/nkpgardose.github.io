console.log(
  "%cFeel free to visit my github page: \nhttps://github.com/nkpgardose.\nCheers 🍻",
  "color: rgb(240, 98, 146); font-size: 24px; font-family: 'Arial Rounded MT Bold';"
);

// const notifChat = document.querySelector("notif")[0]
// notifChat.classList.remove("notif")

function main(sleep) {
  [1, 2, 3, 4, 6, 7, 8, 10].forEach(async (val) => {
    await sleep(1500 * val);
    const elem = document.querySelector(`[data-js-chat-${val}]`);
    const notifElem = document.getElementsByClassName("notif")[0];
    notifElem && notifElem.classList.remove("notif");
    elem.classList.add("show", "notif");
  });
}

const sleep = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });

main(sleep);
