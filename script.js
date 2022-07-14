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
      empid:id,
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
    for(let i=0;i<=employees.length;i++){
      let tbody=document.getElementById("t_body")
      console.log(tbody);
      let td1=document.createElement("td")
      let td2=document.createElement("td")
      let td3=document.createElement("td")
      let td4=document.createElement("td")
      let td5=document.createElement("td")
      let td6=document.createElement("td")

      td1.innerHTML=employees[i].empid
      td2.innerHTML=employees[i].empName
      td3.innerHTML=employees[i].mobNo
      td4.innerHTML=employees[i].gender
      td5.innerHTML=employees[i].dob
      td6.innerHTML=employees[i].department

      tbody.appendChild(td1);
      tbody.appendChild(td2);
      tbody.appendChild(td3);
      tbody.appendChild(td4);
      tbody.appendChild(td5);
      tbody.appendChild(td6);

      document.appendChild(tbody)
    }

  }