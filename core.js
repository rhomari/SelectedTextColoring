
const filediag= document.getElementById('openfilediag')
filediag.addEventListener("change", (e)=>{
    let filereader = new FileReader()
    filereader.onload = ()=>{
        document.getElementById('filecontentviewer').innerText=  filereader.result
    }
    filereader.readAsText(e.target.files[0]);
})
function turnRed(){
 
    let selection= window.getSelection() 
    const selRange= selection.getRangeAt(0).cloneRange()

    const docFragment = selRange.extractContents()
    console.log(docFragment)
    let newnode = document.createElement("redmark")
    newnode.appendChild(docFragment)
    selRange.insertNode(newnode)
    
}
