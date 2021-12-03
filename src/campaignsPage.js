import React from "react";
import ReportBox from './components/reportBox';
import {useSelector} from "react-redux";
import style from './assets/style/campaigns.scss'
import DataTable from './components/dataTable/index'
import {PropTypes} from "prop-types";
import CalcPercent from "./components/calcPercent";

const CampaignsPage = () => {
    const reports = useSelector((state) => state.reports)
    const campaigns = useSelector((state) => state.campaigns)
    return (
        <div className="campaigns-page">
            <div className="campaigns-reports">
                {reports.map(function (report, i) {
                    return <ReportBox report={report} key={i}/>
                })}
            </div>
            <div className="campaigns-table">
                <h2>Campaigns</h2>
                <DataTable data={campaigns} key="campaign"></DataTable>
            </div>

        </div>
    );
}

export default CampaignsPage;
