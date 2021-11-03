const initialState = {
    total: 0,
    totalPrice: 0,
    items: {
        'Fried Spring Rolls': {
            num: 0,
            img: 'https://www.araioflight.com/wp-content/uploads/2021/03/Traditional-food-of-Nepal-National-dish-cuisine.jpg',
            title: 'Thakali Khana Set',
            price: '21.95',
            description: 'goat, chicken or vegetable',
            meal: 'appetizer'
        },
        'Pani Puri': {
            num: 0,
            img: 'https://cdn.stunningnepal.com/wp-content/uploads/2019/11/Nepali-PaniPuri-1024x1024.jpg',
            title: 'Pani Puri',
            price: '4.95',
            description: 'skewered chicken or beef with a peanut sauce',
            meal: 'appetizer'
        },
        'Mo:Mo': {
            num: 0,
            img: 'https://i1.wp.com/asiatimes.com/wp-content/uploads/2017/04/Plateful_of_Momo_in_Nepal.jpg',
            title: 'Mo:Mo',
            price: '14.75',
            description: 'Nepalese dumpling, comes in buff, chicken or vegetable',
            meal: 'appetizer'
        },
        'Sell-Roti': {
            num: 0,

            img: 'https://cdn.tasteatlas.com//images/dishes/9b16317d2d8e4dfeb20e1d0e20497cf5.jpg?w=375&h=280',
            title: 'Fresh sellroti',
            price: '3.95',
            description: 'with shrimp in a tamarind sauce',
            meal: 'appetizer'
        },
        'Fried Nepali Fish': {
            num: 0,
            img: 'http://www.gfcookingclub.com/wp-content/uploads/2012/06/fish_fry_small.jpg',
            title: 'Fried Nepali Fish',
            price: '12.50',
            description: 'with a plum sauce',
            meal: 'appetizer'
        },
        'Duck Choila': {
            num: 0,
            img: 'https://www.chefspencil.com/wp-content/uploads/choila.jpg',
            title: 'Duck choila',
            price: '18.95',
            description: 'glazed and grilled marinated chicken',
            meal: 'appetizer'
        },
        'Khaja Set': {
            num: 0,
            img: 'https://lh4.googleusercontent.com/-9RVnw7daF7E/Tt_LUL1MiRI/AAAAAAAAAY0/m_HgPE5X7IM/s1600/Newarithali.jpg',
            title: 'Khaja Set',
            price: '17.95',
            description: 'khaja set comes in chicken, chiura and others',
            meal: 'main'
        },
        'Bara Set': {
            num: 0,
            img: 'https://lh4.googleusercontent.com/-9RVnw7daF7E/Tt_LUL1MiRI/AAAAAAAAAY0/m_HgPE5X7IM/s1600/Newarithali.jpg',
            title: 'Bara Set',
            price: '18.50',
            description: 'sauteed sliced chicken bara with peppers, cabbage, carrots and onions in a chili basil sauce',
            meal: 'main'
        },
        'Chicken and Dhido': {
            num: 0,

            img: 'https://i.pinimg.com/originals/a8/4c/d4/a84cd4abb2b0b17a6f2b45f81bfaf67e.jpg',
            title: 'Chicken and Dhido',
            price: '28.95',
            description: 'Chicken and dhido',
            meal: 'main'
        },
        'Mutton and Rice': {
            num: 0,
            img: 'https://speakingaloud.in/wp-content/uploads/2017/10/Kosha-Mangsho-Recipe.jpg',
            title: 'Mutton and Rice',
            price: '27.95',
            description: 'serve with mutton gravy and rice, cabbage and onions in a fresh garlic sauce',
            meal: 'main'
        },
        'Fried Banana': {
            num: 0,
            img: 'https://img.delicious.com.au/DCI69ugT/w1200/del/2016/04/banana-fritters-28785-1.jpg',
            title: 'Fried Banana',
            price: '7.50',
            description: 'deep-fried banana topped with coconut ice cream',
            meal: 'desert'
        },
        'Rasbari and yogurt': {
            num: 0,
            img: 'https://recipenp.com/wp-content/uploads/2020/03/rasgoola.jpg',
            title: 'Rasbari and yogurt',
            price: '4.95',
            description: 'Cold yogurt serves with Hot Rasbari',
            meal: 'desert'
        },
        'Jilebi': {
            num: 0,
            img: 'https://i1.wp.com/recipenp.com/wp-content/uploads/2020/04/jalebi.jpg',
            title: 'Jilebi',
            price: '8.50',
            description: 'hot jilebi serves with cold yogurt',
            meal: 'desert'
        }
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            state = {
                ...state,
                total: state.total + action.num,
                totalPrice: state.totalPrice + (state.items[action.title].price * action.num),
                items: {
                    ...state.items,
                    [action.title]: {
                        ...state.items[action.title],
                        num: state.items[action.title].num + action.num
                    }
                }
            };
            break;
        case 'SET':
            state = {
                ...state,
                total: state.total + action.num,
                totalPrice: state.totalPrice + (state.items[action.title].price * action.num),
                items: {
                    ...state.items,
                    [action.title]: {
                        ...state.items[action.title],
                        num: action.num
                    }
                }
            };
            break;
        case 'SUB':
            state = {
                ...state,
                total: state.total - action.num,
                totalPrice: state.totalPrice - (state.items[action.title].price * action.num),
                items: {
                    ...state.items,
                    [action.title]: {
                        ...state.items[action.title],
                        num: state.items[action.title].num - action.num
                    }
                }
            };
            break;
        case 'ZERO':
            state = {
                ...state,
                total: state.total - state.items[action.title].num,
                totalPrice: state.totalPrice - (state.items[action.title].num * state.items[action.title].price),
                items: {
                    ...state.items,
                    [action.title]: {
                        ...state.items[action.title],
                        num: 0
                    }
                }
            };
            break;
        case 'RESET':
            state = initialState;
            break;
    }

    return state;
}

