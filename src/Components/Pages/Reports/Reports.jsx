import React, { useState } from "react";
import Select, { components } from "react-select";
import disclaimericn from "./../../../images/icons/outline.svg";
import { useNavigate } from "react-router-dom";
import greenstar from "./../../../images/icons/star-G.svg";
import close from "./../../../images/icons/x-close.svg";
import mini from "./../../../images/icons/minimize-01-whatif.svg";
import left from "./../../../images/icons/arrow-left-whatif.svg";
import Layouts from "../Layouts/Layouts";
import "./report.css";
import Slider from "@mui/material/Slider";
import Box from '@mui/material/Box';
 
// Options
const options = [
  { value: "UnitedHealthcare H5826-001", label: "UnitedHealthcare H5826-001" },
  { value: "Humana S5884-003", label: "Humana S5884-003" },
  { value: "Aetna MA-PD 003", label: "Aetna MA-PD 003" },
  { value: "CVS Health S5601-104", label: "CVS Health S5601-104" },
  { value: "BCBS MA-001", label: "BCBS MA-001" },

];
 
const timeframe = [
  {value: "6 months", label: "6 months"},
  {value: "12 months (1 year)", label: "12 months (1 year)"},
  {value: "18 months ", label: "18 months "},
  {value: "24 months (2 years)", label: "24 months (2 years)"},
  {value: "36 months (3 years)", label: "36 months (3 years)"},

]
 
const areaoptions =[
  { value: 'Connecticut - ' , label: "Connecticut -CT"},
  { value: 'Maine - ' , label: "Maine - ME"},
  { value: 'Massachusetts - ' , label: "Massachusetts - MA"},
  { value: 'New Hampshire - ' , label: "New Hampshire - NH"},
  { value: 'New Jersey - ' , label: "New Jersey - NJ"}

];
const Targettieroptions =[
  {value: 'All Tiers', label: 'All Tiers'},
    {value: 'Tier 1 —', label: 'Tier 1 — Preferred Generic'},
  {value: 'Tier 2 — ', label: 'Tier 2 — Non-Preferred Brand'},
  {value: 'Tier 3 — ', label: 'Tier 3 — Specialty'},
  {value: 'Tier 4 — ', label: 'Tier 4 — High-Cost/ Specialty'},
 
]
 
// Custom Radio Option Component
const RadioOption = (props) => {
 
  return (
    <components.Option {...props}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px",   }}>
        <input className="radio-hover-btn" type="radio" readOnly checked={props.isSelected}  />
        <span>{props.label}</span>
      </div>
    </components.Option>
  );
};
 
export const colourStyles = {
  container: (styles) => ({
    ...styles,
    width: "100%",
    marginRight: "20px",
    fontSize: "16px",
    color: "var(--text)",
  }),
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "var(--select-option-bg-color)",
    cursor: "pointer",
    minHeight: "40px",
    borderRadius: "8px",
    borderColor: isFocused ? "var(--select-option-boder-focused)" :  "var(--react-select-border-color)",
    boxShadow: "none",
    ":hover": {
      borderColor: "var(--select-option-border-onhover)",
    },
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "var(--bg-color-select-still)",
    border: "1px solid var(--select-document-type-border)",
    zIndex: 9999,
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    cursor: "pointer",
    backgroundColor: isFocused ? "var(--select-option-boder-focused)" : "var(--select-option-bg-color)",
    color: "var(--document-type-font-color)",
    ":hover": {
      backgroundColor: "var(--document-type-hover)",
    },
    fontSize: "14px",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "var(--placeholder-text)",
    fontSize: "14px",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "var(--text)",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "var(--text)",
    ":hover": {
      color: "var(--placeholder-text)",
    },
  }),
  multiValue: (styles) => ({
    ...styles,
    borderRadius: "6px",
    backgroundColor: "var(--select-option-bg-color)",
    border: "1px solid var(--react-select-border-color)",
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    borderRadius: "6px 0 0 6px",
    color: "var(--text)",
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    borderRadius: "0 6px 6px 0",
    ":hover": { backgroundColor: "var(--select-option-border-onhover)", color: "var(--text)" },
  }),
};
 
