let a = `  <nav class="flex justify-between items-center px-10 h-10 py-7 border-b-1 solid " >
    <div class="flex gap-4 items-center">
      <img class="h-5 w-8" src="./images/Tailwind logo.png" alt="">
      <div class="text-2xl font-semibold">tailwindcss</div>
      <button class="w-14 rounded-[10px] bg-gray-200 h-5 flex items-center justify-between px-2">v4.1 <i class="fas fa-chevron-down"></i></button>
    </div>

    <div class="flex  h-5 items-center justify-between gap-8">
      <div class="flex border-1 rounded-[10px] w-20 h-5 items-center justify-between bg-gray-200 px-2">
        <i class="fas fa-search text-2"></i>
   
        <div>Ctrl k</div>
      </div>
      <div><a href="#">Docs</a></div>
      <div><a href="#">Blog</a></div>
      <div><a href="#">Showcase</a></div>
      <div class="flex items-center border-1 w-14 bg-blue-300 text-blue-900  justify-center"><a href="#">Plus</a></div>
    </div>

  </nav>`

  document.getElementById("navbar").innerHTML = a;

  let data = [
    {name:"Aayush",rollno:"1",class:"12 Non-Medical",img:"./images/Tailwind logo.png"},
    {name:"Bhageshwar",rollno:"2",class:"12 Non-Medical",img:"./images/Tailwind logo.png"},
    {name:"Karan",rollno:"3",class:"12 Medical",img:"./images/Tailwind logo.png"},
    {name:"Rishab",rollno:"4",class:"12 Medical",img:"./images/Tailwind logo.png"},
  ];

  let bag = "";

  data.map((k)=>{
    return bag+=`  <div class="flex h-100 w-100 items-center justify-between p-2 border-2 solid rounded-[10px] m-7 bg-cyan-300">
    <div class="flex flex-col-reverse text-3xl">
      <h3>Name:${k.name}</h3>
      <h3>Roll no:${k.rollno}</h3>
      <h3>Class:${k.class}</h3>
    </div>



  

  

    <div>
      <img class="h-30 w-30" src="${k.img}" alt="">

    </div>
  </div>`
})


document.getElementById("card").innerHTML=bag;