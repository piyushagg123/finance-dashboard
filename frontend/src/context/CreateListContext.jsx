// CreateListContext.js
import React, { createContext, useContext, useState } from "react";

const CreateListContext = createContext();

export const useCreateListContext = () => useContext(CreateListContext);

export const CreateListProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemGroups, setSelectedItemGroups] = useState([]);
  const [lists, setLists] = useState([]);

  const addSelectedItem = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  const removeSelectedItem = (item) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem !== item)
    );
  };

  const createItemGroup = () => {
    setSelectedItemGroups((prevGroups) => [...prevGroups, selectedItems]);
    setSelectedItems([]); // Clear selected items after creating a group
  };

  const createList = (name, items, isProtected, password) => {
    const newList = {
      name: name,
      items: items,
      isProtected: isProtected,
      password: isProtected ? password : "", // Store password only if list is protected
    };
    setLists((prevLists) => [...prevLists, newList]);
  };

  return (
    <CreateListContext.Provider
      value={{
        selectedItems,
        addSelectedItem,
        createItemGroup,
        selectedItemGroups,
        removeSelectedItem,
        createList,
        setSelectedItems,
        lists,
      }}
    >
      {children}
    </CreateListContext.Provider>
  );
};
