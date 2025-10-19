---
layout: default
title: Papers I Like
---

A collection of papers that have influenced my thinking or that I find particularly interesting.

<div class="timeline-entry">
  <div class="timeline-date"><a href="https://arxiv.org/abs/2506.08931">CLONE</a></div>
  <div class="timeline-content">Particularly interesting how they utilize <a href="https://github.com/hku-mars/FAST_LIO">lidar odometry</a> to estimate global position, maintaining consistency with the teleoperator. Their mixture of experts training system for humanoid RL is novel and represents a creative application I haven't encountered before in this domain.</div>
</div>

<div class="timeline-entry">
  <div class="timeline-date"><a href="https://arxiv.org/abs/2508.08241">BeyondMimic</a></div>
  <div class="timeline-content">Guided diffusion is a great way to extrapolate a lot of extra utility out of diffusion models. Their application of it to whole body reference motion tracking is, just as a whole, very creative. Diffusion works are also always compelling because they connect to <a href="https://arxiv.org/pdf/2210.02747">flow matching</a>, <a href="https://arxiv.org/pdf/2303.01469">consistency models</a>, <a href="https://arxiv.org/pdf/2010.02502">DDIM</a>, and <a href="https://diffusion-steering.github.io/">diffusion steering</a> improvements, allowing transfer of proven concepts from image/video generation to robotics.</div>
</div>

<div class="timeline-entry">
  <div class="timeline-date"><a href="https://arxiv.org/pdf/2503.20783">Dr. GRPO</a></div>
  <div class="timeline-content">Great reminder to question basic assumptions - more reasoning tokens aren't always helpful if they're wrong. Interesting how tiny normalization choices can completely change what you're actually optimizing for.</div>
</div>

<div class="timeline-entry">
  <div class="timeline-date"><a href="https://arxiv.org/pdf/2506.01939">Beyond the 80/20 Rule</a></div>
  <div class="timeline-content">Clever approach using entropy during inference to guide training efficiency. The insight that high-entropy tokens act as "reasoning forks" is compelling - focus optimization where the model is most uncertain. <a href="https://arxiv.org/pdf/2506.14758">Another entropy-centric paper</a> explores using model intrinsics, but for encouraging exploration during learning.</div>
</div>

## Other Interesting Readings

Just a collection of other interesting things worth checking out.

- [Q-Learning is Not Yet Scalable](https://seohong.me/blog/q-learning-is-not-yet-scalable/)
- [MuP](https://arxiv.org/pdf/2203.03466)
- [Hierarchical Reasoning Model](https://arxiv.org/pdf/2506.21734)
- [DeepSeek Open Source Week](https://apidog.com/blog/deepseek-open-source-week/)