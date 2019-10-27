import SKCompanys from "../../Data/SKCompanys";

function matchIDFindong(props) {
    const inputReg = props.replace(/[0-9]/g, '*');
    const SKCompanyReg = SKCompanys.map(num => {
        return num.SKCompanyID.replace(/[0-9]/g, '*');
    });
    const matchID = SKCompanyReg.indexOf(inputReg);
    return (matchID)

}

export default matchIDFindong