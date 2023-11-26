import React, { useState, useMemo } from 'react';

const ItemList = ({ items }) => {
  // State to store the selected items
  const [selectedItems, setSelectedItems] = useState([]);

  // Calculate the total price using useMemo
  const totalPrice = useMemo(() => {
    console.log('Calculating total price...');

    // Perform the expensive calculation only when items or selectedItems change
    return selectedItems.reduce((total, itemId) => {
      const selectedItem = items.find(item => item.id === itemId);
      return total + selectedItem.price;
    }, 0);
  }, [items, selectedItems]);

  // Function to handle item selection
  const handleSelectItem = itemId => {
    setSelectedItems(prevSelectedItems => [...prevSelectedItems, itemId]);
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleSelectItem(item.id)}>Select</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
      
    </div>
  );
};

const UseMemoHook = () => {
  // Sample list of items
  const items = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
  ];

  return <ItemList items={items} />;
};

export default UseMemoHook;
