import Table from "./components/table/Table";

const App = () => {
  const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 }
  ];

  const averageIncome = netIncomes.reduce((total, item) => total + item.income, 0) / netIncomes.length;

  return (
    <div>
      <h1>Tabla de Ingresos Netos</h1>
      <Table netIncomes={netIncomes} />
      <p>Promedio de Ingreso Neto: {averageIncome}</p>
    </div>
  );
};

export default App;