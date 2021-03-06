let initState = {
  editProfile: false,
  name: 'Some Dev',
  bio: 'Click edit to set up your profile',
  link: ['https://github.com','https://linkedin.com','name@company.com'],
  skill: [{title:"Just Joined!"}],
  tempSkills: [{title:"Just Joined!"}],
  chat: [''],
  active: false
}

const profileReducer = (state = initState, action) => {
  switch(action.type){
    case 'STATUS':
      return {
        ...state,
        active: action.payload
      }

    case 'CANCEL':
      return {
        ...state,
        tempSkills: state.skill,
        editProfile: false
      }

    case 'SAVE':
      return {
        ...state,
        editProfile: false,
        name: action.payload.name,
        bio: action.payload.bio,
        link: action.payload.link,
        skill: action.payload.tempSkills,
        tempSkills: action.payload.tempSkills
      }

    case 'TEMP':
      return {
        ...state,
        tempSkills: action.payload
      }

    case 'EDIT':
      return {
        ...state,
        editProfile: true
      }
    
    case 'LOAD':
      return{
        ...state,
        name: action.payload.name,
        bio: action.payload.bio,
        link: action.payload.link,
        skill: action.payload.skill,
        active: action.payload.active
      }

    default:
      return state    
  }
}

export default profileReducer;