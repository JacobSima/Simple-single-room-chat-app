// UI variable
const msgContainer = get('.msger-chat')
const form = get('.msger-inputarea')
const inputText = get('.msger-input')
const submitBtn = get('.msger-send-btn')
const activeMember = get('.msger-header-options span')
const currentUser = get('.h3-m')


const userName =  prompt('What is your name?')
currentUser.innerText = userName
const PERSON_IMG_1 = "https://image.flaticon.com/icons/svg/145/145867.svg"
const PERSON_IMG_2 = "https://image.flaticon.com/icons/svg/145/145867.svg"
const PERSON_NAME_1 = "JACOB";
const PERSON_NAME_2 = "JAMES";


const appendMessage = (name,img,side,msg)=>{
  const msgHTML = `
     <div class="msg ${side}-msg">
        <div
         class="msg-img"
         style="background-image: url(${img})"
        ></div>
  
        <div class="msg-bubble">
          <div class="msg-info">
            <div class="msg-info-name" style="text-transform: capitalize">${name}</div>
            <div class="msg-info-time">${formatDate(new Date())}</div>
          </div>
  
          <div class="msg-text">
            ${msg}
          </div>
        </div>
      </div>
  `
  msgContainer.innerHTML += msgHTML 
  msgContainer.scrollTop += 500
}