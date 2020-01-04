//  get and getAll for queryselector and queryselectorAll
const get = (selector,root = document)=> root.querySelector(selector)
const getAll = (selector,root=document)=> root.querySelectorAll(selector)


// formate date function
const formatDate =(date)=>{
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}