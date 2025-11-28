import React from "react";

import down from "./../../../images/icons/arrow-down.svg";
import search from "./../../../images/icons/search-lg.svg";
import greenleft from "./../../../images/icons/genvoya-graph-img.svg";
import arrowupbox from "./../../../images/icons/arrow-up-prod.svg";
import greenred from "./../../../images/icons/Chart-mini-red.svg";
import arrowupblu from "./../../../images/icons/arrow-up-blue.svg";
import arrowdownblu from "./../../../images/icons/arrow-down-blue.svg";
import triangle from "./../../../images/icons/alert-triangle-red.svg";
import alertimg from "./../../../images/icons/line-chart-down-red.svg";
import { Table } from "reactstrap";
import Layouts from "../Layouts/Layouts";
import "./overview.css";
const Overview = () => {
  return (
    <Layouts>
      <div className="overview-container">
        {/*Layer 1*/}
        <div className="dashboard-header-geo">
          <div className="Left-Dash-head-geo">
            <p>Dashboard</p>
          </div>

          <div className="Right-Dash-head-geo">
            <div class="search-container-geo">
              <img className="i" src={search} />
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>

        {/*Layer 2*/}

        <div className="Dashboards-Graphs">
          <div className="row">
            <div className="col-8">
              <div className="parent-grids-dash">
                <div class="col-4 box-one">
                  <h6>Medicare Part D Lives</h6>
                  <h4>12.4M</h4>
                  <p>Beneficiaries Impacted</p>
                </div>

                <div class="col-4 box-one">
                  <h6>Plans Requiring Attention</h6>
                  <h4>47</h4>
                  <p>Out of 780 Plans</p>
                </div>

                <div class="col-4 box-one">
                  <h6>Pending Formulary Changes</h6>
                  <h4>12</h4>
                  <p>In Next 30 Days</p>
                </div>
              </div>

              {/*graph*/}

              <div className="top-product-view">
                <h6 className="title">Top Products Overview</h6>

                <div class="parent-overview-container">
                  <div class="genvoya">
                    <h6 className="head">Genvoya</h6>
                    <p>HIV</p>

                    <div className="graph-content">
                      <div className="av-container">
                        <span className="av-tier">Average Tier:</span>
                        <img src={arrowupbox} />
                        <span className="percentage-tier">2.1</span>
                      </div>

                      <div className="plan-container">
                        <span className="pl-tier">Plans Covered:</span>
                        <span className="percentage-plan">780</span>
                      </div>

                      <div className="restriction-container">
                        <span className="rs-tier">Restrictions:</span>
                        <img src={arrowupbox} />
                        <span className="percentage-rs">2.1</span>
                      </div>

                      <div className="greenleft-img">
                        <img src={greenleft} />
                      </div>
                    </div>
                  </div>

                  <div class="genvoya">
                    <h6 className="head">Genvoya</h6>
                    <p>HIV</p>

                    <div className="graph-content">
                      <div className="av-container">
                        <span className="av-tier">Average Tier:</span>
                        <img src={arrowupbox} />
                        <span className="percentage-tier">2.1</span>
                      </div>

                      <div className="plan-container">
                        <span className="pl-tier">Plans Covered:</span>
                        <span className="percentage-plan">780</span>
                      </div>

                      <div className="restriction-container">
                        <span className="rs-tier">Restrictions:</span>
                        <img src={arrowupbox} />
                        <span className="percentage-rs">2.1</span>
                      </div>

                      <div className="greenleft-img">
                        <img src={greenleft} />
                      </div>
                    </div>
                  </div>

                  <div class="genvoya">
                    <h6 className="head">Genvoya</h6>
                    <p>HIV</p>

                    <div className="graph-content">
                      <div className="av-container">
                        <span className="av-tier">Average Tier:</span>
                        <img src={arrowupbox} />
                        <span className="percentage-tier">2.1</span>
                      </div>

                      <div className="plan-container">
                        <span className="pl-tier">Plans Covered:</span>
                        <span className="percentage-plan">780</span>
                      </div>

                      <div className="restriction-container">
                        <span className="rs-tier">Restrictions:</span>
                        <img src={arrowupbox} />
                        <span className="percentage-rs">2.1</span>
                      </div>

                      <div className="greenleft-img">
                        <img src={greenred} />
                      </div>
                    </div>
                  </div>

                  <div class="genvoya-last">
                    <h6 className="head">Genvoya</h6>
                    <p>HIV</p>

                    <div className="graph-content">
                      <div className="av-container">
                        <span className="av-tier">Average Tier:</span>
                        <img src={arrowupbox} />
                        <span className="percentage-tier">2.1</span>
                      </div>

                      <div className="plan-container">
                        <span className="pl-tier">Plans Covered:</span>
                        <span className="percentage-plan">780</span>
                      </div>

                      <div className="restriction-container">
                        <span className="rs-tier">Restrictions:</span>
                        <img src={arrowupbox} />
                        <span className="percentage-rs">2.1</span>
                      </div>

                      <div className="greenleft-img">
                        <img src={greenred} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*table*/}
              <div className="container-table-access">
                <div className="uralerts-container">
                  <h6 className="urgentititle">Urgent Alerts</h6>

                  <div className="alert-type-container">
                    <span className="alert-container">Alert Type</span>
                  </div>
                </div>

                <div className="urgent-alerts-table-container">
                  <Table responsive>
                    <thead className="urgent-table-title">
                      <tr>
                        <th className="product-name">Product Name</th>
                        <th className="alert-type">Alert Type</th>
                        <th className="description">Description</th>
                        <th className="date-of-change">Date of Change</th>
                      </tr>
                    </thead>
                    <tbody className="urgent-table-data">
                      <tr>
                        <td className="pro-title">LumaThera</td>
                        <td className="alert-content">
                          <span className="tier">
                            <img src={arrowupblu} />
                            Tier Changes
                          </span>
                        </td>
                        <td className="desc-title">
                          Moved from Tier 3 → Tier 4 in 22 national plans;
                          increased patient cost exposure.
                        </td>
                        <td className="date-title">19 Nov 2025</td>
                      </tr>

                      <tr>
                        <td className="pro-title">LumaThera</td>
                        <td className="alert-content">
                          <span className="tier-angle">
                            <img src={triangle} />
                            Tier Changes
                          </span>
                        </td>
                        <td className="desc-title">
                          Moved from Tier 3 → Tier 4 in 22 national plans;
                          increased patient cost exposure.
                        </td>
                        <td className="date-title">19 Nov 2025</td>
                      </tr>

                      <tr>
                        <td className="pro-title">LumaThera</td>
                        <td className="alert-content">
                          <span className="tier">
                            <img src={arrowdownblu} />
                            Tier Changes
                          </span>
                        </td>
                        <td className="desc-title">
                          Moved from Tier 3 → Tier 4 in 22 national plans;
                          increased patient cost exposure.
                        </td>
                        <td className="date-title">19 Nov 2025</td>
                      </tr>

                      <tr>
                        <td className="pro-title">LumaThera</td>
                        <td className="alert-content">
                          <span className="tier-alert">
                            <img src={alertimg} />
                            Tier Changes
                          </span>
                        </td>
                        <td className="desc-title">
                          Moved from Tier 3 → Tier 4 in 22 national plans;
                          increased patient cost exposure.
                        </td>
                        <td className="date-title">19 Nov 2025</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="competitor">
                <h6>Competitor Formulary Additions</h6>

                <div className="competitor-content">
                  <h6>Immunexa</h6>
                  <p>“Immunexa-Lite” gained Tier 2 access in 14 plans</p>
                  <h5>2 days ago</h5>
                </div>

                <div className="competitor-content">
                  <h6>PainoRelief XR</h6>
                  <p>“Immunexa-Lite” gained Tier 2 access in 14 plans</p>
                  <h5>2 days ago</h5>
                </div>

                <div className="competitor-content">
                  <h6>CardioFlow</h6>
                  <p>“Immunexa-Lite” gained Tier 2 access in 14 plans</p>
                  <h5>2 days ago</h5>
                </div>

                <div className="competitor-content">
                  <h6>HepraSol</h6>
                  <p>“Immunexa-Lite” gained Tier 2 access in 14 plans</p>
                  <h5>2 days ago</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Overview;
