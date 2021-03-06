import React from 'react';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';


/*
    Aqui queremos que en el preview se muestre sólo 4 elementos
*/

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                .filter((item, idx) => idx < 4)
                .map(item => {
                    return (
                        <CollectionItem key={item.id} item={item} />
                    )})
                }
            </div>
        </div>
    )
}

export default CollectionPreview;