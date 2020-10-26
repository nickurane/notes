

function addnote()
{
   
    let text=document.querySelector("#text_note");
    let notes = localStorage.getItem("notes");
    
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
      notesObj.push(text.value);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      text.value="";
      showNotes();
    
}
function  showNotes()
{
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
      html += `
      <div class="card mx-3 my-3" style="width: 18rem;">
      <div class="card-body ">
        <h5 class="card-title">Note ${index+1}</h5>
        <p class="card-text">${element}</p>
        <a href="#" class="btn btn-primary" onclick="delete_note(${index})">Delete note</a>
      </div>
    </div>`;
    });
    let notesElm = document.getElementById("cards");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `<span style="font-style:times;color:white;text-shadow: 3px 3px 5px black">Nothing to show! Use "Add a Note" section above to add notes.<span>`;
  }
}
function delete_note(index) {
    //   console.log("I am deleting", index);
    
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    
      notesObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      showNotes();

    }
    function  search()
    {
      let i=document.getElementById("#stext");
      let intval=stext.value;
      console.log(intval);
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
      let m=[];
      let html = "";
      notesObj.forEach(function(element,index)
       {
        
       
      m=element.split(" ");
      
              
             for(i=0;i<m.length;i++)
             { 
               if(m[i]===intval)
               {
                let html = "";
                notesObj.forEach(function(m, index) {
                  html += `
                  <div class="card mx-3 my-3" style="width: 18rem;">
                  <div class="card-body ">
                    <h5 class="card-title">Note ${index+1}</h5>
                    <p class="card-text">${element}</p>
                    <a href="#" class="btn btn-primary "  onclick="delete_note(${index})">Delete note</a>
                  </div>
                </div>`;
                });
                let notesElm = document.getElementById("cards");
              if (notesObj.length != 0) {
                notesElm.innerHTML = html;
              } else {
                notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
              }
               }
              
              
             }
        
           
       });

    }
    