function showLoginPrompt() {
  var modal = document.getElementById('loginModal');
  modal.style.display = 'flex';
}
function handleLogin() {
  let accountNumber = document.getElementById("accountNumber").value;
  let pin = document.getElementById("exampleInputPassword1").value;
  if (accountNumber && pin) {
    if (accountNumber === "123456789" && pin === "1234") {
      alert("Login successful!");
      window.location.href = "./accountdetails.html";
    } else {
      alert("Invalid account number or PIN.");
    }
  } else {
    alert("Please enter both account number and PIN.");
  }
}


//Open and close Models
function debitWindowbtn() {
  var modal = document.getElementById('debitWindowModel');
  modal.style.display = 'flex';
}

function creditWindowbtn() {
  var modal = document.getElementById('creditWindowModel');
  modal.style.display = 'flex';
}
function closeModal() {
  document.getElementById("debitWindowModel").style.display = "none";
  document.getElementById("creditWindowModel").style.display = "none";

}
function closeloginModal() {
  document.getElementById("loginModal").style.display = "none";
}


//assign  localStorage
if (!localStorage.getItem('Avlbal')) {
  localStorage.setItem('Avlbal', '1000');
}

function updateBalanceDisplay() {
  const balance = localStorage.getItem('Avlbal');
  document.getElementById('Avlbal').innerText = `${balance}  /- Rs`;
}

//Deposit window
function creditAdd() {
  const creditAmount = parseFloat(document.getElementById('creditAmount').value);
  let crPin = document.getElementById("crAcPin").value;

  if (crPin != 1234) {
    alert('Please enter valid pin code');
    return;
  }

  if (isNaN(creditAmount) || creditAmount <= 0) {
    alert("Please enter a valid amount to credit.");
    return;
  }

  let currentBalance = parseFloat(localStorage.getItem('Avlbal'));
  currentBalance += creditAmount;
  localStorage.setItem('Avlbal', currentBalance);

  updateBalanceDisplay();
  alert(`${creditAmount} Rs credited to your account.`);
  closeModal();
}



//Withdrawal Window
function debitAdd() {
  const debitAmount = parseFloat(document.getElementById('debitAmount').value);
  let dbPin = document.getElementById("dbAcPin").value;

  if (dbPin != 1234) {
    alert('Please enter valid pin code');
    return;
  }

  if (isNaN(debitAmount) || debitAmount <= 0) {
    alert("Please enter a valid amount to debit.");
    return;
  }

  let currentBalance = parseFloat(localStorage.getItem('Avlbal'));
  if (currentBalance < debitAmount) {
    alert("Insufficient funds.");
    return;
  }
  currentBalance -= debitAmount;
  localStorage.setItem('Avlbal', currentBalance);

  updateBalanceDisplay();
  alert(`${debitAmount} Rs debited from your account.`);
  closeModal();
}



window.onload = function () {
  updateBalanceDisplay();
};

function closeModal() {
  document.getElementById("debitWindowModel").style.display = "none";
  document.getElementById("creditWindowModel").style.display = "none";
}
