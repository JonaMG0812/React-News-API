import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
    state = { 
        category: 'general'
    }

    switchCategory = e => {
        this.setState({
            category: e.target.value
        }, () => {
            //Sending category to app
            this.props.checkNews(this.state.category);
        });
    }

    render() { 
        return (
            <div className='row search'>
                <div className='col s12 m6 offset-m3'>
                    <form>
                        <h5 className='center-align'>Search by category</h5>
                        <div className='input-field'>
                            <select
                                onChange={this.switchCategory}
                            >
                                <option value='general'>General</option>
                                <option value='business'>Business</option>
                                <option value='entertainment'>Entertainment</option>
                                <option value='health'>Health</option>
                                <option value='science'>Science</option>
                                <option value='sports'>Sports</option>
                                <option value='technology'>Technology</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

SearchForm.propTypes = {
    checkNews: PropTypes.func.isRequired
}
 
export default SearchForm;