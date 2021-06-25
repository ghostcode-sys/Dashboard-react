import React from 'react'

function Campaign() {
    return (
        <div className="bottom ">
            <div className="bottom_detail">
                <div>Referal and Campaign stats</div>
                <div className="bottom_st">
                    <i className="fa fa-fw fa-paper-plane red_para"></i>
                    <span className=" red_para">40 Campaign sent in total </span> <br/>
                    <span className="si_para">4 Campaign sent in last month</span>
                </div>
            </div>

            <div className="middle_block">
                <div className="block_dis">User's reached <br/><br/>
                    <i className="fa fa-fw fa-arrow-up" style={{transform:"rotate(45deg)"}}></i><span className="per_info"> +3.59%<br/><br/></span>
                    <span>7956</span>
                </div>
                <div className="block_dis">Referals <br/><br/>
                    <i className="fa fa-fw fa-arrow-up" style={{transform:"rotate(45deg)"}}></i><span className="per_info"> +9.01%<br/><br/></span>
                    <span>0662</span>
                </div>
                <div className="block_dis">Shares <br/><br/>
                    <i className="fa fa-fw fa-arrow-up" style={{transform:"rotate(45deg)"}}></i><span className="per_info"> 39.18<br/><br/></span>
                    <span>1478</span>
                </div>
                <div className="block_dis">Applications <br/><br/>
                    <i className="fa fa-fw fa-arrow-up" style={{transform:"rotate(45deg)"}}></i><span className="per_info"> +12.00%<br/><br/></span>
                    <span>0564</span>
                </div>
            </div>
            <button className="btn btn_blue">Start a New Campaign now</button>
            <button className="btn btn_red">Pause all Running Campaigns</button>
        </div>
        )
}


export default Campaign
