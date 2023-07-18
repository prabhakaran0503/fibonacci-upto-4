
var n=prompt("Enter The Number")

var a=0;
var b=1;
for(let i=1; i<=n;i++)
{
c=a+b;
a=b;
b=c;
}
document.write(c);