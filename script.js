let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const saveInput = document.getElementById("input-btn")
const deleteEl = document.getElementById("delete-btn")
const saveTab = document.getElementById("save-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

function render(leads){
let listItems = ""
for(let i=0;i<leads.length;i++){
  // let li = document.createElement("li")
  //   li.textContent = myLeads[i]
  //   ulEl.append(li)
  // listItems += "<li> <a target_blank href='"+myLeads[i]+"'>"+myLeads[i]+"</a> </li>"
  listItems +=`
  <li>
  <a target_'blank' href=${leads[i]}> 
  ${leads[i]}
  </a>
  </li>`
}
ulEl.innerHTML = listItems
}
deleteEl.addEventListener("click",function(){
  localStorage.clear()
  myLeads =[]
  render(myLeads)
})

saveInput.addEventListener("click",function(){
  myLeads.push(inputEl.value)
  inputEl.value=''
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  render(myLeads)
})

saveTab.addEventListener("click",function(){
  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  render(myLeads)
  }) 
})
 