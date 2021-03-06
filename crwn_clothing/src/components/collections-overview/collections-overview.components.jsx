import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../preview-collection/collection-preview.component';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector.js';
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className='collection-overview'>
            {
                collections.map(({id, ...otherCollectionProps}) => {
                    return (
                            <CollectionPreview key={id} {...otherCollectionProps}/>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);