import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { dataSections } from '../../data/shop.data.sections';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: dataSections
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem  key={id} { ...otherSectionProps } />
                    ))
                }
            </div>
        )
    }
}

export default Directory;