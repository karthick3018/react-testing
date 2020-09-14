const initialState = {name: 'Karthick'}
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FULL_NAME':
      return {
        name: `${state.name} ${'Raja'}`,
      }
    default:
      return state
  }
}

export {reducer}