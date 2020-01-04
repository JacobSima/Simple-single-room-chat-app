const socket = io('http://localhost:5000/')

socket.on('connect',()=>{
  console.log('Client connected...')

  socket.on('idSent',data=>{
  })

  // **********************************
  socket.on('historyUpdate',history=>{
    msgContainer.innerHTML =''
    if(history.length > 0){
      history.forEach(his=>{
        // UI Job
       appendMessage(his.user,PERSON_IMG_1,'left',his.text)
      })
    }
  })


  socket.on('updtedMember',cleints=>{
    activeMember.innerText = `active(${cleints})`
  })


  form.addEventListener('submit',msgSent)
  function msgSent(e){
    e.preventDefault() 
    if(inputText.value === '') {return}
    socket.emit('formSubmitted',{user:userName,text:inputText.value})
  
    // UI Job
    //clear input field
    inputText.value = ''
  }

  socket.on('textfromServer',data=>{
    // UI Job
    // update the DOM with new message
     appendMessage(data.user,PERSON_IMG_1,'left',data.text)
  })
  
})

