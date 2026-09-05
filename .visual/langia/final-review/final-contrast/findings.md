# Final finale contrast verification

All four scoped viewport checks pass. Captures were inspected visually, and solid white heading pixels were compared with the exact underlying image in a second screenshot with the heading temporarily hidden.

| Viewport | Lowest sampled heading contrast | Heading pixels below 3:1 |
| --- | ---: | ---: |
| ES 1024×768 | 4.28:1 | 0 |
| EN 390×844 | 4.00:1 | 0 |
| ES 360×800 | 4.01:1 | 0 |
| PT 768×1024 | 3.99:1 | 0 |

The remaining finale contrast finding is resolved. Portraits remain recognizable and facial expressions readable beneath the responsive shade. Individual/company actions remain clearly separated and visible. No new visual defects or page errors appeared in these scoped captures.

This verifies the finale heading against the 3:1 large-text contrast threshold in the measured rendered states; it is not a whole-page accessibility certification. Exact measurements and sample coordinates are saved in `report.json`. Each viewport has a matching `*-finale.png` screenshot.
