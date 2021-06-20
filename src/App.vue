<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">Bike gear calculator</h1>
    </div>
  </header>

  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div id="chart_div"></div>

      <h4>Kolo č.1</h4>
      <p>
        Minimální rychlost při kadenci 90:
        {{ bike1.minimalSpeed(90).value.toFixed(2) }} km/h<br />
        Maximální rychlost při kadenci 90:
        {{ bike1.maximalSpeed(90).value.toFixed(2) }} km/h<br />
      </p>

      <h4>Kolo č.2</h4>
      <p>
        Minimální rychlost při kadenci 90:
        {{ bike2.minimalSpeed(90).value.toFixed(2) }} km/h<br />
        Maximální rychlost při kadenci 90:
        {{ bike2.maximalSpeed(90).value.toFixed(2) }} km/h<br />
      </p>
      <div id="chart_diff"></div>
    </div>
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useScriptTag } from '@vueuse/core'
  import { ChainRing } from '@/model/Bike/GearSystem/Components/CrankSet/ChainRing'
  import { Sprocket } from '@/model/Bike/GearSystem/Components/Cassette/Sprocket'
  import { Bike } from '@/model/Bike/Bike'
  import { CrankSet } from '@/model/Bike/GearSystem/Components/CrankSet/CrankSet'
  import { Cassette } from '@/model/Bike/GearSystem/Components/Cassette/Cassette'
  import { GearSystem } from '@/model/Bike/GearSystem/GearSystem'
  import { Wheel } from '@/model/Bike/Wheel'

  declare global {
    interface Window {
      google: any //eslint-disable-line @typescript-eslint/no-explicit-any
    }
  }

  export default defineComponent({
    name: 'App',
    setup: () => {
      useScriptTag('https://www.gstatic.com/charts/loader.js', () => {
        window.google.charts.load('current', { packages: ['bar', 'corechart'] })
        window.google.charts.setOnLoadCallback(onGoogleLoaded)
      })

      // 11-13-15-17-19-21-23-25-27-30-34
      const bike1 = new Bike(
        new GearSystem(
          new CrankSet(new ChainRing(32), new ChainRing(48)),
          new Cassette(
            new Sprocket(11),
            new Sprocket(13),
            new Sprocket(15),
            new Sprocket(17),
            new Sprocket(19),
            new Sprocket(21),
            new Sprocket(23),
            new Sprocket(25),
            new Sprocket(27),
            new Sprocket(30),
            new Sprocket(34)
          )
        ),
        new Wheel(2.1)
      )

      // 11-12-13-14-15-17-19-21-24-27-30
      const bike2 = new Bike(
        new GearSystem(
          new CrankSet(new ChainRing(32), new ChainRing(48)),
          new Cassette(
            new Sprocket(11),
            new Sprocket(12),
            new Sprocket(13),
            new Sprocket(14),
            new Sprocket(15),
            new Sprocket(17),
            new Sprocket(19),
            new Sprocket(21),
            new Sprocket(24),
            new Sprocket(27),
            new Sprocket(30)
          )
        ),
        new Wheel(2.1)
      )

      const onGoogleLoaded = () => {
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        let dataSource: Array<any> = [
          [
            'Číslo převodu',
            `${bike1.gearSystem.cassette.sprockets[0].teethes} - ${
              bike1.gearSystem.cassette.sprockets[
                bike1.gearSystem.cassette.sprockets.length - 1
              ].teethes
            }`,
            { role: 'tooltip' },
            `${bike2.gearSystem.cassette.sprockets[0].teethes} - ${
              bike2.gearSystem.cassette.sprockets[
                bike2.gearSystem.cassette.sprockets.length - 1
              ].teethes
            }`,
            { role: 'tooltip' },
          ],
        ]

        for (let i = 0; i < bike1.gearSystem.cassette.sprockets.length; i++) {
          dataSource.push([
            i + 1,
            bike1.gearSystem.gears[i]?.ratio.value,
            `${bike1.gearSystem.gears[i]?.chainRing.teethes}x${bike1.gearSystem.gears[i]?.sprocket.teethes}`,
            bike2.gearSystem.gears[i]?.ratio.value,
            `${bike2.gearSystem.gears[i]?.chainRing.teethes}x${bike2.gearSystem.gears[i]?.sprocket.teethes}`,
          ])
        }

        var data = window.google.visualization.arrayToDataTable(dataSource)
        var options = {
          title: 'Gear ratio pro převodník č.1',
          bars: 'horizontal',
          vAxis: {
            title: 'Zvolený stupeň na kazetě',
            gridlines: { count: 11 },
          },
          height: 600,
        }

        var chart = new window.google.visualization.BarChart(
          document.getElementById('chart_div')
        )
        chart.draw(data, options)
        drawDiff()
      }

      const drawDiff = () => {
        // 11-12-13-14-15-17-19-21-23-25-28
        const bike3 = new Bike(
          new GearSystem(
            new CrankSet(new ChainRing(32), new ChainRing(48)),
            new Cassette(
              new Sprocket(11),
              new Sprocket(12),
              new Sprocket(13),
              new Sprocket(14),
              new Sprocket(15),
              new Sprocket(17),
              new Sprocket(19),
              new Sprocket(21),
              new Sprocket(23),
              new Sprocket(25),
              new Sprocket(28)
            )
          ),
          new Wheel(2000)
        )

        // 11-12-13-14-16-18-20-22-25-28-32
        const bike4 = new Bike(
          new GearSystem(
            new CrankSet(new ChainRing(32), new ChainRing(48)),
            new Cassette(
              new Sprocket(11),
              new Sprocket(12),
              new Sprocket(13),
              new Sprocket(14),
              new Sprocket(16),
              new Sprocket(18),
              new Sprocket(20),
              new Sprocket(22),
              new Sprocket(25),
              new Sprocket(28),
              new Sprocket(32)
            )
          ),
          new Wheel(2000)
        )
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        let dataSource: Array<any> = [
          [
            'Číslo převodu',
            `${bike3.gearSystem.cassette.sprockets[0].teethes} - ${
              bike3.gearSystem.cassette.sprockets[
                bike3.gearSystem.cassette.sprockets.length - 1
              ].teethes
            }`,
            { role: 'tooltip' },
            `${bike4.gearSystem.cassette.sprockets[0].teethes} - ${
              bike4.gearSystem.cassette.sprockets[
                bike4.gearSystem.cassette.sprockets.length - 1
              ].teethes
            }`,
            { role: 'tooltip' },
          ],
        ]

        for (
          let i = 0;
          i < bike3.gearSystem.cassette.sprockets.length - 1;
          i++
        ) {
          dataSource.push([
            i + 1,
            bike3.gearSystem.gears[i]?.ratio.value -
              bike3.gearSystem.gears[i + 1]?.ratio.value,
            `${bike3.gearSystem.gears[i]?.chainRing.teethes}x${bike3.gearSystem.gears[i]?.sprocket.teethes}`,
            bike4.gearSystem.gears[i]?.ratio.value -
              bike4.gearSystem.gears[i + 1]?.ratio.value,
            `${bike4.gearSystem.gears[i]?.chainRing.teethes}x${bike4.gearSystem.gears[i]?.sprocket.teethes}`,
          ])
        }

        var data = window.google.visualization.arrayToDataTable(dataSource)
        var options = {
          title: 'Gear ratio pro převodník č.1',
          // bars: 'horizontal',
          height: 600,
        }

        var chart = new window.google.visualization.ColumnChart(
          document.getElementById('chart_diff')
        )
        chart.draw(data, options)
      }

      return {
        bike1,
        bike2,
      }
    },
  })
</script>
