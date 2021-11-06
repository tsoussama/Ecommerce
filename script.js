const tabItems = document.querySelectorAll('.header ul a');

for(var i = 0; i < tabItems.length; i++){
    tabItems[i].addEventListener('click', function(){
        tabItems.forEach(function(li){
            li.classList.remove('active');
        })
        this.classList.add('active');
    })
};

// p1
const face1 = document.querySelector('#face1');
const p1 = document.querySelectorAll('#p1 img');
p1.forEach(img =>img.addEventListener('click', (e) =>face1.src = e.target.src));
// p2
const face2 = document.querySelector('#face2');
const p2 = document.querySelectorAll('#p2 img');
p2.forEach(img =>img.addEventListener('click', (e) =>face2.src = e.target.src));
// p3
const face3 = document.querySelector('#face3');
const p3 = document.querySelectorAll('#p3 img');
p3.forEach(img =>img.addEventListener('click', (e) =>face3.src = e.target.src));