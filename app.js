const reviews = [
  {
    id: 1,
    name: "Kalash",
    job: "UX DESIGNER",
    img: "https://res.cloudinary.com/daqzbqk6k/image/upload/v1626353744/sample.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat natus ipsum sunt minima, cum laudantium temporibus tempore eos repellendus iusto.",
  },
  {
    id: 2,
    name: "Shubham ",
    job: "CYBER SECURITY",
    img: "https://res.cloudinary.com/daqzbqk6k/image/upload/v1626353902/WIN_20210106_19_11_09_Pro_anhz2y.jpg",
    text: "kkkkkLorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat natus ipsum sunt minima, cum laudantium temporibus tempore eos repellendus iusto.",
  },
  {
    id: 3,
    name: "Mohit",
    job: "ANDROID DEVELOPER",
    img: "https://res.cloudinary.com/daqzbqk6k/image/upload/v1626353915/WIN_20200922_14_25_37_Pro_yr7avg.jpg",
    text: "mmmmmLorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat natus ipsum sunt minima, cum laudantium temporibus tempore eos repellendus iusto.",
  },
  {
    id: 4,
    name: "Kunal",
    job: "WEB DESIGNER",
    img: "https://res.cloudinary.com/daqzbqk6k/image/upload/v1626353940/IMG20190907142141_p4i0sn.jpg",
    text: "aaaaaLorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat natus ipsum sunt minima, cum laudantium temporibus tempore eos repellendus iusto.",
  },
];

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')


let currentItem = 0

window.addEventListener('DOMContentLoaded', function(){
   showPerson()
})

//SHow person based on item

function showPerson(){
  const item = reviews[currentItem]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

//SHow next person

nextBtn.addEventListener('click', function(){
  currentItem++
  if(currentItem > reviews.length-1){
    currentItem = 0
  }
  showPerson(currentItem)
})

prevBtn.addEventListener('click', function(){
  currentItem--
  if(currentItem < 0){
    currentItem = reviews.length-1
  }
  showPerson(currentItem)
})

randomBtn.addEventListener('click', function(){
  // let randomValue = Math.floor(Math.random * reviews.length)
  currentItem = Math.floor(Math.random() * reviews.length)
  showPerson(currentItem)
})
