
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Card = {
  id: number;
  title: string;
};

type CardsState = {
  cards: Card[];
};

const initialState: CardsState = {
  cards: [
    { id: 1, title: 'Todo' },
    { id: 2, title: 'Doing' },
    { id: 3, title: 'Done' },
  ],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    reorderCards: (state, action: PayloadAction<{ sourceIndex: number; destinationIndex: number }>) => {
      const [movedCard] = state.cards.splice(action.payload.sourceIndex, 1);
      state.cards.splice(action.payload.destinationIndex, 0, movedCard);
    },
  },
});

export const { reorderCards } = cardsSlice.actions;

export default cardsSlice.reducer;
