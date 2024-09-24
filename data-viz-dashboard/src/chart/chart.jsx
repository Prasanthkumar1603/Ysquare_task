import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'; 
 
const ShopAdmin = () => {
  const [todaySales, setTodaySales] = useState(0);
  const [salesDetails, setSalesDetails] = useState([]);
  const [currentStock, setCurrentStock] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [customers, setCustomers] = useState([]);
  const [oldCustomerCount, setOldCustomerCount] = useState(0);
  const [newCustomerCount, setNewCustomerCount] = useState(0);

  useEffect(() => {
    fetchTodaySales();
    fetchSalesDetails();
    fetchCurrentStock();
    fetchCustomers();
  }, []);

  const fetchTodaySales = async () => {
    const response = await axios.get('http://localhost:5000/sales/today');
    setTodaySales(response.data.reduce((total, sale) => total + sale.price, 0));
  };

  const fetchSalesDetails = async () => {
    const response = await axios.get('http://localhost:5000/sales/details');
    setSalesDetails(response.data);
    setTotalSales(response.data.reduce((total, sale) => total + sale.price, 0));
  };

  const fetchCurrentStock = async () => {
    const response = await axios.get('http://localhost:5000/stock');
    setCurrentStock(response.data.reduce((total, stock) => total + stock.quantity, 0));
  };

  const fetchCustomers = async () => {
    const response = await axios.get('http://localhost:5000/customers');
    setCustomers(response.data);
    const oldCustomers = response.data.filter(customer => customer.type === 'Old').length;
    const newCustomers = response.data.filter(customer => customer.type === 'New').length;
    setOldCustomerCount(oldCustomers);
    setNewCustomerCount(newCustomers);
  };

   const salesGraphData = {
    labels: salesDetails.map(sale => sale.itemDescription),
    datasets: [
      {
        label: 'Sales ($)',
        data: salesDetails.map(sale => sale.price),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

   const customerChartData = {
    labels: ['Old Customers', 'New Customers'],
    datasets: [
      {
        data: [oldCustomerCount, newCustomerCount],
        backgroundColor: ['#36A2EB', '#FF6384'],
       },
    ],
  };

  return (
    <div className="content">
      <h1>Shop Admin Page</h1>
 <hr />
      <div className="top-boxes">
        <div className="box">
          <h3>Current Stock</h3>
          <p>{currentStock} Items</p>
        </div>
        <div className="box">
          <h3>Today's Sales</h3>
          <p>${todaySales.toFixed(2)}</p>
        </div>
        <div className="box">
          <h3>Total Sales</h3>
          <p>${totalSales.toFixed(2)}</p>
        </div>
      </div>

      <div className="chart-section">
        <div className="chart-container1">
          <h2>Sales Graph</h2>
          <Line data={salesGraphData} />
        </div>

        <div className="chart-container">
          <h2>Customer Distribution</h2>
          <Doughnut data={customerChartData} />
        </div>
      </div>

      <h2>Sale Details</h2>
      <table className="sales-table">
        <thead>
          <tr>
            <th>Item No</th>
            <th>Description</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {salesDetails.map(sale => (
            <tr key={sale._id}>
              <td>{sale.itemNo}</td>
              <td>{sale.itemDescription}</td>
              <td>${sale.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShopAdmin;
