import React, { useState } from "react";
import search from "./../../../images/icons/search-lg.svg";
import redarrow from "./../../../images/icons/arrow-down-red.svg";
import arrowupboxs from "./../../../images/icons/arrow-up-prod.svg";
import posgraph from "./../../../images/icons/positive-graph.svg";
import negativeimg from "./../../../images/icons/negative-graph.svg";
import downloadimg from "./../../../images/icons/download-portfolio.svg";
import left from "./../../../images/icons/arrow-left-canvas.svg";
import sliderimg from "./../../../images/icons/slider.svg";
import expandimg from "./../../../images/icons/expand.svg";
import close from "./../../../images/icons/x-close.svg";
import arrowupbox from "./../../../images/icons/arrow-up-prod.svg";
import arrowdownbox from "./../../../images/icons/arrow-down-red.svg";
import stable from "./../../../images/icons/arrow-block-stable.svg";
import { Table } from "reactstrap";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import Layouts from "../Layouts/Layouts";
import "./dashboard.css";

import PieChart from "../Graph/PieChart";

const Dashboard = () => {
  const [data, setdata] = useState(true);
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Layouts>
      <div className="portfolio-table-container">
        <div className="dashboard-header-geo">
          <div className="Left-Dash-head-geo">
            <p>Portfolio</p>
          </div>

          <div className="Right-Dash-head-geo">
            <div className="tabpane-portfolio"></div>

            <div class="search-container-geo">
              <img className="i" src={search} />
              <input type="text" placeholder="Search" />
            </div>

            <div className="download-port">
              <img src={downloadimg} />
            </div>
          </div>
        </div>

        {/*table*/}
        <div className="portfolio-container-table">
          <Table responsive>
            <thead className="portfolio-heading-title">
              <tr>
                <th className="dr-name">Drug Name</th>
                <th className="therap-name">Therapeutic class</th>
                <th className="paln-cover">Plans Covered</th>
                <th className="aver-tier">Average Tier</th>
                <th className="resti">Restrictions</th>
                <th className="claim-vol">Claim Volume Trend</th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={toggle} className="portfolio-table-data-container">
                <td className="dataone">Vemlidy</td>
                <td className="antiviral">Antiviral</td>
                <td className="number">45</td>
                <td className="arrows">
                  <img src={arrowupbox} />
                  <span className="per-num-green">13%</span>
                </td>
                <td className="arrows-red">
                  <img src={redarrow} />
                  <span className="pernum-red">13%</span>
                </td>
                <td className="graph-img">
                  <img src={data ? posgraph : negativeimg} />
                </td>
              </tr>

              <tr onClick={toggle} className="portfolio-table-data-container">
                <td className="dataone">Vemlidy</td>
                <td className="antiviral">Antiviral</td>
                <td className="number">45</td>
                <td className="arrows">
                  <img src={arrowupbox} />
                  <span className="per-num-green">13%</span>
                </td>
                <td className="arrows-red">
                  <img src={redarrow} />
                  <span className="pernum-red">13%</span>
                </td>
                <td className="graph-img">
                  <img src={posgraph} />
                </td>
              </tr>

              <tr onClick={toggle} className="portfolio-table-data-container">
                <td className="dataone">Vemlidy</td>
                <td className="antiviral">Antiviral</td>
                <td className="number">45</td>
                <td className="arrows">
                  <img src={arrowupbox} />
                  <span className="per-num-green">13%</span>
                </td>
                <td className="arrows-red">
                  <img src={redarrow} />
                  <span className="pernum-red">13%</span>
                </td>
                <td className="graph-img">
                  <img src={posgraph} />
                </td>
              </tr>

              <tr onClick={toggle} className="portfolio-table-data-container">
                <td className="dataone">Vemlidy</td>
                <td className="antiviral">Antiviral</td>
                <td className="number">45</td>
                <td className="arrows">
                  <img src={arrowupbox} />
                  <span className="per-num-green">13%</span>
                </td>
                <td className="arrows-red">
                  <img src={redarrow} />
                  <span className="pernum-red">13%</span>
                </td>
                <td className="graph-img">
                  <img src={negativeimg} />
                </td>
              </tr>

              <tr className="portfolio-table-data-container">
                <td className="dataone">Vemlidy</td>
                <td className="antiviral">Antiviral</td>
                <td className="number">45</td>
                <td className="arrows">
                  <img src={arrowupbox} />
                  <span className="per-num-green">13%</span>
                </td>
                <td className="arrows-red">
                  <img src={redarrow} />
                  <span className="pernum-red">13%</span>
                </td>
                <td className="graph-img">
                  <img src={negativeimg} />
                </td>
              </tr>

              <tr className="portfolio-table-data-container">
                <td className="dataone">Vemlidy</td>
                <td className="antiviral">Antiviral</td>
                <td className="number">45</td>
                <td className="arrows">
                  <img src={arrowupbox} />
                  <span className="per-num-green">13%</span>
                </td>
                <td className="arrows-red">
                  <img src={redarrow} />
                  <span className="pernum-red">13%</span>
                </td>
                <td className="graph-img">
                  <img src={negativeimg} />
                </td>
              </tr>

              <tr className="portfolio-table-data-container">
                <td className="dataone">Vemlidy</td>
                <td className="antiviral">Antiviral</td>
                <td className="number">45</td>
                <td className="arrows">
                  <img src={arrowupbox} />
                  <span className="per-num-green">13%</span>
                </td>
                <td className="arrows-red">
                  <img src={redarrow} />
                  <span className="pernum-red">13%</span>
                </td>
                <td className="graph-img">
                  <img src={negativeimg} />
                </td>
              </tr>

              <tr className="portfolio-table-data-container">
                <td className="dataone">Vemlidy</td>
                <td className="antiviral">Antiviral</td>
                <td className="number">45</td>
                <td className="arrows">
                  <img src={arrowupbox} />
                  <span className="per-num-green">13%</span>
                </td>
                <td className="arrows-red">
                  <img src={redarrow} />
                  <span className="pernum-red">13%</span>
                </td>
                <td className="graph-img">
                  <img src={posgraph} />
                </td>
              </tr>

              <tr className="portfolio-table-data-container">
                <td className="dataone">Vemlidy</td>
                <td className="antiviral">Antiviral</td>
                <td className="number">45</td>
                <td className="arrows">
                  <img src={arrowupbox} />
                  <span className="per-num-green">13%</span>
                </td>
                <td className="arrows-red">
                  <img src={redarrow} />
                  <span className="pernum-red">13%</span>
                </td>
                <td className="graph-img">
                  <img src={posgraph} />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        {/*offcanvas-section*/}

        <div className="">
          <Offcanvas
            backdrop={false}
            direction="end"
            fade={false}
            scrollable
            isOpen={open}
            toggle={toggle}
          >
            <div className="topcontainer-offcanvas">
              <div className="anti-trioval-sec">
                <img src={left} />
                <span className="title">Descovy</span>
                <p className="antire">Antiretroviral</p>
              </div>
              <div className="scenario-section">
                <span className="slider-container">
                  <img src={sliderimg} />
                  Scenario Analysis
                </span>
                <span className="download-off">
                  <img src={downloadimg} />
                </span>
                <span className="expand-img">
                  <img src={expandimg} />
                </span>
                <span className="x-close-container">
                  <img src={close} onClick={toggle} />
                </span>
              </div>
            </div>

            <div className="parent-grids-dash-off">
              <div class="col-4 box-one">
                <h6>Average Tier Positions</h6>
                <h4>3.8</h4>
                <p className="month-one">-0.6 vs 6 months ago</p>
              </div>

              <div class="col-4 box-one">
                <h6>Plans with Restrictions</h6>
                <h4>12%</h4>
                <p className="month-two">+4% vs 6 months ago</p>
              </div>

              <div class="col-4 box-one">
                <h6>Total Plans Covered</h6>
                <h4>246</h4>
                <p className="month-three">Out of 820 Plans</p>
              </div>
            </div>

            <div className="utilization-trends">
              <div className=" col-12">
                <h6>Utilization Trends (Last 6 Months)</h6>
              </div>
            </div>

            <div className="Dashboards-Graphs">
              <div className="row">
                <div className="col-6">
                  <div className="Graph-container">
                    <p>Tier Distribution Across Plans</p>
                    <PieChart />
                  </div>
                </div>

                <div className="col-6">
                  <div className="Graph-container">
                    <p>Recent Restriction Changes</p>

                    <div className="biktarvy-container">
                      <h6>Biktarvy</h6>
                      <p>
                        Prior Authorization (PA) newly added across 15 plans
                      </p>
                      <div className="highimp-container">
                        <span className="date">19 Nov 2025</span>
                        <span className="high-imp">High Impact</span>
                      </div>
                    </div>

                    <div className="biktarvy-container">
                      <h6>Biktarvy</h6>
                      <p>
                        Prior Authorization (PA) newly added across 15 plans
                      </p>
                      <div className="highimp-container">
                        <span className="date">19 Nov 2025</span>
                        <span className="high-imp">High Impact</span>
                      </div>
                    </div>

                    <div className="biktarvy-container">
                      <h6>Biktarvy</h6>
                      <p>
                        Prior Authorization (PA) newly added across 15 plans
                      </p>
                      <div className="highimp-container">
                        <span className="date">19 Nov 2025</span>
                        <span className="high-imp">High Impact</span>
                      </div>
                    </div>

                    <div className="biktarvy-container">
                      <h6>Biktarvy</h6>
                      <p>
                        Prior Authorization (PA) newly added across 15 plans
                      </p>
                      <div className="highimp-container">
                        <span className="date">19 Nov 2025</span>
                        <span className="high-imp">High Impact</span>
                      </div>
                    </div>

                    <div className="biktarvy-container">
                      <h6>Biktarvy</h6>
                      <p>
                        Prior Authorization (PA) newly added across 15 plans
                      </p>
                      <div className="highimp-container">
                        <span className="date">19 Nov 2025</span>
                        <span className="high-imp">High Impact</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="utilization-trends">
              <div className=" col-12">
                <h6>Competitive Tier Comparison</h6>

                <div className="table-piechart-container">
                  <Table responsive>
                    <thead className="pie-chart-table-head">
                      <tr>
                        <th className="pro">Product</th>
                        <th className="average-time">Average Tier</th>
                        <th className="past-time">PA/ST Rate</th>
                        <th className="plan-cov">Plans Covered</th>
                        <th className="monyh-trend">6 Months Trend</th>
                      </tr>
                    </thead>
                    <tbody className="data-field-table">
                      <tr>
                        <td className="glux">Glucoxa (YOUR DRUG)</td>
                        <td className="ag-time">3.8</td>
                        <td className="past-per">12%</td>
                        <td className="plan-cov">780</td>
                        <td className="mony-tre">
                          <span className="up">
                            <img src={arrowupboxs} />
                            Up
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td className="glux">Glucoxa (YOUR DRUG)</td>
                        <td className="ag-time">3.8</td>
                        <td className="past-per">12%</td>
                        <td className="plan-cov">780</td>
                        <td className="mony-tre">
                          <span className="down">
                            <img src={arrowdownbox} />
                            Down
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td className="glux">Glucoxa (YOUR DRUG)</td>
                        <td className="ag-time">3.8</td>
                        <td className="past-per">12%</td>
                        <td className="plan-cov">780</td>
                        <td className="mony-tre">
                          <span className="stable">
                            <img src={stable} />
                            Stable
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </Offcanvas>
        </div>
      </div>
    </Layouts>
  );
};

export default Dashboard;
