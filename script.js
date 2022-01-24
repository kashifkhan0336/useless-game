document.body.onload = function () {
  let step = 0;
  let numbers = [10, 20, 30, 40, 50, 60];
  let main_content = `<div class="container con-1">
    <h1>
      Think a
      <span class="animate__animated animate__pulse animate__infinite"
        >random</span
      >
      number
    </h1>
    <h4>then press enter</h4>
  </div>
  <script>alert('lol')</script>`;
  let main_content1 = `<div class="container con-2">
  <h1>
    Now add the number to the number
    <span class="animate__animated animate__pulse animate__infinite"
      >itself</span
    >
  </h1>
  <h4>then press enter</h4>
</div>
`;
  let main_content2 = `<div class="container con-3">
<h1>
  Now add 
  <span class="animate__animated animate__pulse animate__infinite"
    >${(window.t = numbers[Math.floor(Math.random() * 4)])}</span
  >
  to that number 
</h1>
<h4>then press enter</h4>
</div>`;
  let main_content3 = `<div class="container con-4">
<h1>
  Now remove  
  <span class="animate__animated animate__pulse animate__infinite"
    >half</span
  >
  of that number 
</h1>
<h4>then press enter</h4>
</div>`;
  let main_content4 = `<div class="container con-5">
<h1>
  Now subtract the number you choosed in   
  <span class="animate__animated animate__pulse animate__infinite"
    >first step</span
  >
  from that number 
</h1>
<h4>then press enter</h4>
</div>`;
  let main_content5 = `<div class="container con-6">
<h1>
  The remaining sum is 
  <span  class="animate__animated animate__pulse animate__infinite final"
    >${window.t / 2}</span
  >
</h1>
<h4>then press enter</h4>
</div>`;
  document.querySelector("main").innerHTML = main_content;
  document.querySelector("body").addEventListener("keyup", (event) => {
    if (event.keyCode == 13) {
      event.preventDefault();
      if (document.querySelector(".container").classList.contains("con-1")) {
        document.querySelector("main").innerHTML = main_content1;
      } else {
        if (document.querySelector(".container").classList.contains("con-2")) {
          document.querySelector("main").innerHTML = main_content2;
        } else {
          if (
            document.querySelector(".container").classList.contains("con-3")
          ) {
            document.querySelector("main").innerHTML = main_content3;
          } else {
            if (
              document.querySelector(".container").classList.contains("con-4")
            ) {
              document.querySelector("main").innerHTML = main_content4;
            } else {
              if (
                document.querySelector(".container").classList.contains("con-5")
              ) {
                document.querySelector("main").innerHTML = main_content5;
              }
            }
          }
        }
      }
    }
  });
};
