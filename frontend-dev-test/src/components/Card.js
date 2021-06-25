import React from 'react'

function Card(data) {

    const { name, count, perchange, percentage, color, column } = data.send;

    // console.log(count,perchange,percentage,color)
    var arrowPos, borderColor, rotation;
    perchange[0] === "+" ? arrowPos = { transform: "rotate(45deg)", color: color } : arrowPos = {
        transform: "rotate(135deg)", color: color
    };
    borderColor = {
        backgroundColor: color
    };
    rotation = {
        transform: `rotate(${Math.abs(360 * percentage / 400)}deg)`,
        backgroundColor: color
    };


    return (
        <div className="card_border" style={{ gridColumn: column, gridRow: 2 }}>
            <div className="card">
                <div className="info_card">
                    {name}
                    <h2 className="num1"> {count}</h2>
                    <span className="num_change" style={{ color: color }}>
                        <i className="fa fa-fw fa-arrow-up" style={arrowPos}></i>
                        {perchange}
                    </span>
                </div>
                <div className="per_circle">
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    <div className="cus-card">
                        <div class="loader"></div>
                        <div className="inside-circle">
                            {percentage}%
                        </div>
                    </div>
                    <div className="circle-wrap">
                        <div className="circle">
                            <div className="mask full" style={rotation}>
                                <div className="fill" style={rotation} ></div>
                            </div>
                            <div className="mask half">
                                <div className="fill" style={rotation}></div>
                            </div>
                            <div className="inside-circle">
                                {percentage}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
