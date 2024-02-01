class App
{
    runAplication()
    {
        console.log("hello world");
        let uibutton = document.getElementById("myButton")
        uibutton.addEventListener("click", (e)=>
        {
           const para = document.createElement("p")
           const node = document.createTextNode("This is new")
           para.appendChild(node)
           document.body.appendChild(para)
        });
        let uibutton2 = document.getElementById("myButton2")
        uibutton2.addEventListener("click", (e)=>
        {
           const para = document.createElement("p")
           const header = document.createElement("h1")
           const image = document.createElement("img");
           image.src = "img";
           image.width = 500; 
           image.height = 600; 
           const paranode = document.createTextNode("This is new")
           const headernode = document.createTextNode("or not?")
           para.appendChild(paranode)
           header.appendChild(headernode)
           document.body.appendChild(header)
           document.body.appendChild(para)
           document.body.appendChild(image)
        });
        let clickdiv = document.getElementById("clickableDiv")
        clickdiv.style.backgroundColor = 'lightblue';
        clickdiv.addEventListener("click", (e)=>{
            const header = document.createElement("h1")
            header.textContent = "Clicked a div";
            document.body.appendChild(header);
        })
    }
}