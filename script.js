
function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
     return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  
  }
  return null
}


function validate(){
  let empId=document.getElementById('empId').value;
  let empName=document.getElementById('empName').value;
  let mobNo=formatPhoneNumber(document.getElementById('mobNo').value)
  let dob=document.getElementById('dob').value;
  let gender=document.getElementById('gender').value;
  let department=document.getElementById('department').value;
  let bDate=new Date(dob);
  let dd=bDate.getMonth()+"-"+bDate.getDate()+"-"+bDate.getFullYear()

  
  if(empId!="" && empName!="" && mobNo!="" && dob!="" ){
   createtable(empId,empName,mobNo,gender,dd,department)
  }
  else{
      alert("Plz Fill All Details");
  }
}

function createtable(empId,empName,mobNo,gender,dd,department){
  let tbody= document.getElementById("t_body")
  
  let tr=document.createElement("tr")
  let td1=document.createElement("td")
  let td2=document.createElement("td")
  let td3=document.createElement("td")
  let td4=document.createElement("td")
  let td5=document.createElement("td")
  let td6=document.createElement("td")

  td1.innerHTML=empId;
  td2.innerHTML=empName;
  td3.innerHTML=mobNo;
  td4.innerHTML=gender;
  td5.innerHTML=dd;
  td6.innerHTML=department;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);

  tbody.appendChild(tr)
}

searchEmp=()=>{
let keyword=document.getElementById("searchbox").value.toUpperCase();
let tbody= document.getElementById("t_body");
let tr=tbody.getElementsByTagName('tr');

for(let i=0;i<tr.length;i++){
  let td=tr[i].getElementsByTagName('td')[1];
  if(td){
      let textvalue=td.textContent || td.innerHTML;
      if(textvalue.toUpperCase().indexOf(keyword)>-1){
          tr[i].style.display="";
      }else{
          tr[i].style.display="none";
      }
  }
}

}