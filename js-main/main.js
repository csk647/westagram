const submitForm_1 = document.querySelector(".submitForm_1");
const submitForm_2 = document.querySelector(".submitForm_2");
const addComment_2 = submitForm_2.querySelector("textarea")
const addComment_1 = submitForm_1.querySelector("textarea");
const addNewCommentList_1 = document.querySelector(".addNewCommentList_1");
const addNewCommentList_2 = document.querySelector(".addNewCommentList_2");

const NEWCOMMENT = "comment";

let comment = [];


function deleteComment(event){
    const btn = event.target;
    const deleteSpan = btn.parentNode;
  addNewCommentList_1.removeChild(deleteSpan);
  // const div = btn.parentNode;
  // addNewCommentList_1.removeChild(div);
}


// function removeElement(event) {
//     // Removes an element from the document
//     var element = document.getElementsByTagName(div);
//     element.remove(element);
// }


function pushComment_1(text){
  const div = document.createElement("div");
  const spanId = document.createElement("span");
  const spanText = document.createElement("span");
  const delBtn = document.createElement("button");

  const addClassAtSpan = spanId.classList.add("newCommentMustHavePadding");
  const addClassAtText = spanText.classList.add("addClassForNewComment");
  const divClass = div.classList.add("divClass");

  const addHeart = document.createElement("img");
  const addClassAtHeart = addHeart.classList.add("heartOfNewComment");

  addHeart.src= "heart.png";
  delBtn.innerText = "x";
  delBtn.classList.add("deleteClass_1")
  spanText.appendChild(delBtn);
  
  spanId.innerText = "sunset_aeri ";
  spanText.innerText = text;
  div.appendChild(delBtn);
  div.appendChild(addHeart);
  div.appendChild(spanId);
  div.appendChild(spanText);
  addNewCommentList_1.appendChild(div);
  const commentObj = {
    spanId : "sunset_aeri",
    text: text
  }
   comment.push(commentObj);
  delBtn.addEventListener("click", deleteComment);
  // 이거는 기존에 하던 방식으로 댓글 삭제 만드는 것
  
}

function pushComment_2(text) {
    const div = document.createElement("div");
    const spanId = document.createElement("span");
    const spanText = document.createElement("span");
    const addClassAtSpan = spanId.classList.add("newCommentMustHavePadding");
    const addClassAtText = spanText.classList.add("addClassForNewComment");
    const divClass = div.classList.add("divClass")
    const addHeart = document.createElement("img");
    const addClassAtHeart = addHeart.classList.add("heartOfNewComment");
    addHeart.src = "heart.png";
    const newId = comment.length + 1;
    spanId.innerText = "sunset_aeri "
    spanText.innerText = text;
    div.appendChild(addHeart);
    div.appendChild(spanId);
    div.appendChild(spanText);
    addNewCommentList_2.appendChild(div);
    const commentObj = {
        spanId: "sunset_aeri",
        text: text
    }
    comment.push(commentObj);

    div.addEventListener("click", function(e){
      div.remove();
    })
    // 이 3줄은 div를 클릭하면 클릭한 댓글이 사라진다.
}

function handleSubmit_1(event){
   event.preventDefault();
   const currentValue_1= addComment_1.value;
   pushComment_1(currentValue_1);
   addComment_1.value="";
}
function handleSubmit_2(event) {
    event.preventDefault();
    const currentValue_2 = addComment_2.value;
    pushComment_2(currentValue_2);
    addComment_2.value = "";
}

function init(){
  submitForm_1.addEventListener("submit", handleSubmit_1);
  submitForm_2.addEventListener("submit", handleSubmit_2)
}
init();