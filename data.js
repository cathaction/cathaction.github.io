// CATHACTION 2026 Task 1 leaderboard data.
// To add a submission: append one entry to `teams`, fill `human` (and `ap` if evaluated), bump `updated`.
window.LEADERBOARD = {
  updated: "2026-10-07",
  news: [
    { date: "2026-10-07", html: 'Add <b>TEAMNAME_phase2</b> <span class="num">(Dice 0.3451)</span>, second on the human test set and best among methods trained without human data.' },
    { date: "2026-09-23", html: 'Add <b>GenMI-Star</b> <span class="num">(Dice 0.4619)</span>, trained with the public human training split.' },
    { date: "2026-09-20", html: 'Add <b>LTSI-Rennes</b> <span class="num">(0.3049)</span>, <b>InnerLogic (real)</b> <span class="num">(0.2753)</span> and <b>InnerLogic (sim)</b> <span class="num">(0.2537)</span>.' }
  ],
  sites: [
    { id: "CLY", cases: 24 },
    { id: "DHW", cases: 33 },
    { id: "HTM", cases: 116 },
    { id: "HXS", cases: 68 }
  ],
  teams: [
    {
      name: "GenMI-Star", short: "GS", abbr: "GenMI", source: "MICCAI 2026",
      method: "Segmentation network, TorchScript",
      data: "human",
      date: "2026-09-23",
      human: { dice: 0.4619, cldice: 0.5245, frameDice: 0.5179, precision: 0.5675, recall: 0.5539, hd95: 138.3, empty: 0.002,
               site: { CLY: 0.5675, DHW: 0.7010, HTM: 0.4120, HXS: 0.3936 } },
      ap: { all: 0.5606, animal: 0.6911, phantom: 0.5253, pooled: 0.5308, fg: 0.6141 }
    },
    {
      name: "TEAMNAME_phase2", short: "TN", abbr: "TEAMNAME", source: "MICCAI 2026",
      method: "nnU-Net v2 ResEnc-L 2D, path guard post-processing",
      data: "ap",
      date: "2026-10-07",
      human: { dice: 0.3451, cldice: 0.4018, frameDice: 0.4172, precision: 0.5796, recall: 0.4171, hd95: 155.0, empty: 0.051,
               site: { CLY: 0.3080, DHW: 0.6556, HTM: 0.2509, HXS: 0.3682 } },
      ap: { all: 0.5685, animal: 0.6866, phantom: 0.5363, pooled: 0.5581, fg: 0.6287 }
    },
    {
      name: "LTSI-Rennes", short: "LR", abbr: "LTSI", source: "MICCAI 2026",
      method: "Segmentation network",
      data: "ap",
      date: "2026-09-20",
      human: { dice: 0.3049, cldice: 0.3626, frameDice: 0.3761, precision: 0.6263, recall: 0.3296, hd95: 175.3, empty: 0.125,
               site: { CLY: 0.3317, DHW: 0.5679, HTM: 0.1998, HXS: 0.3472 } },
      ap: { all: 0.5627, animal: 0.6838, phantom: 0.5297, pooled: 0.5474, fg: 0.6218 }
    },
    {
      name: "InnerLogic (real)", short: "IR", abbr: "IL-real", source: "MICCAI 2026",
      method: "Segmentation network",
      data: "undeclared",
      date: "2026-09-20",
      human: { dice: 0.2753, cldice: 0.3269, frameDice: 0.3087, precision: 0.3621, recall: 0.3585, hd95: 202.7, empty: 0.013,
               site: { CLY: 0.3145, DHW: 0.4286, HTM: 0.2047, HXS: 0.3075 } },
      ap: { all: 0.2994, animal: 0.6398, phantom: 0.2076, pooled: 0.2772, fg: 0.4117 }
    },
    {
      name: "InnerLogic (sim)", short: "IS", abbr: "IL-sim", source: "MICCAI 2026",
      method: "Segmentation network",
      data: "undeclared",
      date: "2026-09-20",
      human: { dice: 0.2537, cldice: 0.3154, frameDice: 0.2954, precision: 0.4826, recall: 0.3011, hd95: 167.8, empty: 0.072,
               site: { CLY: 0.3666, DHW: 0.3802, HTM: 0.2156, HXS: 0.2175 } },
      ap: { all: 0.2379, animal: 0.4462, phantom: 0.1828, pooled: 0.2283, fg: 0.4083 }
    }
  ]
};
