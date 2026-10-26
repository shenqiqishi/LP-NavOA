# LP-NavOA — project page

Source of the project page published at
**<https://shenqiqishi.github.io/LP-NavOA/>**.

It presents the inference architecture, dynamic route-shaping supervision,
simulation results, teacher/student ablations, and real-robot obstacle-bypass
experiments. Five supplied figures follow paper Figs. 1, 2, 3 (excerpt), 4,
and 5(c). The real-robot section contains seven recordings of six documented
runs, including two views of the same slanted-panel run.

Use the English / 中文 buttons to switch page text, captions, and image
descriptions. The choice is remembered locally. Labels embedded in the
original figures remain in English. Without JavaScript, English remains readable.

| Resource | Link |
| --- | --- |
| Project page | <https://shenqiqishi.github.io/LP-NavOA/> |
| Paper | [arXiv:2606.23249](https://arxiv.org/abs/2606.23249) |
| Code | [shenqiqishi/LP-NavOA-code](https://github.com/shenqiqishi/LP-NavOA-code) |

## Contents

- `index.html`, `styles.css`, `site.js` — the static page, responsive styles,
  and language switch. English text and Chinese translations (`data-zh` and
  `data-zh-alt`) are maintained together in the HTML. GitHub Pages serves it from
  `main` / (root), so pushing a change to `index.html` republishes the site.
- `media/` — the paper figures and experiment recordings referenced by the page.

For local preview, serve the repository root using any static HTTP server,
for example `python -m http.server 8765`, then open <http://localhost:8765/>.
There are no build steps or external frontend dependencies.

The code, training pipeline and benchmark live in
[LP-NavOA-code](https://github.com/shenqiqishi/LP-NavOA-code).
