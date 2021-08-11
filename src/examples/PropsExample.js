import React from 'react';
import Card from '../components/Card';

function PropsExample(props) {
    return (
        <div className="py-4">
            <div className="container">
                <h4>The Posts</h4>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <Card content={{
                                imgUrl:"http://placekitten.com/g/300/200",
                                title:"Post Pertama",
                                published:"Published 10 Aug, 2021",
                            }}                            
                        />
                    </div>
                    <div className="col-md-4">
                        <Card content={{
                                imgUrl:"http://placekitten.com/g/320/200",
                                title:"Post Kedua",
                                published:"Published 11 Aug, 2021",
                            }}                            
                        />
                    </div>
                    <div className="col-md-4">
                        <Card content={{
                                imgUrl:"http://placekitten.com/g/310/200",
                                title:"Post Ketiga",
                                published:"Published 13 Aug, 2021",
                            }}                            
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropsExample;

