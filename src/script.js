(async () => {
  await loadFull(tsParticles);

  await tsParticles.load({
    id: "tsparticles",
    options: {
      fpsLimit: 240,
      emitters: {
        size: {
          width: 100,
          height: 0
        },
        position: {
          x: 50,
          y: 100
        },
        rate: {
          delay: 0.1,
          quantity: 2
        }
      },
      particles: {
        number: {
          value: 0,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#a8d1e7"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 1
        },
        size: {
          value: { min: 0.1, max: 20 },
          animation: {
            enable: true,
            speed: 5,
            sync: true,
            startValue: "min",
            destroy: "max"
          }
        },
        move: {
          enable: true,
          speed: 5,
          direction: "top",
          outModes: "destroy"
        }
      },
      background: {
        color: "#242424"
      }
    }
  });
})();