const Reports = () => {
const [scenarioList,setScenarioList] = useState([])
const [geography,setGeography]= useState([])
const navigate = useNavigate();
 const [checklist,setChecklist]= useState([])
  // Controlled state for all radio-based selects
  const [currentTier, setCurrentTier] = useState(null);
  const [timeline,setTimeline]=useState([]) 
  const [targetTier, setTargetTier] = useState(null);
  const [rebateValue, setRebateValue] = useState(null);
  const [projectionValue, setProjectionValue] = useState(null);
   
  const handleCheckList =(e)=>{
    if(e.target.checked){
      setChecklist([...checklist,e.target.name])
    }else{
      setChecklist(checklist.filter((op)=>op!== e.target.name))
    }
  }

  const clear =()=>{
    setScenarioList([])
    setGeography([])
    setTargetTier({})
    setChecklist([])
    setTimeline([])
    setRebateValue("")
  }
  return (
    <Layouts>
      <div className="What-if-container">
        {/* HEADER */}
        <div className="What-if-header">
          <div className="What-if-left">
            <img
              src={left}
              className="go-left"
              onClick={() => navigate("/overview")}
            />
            <div className="left-2-what-if">
              <span className="What-if-title">What-If Scenario Analysis</span>
              <p className="What-if-title-des">
                Glucoxa (Semaglutide) • Medicare Part D Formulary Strategy
              </p>
            </div>
          </div>

          <div className="What-if-right">
            <img src={mini} className="minimize-img" />
            <span>
              <img
                src={close}
                className="close-img"
                onClick={() => navigate("/overview")}
              />
            </span>
          </div>
        </div>

        {/* BODY */}
        <div className="What-if-body">
          <div className="row">
            <div className="col-3">
              <div className="scenario-filter-container">
                <h6 className="heading">Scenario Filters</h6>
                <div className="filter-left-part">
                  {/* PLAN SELECTION */}
                  <div className="plan-selection-body">
                    <h6>Plan Selection</h6>
                    <Select
                      className="multiselect"
                      isMulti
                      options={options}
                      value={options.filter((op) => {
                        return scenarioList?.some(
                          (pt) => op.value === pt.value
                        );
                      })}
                      styles={colourStyles}
                      onChange={(selected) => setScenarioList(selected)}
                    />
                    <p>{scenarioList?.length} Plans Selected</p>
                  </div>

                  {/* GEO SELECTION */}
                  <div className="geographical-selection-body">
                    <h6>Geographic Area Selection</h6>
                    <Select
                      className="multiselect"
                      isMulti
                      options={areaoptions}
                      value={areaoptions.filter((op) => {
                        return geography?.some((pt) => op.value === pt.value);
                      })}
                      styles={colourStyles}
                      onChange={(selected) => setGeography(selected)}
                    />
                    <p>{geography?.length} States Selected</p>
                  </div>

                  {/* TIER IMPROVEMENT */}
                  <div className="target-tier-improvement-body">
                    <h6>Target Tier Improvement</h6>

                    <div className="target-tier-single-container">
                      <div>
                        <span className="current-title">Current Tier</span>
                        <Select
                          className="multiselect"
                          options="Tier 4"
                          placeholder="Tier 4"
                          // components={{ Option: RadioOption }}
                          value={currentTier}
                          onChange={setCurrentTier}
                          isSearchable={false}
                          styles={{
                            ...colourStyles,
                            dropdownIndicator: (base, state) => ({
                              ...base,
                              display: "none",
                            }),
                            indicatorSeparator: (base, state) => ({
                              ...base,
                              display: "none",
                            }),
                          }}
                        />
                      </div>

                      <div>
                        <span className="target-title">Target Tier</span>
                        <Select
                          placeholder="Select Tier"
                          className="multiselect"
                          options={Targettieroptions}
                          // components={{ Option: RadioOption }}
                          value={Targettieroptions.filter(
                            (op) => op.value === targetTier
                          )}
                          onChange={(e) => setTargetTier(e.value)}
                          isSearchable={false}
                          styles={colourStyles}
                          formatOptionLabel={(data, { context }) => {
                            const label = data.label || "";
                            const truncated =
                              label.length > 15
                                ? label.substring(0, 15) + "..."
                                : label;

                            return context === "menu" ? label : truncated;
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* UTILIZATION CHECKBOXES */}
                  <div className="utlization-man">
                    <h6>Utilization Management Barriers</h6>

                    <div className="utilization-check-container">
                      <label className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          checked={checklist.includes(
                            "Remove Step Therapy (ST)"
                          )}
                          name="Remove Step Therapy (ST)"
                          onChange={(e) => handleCheckList(e)}
                        />
                        <span className="custom-checkbox"></span>
                      </label>

                      <div className="expect-impact">
                        <p className="auth">Remove Step Therapy (ST)</p>
                        <p className="impact">
                          Expected impact: +8% to +15% volume
                        </p>
                      </div>
                    </div>

                    <div className="utilization-check-container">
                      <label className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          checked={checklist.includes(
                            "Remove Quantity Limits (QL)"
                          )}
                          name="Remove Quantity Limits (QL)"
                          onChange={(e) => handleCheckList(e)}
                        />
                        <span className="custom-checkbox"></span>
                      </label>

                      <div className="expect-impact">
                        <p className="auth">Remove Quantity Limits (QL)</p>
                        <p className="impact">
                          Expected impact: +10% to +20% volume
                        </p>
                      </div>
                    </div>

                    <div className="utilization-check-container">
                      <label className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          checked={checklist.includes(
                            "Remove Prior Authorization (PA)"
                          )}
                          name="Remove Prior Authorization (PA)"
                          onChange={(e) => handleCheckList(e)}
                        />
                        <span className="custom-checkbox"></span>
                      </label>

                      <div className="expect-impact">
                        <p className="auth">Remove Prior Authorization (PA)</p>
                        <p className="impact">Expected impact: +10% to +20%</p>
                      </div>
                    </div>

                    <div className="Elasticity-assumptions">
                      <h6>Elasticity Assumptions</h6>
                      <Box width={"60%"}>
                        <Slider
                          defaultValue={50}
                          aria-label="Default"
                          valueLabelDisplay="auto"
                          valueLabelFormat={(v) => `${v}% (Conservative)`}
                          sx={{
                            width: "300px",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            margin: "auto",
                            color: "#9E77ED", // this actually works through sx
                            "& .MuiSlider-thumb": {
                              backgroundColor: "#9E77ED",
                            },
                            "& .MuiSlider-track": {
                              backgroundColor: "#9E77ED",
                            },
                            "& .MuiSlider-rail": {
                              backgroundColor: "#E0CFFE",
                            },
                            // value label styling
                            "& .MuiSlider-valueLabel": {
                              background: "transparent",
                              color: "#9E77ED",
                              left: "50%",
                              top: "35px", // pushes label *below* the slider
                              transform: "translateX(-50%)",
                            },
                          }}
                        />
                      </Box>
                    </div>

                    {/* REBATE INVESTMENT RADIO SELECT */}
                    <div className="rebate-body">
                      <h6>Rebate Investment ($)</h6>
                      <input className="Rebate-investment" type="" value={rebateValue} onChange={(e)=>setRebateValue(e.target.value)}></input>
                      {/* <Select
                        className="multiselect"
                        options={options}
                        components={{ Option: RadioOption }}
                        value={rebateValue}
                        onChange={setRebateValue}
                        isSearchable={false}
                        styles={colourStyles}
                      /> */}
                    </div>

                    {/* PROJECTION TIMEFRAME RADIO SELECT */}
                    <div className="projection-body">
                      <h6>Projection Timeframe</h6>
                      <Select
                        className="multiselect"
                        options={timeframe}
                        // components={{ Option: RadioOption }}
                        value={timeframe.filter((op) => op.value === timeline)}
                        onChange={(e) => setTimeline(e.value)}
                        isSearchable={false}
                        styles={colourStyles}
                      />
                    </div>
                  </div>
                </div>
                <div className="footer-scenario">
                  <div className="button-container-filters">
                    <span className="clear-btn" onClick={() => clear()}>
                      Clear
                    </span>
                    <span className="apply-filter">Apply Filters</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="col-9">
              {/* Current State */}
              <div className="Current-state">
                <p className="Current-state-header">Current State</p>

                <div className="Current-state-content">
                  <div className="Total-claims">
                    <p className="Header-Tc">Total Claims</p>
                    <span className="Count-TC">32,700</span>
                    <span className="Year-TC">claims/year</span>
                  </div>

                  <div className="Total-claims">
                    <p className="Header-Tc">Revenue</p>
                    <span className="Count-TC">$27.8M</span>
                    <span className="Year-TC">Annually</span>
                  </div>

                  <div className="Total-claims">
                    <p className="Header-Tc">Average Tier Position</p>
                    <span className="Count-TC">5.0</span>
                    <span className="Year-TC">Across selected plans</span>
                  </div>
                </div>
              </div>

              {/* Projected State */}

              <div className="Green-Projected-state">
                <div className="Top-heading-Green">
                  <div className="Heading">
                    Projected State (With Improvements)
                  </div>
                  <div>
                    <div className="Confidence-badge">
                      <img src={greenstar} />
                      <span className="Confidence-indicator">
                        Confidence: High
                      </span>
                    </div>
                  </div>
                </div>

                <div className="Current-state-content">
                  <div className="Total-claims">
                    <p className="Header-Tc-green">Total Claims</p>
                    <span className="Count-TC-green">51,339</span>
                    <span className="Year-TC-green">+57% increase</span>
                  </div>

                  <div className="Total-claims">
                    <p className="Header-Tc-green">Revenue</p>
                    <span className="Count-TC-green">$43.6M</span>
                    <span className="Year-TC-green">+$15.8M</span>
                  </div>

                  <div className="Total-claims">
                    <p className="Header-Tc-green">Average Tier Position</p>
                    <span className="Count-TC-green">2.0</span>
                    <span className="Year-TC-green">Improved</span>
                  </div>
                </div>

                <div className="Projected-out-dispaly">
                  <div className="Categories">
                    <div className="Revenue-gain">
                      <span className="categories-key">Revenue Gain:</span>
                      <span className="revenue-in-dollar"> +$15.8M</span>
                    </div>

                    <div className="Investment">
                      <span className="categories-key">Investment:</span>
                      <span className="revenue-in-minusdollar"> -$10.5M</span>
                    </div>

                    <div className="Net-ROI">
                      <span className="categories-key">Net ROI:</span>
                      <span className="revenue-in-dollar"> +5.3M</span>
                    </div>

                    <div className="ROI-percentage">
                      <span className="categories-key">ROI %:</span>
                      <span className="revenue-in-dollar"> 51%</span>
                    </div>

                    <div className="Payback-Period">
                      <span className="categories-key">Payback Period:</span>
                      <span className="Payback-duration"> 8.0 months</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="Combined-result-projected">
                <div className="Combined-result-Parent">
                  <div className="Combined-elasticity-effect">
                    <span className="Heading-CEE">
                      Combined Elasticity Effect:
                    </span>
                    <span className="value-CEE">+57%</span>
                  </div>

                  <div className="Combined-elasticity-effect">
                    <span className="Heading-CEE">Tier improvement:</span>
                    <span className="value-CEE">+35%</span>
                  </div>

                  <div className="Combined-elasticity-effect">
                    <span className="Heading-CEE">Remove PA:</span>
                    <span className="value-CEE">+15%</span>
                  </div>

                  <div className="Combined-elasticity-effect-RQ">
                    <span className="Heading-CEE">Remove QL:</span>
                    <span className="value-CEE">+7%</span>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="Disclaimer-box">
                <div className="icn-disclaimer">
                  <img src={disclaimericn} />
                </div>
                <div className="disclaimer-main">
                  <span className="Naming-head">Disclaimer: </span>
                  <span className="disclaimer-content">
                    Estimates based on published research (Yeung 2018, Huskamp
                    2007) and industry benchmarks. Actual results may vary by
                    ±15% based on drug-specific factors, competitive dynamics,
                    and market conditions. Use ranges for financial planning.
                    Confidence level: Medium to High for claims elasticity,
                    Medium for revenue projections.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
 
export default Reports;