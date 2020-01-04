
const socketMain = (io)=>{
  const history = []
  io.of('/').on('connection',socket =>{
    console.log('Server: server connected...')
    // ************************************************
    updateMemberInTheRoom()
    socket.emit('historyUpdate',history)


    socket.on('formSubmitted',data=>{
      history.push(data)
     // send data back to client
     io.of('/').emit('textfromServer',data)
    })

    socket.on('disconnect',()=>{
      updateMemberInTheRoom()
    })
    
  })


  function updateMemberInTheRoom(){
    io.of('/').clients((err,clients)=>{
      io.of('/').emit('updtedMember',clients.length)
    })
  }
  


}

module.exports = socketMain