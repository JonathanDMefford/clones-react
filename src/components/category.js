import React from 'react';
import { Link } from 'react-router-dom';


function Category(props) {
    return (
        <div className='col-4 mb-5'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={props.catdata.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-text text-center"><Link to="/category" onClick={() => props.setCategoryPage(props.catdata.id)} className="channelLink">{props.catdata.title}</Link></h5>
                </div>
            </div>
        </div> 
    );
}

export default Category