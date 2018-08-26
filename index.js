function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(nested, target){
  return document.getElementById("nested").querySelector(".target");
  
}

function increaseRankBy(n){
  var ranked = document.querySelectorAll(".ranked-list li");
  ranked.forEach(function(li){
    li.innerHTML = parseInt(li.innerHTML) + n;
  });
}

function deepestChild(){
  var gNode = document.getElementById("grand-node");
  function getChildren(element){
    if (element.children.length > 0){
      return getChildren(element.children[0])
    } else {
      return element
    }
  }
  console.log(getChildren(gNode));
  return getChildren(gNode);
}
