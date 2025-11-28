import React, { useState } from 'react'
import Layouts from '../Layouts/Layouts'
import downloadimg from "./../../../images/icons/download-portfolio.svg";
import search from "./../../../images/icons/search-lg.svg";
import greenarrow from './../../../images/icons/arrow-upfl.svg'
import grphmini from './../../../images/icons/Chart-mini.svg'
import graphred from './../../../images/icons/Chartmini-red.svg'
import { Navigate, useNavigate } from 'react-router-dom'
import "./drugexplorer.css"

const DrugExplorer = () => {
    const [data,setData]=useState(false)
     const navigate=useNavigate()

  return (
    <Layouts>
      <div className="Portfolio-container">
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


        {/* portfolio Content */}


        <div className="Drug-details">
          <div className="row">
            <div className="col-2">
              <div className="Drug-info">
                <div className="Info-head">
                  <p className="Drug-name">Vemlidy</p>
                <span className="Drug-for">HIV</span>
                </div>

                <div className="Plan-details">
                  <span className="plan-head">Plans Coverd:</span>
                  <span className="plan-value"> 360</span>
                  <div className="Avg-tier-col">
                     <span className="plan-head">Average Tier:</span>
                  <span className="plan-increment">
                    <img src={greenarrow} className="arrow-up"/>
                  </span>
                  <span className="plan-increment-percentage">
                    2.2
                  </span>
                  </div>

                  <div className="Restrictions-col">
                    <span className="Restriction">
                      Restrictions:
                    </span>
                    <span className="plan-increment-percentage-res">
                      5%
                    </span>
                  </div>
                </div>

                <div className="Graph-section">
                  <img src={data?grphmini:graphred} className="graph-green"/>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="Drug-info">
                <div className="Info-head">
                  <p className="Drug-name">Vemlidy</p>
                <span className="Drug-for">HIV</span>
                </div>

                <div className="Plan-details">
                  <span className="plan-head">Plans Coverd:</span>
                  <span className="plan-value"> 360</span>
                  <div className="Avg-tier-col">
                     <span className="plan-head">Average Tier:</span>
                  <span className="plan-increment">
                    <img src={greenarrow} className="arrow-up"/>
                  </span>
                  <span className="plan-increment-percentage">
                    2.2
                  </span>
                  </div>

                  <div className="Restrictions-col">
                    <span className="Restriction">
                      Restrictions:
                    </span>
                    <span className="plan-increment-percentage-res">
                      5%
                    </span>
                  </div>
                </div>

                <div className="Graph-section">
                  <img src={data?grphmini:graphred} className="graph-green"/>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="Drug-info">
                <div className="Info-head">
                  <p className="Drug-name">Vemlidy</p>
                <span className="Drug-for">HIV</span>
                </div>

                <div className="Plan-details">
                  <span className="plan-head">Plans Coverd:</span>
                  <span className="plan-value"> 360</span>
                  <div className="Avg-tier-col">
                     <span className="plan-head">Average Tier:</span>
                  <span className="plan-increment">
                    <img src={greenarrow} className="arrow-up"/>
                  </span>
                  <span className="plan-increment-percentage">
                    2.2
                  </span>
                  </div>

                  <div className="Restrictions-col">
                    <span className="Restriction">
                      Restrictions:
                    </span>
                    <span className="plan-increment-percentage-res">
                      5%
                    </span>
                  </div>
                </div>

                <div className="Graph-section">
                  <img src={data?grphmini:graphred} className="graph-green"/>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="Drug-info">
                <div className="Info-head">
                  <p className="Drug-name">Vemlidy</p>
                <span className="Drug-for">HIV</span>
                </div>

                <div className="Plan-details">
                  <span className="plan-head">Plans Coverd:</span>
                  <span className="plan-value"> 360</span>
                  <div className="Avg-tier-col">
                     <span className="plan-head">Average Tier:</span>
                  <span className="plan-increment">
                    <img src={greenarrow} className="arrow-up"/>
                  </span>
                  <span className="plan-increment-percentage">
                    2.2
                  </span>
                  </div>

                  <div className="Restrictions-col">
                    <span className="Restriction">
                      Restrictions:
                    </span>
                    <span className="plan-increment-percentage-res">
                      5%
                    </span>
                  </div>
                </div>

                <div className="Graph-section">
                  <img src={data?grphmini:graphred} className="graph-green"/>
                </div>
              </div>
            </div>
           <div className="col-2">
              <div className="Drug-info">
                <div className="Info-head">
                  <p className="Drug-name">Vemlidy</p>
                <span className="Drug-for">HIV</span>
                </div>

                <div className="Plan-details">
                  <span className="plan-head">Plans Coverd:</span>
                  <span className="plan-value"> 360</span>
                  <div className="Avg-tier-col">
                     <span className="plan-head">Average Tier:</span>
                  <span className="plan-increment">
                    <img src={greenarrow} className="arrow-up"/>
                  </span>
                  <span className="plan-increment-percentage">
                    2.2
                  </span>
                  </div>

                  <div className="Restrictions-col">
                    <span className="Restriction">
                      Restrictions:
                    </span>
                    <span className="plan-increment-percentage-res">
                      5%
                    </span>
                  </div>
                </div>

                <div className="Graph-section">
                  <img src={data?grphmini:graphred} className="graph-green"/>
                </div>
              </div>
            </div>
           <div className="col-2">
              <div className="Drug-info">
                <div className="Info-head">
                  <p className="Drug-name">Vemlidy</p>
                <span className="Drug-for">HIV</span>
                </div>

                <div className="Plan-details">
                  <span className="plan-head">Plans Coverd:</span>
                  <span className="plan-value"> 360</span>
                  <div className="Avg-tier-col">
                     <span className="plan-head">Average Tier:</span>
                  <span className="plan-increment">
                    <img src={greenarrow} className="arrow-up"/>
                  </span>
                  <span className="plan-increment-percentage">
                    2.2
                  </span>
                  </div>

                  <div className="Restrictions-col">
                    <span className="Restriction">
                      Restrictions:
                    </span>
                    <span className="plan-increment-percentage-res">
                      5%
                    </span>
                  </div>
                </div>

                <div className="Graph-section">
                  <img src={data?grphmini:graphred} className="graph-green"/>
                </div>
              </div>
            </div>

            <div className="second-row">
              <div className="row">
                <div className="col-2">
                  <div className="Drug-info">
                    <div className="Info-head">
                      <p className="Drug-name">Vemlidy</p>
                      <span className="Drug-for">HIV</span>
                    </div>

                    <div className="Plan-details">
                      <span className="plan-head">Plans Coverd:</span>
                      <span className="plan-value"> 360</span>
                      <div className="Avg-tier-col">
                        <span className="plan-head">Average Tier:</span>
                        <span className="plan-increment">
                          <img src={greenarrow} className="arrow-up" />
                        </span>
                        <span className="plan-increment-percentage">
                          2.2
                        </span>
                      </div>

                      <div className="Restrictions-col">
                        <span className="Restriction">
                          Restrictions:
                        </span>
                        <span className="plan-increment-percentage-res">
                          5%
                        </span>
                      </div>
                    </div>

                    <div className="Graph-section">
                      <img src={data ? grphmini : graphred} className="graph-green" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="Drug-info">
                    <div className="Info-head">
                      <p className="Drug-name">Vemlidy</p>
                      <span className="Drug-for">HIV</span>
                    </div>

                    <div className="Plan-details">
                      <span className="plan-head">Plans Coverd:</span>
                      <span className="plan-value"> 360</span>
                      <div className="Avg-tier-col">
                        <span className="plan-head">Average Tier:</span>
                        <span className="plan-increment">
                          <img src={greenarrow} className="arrow-up" />
                        </span>
                        <span className="plan-increment-percentage">
                          2.2
                        </span>
                      </div>

                      <div className="Restrictions-col">
                        <span className="Restriction">
                          Restrictions:
                        </span>
                        <span className="plan-increment-percentage-res">
                          5%
                        </span>
                      </div>
                    </div>

                    <div className="Graph-section">
                      <img src={data ? grphmini : graphred} className="graph-green" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="Drug-info">
                    <div className="Info-head">
                      <p className="Drug-name">Vemlidy</p>
                      <span className="Drug-for">HIV</span>
                    </div>

                    <div className="Plan-details">
                      <span className="plan-head">Plans Coverd:</span>
                      <span className="plan-value"> 360</span>
                      <div className="Avg-tier-col">
                        <span className="plan-head">Average Tier:</span>
                        <span className="plan-increment">
                          <img src={greenarrow} className="arrow-up" />
                        </span>
                        <span className="plan-increment-percentage">
                          2.2
                        </span>
                      </div>

                      <div className="Restrictions-col">
                        <span className="Restriction">
                          Restrictions:
                        </span>
                        <span className="plan-increment-percentage-res">
                          5%
                        </span>
                      </div>
                    </div>

                    <div className="Graph-section">
                      <img src={data ? grphmini : graphred} className="graph-green" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="Drug-info">
                    <div className="Info-head">
                      <p className="Drug-name">Vemlidy</p>
                      <span className="Drug-for">HIV</span>
                    </div>

                    <div className="Plan-details">
                      <span className="plan-head">Plans Coverd:</span>
                      <span className="plan-value"> 360</span>
                      <div className="Avg-tier-col">
                        <span className="plan-head">Average Tier:</span>
                        <span className="plan-increment">
                          <img src={greenarrow} className="arrow-up" />
                        </span>
                        <span className="plan-increment-percentage">
                          2.2
                        </span>
                      </div>

                      <div className="Restrictions-col">
                        <span className="Restriction">
                          Restrictions:
                        </span>
                        <span className="plan-increment-percentage-res">
                          5%
                        </span>
                      </div>
                    </div>

                    <div className="Graph-section">
                      <img src={data ? grphmini : graphred} className="graph-green" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="Drug-info">
                    <div className="Info-head">
                      <p className="Drug-name">Vemlidy</p>
                      <span className="Drug-for">HIV</span>
                    </div>

                    <div className="Plan-details">
                      <span className="plan-head">Plans Coverd:</span>
                      <span className="plan-value"> 360</span>
                      <div className="Avg-tier-col">
                        <span className="plan-head">Average Tier:</span>
                        <span className="plan-increment">
                          <img src={greenarrow} className="arrow-up" />
                        </span>
                        <span className="plan-increment-percentage">
                          2.2
                        </span>
                      </div>

                      <div className="Restrictions-col">
                        <span className="Restriction">
                          Restrictions:
                        </span>
                        <span className="plan-increment-percentage-res">
                          5%
                        </span>
                      </div>
                    </div>

                    <div className="Graph-section">
                      <img src={data ? grphmini : graphred} className="graph-green" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="Drug-info">
                    <div className="Info-head">
                      <p className="Drug-name">Vemlidy</p>
                      <span className="Drug-for">HIV</span>
                    </div>

                    <div className="Plan-details">
                      <span className="plan-head">Plans Coverd:</span>
                      <span className="plan-value"> 360</span>
                      <div className="Avg-tier-col">
                        <span className="plan-head">Average Tier:</span>
                        <span className="plan-increment">
                          <img src={greenarrow} className="arrow-up" />
                        </span>
                        <span className="plan-increment-percentage">
                          2.2
                        </span>
                      </div>

                      <div className="Restrictions-col">
                        <span className="Restriction">
                          Restrictions:
                        </span>
                        <span className="plan-increment-percentage-res">
                          5%
                        </span>
                      </div>
                    </div>

                    <div className="Graph-section">
                      <img src={data ? grphmini : graphred} className="graph-green" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="second-row">
              <div className="row">
                <div className="col-2">
                  <div className="Drug-info">
                    <div className="Info-head">
                      <p className="Drug-name">Vemlidy</p>
                      <span className="Drug-for">HIV</span>
                    </div>

                    <div className="Plan-details">
                      <span className="plan-head">Plans Coverd:</span>
                      <span className="plan-value"> 360</span>
                      <div className="Avg-tier-col">
                        <span className="plan-head">Average Tier:</span>
                        <span className="plan-increment">
                          <img src={greenarrow} className="arrow-up" />
                        </span>
                        <span className="plan-increment-percentage">
                          2.2
                        </span>
                      </div>

                      <div className="Restrictions-col">
                        <span className="Restriction">
                          Restrictions:
                        </span>
                        <span className="plan-increment-percentage-res">
                          5%
                        </span>
                      </div>
                    </div>

                    <div className="Graph-section">
                      <img src={data ? grphmini : graphred} className="graph-green" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="Drug-info">
                    <div className="Info-head">
                      <p className="Drug-name">Vemlidy</p>
                      <span className="Drug-for">HIV</span>
                    </div>

                    <div className="Plan-details">
                      <span className="plan-head">Plans Coverd:</span>
                      <span className="plan-value"> 360</span>
                      <div className="Avg-tier-col">
                        <span className="plan-head">Average Tier:</span>
                        <span className="plan-increment">
                          <img src={greenarrow} className="arrow-up" />
                        </span>
                        <span className="plan-increment-percentage">
                          2.2
                        </span>
                      </div>

                      <div className="Restrictions-col">
                        <span className="Restriction">
                          Restrictions:
                        </span>
                        <span className="plan-increment-percentage-res">
                          5%
                        </span>
                      </div>
                    </div>

                    <div className="Graph-section">
                      <img src={data ? grphmini : graphred} className="graph-green" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="Drug-info">
                    <div className="Info-head">
                      <p className="Drug-name">Vemlidy</p>
                      <span className="Drug-for">HIV</span>
                    </div>

                    <div className="Plan-details">
                      <span className="plan-head">Plans Coverd:</span>
                      <span className="plan-value"> 360</span>
                      <div className="Avg-tier-col">
                        <span className="plan-head">Average Tier:</span>
                        <span className="plan-increment">
                          <img src={greenarrow} className="arrow-up" />
                        </span>
                        <span className="plan-increment-percentage">
                          2.2
                        </span>
                      </div>

                      <div className="Restrictions-col">
                        <span className="Restriction">
                          Restrictions:
                        </span>
                        <span className="plan-increment-percentage-res">
                          5%
                        </span>
                      </div>
                    </div>

                    <div className="Graph-section">
                      <img src={data ? grphmini : graphred} className="graph-green" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="Drug-info">
                    <div className="Info-head">
                      <p className="Drug-name">Vemlidy</p>
                      <span className="Drug-for">HIV</span>
                    </div>

                    <div className="Plan-details">
                      <span className="plan-head">Plans Coverd:</span>
                      <span className="plan-value"> 360</span>
                      <div className="Avg-tier-col">
                        <span className="plan-head">Average Tier:</span>
                        <span className="plan-increment">
                          <img src={greenarrow} className="arrow-up" />
                        </span>
                        <span className="plan-increment-percentage">
                          2.2
                        </span>
                      </div>

                      <div className="Restrictions-col">
                        <span className="Restriction">
                          Restrictions:
                        </span>
                        <span className="plan-increment-percentage-res">
                          5%
                        </span>
                      </div>
                    </div>

                    <div className="Graph-section">
                      <img src={data ? grphmini : graphred} className="graph-green" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="Drug-info">
                    <div className="Info-head">
                      <p className="Drug-name">Vemlidy</p>
                      <span className="Drug-for">HIV</span>
                    </div>

                    <div className="Plan-details">
                      <span className="plan-head">Plans Coverd:</span>
                      <span className="plan-value"> 360</span>
                      <div className="Avg-tier-col">
                        <span className="plan-head">Average Tier:</span>
                        <span className="plan-increment">
                          <img src={greenarrow} className="arrow-up" />
                        </span>
                        <span className="plan-increment-percentage">
                          2.2
                        </span>
                      </div>

                      <div className="Restrictions-col">
                        <span className="Restriction">
                          Restrictions:
                        </span>
                        <span className="plan-increment-percentage-res">
                          5%
                        </span>
                      </div>
                    </div>

                    <div className="Graph-section">
                      <img src={data ? grphmini : graphred} className="graph-green" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="Drug-info">
                    <div className="Info-head">
                      <p className="Drug-name">Vemlidy</p>
                      <span className="Drug-for">HIV</span>
                    </div>

                    <div className="Plan-details">
                      <span className="plan-head">Plans Coverd:</span>
                      <span className="plan-value"> 360</span>
                      <div className="Avg-tier-col">
                        <span className="plan-head">Average Tier:</span>
                        <span className="plan-increment">
                          <img src={greenarrow} className="arrow-up" />
                        </span>
                        <span className="plan-increment-percentage">
                          2.2
                        </span>
                      </div>

                      <div className="Restrictions-col">
                        <span className="Restriction">
                          Restrictions:
                        </span>
                        <span className="plan-increment-percentage-res">
                          5%
                        </span>
                      </div>
                    </div>

                    <div className="Graph-section">
                      <img src={data ? grphmini : graphred} className="graph-green" />
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </Layouts>
  )
}

export default DrugExplorer