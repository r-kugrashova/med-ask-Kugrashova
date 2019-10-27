import React from 'react';

function CheckItem(props) {
    if (props.item.status === "Inservice") {
        return (
            <div>
                <div id="inserviceIcon"></div>
                <p className="CheckItem">{props.item.service}</p>
            </div>
        )}
    if (props.item.status === "Outofservice") {
        return (
                <div>
                    <div id="outofserviceIcon"></div>
                    <p className="CheckItem">{props.item.service}</p>
                </div>
            )}
    else{
        return (
                    <div>
                        <div id="noInfoIcon"></div>
                        <p className="CheckItem">{props.item.service}</p>
                    </div>
                )
            }
}
    export default CheckItem