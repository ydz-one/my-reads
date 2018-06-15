import React from 'react'
import './App.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class ChangeShelfMenu extends React.Component {
    handleOptionChange = event => {
        const shelf = event.target.value
        this.props.onOptionChange(shelf)
    }

    render() {
        return (
            <div className='change-shelf-menu'>
                <FontAwesomeIcon icon='chevron-circle-down' size='2x'/>
                <select value={this.props.value} onChange={this.handleOptionChange}>
                    <option value='move' disabled={true}>Move to:</option>
                    <option value='currentlyReading'>Currently Reading</option>
                    <option value='wantToRead'>Want to Read</option>
                    <option value='read'>Read</option>
                    <option value='none'>None</option>
                </select>
            </div>
        )
    }
}

export default ChangeShelfMenu