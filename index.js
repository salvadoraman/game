let number;
const generate_no=()=>{
    let n1=Math.random();
    let n2=n1*10;

    n2=Math.trunc(n2);
    number=n2;
    number=(number%9)+1;
    console.log(number);
}
const generate_kro_no=()=>{
    document.getElementById("section1").style.display='none';
    document.getElementById("section2").style.display='none';
    document.getElementById("section3").style.display='block';

    setTimeout(()=>{
        generate_no();
        document.getElementById("section1").style.display='block';
        document.getElementById("section2").style.display='block';
        document.getElementById("section3").style.display='none';
    },3000)
}
const check_no=()=>{
    let value=document.querySelector("#field").value;
    let flag=0;
    if(value==number)
    {
        alert("Congratulations!...You won the game");
        flag=1;
    }
    else
    {
        alert("Oops !..You lost the game!...");
    }
    if(flag==0)
    {
        generate_kro_no();
    }
};