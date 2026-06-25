---

title: "ECC Analyzer: LLM-based Earnings Conference Call Analysis"

description: "A multimodal AI framework integrating large language models, retrieval-augmented generation, and speech analysis for financial document understanding and stock volatility prediction."

tags:

- "Artificial Intelligence"
- "Large Language Models"
- "Financial NLP"
- "Multimodal Learning"
- "Retrieval-Augmented Generation"

## external_url: "https://arxiv.org/abs/2404.18470"
---
## Overview

Earnings conference calls contain rich qualitative information about a company's financial performance, future outlook, and management strategy. While previous approaches primarily relied on raw transcripts or acoustic features, they often struggled to capture the contextual financial knowledge embedded within lengthy corporate discussions.

This project introduces **ECC Analyzer**, a multimodal framework that leverages Large Language Models (LLMs) to transform earnings conference calls into structured financial representations for downstream stock volatility prediction. Rather than asking LLMs to directly forecast market movements, the framework focuses on extracting interpretable financial signals that can be integrated into traditional machine learning models.



## Motivation

Financial markets increasingly react to qualitative information beyond numerical financial statements. Executive tone, strategic guidance, and discussions of future uncertainty often contain valuable signals for investors.

This project investigates how modern Large Language Models can improve financial document understanding by combining retrieval-based reasoning, domain-specific knowledge, and multimodal learning to extract meaningful investment-related information from earnings conference calls.



## Methodology

The proposed framework integrates multiple AI components into a unified analytical pipeline:

- Multimodal feature extraction from earnings call transcripts and speech recordings.
- Transformer-based representation learning for textual and acoustic information.
- Hierarchical LLM summarization for long financial documents.
- Retrieval-Augmented Generation (RAG) for domain-specific information retrieval and reasoning.
- Structured financial signal extraction for downstream stock volatility prediction.

Instead of relying on end-to-end black-box prediction, the framework emphasizes interpretable information extraction that complements conventional statistical learning methods.



## My Role

As one of the co-authors, I contributed to the design and implementation of the LLM reasoning framework, prompt engineering, financial annotation, and manuscript preparation.



## Results

Experimental evaluation on the public S&P 500 Earnings Conference Call dataset demonstrated that the proposed framework consistently outperformed previous multimodal baselines.

Compared with prior state-of-the-art methods, ECC Analyzer achieved approximately **27.7% lower Mean Squared Error (MSE)** while providing substantially richer financial representations through LLM-assisted information extraction.

More importantly, the project demonstrated that LLMs are significantly more effective when used as structured reasoning and knowledge extraction tools than as direct financial forecasting models.



## Research Areas

**Large Language Models · Financial NLP · Retrieval-Augmented Generation · Multimodal Learning · Quantitative Finance · Financial AI**