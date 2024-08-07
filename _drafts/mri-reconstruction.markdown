---
layout: post
title: "MRI Reconstruction with Unrolled Networks"
tags: [ml]
excerpt: >
  An accessible introduction to MRI Reconstruction and solving them with unrolled neural networks
---

This is an introduction to the MRI Reconstruction problem and approaching them with unrolled networks that I've been utilizing recently as a part of the [MICCAI 2024 Challenge](https://conferences.miccai.org/2024/en/). This approach is very applicable to other impactful computer vision tasks such as image inpainting, denoising, demosaicing, etc.

## The Problem
Say we want to take an MRI image quicker. This makes the patient need to spend less time in the machine and makes physiological movement (e.g. bloodflow) less disrupting to the final image. However, in order to take an MRI image quicker, we have less time to fully sample the patient's anatomy in the scanner.

{% katexmm %}
Therefore, the problem of MRI reconstruction is simple: we have an undersampled MRI image and we want to reconstruct what the *underlying* image is. Let us define $$\hat{y} = Ex$$ where $x$ is our the true underlying, $\hat{y}$ is the undersampled image, and $E$ is some known function that our MRI machine is doing while taking its image defined by coil sensitivity maps, Fourier transforms, and a selected sampling pattern.

Knowing $y$ and $E$, we want to find $x$. In other words, we hope to find $$\min_x {||\hat{y} - Ex||}_2^2$$ to solve the ill-posed inverse problem. As with many other minimizing problems, gradient descent can solve this easily. 

However, the immediate issue we see is that the image we receive from our machine is not exactly what we expect. There will always be surrounding noise from the MRI's electronic components, motion artifacts, and much more. Simply, $E_{true}$ is not exactly $E$, and we do not want to overfit and reproduce this noise. Therefore, we must have a regularizer.


{% endkatexmm %}