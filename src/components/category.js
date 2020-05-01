import React from 'react';


function Category(props) {
    return (
        <div className='col-4 mb-5'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={props.catdata.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-text text-center">{props.catdata.title}</h5>
                </div>
            </div>
        </div> 
    );
}

export default Category