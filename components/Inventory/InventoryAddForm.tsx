'use client';
import React, { useCallback, useState } from 'react';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';

const InventoryAddForm = () => {
 const [formData, setFormData] = useState({
    sport: '',
    itemType: '',
    quantity: 0,
    supplier: '',
    stockInDate: '',
 });

 const handleChange = (e) => {
    const { name, value } = e.target;
    // Handle date input as a string to avoid Date object issues with JSON
    const finalValue = name === 'stockInDate' ? value : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: finalValue,
    }));
 };

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendUrl}/inventory`, { // Adjusted endpoint for inventory
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Inventory item added successfully');
        // Optionally, redirect or clear the form after successful submission
        setFormData({
          sport: '',
          itemType: '',
          quantity: 0,
          supplier: '',
          stockInDate: '',
        });
      }
    } catch (error) {
      console.error('Error occurred while adding inventory item', error);
    }
 };

 return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Add Inventory Item</h2>
          <form onSubmit={handleSubmit}>
            <input type="text"
              name="sport"
              value={formData.sport}
              onChange={handleChange}
              placeholder="Sport"
              className="input input-bordered w-full max-w-xs" />

            <input type="text"
              name="itemType"
              value={formData.itemType}
              onChange={handleChange}
              placeholder="Item Type"
              className="input input-bordered w-full max-w-xs" />

            <input type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Quantity"
              className="input input-bordered w-full max-w-xs" />

            <input type="text"
              name="supplier"
              value={formData.supplier}
              onChange={handleChange}
              placeholder="Supplier"
              className="input input-bordered w-full max-w-xs" />

            <input type="date"
              name="stockInDate"
              value={formData.stockInDate}
              onChange={handleChange}
              placeholder="Stock-In Date"
              className="input input-bordered w-full max-w-xs" />

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </section>
    </>
 );
};

export default InventoryAddForm;
