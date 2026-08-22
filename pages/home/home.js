function logout() {
	firebase
		.auth()
		.signOut()
		.then(() => {
			window.location.href = "../../index.html";
		})
		.catch(() => {
			alert("Erro ao fazer logOut");
		});
}

findTransactions();

function findTransactions() {
	setTimeout(() => {
		addTransactionsToScreen(fakeTransactions);
	}, 1000);
}

function addTransactionsToScreen(transactions) {
	const orderedList = document.getElementById("transactions");

	transactions.forEach((transaction) => {
		const li = document.createElement("li");
		li.classList.add(transaction.type);

		const date = document.createElement("p");
		date.innerHTML = formatDate(transaction.date);
		li.appendChild(date);

		const money = document.createElement("p");
		money.innerHTML = formatMoney(transaction.money);
		li.appendChild(money);

		orderedList.appendChild(li);
	});
}

function formatDate(date) {
	return new Date(date).toLocaleDateString("pt-br");
}

function formatMoney(money) {
	return `${money.currency} ${money.value.toFixed(2)}`
}

const fakeTransactions = [
	{
		type: "expense",
		date: "2022-01-04",
		money: {
			curency: "R$",
			value: 10,
		},
		transactionType: "Supermercado",
	},
	{
		type: "income",
		date: "2022-01-03",
		money: {
			curency: "R$",
			value: 5000,
		},
		transactionType: "Salário",
		description: "Empresa A",
	},
	{
		type: "expense",
		date: "2022-01-10",
		money: {
			curency: "EUR",
			value: 50,
		},
		transactionType: "HortiFrut",
	},
	{
		type: "expense",
		date: "2022-01-15",
		money: {
			curency: "USD$",
			value: 500,
		},
		transactionType: "Steam",
	},
];
