function changeCss(){
   
    
   var vize=50;
   var final=80;
   var ortalama=0;

   
   ortalama = ((vize * 20) / 100) + ((final * 80) / 100);

   document.getElementById('sayi').innerHTML="Öğrencinin ortalaması= " + ortalama;
}
function saydir(){
   var i=0;
   for (let i=0; i<=40; i++){
      document.getElementById('saydir').innerHTML=i;
   }


}