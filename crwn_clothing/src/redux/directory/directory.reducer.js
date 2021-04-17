const INITIAL_STATE = {
    sections: [{
                title: 'hat',
                imageURL: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats'
            },
            {
                title: 'jackets',
                imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
            },    
            {
                title: 'sneakers',
                imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
            },
            {
                title: 'womens',
                imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
                id: 4,
                size: 'large',
                linkUrl: 'shop/womens'
            },
            {
                title: 'mens',
                imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
                id: 5,
                size: 'large',
                linkUrl: 'shop/mens'
        }
    ] 
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;