import { createSlice } from "@reduxjs/toolkit";
import { MARKETPLACE } from "../../app/shared/MARKETPLACE";

const initialState = {
    itemsArray: MARKETPLACE
}

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = {
                id: state.itemsArray.length + 1,
                ...action.payload
            }
            state.itemsArray.push(newItem)
        }
    }
})

export const marketplaceReducer = itemsSlice.reducer

export const { addItem } = itemsSlice.actions

export const selectAllItems = state => state.marketplace.itemsArray

export const selectItemById = id => state => state.marketplace.itemsArray.find(s => s.id === id)