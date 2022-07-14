function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
       return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    
    }
    return null
  }

  let employees=[];


  function validate(){
    let id=document.getElementById('empId').value;
    let empName=document.getElementById('empName').value;
    let mobNo=formatPhoneNumber(document.getElementById('mobNo').value)
    let dob=document.getElementById('dob').value;
    let gender=document.getElementById('gender').value;
    let department=document.getElementById('department').value;
    let bDate=new Date(dob);
    let dd=bDate.getMonth()+"-"+bDate.getDate()+"-"+bDate.getFullYear()

   let employee={
      empId:id,
      empName:empName,
      mobNo:mobNo,
      gender:gender,
      dob:dd,
      department:department,
    }

    
    employees.push(employee)
    displayTable()
    alert("Employee Added succesfully")
  }

  function displayTable(){
    let tbody=document.getElementById("t_body")
    
   if(tbody.childElementCount>0){
    let trs=document.getElementsByClassName('tr')
    for(let i=0;i<=trs.length;i++){
      trs[i].remove()
    }
   }
   createtable();

  }

  function createtable(){
    for(let i=0;i<=employees.length;i++){
     
      let tbody= document.getElementById("t_body")
      let tr=document.createElement("tr")
      let td1=document.createElement("td")
      let td2=document.createElement("td")
      let td3=document.createElement("td")
      let td4=document.createElement("td")
      let td5=document.createElement("td")
      let td6=document.createElement("td")

      tr.classList="tr";

      td1.innerHTML=employees[i].empId;
      td2.innerHTML=employees[i].empName;
      td3.innerHTML=employees[i].mobNo;
      td4.innerHTML=employees[i].gender;
      td5.innerHTML=employees[i].dob;
      td6.innerHTML=employees[i].department;

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td6);

    tbody.appendChild(tr)
    }
  }
  function searchname(){
    let  keyword=document.getElementById("search").value;
    let result=document.getElementById('result');
    if(result.hasChildNodes()){
      result.removeChild()
    }

    for(let i=0;i<=employees.length;i++){

        console.log(employees[i].empName);

      if (keyword===employees[i].empName) {
     
        console.log(employees[i].empName);

        let p=document.createElement("p");
        p.innerHTML=employees[i].empName
        document.getElementById('result').appendChild(p)
      }
    }
    
  }