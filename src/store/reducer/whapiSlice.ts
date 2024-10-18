import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface WhapiProps {
  participants: string[];
  groupChatName: string;
}

const initialState: WhapiProps = {
  participants: [],
  groupChatName: "",
};

const whapiSlice = createSlice({
  name: "participants",
  initialState,
  reducers: {
    addParticipants: (state, action: PayloadAction<string>) => {
      const newParticipant = action.payload;
      state.participants = [...state.participants, newParticipant];
    },
    deleteParticipants: (state, action: PayloadAction<string>) => {
      const newParticipant = action.payload;
      state.participants = state.participants.filter(
        (phonNumber: string) => phonNumber != newParticipant,
      );
    },
    setGroupChatName: (state, action: PayloadAction<string>) => {
      state.groupChatName = action.payload;
    },
  },
});

export const { addParticipants, deleteParticipants, setGroupChatName } =
  whapiSlice.actions;

export default whapiSlice.reducer;
