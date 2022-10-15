import { MARKETPLACE } from "../../app/shared/MARKETPLACE";

export const selectAllItems = () => MARKETPLACE;

export const selectItemById = id => MARKETPLACE.find(s => s.id === id);