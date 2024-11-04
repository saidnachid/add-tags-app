let input = document.querySelector("input");
let list = document.querySelector("ul");
let tagNum = document.querySelector(".count-tag");
let removeAll = document.querySelector('.remove-all')

let tags = [];
let maxTags = 10;
function countTag() {
  tagNum.innerHTML = `${maxTags - tags.length} tags are remaining`;
}

countTag()

function createTags() {
  document.querySelectorAll("ul li").forEach((item) => item.remove());
  tags.reverse().forEach((tag) => {
    let tagItem = `<li>${tag} <i class='bx bx-x' onclick="removeTag(this,'${tag}')"></i></li>`;
    list.insertAdjacentHTML("afterbegin", tagItem);
  });
  countTag();
}

input.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    if (tags.length < 10) {
      let tag = input.value.trim();
      if (tag.length > 1 && !tags.includes(tag)) {
        tags.push(tag);
        createTags();
      }
    }
    input.value = "";
  }
});

function removeTag(element, tag) {
  let index = tags.indexOf(tag);
  tags.splice(index, 1);
  countTag();
  element.parentElement.remove();
}


removeAll.addEventListener('click',()=>{
  document.querySelectorAll('ul li').forEach(item=>item.remove())
  tags=[]
  countTag()
})