export const selectPage = state => state.page.pageNumber;
export const selectTotal = state => state.page.total;
export const selectUsers = state => state.users.items;
export const selectIsLoading = state => state.users.isLoading;
export const selectError = state => state.users.error;
