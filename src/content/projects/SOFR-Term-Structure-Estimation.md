---

title: "SOFR Term Structure Estimation"
description: "A master's research project on modeling the SOFR yield curve using the Nelson–Siegel framework for interest rate forecasting and fixed-income applications."
tags:
  - "Financial Engineering"
  - "Interest Rates"
  - "Fixed Income"
  - "Statistics"
external_url: "https://fsc.stevens.edu/methods-on-the-estimations-of-sofr-term-structures-2/"
---

## Overview

This project was completed as my master's thesis in Financial Engineering at Stevens Institute of Technology. It investigates practical approaches for estimating the Secured Overnight Financing Rate (SOFR) term structure during the transition from LIBOR to SOFR.

## Motivation

The replacement of LIBOR created significant challenges for interest rate modeling and derivative pricing. Accurate estimation of the SOFR yield curve is essential for fixed-income valuation, risk management, and interest rate forecasting.

## Methodology

The project combines the Nelson–Siegel yield curve framework with state-space modeling to estimate and forecast the SOFR term structure. To improve robustness under market uncertainty, the model incorporates the **Kalman Filter**, which recursively updates latent yield curve factors through state transition and observation equations. This approach enables dynamic estimation of interest rate movements while reducing the impact of market noise and incomplete observations.

Numerical optimization techniques were further applied to calibrate model parameters and improve curve-fitting accuracy across different maturities.

## Outcomes

The resulting framework improves curve fitting accuracy while providing a practical tool for fixed-income valuation and interest rate analysis. The methodology also demonstrates applications in derivative pricing, portfolio management, and financial risk assessment.

This project laid the quantitative foundation for my later research in statistics, machine learning, and data-driven decision making. 

## Key Techniques

- Nelson–Siegel Yield Curve Model
- State-Space Model
- Kalman Filter
- Numerical Optimization
- Interest Rate Forecasting
