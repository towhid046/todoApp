export const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_TASK':
            if (payload === '') {
                alert('Add Something please!');
                return state; // Return the current state without modifying it further
            } else {
                return {
                    ...state,
                    tasks: [...state.tasks, { payload, id: Math.random() * 10002 }],
                };
            }

        case 'GET_INPUT':
            return {
                ...state,
                input: payload,
            };

        case 'DELETE_ITEM': {
            const filteredItem = state.tasks.filter((item) => item.id !== payload);
            return {
                tasks: filteredItem,
            };
        }

        default:
            return state; // Return the current state for unknown actions
    }
};