---
layout: page
title: Ph.D. Dissertation
permalink: /phd_dissertation/
description: Towards Emotionally-Intelligent AI Systems
meta_description: Hongli Zhan's Ph.D. dissertation, Towards Emotionally-Intelligent AI Systems, The University of Texas at Austin, May 2026.
nav: false
scholar_meta:
  - name: citation_title
    content: Towards Emotionally-Intelligent AI Systems
  - name: citation_author
    content: Zhan, Hongli
  - name: citation_publication_date
    content: 2026/05
  - name: citation_dissertation_institution
    content: The University of Texas at Austin
  - name: citation_pdf_url
    content: https://honglizhan.github.io/assets/ut_austin_phd_papers/Zhan%202026%20PhD%20Dissertation.pdf
---

<div class="publications phd-dissertation-page">
  {% bibliography -f papers -q @phdthesis %}
</div>

## Abstract

<div class="dissertation-abstract-meta">
  <div class="dissertation-abstract-title">Towards Emotionally-Intelligent AI Systems</div>
  <div class="dissertation-abstract-author">Hongli Zhan</div>
  <div class="dissertation-abstract-supervisor">Supervisor: Junyi Jessy Li</div>
</div>

Emotions form a crucial aspect of people’s well-being. As Artificial Intelligence (AI) and Large Language Models (LLM) continue to excel across a diverse range of tasks, it becomes increasingly important to endow these systems with emotional intelligence and to apply this capability in ways that meaningfully promote human well-being. In this dissertation, my goal is to examine the extent to which language models comprehend human emotions and explore how their emotional understanding can be leveraged to benefit people — for instance, by fostering long-term emotional well-being and delivering empathic responses. We develop the dissertation into the following three parts:

**Part 1.** In the first part of the dissertation, we discuss exploring language models’ ability to decipher emotions from text. We will dive into two papers, where we investigated language models’ capability to disclose triggers of emotions (Zhan et al., 2022) as well as uncover cognitive appraisals of emotions (Zhan et al., 2023) from text. Results showed that Large Language Models (LLMs) perform on par with (and in some cases better than) laypeople in uncovering the implicit cognitive information for emotional understanding.

**Part 2.** We then dive into utilizing the advanced cognitive capability from LLMs to offer targeted reappraisals for long-term emotional support. In Zhan et al. (2024), we employed expertise from psychologists to guide LLMs on a subset of appraisal dimensions, and showed that even LLMs at smaller scales could generate cognitive reappraisals that significantly outperform human-written ones if we guide them with psychologically-informed instructions. Nonetheless, guiding language models using human expertise can be both time-consuming and expensive. In Zhan et al. (2025), we proposed a framework to automatically generate guidance in the form of constitutional principles specifically tailored to each input query in real time. Results revealed that models using principles derived from our framework perform on par with those using principles crafted by professional psychologists.

**Part 3.** Finally, we explored LLMs’ capability to produce supportive messages that display empathy. LLMs produce responses rated as highly empathic, yet they are also known to be formulaic generators across tasks. In Zhan et al. (2026), we investigated whether this formulaicity extends to the level of discourse moves, i.e., what a response does for the person it is addressing. This question is especially consequential for empathic dialogue, where effective support demands not just a kind response at one moment but varied strategies as a conversation unfolds. We found that LLMs reuse the same discourse moves at nearly double the rate of humans across turns, a rigidity that holds across models and is invisible to standard similarity metrics. To address this gap, we introduced MINT (Multi-turn Inter-tactic Novelty Training), a reinforcement learning framework that optimizes discourse move diversity across multi-turn empathic dialogue. The best MINT variant combined an empathy quality reward with a cross-turn tactic novelty signal, improving empathy by 24.5% and reducing cross-turn discourse move repetition by 26.3% on a 4B model over the vanilla baseline. These results suggested that what current models lack is not empathy itself, but the ability to vary their discourse moves across the arc of a conversation.

## BibTeX

```bibtex
@phdthesis{zhan2026dissertation,
    author={Zhan, Hongli},
    title={Towards Emotionally-Intelligent AI Systems},
    school={The University of Texas at Austin},
    year={2026},
    type={Ph.D. dissertation},
    month={May},
}
```
