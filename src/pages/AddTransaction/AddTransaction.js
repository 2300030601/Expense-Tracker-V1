import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./AddTransaction.css";

const AddTransaction = () => {
  const [formData, setFormData] = useState({
    type: "expense",
    amount: "",
    category: "",
    date: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Save transaction to localStorage
    const stored = JSON.parse(localStorage.getItem("transactions")) || [];
    const updated = [...stored, formData];
    localStorage.setItem("transactions", JSON.stringify(updated));

    // ✅ Notify BudgetPlanner to reload (same tab + other tabs)
    window.dispatchEvent(new Event("transactionsUpdated"));

    // ✅ Optional alert
    alert("✅ Transaction added successfully!");

    // Reset form
    setFormData({
      type: "expense",
      amount: "",
      category: "",
      date: "",
      note: "",
    });
  };

  return (
    <div className="add-transaction-container">
      <Sidebar />
      <div className="add-transaction-content">
        <h1 className="add-transaction-title">Add New Transaction</h1>
        <p className="add-transaction-subtitle">
          Log your income or expenses to keep track of your finances.
        </p>

        <form className="transaction-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Transaction Type</label>
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>

          <div className="form-group">
            <label>Amount (₹)</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              placeholder="Enter amount"
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              placeholder="e.g. Food, Rent, Shopping"
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Note</label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Optional note..."
              rows="3"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
