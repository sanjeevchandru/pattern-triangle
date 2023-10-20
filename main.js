document.write(" print a number of triangle "+"<br>");
document.write("-------------------------"+"<br>");
let n=parseInt(prompt("Enter a number:"));
for(let i=1;i<=n;i++){
    for(let k=n-1;i<=k;k--){
        document.write("&nbsp"+"&nbsp");
    }
    for(let j=1;j<=i;j++){
        document.write(i);
    }
    for(let l=1;l<=i;l++){
        document.write(i)
    }
    document.write("<br>");
}