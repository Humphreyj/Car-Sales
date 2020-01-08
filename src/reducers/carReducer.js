const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      
    },
    features: [],
    additionalFeatures: [
      { id: 1, name: 'V-8 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const carReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_FEATURE':
            console.log('Added Feature!', action.payload)
            console.log(state.features)
            return {...state,features: [...state.features, action.payload],
                    state,additionalPrice: state.additionalPrice + action.payload.price
              
            };
        case 'REMOVE_FEATURE': 
            console.log('removed feature', action.payload)
            return {...state,features: state.features.filter(item => item.id !== action.payload.id),
                    state,additionalPrice: state.additionalPrice - action.payload.price            
            }
        default:
            return state;
    }
}