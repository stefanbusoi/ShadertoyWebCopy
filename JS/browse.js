window.onload=(event)=>{
    const promise = fetch("Shaders.json");
    promise.then(function(response){
        t=response.text();
        return t;
    }).then(function(data){
        obj=JSON.parse(data)
        cardHolder=document.getElementById("cards")
        for(let i in obj["items"]){
            console.log(obj["items"][i]["title"])
            var canvas=document.createElement("canvas");
            canvas.setAttribute("class","glslCanvas");
            canvas.setAttribute("data-fragment-url",obj["items"][i]["shader-url"]);
            var card=document.createElement("li");
            card.className="card";
            var title=document.createElement("div");
            title.className="top";
            var titleText=document.createElement("h2");
            var inner=document.createElement("div");
            inner.className="inner";
            titleText.textContent=obj["items"][i]["title"];
            var description=document.createElement("div");
            description.className="description";
            var descriptionText=document.createElement("p")
            descriptionText.textContent=obj["items"][i]["description"];
            description.appendChild(descriptionText)
            
            title.appendChild(titleText);
            card.appendChild(title);
            inner.appendChild(canvas);
            inner.appendChild(description);
            card.appendChild(inner);
            cardHolder.appendChild(card);
        }
        
        loadAllGlslCanvas();
    });

}

function loadAllGlslCanvas() {
    var list = document.getElementsByClassName('glslCanvas');
    if (list.length > 0) {
        window.glslCanvases = [];
        for (var i = 0; i < list.length; i++) {
            var sandbox = new GlslCanvas(list[i]);
            if (sandbox.isValid) {
                window.glslCanvases.push(sandbox);
            }
        }
    }
}
