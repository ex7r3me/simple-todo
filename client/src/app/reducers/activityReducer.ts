const activities = (state:any = [], action:any) => {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      return [
        ...state,
        {
          text: action.text
        }
      ]
    default:
      return state
  }
}
export default activities