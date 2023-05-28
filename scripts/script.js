function btnClick(type){
    let arr1 = ["e", "i", "a", "o", "u"];
    let arr2 = ["enter", "imes", "ai",  "ober", "ufat"];
    
    let search, replace;
    if (type === "encrypt") search = arr1, replace = arr2;
    else if (type === "decrypt") search = arr2, replace = arr1;
    
    let txt = document.getElementById("inputTxt").value;
    let resultTxt = txt;
    
    for(i=0;i<search.length;i++){
        resultTxt = resultTxt.split(search[i]).join(replace[i]);
    }
    
    changeOutput(resultTxt);
}

function changeOutput(txt){
    document.getElementById("noMsg").style.display = "none";
    document.getElementById("outTxt").style.display = "block";
    document.getElementById("outTxt").innerText = txt;
    document.getElementById("copyBtn").style.display = "block";
}

function txtCopy(){
    let txt = document.getElementById("outTxt").innerText;
    navigator.clipboard.writeText(txt);
    document.getElementById("copyBtn").innerText = "Copiado";
    setTimeout(() => {
      document.getElementById("copyBtn").innerText = "Copiar";
    }, "1000");
}