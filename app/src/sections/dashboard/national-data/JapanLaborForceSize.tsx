import { useState, useEffect } from 'react';

// next
import dynamic from 'next/dynamic';

// material-ui
import { useTheme } from '@mui/material/styles';

// project import
import useConfig from 'hooks/useConfig';

// third-party
import { Props as ChartProps } from 'react-apexcharts';

//import { getOtherServerSideProps } from 'pages/indexPage';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// ==============================|| MARKETING CARD CHART ||============================== //

const JapanLaborForceSizeChart = () => {
  const theme = useTheme();
  const { mode } = useConfig();

  // chart options
  const areaChartOptions = {
    chart: {
      id: 'new-stack-chart',
      sparkline: {
        enabled: true
      },
      height: 100,
      type: 'area',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5
          }
        }
      },
      tooltip: {
        enabled: false
      }
    },
    stroke: {
      curve: 'straight',
      width: 1.5
    },
    grid: {
      show: false
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      }
    },
    tooltip: {
      theme: mode === 'dark' ? 'dark' : 'light',
      x: {
        show: false
      },
      y: {
        formatter(val: number) {
          return `$ ${val}`;
        }
      }
    }
  };

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState<ChartProps>(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.primary.main, theme.palette.primary[700]],
      tooltip: {
        theme: mode === 'dark' ? 'dark' : 'light'
      }
    }));
  }, [mode, primary, secondary, line, theme]);

  const [series] = useState([
    {
        name: 'Japan',
        data: [{"x":"1952-12-31 18:00","y":null},{"x":"1953-1-31 18:00","y":null},{"x":"1953-2-28 18:00","y":null},{"x":"1953-3-31 18:00","y":null},{"x":"1953-4-30 19:00","y":null},{"x":"1953-5-31 19:00","y":null},{"x":"1953-6-30 19:00","y":null},{"x":"1953-7-31 19:00","y":null},{"x":"1953-8-31 19:00","y":null},{"x":"1953-9-30 18:00","y":null},{"x":"1953-10-31 18:00","y":null},{"x":"1953-11-30 18:00","y":null},{"x":"1953-12-31 18:00","y":null},{"x":"1954-1-31 18:00","y":null},{"x":"1954-2-28 18:00","y":null},{"x":"1954-3-31 18:00","y":null},{"x":"1954-4-30 19:00","y":null},{"x":"1954-5-31 19:00","y":null},{"x":"1954-6-30 19:00","y":null},{"x":"1954-7-31 19:00","y":null},{"x":"1954-8-31 19:00","y":null},{"x":"1954-9-30 18:00","y":null},{"x":"1954-10-31 18:00","y":null},{"x":"1954-11-30 18:00","y":null},{"x":"1954-12-31 18:00","y":null},{"x":"1955-1-31 18:00","y":null},{"x":"1955-2-28 18:00","y":null},{"x":"1955-3-31 18:00","y":null},{"x":"1955-4-30 19:00","y":null},{"x":"1955-5-31 19:00","y":null},{"x":"1955-6-30 19:00","y":null},{"x":"1955-7-31 19:00","y":null},{"x":"1955-8-31 19:00","y":null},{"x":"1955-9-30 19:00","y":null},{"x":"1955-10-31 18:00","y":null},{"x":"1955-11-30 18:00","y":null},{"x":"1955-12-31 18:00","y":null},{"x":"1956-1-31 18:00","y":null},{"x":"1956-2-29 18:00","y":null},{"x":"1956-3-31 18:00","y":null},{"x":"1956-4-30 19:00","y":null},{"x":"1956-5-31 19:00","y":null},{"x":"1956-6-30 19:00","y":null},{"x":"1956-7-31 19:00","y":null},{"x":"1956-8-31 19:00","y":null},{"x":"1956-9-30 19:00","y":null},{"x":"1956-10-31 18:00","y":null},{"x":"1956-11-30 18:00","y":null},{"x":"1956-12-31 18:00","y":null},{"x":"1957-1-31 18:00","y":null},{"x":"1957-2-28 18:00","y":null},{"x":"1957-3-31 18:00","y":null},{"x":"1957-4-30 19:00","y":null},{"x":"1957-5-31 19:00","y":null},{"x":"1957-6-30 19:00","y":null},{"x":"1957-7-31 19:00","y":null},{"x":"1957-8-31 19:00","y":null},{"x":"1957-9-30 19:00","y":null},{"x":"1957-10-31 18:00","y":null},{"x":"1957-11-30 18:00","y":null},{"x":"1957-12-31 18:00","y":null},{"x":"1958-1-31 18:00","y":null},{"x":"1958-2-28 18:00","y":null},{"x":"1958-3-31 18:00","y":null},{"x":"1958-4-30 19:00","y":null},{"x":"1958-5-31 19:00","y":null},{"x":"1958-6-30 19:00","y":null},{"x":"1958-7-31 19:00","y":null},{"x":"1958-8-31 19:00","y":null},{"x":"1958-9-30 19:00","y":null},{"x":"1958-10-31 18:00","y":null},{"x":"1958-11-30 18:00","y":null},{"x":"1958-12-31 18:00","y":null},{"x":"1959-1-31 18:00","y":null},{"x":"1959-2-28 18:00","y":null},{"x":"1959-3-31 18:00","y":null},{"x":"1959-4-30 19:00","y":null},{"x":"1959-5-31 19:00","y":null},{"x":"1959-6-30 19:00","y":null},{"x":"1959-7-31 19:00","y":null},{"x":"1959-8-31 19:00","y":null},{"x":"1959-9-30 19:00","y":null},{"x":"1959-10-31 18:00","y":null},{"x":"1959-11-30 18:00","y":null},{"x":"1959-12-31 18:00","y":null},{"x":"1960-1-31 18:00","y":null},{"x":"1960-2-29 18:00","y":null},{"x":"1960-3-31 18:00","y":null},{"x":"1960-4-30 19:00","y":null},{"x":"1960-5-31 19:00","y":null},{"x":"1960-6-30 19:00","y":null},{"x":"1960-7-31 19:00","y":null},{"x":"1960-8-31 19:00","y":null},{"x":"1960-9-30 19:00","y":null},{"x":"1960-10-31 18:00","y":null},{"x":"1960-11-30 18:00","y":null},{"x":"1960-12-31 18:00","y":null},{"x":"1961-1-31 18:00","y":null},{"x":"1961-2-28 18:00","y":null},{"x":"1961-3-31 18:00","y":null},{"x":"1961-4-30 19:00","y":null},{"x":"1961-5-31 19:00","y":null},{"x":"1961-6-30 19:00","y":null},{"x":"1961-7-31 19:00","y":null},{"x":"1961-8-31 19:00","y":null},{"x":"1961-9-30 19:00","y":null},{"x":"1961-10-31 18:00","y":null},{"x":"1961-11-30 18:00","y":null},{"x":"1961-12-31 18:00","y":null},{"x":"1962-1-31 18:00","y":null},{"x":"1962-2-28 18:00","y":null},{"x":"1962-3-31 18:00","y":null},{"x":"1962-4-30 19:00","y":null},{"x":"1962-5-31 19:00","y":null},{"x":"1962-6-30 19:00","y":null},{"x":"1962-7-31 19:00","y":null},{"x":"1962-8-31 19:00","y":null},{"x":"1962-9-30 19:00","y":null},{"x":"1962-10-31 18:00","y":null},{"x":"1962-11-30 18:00","y":null},{"x":"1962-12-31 18:00","y":null},{"x":"1963-1-31 18:00","y":null},{"x":"1963-2-28 18:00","y":null},{"x":"1963-3-31 18:00","y":null},{"x":"1963-4-30 19:00","y":null},{"x":"1963-5-31 19:00","y":null},{"x":"1963-6-30 19:00","y":null},{"x":"1963-7-31 19:00","y":null},{"x":"1963-8-31 19:00","y":null},{"x":"1963-9-30 19:00","y":null},{"x":"1963-10-31 18:00","y":null},{"x":"1963-11-30 18:00","y":null},{"x":"1963-12-31 18:00","y":null},{"x":"1964-1-31 18:00","y":null},{"x":"1964-2-29 18:00","y":null},{"x":"1964-3-31 18:00","y":null},{"x":"1964-4-30 19:00","y":null},{"x":"1964-5-31 19:00","y":null},{"x":"1964-6-30 19:00","y":null},{"x":"1964-7-31 19:00","y":null},{"x":"1964-8-31 19:00","y":null},{"x":"1964-9-30 19:00","y":null},{"x":"1964-10-31 18:00","y":null},{"x":"1964-11-30 18:00","y":null},{"x":"1964-12-31 18:00","y":null},{"x":"1965-1-31 18:00","y":null},{"x":"1965-2-28 18:00","y":null},{"x":"1965-3-31 18:00","y":null},{"x":"1965-4-30 19:00","y":null},{"x":"1965-5-31 19:00","y":null},{"x":"1965-6-30 19:00","y":null},{"x":"1965-7-31 19:00","y":null},{"x":"1965-8-31 19:00","y":null},{"x":"1965-9-30 19:00","y":null},{"x":"1965-10-31 18:00","y":null},{"x":"1965-11-30 18:00","y":null},{"x":"1965-12-31 18:00","y":null},{"x":"1966-1-31 18:00","y":null},{"x":"1966-2-28 18:00","y":null},{"x":"1966-3-31 18:00","y":null},{"x":"1966-4-30 19:00","y":null},{"x":"1966-5-31 19:00","y":null},{"x":"1966-6-30 19:00","y":null},{"x":"1966-7-31 19:00","y":null},{"x":"1966-8-31 19:00","y":null},{"x":"1966-9-30 19:00","y":null},{"x":"1966-10-31 18:00","y":null},{"x":"1966-11-30 18:00","y":null},{"x":"1966-12-31 18:00","y":null},{"x":"1967-1-31 18:00","y":null},{"x":"1967-2-28 18:00","y":null},{"x":"1967-3-31 18:00","y":null},{"x":"1967-4-30 19:00","y":null},{"x":"1967-5-31 19:00","y":null},{"x":"1967-6-30 19:00","y":null},{"x":"1967-7-31 19:00","y":null},{"x":"1967-8-31 19:00","y":null},{"x":"1967-9-30 19:00","y":null},{"x":"1967-10-31 18:00","y":null},{"x":"1967-11-30 18:00","y":null},{"x":"1967-12-31 18:00","y":null},{"x":"1968-1-31 18:00","y":null},{"x":"1968-2-29 18:00","y":null},{"x":"1968-3-31 18:00","y":null},{"x":"1968-4-30 19:00","y":null},{"x":"1968-5-31 19:00","y":null},{"x":"1968-6-30 19:00","y":null},{"x":"1968-7-31 19:00","y":null},{"x":"1968-8-31 19:00","y":null},{"x":"1968-9-30 19:00","y":null},{"x":"1968-10-31 18:00","y":null},{"x":"1968-11-30 18:00","y":null},{"x":"1968-12-31 18:00","y":null},{"x":"1969-1-31 18:00","y":null},{"x":"1969-2-28 18:00","y":null},{"x":"1969-3-31 18:00","y":null},{"x":"1969-4-30 19:00","y":null},{"x":"1969-5-31 19:00","y":null},{"x":"1969-6-30 19:00","y":null},{"x":"1969-7-31 19:00","y":null},{"x":"1969-8-31 19:00","y":null},{"x":"1969-9-30 19:00","y":null},{"x":"1969-10-31 18:00","y":null},{"x":"1969-11-30 18:00","y":null},{"x":"1969-12-31 18:00","y":"70983116.106"},{"x":"1970-1-31 18:00","y":"71105826.788"},{"x":"1970-2-28 18:00","y":"71251812.373"},{"x":"1970-3-31 18:00","y":"71342059.73"},{"x":"1970-4-30 19:00","y":"71416224.148"},{"x":"1970-5-31 19:00","y":"71483403.27"},{"x":"1970-6-30 19:00","y":"71494627.622"},{"x":"1970-7-31 19:00","y":"71610226.825"},{"x":"1970-8-31 19:00","y":"71708945.178"},{"x":"1970-9-30 19:00","y":"71720895.759"},{"x":"1970-10-31 18:00","y":"71773096.038"},{"x":"1970-11-30 18:00","y":"71755260.182"},{"x":"1970-12-31 18:00","y":"71799952.036"},{"x":"1971-1-31 18:00","y":"71855554.799"},{"x":"1971-2-28 18:00","y":"72027477.185"},{"x":"1971-3-31 18:00","y":"72053788.042"},{"x":"1971-4-30 19:00","y":"72148902.295"},{"x":"1971-5-31 19:00","y":"72208388.395"},{"x":"1971-6-30 19:00","y":"72231111.283"},{"x":"1971-7-31 19:00","y":"72341301.265"},{"x":"1971-8-31 19:00","y":"72347843.931"},{"x":"1971-9-30 19:00","y":"72405037.295"},{"x":"1971-10-31 18:00","y":"72528622.688"},{"x":"1971-11-30 18:00","y":"72514506.363"},{"x":"1971-12-31 18:00","y":"72551247.502"},{"x":"1972-1-31 18:00","y":"72424539.631"},{"x":"1972-2-29 18:00","y":"72393062.501"},{"x":"1972-3-31 18:00","y":"72472401.648"},{"x":"1972-4-30 19:00","y":"72671018.97"},{"x":"1972-5-31 19:00","y":"72686964.997"},{"x":"1972-6-30 19:00","y":"73263778.172"},{"x":"1972-7-31 19:00","y":"73369224.665"},{"x":"1972-8-31 19:00","y":"73438314.037"},{"x":"1972-9-30 19:00","y":"73603008.221"},{"x":"1972-10-31 18:00","y":"73615440.72"},{"x":"1972-11-30 18:00","y":"73628016.705"},{"x":"1972-12-31 18:00","y":"73816958.155"},{"x":"1973-1-31 18:00","y":"73871330.429"},{"x":"1973-2-28 18:00","y":"73779366.889"},{"x":"1973-3-31 18:00","y":"73831634.924"},{"x":"1973-4-30 19:00","y":"74006642.775"},{"x":"1973-5-31 19:00","y":"74072633.221"},{"x":"1973-6-30 19:00","y":"74018444.094"},{"x":"1973-7-31 19:00","y":"74052588.006"},{"x":"1973-8-31 19:00","y":"74184087.198"},{"x":"1973-9-30 19:00","y":"74302212.827"},{"x":"1973-10-31 18:00","y":"74408659.445"},{"x":"1973-11-30 18:00","y":"74255179.561"},{"x":"1973-12-31 18:00","y":"74360038.057"},{"x":"1974-1-31 19:00","y":"74548052.259"},{"x":"1974-2-28 19:00","y":"74517949.148"},{"x":"1974-3-31 19:00","y":"74599574.373"},{"x":"1974-4-30 19:00","y":"74749865.142"},{"x":"1974-5-31 19:00","y":"74796786.28"},{"x":"1974-6-30 19:00","y":"74691201.299"},{"x":"1974-7-31 19:00","y":"74816291.9"},{"x":"1974-8-31 19:00","y":"74851576.006"},{"x":"1974-9-30 19:00","y":"74908268.732"},{"x":"1974-10-31 18:00","y":"74927893.732"},{"x":"1974-11-30 18:00","y":"74900473.584"},{"x":"1974-12-31 18:00","y":"74915893.282"},{"x":"1975-1-31 18:00","y":"75024840.504"},{"x":"1975-2-28 19:00","y":"75052628.022"},{"x":"1975-3-31 19:00","y":"75186947.422"},{"x":"1975-4-30 19:00","y":"75338866.079"},{"x":"1975-5-31 19:00","y":"75499253.117"},{"x":"1975-6-30 19:00","y":"75509639.829"},{"x":"1975-7-31 19:00","y":"75517915.895"},{"x":"1975-8-31 19:00","y":"75587634.431"},{"x":"1975-9-30 19:00","y":"75632326.709"},{"x":"1975-10-31 18:00","y":"75654440.024"},{"x":"1975-11-30 18:00","y":"75747381.991"},{"x":"1975-12-31 18:00","y":"75797614.132"},{"x":"1976-1-31 18:00","y":"75767387.354"},{"x":"1976-2-29 18:00","y":"75839649.591"},{"x":"1976-3-31 18:00","y":"75934952.336"},{"x":"1976-4-30 19:00","y":"75977152.618"},{"x":"1976-5-31 19:00","y":"76055868.203"},{"x":"1976-6-30 19:00","y":"76112800.434"},{"x":"1976-7-31 19:00","y":"76185512.449"},{"x":"1976-8-31 19:00",
        "y":"76256924.413"},{"x":"1976-9-30 19:00","y":"76201562.561"},{"x":"1976-10-31 18:00","y":"76197022.064"},{"x":"1976-11-30 18:00","y":"76324036.395"},{"x":"1976-12-31 18:00","y":"76395623.685"},{"x":"1977-1-31 18:00","y":"76389902.734"},{"x":"1977-2-28 18:00","y":"76475249.427"},{"x":"1977-3-31 18:00","y":"76532198.654"},{"x":"1977-4-30 19:00","y":"76541345.838"},{"x":"1977-5-31 19:00","y":"76604271.685"},{"x":"1977-6-30 19:00","y":"76682972.623"},{"x":"1977-7-31 19:00","y":"76722299.932"},{"x":"1977-8-31 19:00","y":"76766096.07"},{"x":"1977-9-30 19:00","y":"76763095.843"},{"x":"1977-10-31 18:00","y":"76841921.835"},{"x":"1977-11-30 18:00","y":"76891682.316"},{"x":"1977-12-31 18:00","y":"76826018.549"},{"x":"1978-1-31 18:00","y":"76933823.877"},{"x":"1978-2-28 18:00","y":"76939166.81"},{"x":"1978-3-31 18:00","y":"77013968.603"},{"x":"1978-4-30 19:00","y":"77182504.421"},{"x":"1978-5-31 19:00","y":"77192513.011"},{"x":"1978-6-30 19:00","y":"77160035.68"},{"x":"1978-7-31 19:00","y":"77224207.069"},{"x":"1978-8-31 19:00","y":"77282976.76"},{"x":"1978-9-30 19:00","y":"77365948.025"},{"x":"1978-10-31 18:00","y":"77394169.226"},{"x":"1978-11-30 18:00","y":"77386912.504"},{"x":"1978-12-31 18:00","y":"77493636.118"},{"x":"1979-1-31 18:00","y":"77515505.219"},{"x":"1979-2-28 18:00","y":"77543550.767"},{"x":"1979-3-31 18:00","y":"77573661.281"},{"x":"1979-4-30 19:00","y":"77631549.432"},{"x":"1979-5-31 19:00","y":"77697715.202"},{"x":"1979-6-30 19:00","y":"77755705.809"},{"x":"1979-7-31 19:00","y":"77783192.944"},{"x":"1979-8-31 19:00","y":"77855896.031"},{"x":"1979-9-30 19:00","y":"77903030.588"},{"x":"1979-10-31 18:00","y":"77990397.225"},{"x":"1979-11-30 18:00","y":"78018210.639"},{"x":"1979-12-31 18:00","y":"78045798.956"},{"x":"1980-1-31 18:00","y":"78054222.725"},{"x":"1980-2-29 18:00","y":"78123758.722"},{"x":"1980-3-31 18:00","y":"78251795.044"},{"x":"1980-4-30 19:00","y":"78291796.57"},{"x":"1980-5-31 19:00","y":"78381281.896"},{"x":"1980-6-30 19:00","y":"78460680.42"},{"x":"1980-7-31 19:00","y":"78518419.835"},{"x":"1980-8-31 19:00","y":"78667749.462"},{"x":"1980-9-30 19:00","y":"78696069.958"},{"x":"1980-10-31 18:00","y":"78711317.741"},{"x":"1980-11-30 18:00","y":"78726442.891"},{"x":"1980-12-31 18:00","y":"78785575.924"},{"x":"1981-1-31 18:00","y":"78773621.818"},{"x":"1981-2-28 18:00","y":"78873550.894"},{"x":"1981-3-31 18:00","y":"78857101.539"},{"x":"1981-4-30 19:00","y":"78840822.473"},{"x":"1981-5-31 19:00","y":"78854454.144"},{"x":"1981-6-30 19:00","y":"78948282.94"},{"x":"1981-7-31 19:00","y":"78967484.117"},{"x":"1981-8-31 19:00","y":"78999074.969"},{"x":"1981-9-30 19:00","y":"79021434.591"},{"x":"1981-10-31 18:00","y":"79086392.186"},{"x":"1981-11-30 18:00","y":"79098567.69"},{"x":"1981-12-31 18:00","y":"79132154.513"},{"x":"1982-1-31 18:00","y":"79282275.096"},{"x":"1982-2-28 18:00","y":"79386808.184"},{"x":"1982-3-31 18:00","y":"79397906.512"},{"x":"1982-4-30 19:00","y":"79488915.058"},{"x":"1982-5-31 19:00","y":"79508308.581"},{"x":"1982-6-30 19:00","y":"79545021.728"},{"x":"1982-7-31 19:00","y":"79661900.111"},{"x":"1982-8-31 19:00","y":"79711234.911"},{"x":"1982-9-30 19:00","y":"79771240.369"},{"x":"1982-10-31 18:00","y":"79834727.727"},{"x":"1982-11-30 18:00","y":"79994492.509"},{"x":"1982-12-31 18:00","y":"80106897.07"},{"x":"1983-1-31 18:00","y":"80147010.583"},{"x":"1983-2-28 18:00","y":"80090172.076"},{"x":"1983-3-31 18:00","y":"80126822.407"},{"x":"1983-4-30 19:00","y":"80237911.38"},{"x":"1983-5-31 19:00","y":"80326519.775"},{"x":"1983-6-30 19:00","y":"80350384.51"},{"x":"1983-7-31 19:00","y":"80456743.004"},{"x":"1983-8-31 19:00","y":"80491880.739"},{"x":"1983-9-30 19:00","y":"80549541.463"},{"x":"1983-10-31 18:00","y":"80616682.856"},{"x":"1983-11-30 18:00","y":"80691067.5"},{"x":"1983-12-31 18:00","y":"80673824.428"},{"x":"1984-1-31 18:00","y":"80731467.076"},{"x":"1984-2-29 18:00","y":"80802137.851"},{"x":"1984-3-31 18:00","y":"80900212.201"},{"x":"1984-4-30 19:00","y":"80997720.263"},{"x":"1984-5-31 19:00","y":"81110465.216"},{"x":"1984-6-30 19:00","y":"81157835.124"},{"x":"1984-7-31 19:00","y":"81226969.198"},{"x":"1984-8-31 19:00","y":"81366843.938"},{"x":"1984-9-30 19:00","y":"81386776.636"},{"x":"1984-10-31 18:00","y":"81397414.588"},{"x":"1984-11-30 18:00","y":"81443522.444"},{"x":"1984-12-31 18:00","y":"81517293.818"},{"x":"1985-1-31 18:00","y":"81559978.797"},{"x":"1985-2-28 18:00","y":"81568407.794"},{"x":"1985-3-31 18:00","y":"81632996.254"},{"x":"1985-4-30 19:00","y":"81765210.058"},{"x":"1985-5-31 19:00","y":"81794979.495"},{"x":"1985-6-30 19:00","y":"81837237.47"},{"x":"1985-7-31 19:00","y":"81809540.312"},{"x":"1985-8-31 19:00","y":"81978899.676"},{"x":"1985-9-30 19:00","y":"82081485.102"},{"x":"1985-10-31 18:00","y":"82140956.77"},{"x":"1985-11-30 18:00","y":"82165165.01"},{"x":"1985-12-31 18:00","y":"82253597.879"},{"x":"1986-1-31 18:00","y":"82382367.374"},{"x":"1986-2-28 18:00","y":"82470736.437"},{"x":"1986-3-31 18:00","y":"82488665.371"},{"x":"1986-4-30 19:00","y":"82372958.165"},{"x":"1986-5-31 19:00","y":"82468040.993"},{"x":"1986-6-30 19:00","y":"82697277.119"},{"x":"1986-7-31 19:00","y":"82807193.387"},{"x":"1986-8-31 19:00","y":"82879025.857"},{"x":"1986-9-30 19:00","y":"82948897.854"},{"x":"1986-10-31 18:00","y":"82930893.798"},{"x":"1986-11-30 18:00","y":"83005031.243"},{"x":"1986-12-31 18:00","y":"83035682.89"},{"x":"1987-1-31 18:00","y":"83089322.899"},{"x":"1987-2-28 18:00","y":"83261784.088"},{"x":"1987-3-31 18:00","y":"83313800.285"},{"x":"1987-4-30 19:00","y":"83318357.063"},{"x":"1987-5-31 19:00","y":"83392893.478"},{"x":"1987-6-30 19:00","y":"83492570.699"},{"x":"1987-7-31 19:00","y":"83614264.661"},{"x":"1987-8-31 19:00","y":"83571264.042"},{"x":"1987-9-30 19:00","y":"83646045.017"},{"x":"1987-10-31 18:00","y":"83814788.846"},{"x":"1987-11-30 18:00","y":"83932551.046"},{"x":"1987-12-31 18:00","y":"84002061.111"},{"x":"1988-1-31 18:00","y":"83995418.922"},{"x":"1988-2-29 18:00","y":"83986554.34"},{"x":"1988-3-31 18:00","y":"84176538.443"},{"x":"1988-4-30 19:00","y":"84306383.14"},{"x":"1988-5-31 19:00","y":"84275839.267"},{"x":"1988-6-30 19:00","y":"84350169.399"},{"x":"1988-7-31 19:00","y":"84369447.966"},{"x":"1988-8-31 19:00","y":"84433244.437"},{"x":"1988-9-30 19:00","y":"84503562.494"},{"x":"1988-10-31 18:00","y":"84643228.292"},{"x":"1988-11-30 18:00","y":"84685297.682"},{"x":"1988-12-31 18:00","y":"84665598.867"},{"x":"1989-1-31 18:00","y":"84738118.77"},{"x":"1989-2-28 18:00","y":"84813913.903"},{"x":"1989-3-31 18:00","y":"84849776.994"},{"x":"1989-4-30 19:00","y":"84955336.613"},{"x":"1989-5-31 19:00","y":"85059104.959"},{"x":"1989-6-30 19:00","y":"85162097.65"},{"x":"1989-7-31 19:00","y":"85166496.474"},{"x":"1989-8-31 19:00","y":"85226018.321"},{"x":"1989-9-30 19:00","y":"85254032.447"},{"x":"1989-10-31 18:00","y":"85296869.992"},{"x":"1989-11-30 18:00","y":"85389617.615"},{"x":"1989-12-31 18:00","y":"85408941.413"},{"x":"1990-1-31 18:00","y":"85443158.102"},{"x":"1990-2-28 18:00","y":"85476645.384"},{"x":"1990-3-31 18:00","y":"85491529.212"},{"x":"1990-4-30 19:00","y":"85640564.835"},{"x":"1990-5-31 19:00","y":"85665177.626"},{"x":"1990-6-30 19:00","y":"85634564.14"},{"x":"1990-7-31 19:00","y":"85640555.833"},{"x":"1990-8-31 19:00","y":"85809571.438"},{"x":"1990-9-30 19:00","y":"85914886.281"},{"x":"1990-10-31 18:00","y":"85797656.165"},{"x":"1990-11-30 18:00","y":"85788142.31"},{"x":"1990-12-31 18:00","y":"85915895.619"},{"x":"1991-1-31 18:00","y":"85927397.693"},{"x":"1991-2-28 18:00","y":"86071765.577"},{"x":"1991-3-31 18:00","y":"86115499.617"},{"x":"1991-4-30 19:00","y":"86050983.163"},{"x":"1991-5-31 19:00","y":"86136053.878"},{"x":"1991-6-30 19:00","y":"86162981.006"},{"x":"1991-7-31 19:00","y":"86274176.408"},{"x":"1991-8-31 19:00","y":"86323249.446"},{"x":"1991-9-30 19:00","y":"86246315.975"},{"x":"1991-10-31 18:00","y":"86243842.446"},{"x":"1991-11-30 18:00","y":"86245662.124"},{"x":"1991-12-31 18:00","y":"86308590.54"},{"x":"1992-1-31 18:00","y":"86436587.106"},{"x":"1992-2-29 18:00","y":"86381538.868"},{"x":"1992-3-31 18:00","y":"86305441.976"},{"x":"1992-4-30 19:00","y":"86335117.4"},{"x":"1992-5-31 19:00","y":"86418558.533"},{"x":"1992-6-30 19:00","y":"86474282.331"},{"x":"1992-7-31 19:00","y":"86560233.316"},{"x":"1992-8-31 19:00","y":"86533561.719"},{"x":"1992-9-30 19:00","y":"86603666.807"},{"x":"1992-10-31 18:00","y":"86684263.839"},{"x":"1992-11-30 18:00","y":"86673265.305"},{"x":"1992-12-31 18:00","y":"86667962.163"},{"x":"1993-1-31 18:00","y":"86677917.538"},{"x":"1993-2-28 18:00","y":"86685407.755"},{"x":"1993-3-31 18:00","y":"86732376.329"},{"x":"1993-4-30 19:00","y":"86759135.277"},{"x":"1993-5-31 19:00","y":"86759428.776"},{"x":"1993-6-30 19:00","y":"86793034.792"},{"x":"1993-7-31 19:00","y":"86836976.258"},{"x":"1993-8-31 19:00","y":"86793477.14"},{"x":"1993-9-30 19:00","y":"86825431.759"},{"x":"1993-10-31 18:00","y":"86918086.848"},{"x":"1993-11-30 18:00","y":"86950030.628"},{"x":"1993-12-31 18:00","y":"86899667.859"},{"x":"1994-1-31 18:00","y":"86844939.122"},{"x":"1994-2-28 18:00","y":"86845117.195"},{"x":"1994-3-31 18:00","y":"86897083.596"},{"x":"1994-4-30 19:00","y":"86935261.586"},{"x":"1994-5-31 19:00","y":"86869618.18"},{"x":"1994-6-30 19:00","y":"86869952.998"},{"x":"1994-7-31 19:00","y":"86922492.253"},{"x":"1994-8-31 19:00","y":"86920719.475"},{"x":"1994-9-30 19:00","y":"86899123.249"},{"x":"1994-10-31 18:00","y":"86894520.929"},{"x":"1994-11-30 18:00","y":"86914155.906"},{"x":"1994-12-31 18:00","y":"86924604.293"},{"x":"1995-1-31 18:00","y":"86894112.377"},{"x":"1995-2-28 18:00","y":"86978549.697"},{"x":"1995-3-31 18:00","y":"86969008.732"},{"x":"1995-4-30 19:00","y":"86922248.783"},{"x":"1995-5-31 19:00","y":"86937056.014"},{"x":"1995-6-30 19:00","y":"86906227.093"},{"x":"1995-7-31 19:00","y":"86878822.63"},{"x":"1995-8-31 19:00","y":"86892722.216"},{"x":"1995-9-30 19:00","y":"86887659.226"},{"x":"1995-10-31 18:00","y":"86913631.689"},{"x":"1995-11-30 18:00","y":"86884037.361"},{"x":"1995-12-31 18:00","y":"86837095.083"},{"x":"1996-1-31 18:00","y":"86827967.213"},{"x":"1996-2-29 18:00","y":"86794480.868"},{"x":"1996-3-31 18:00","y":"86815046.215"},{"x":"1996-4-30 19:00","y":"86785519.13"},
        {"x":"1996-5-31 19:00","y":"86831735.474"},{"x":"1996-6-30 19:00","y":"86816954.833"},{"x":"1996-7-31 19:00","y":"86783760.708"},{"x":"1996-8-31 19:00","y":"86791274.542"},{"x":"1996-9-30 19:00","y":"86766613.495"},{"x":"1996-10-31 18:00","y":"86724944.464"},{"x":"1996-11-30 18:00","y":"86711748.16"},{"x":"1996-12-31 18:00","y":"86946563.133"},{"x":"1997-1-31 18:00","y":"86942135.609"},{"x":"1997-2-28 18:00","y":"86933464.659"},{"x":"1997-3-31 18:00","y":"86909121.711"},{"x":"1997-4-30 19:00","y":"86907060.919"},{"x":"1997-5-31 19:00","y":"86947330.442"},{"x":"1997-6-30 19:00","y":"86900465.726"},{"x":"1997-7-31 19:00","y":"86843573.024"},{"x":"1997-8-31 19:00","y":"86884395.968"},{"x":"1997-9-30 19:00","y":"86884987.804"},{"x":"1997-10-31 18:00","y":"86809207.164"},{"x":"1997-11-30 18:00","y":"86806286.257"},{"x":"1997-12-31 18:00","y":"86780421.442"},{"x":"1998-1-31 18:00","y":"86827690.019"},{"x":"1998-2-28 18:00","y":"86851350.672"},{"x":"1998-3-31 18:00","y":"86810976.798"},{"x":"1998-4-30 19:00","y":"86790177.209"},{"x":"1998-5-31 19:00","y":"86799118.937"},{"x":"1998-6-30 19:00","y":"86839862.52"},{"x":"1998-7-31 19:00","y":"86866474.616"},{"x":"1998-8-31 19:00","y":"86796402.171"},{"x":"1998-9-30 19:00","y":"86787972.997"},{"x":"1998-10-31 18:00","y":"86778572.522"},{"x":"1998-11-30 18:00","y":"86706771.026"},{"x":"1998-12-31 18:00","y":"86689580.877"},{"x":"1999-1-31 18:00","y":"86671031.373"},{"x":"1999-2-28 18:00","y":"86630811.682"},{"x":"1999-3-31 18:00","y":"86639577.765"},{"x":"1999-4-30 19:00","y":"86609628.225"},{"x":"1999-5-31 19:00","y":"86562799.212"},{"x":"1999-6-30 19:00","y":"86601161.85"},{"x":"1999-7-31 19:00","y":"86665531.744"},{"x":"1999-8-31 19:00","y":"86660996.427"},{"x":"1999-9-30 19:00","y":"86599360.038"},{"x":"1999-10-31 18:00","y":"86590766.816"},{"x":"1999-11-30 18:00","y":"86612421.052"},{"x":"1999-12-31 18:00","y":"86536820.822"},{"x":"2000-1-31 18:00","y":"86583599.657"},{"x":"2000-2-29 18:00","y":"86467480.151"},{"x":"2000-3-31 18:00","y":"86521025.351"},{"x":"2000-4-30 19:00","y":"86495201.353"},{"x":"2000-5-31 19:00","y":"86450961.517"},{"x":"2000-6-30 19:00","y":"86402076.099"},{"x":"2000-7-31 19:00","y":"86364435.032"},{"x":"2000-8-31 19:00","y":"86398147.522"},{"x":"2000-9-30 19:00","y":"86353638.183"},{"x":"2000-10-31 18:00","y":"86354753.044"},{"x":"2000-11-30 18:00","y":"86379560.319"},{"x":"2000-12-31 18:00","y":"86316372.084"},{"x":"2001-1-31 18:00","y":"86234342.068"},{"x":"2001-2-28 18:00","y":"86213700.285"},{"x":"2001-3-31 18:00","y":"86211879.523"},{"x":"2001-4-30 19:00","y":"86211917.448"},{"x":"2001-5-31 19:00","y":"86146036.542"},{"x":"2001-6-30 19:00","y":"86158340.655"},{"x":"2001-7-31 19:00","y":"86114585.105"},{"x":"2001-8-31 19:00","y":"86035651.42"},{"x":"2001-9-30 19:00","y":"86085564.067"},{"x":"2001-10-31 18:00","y":"86191046.353"},{"x":"2001-11-30 18:00","y":"86148564.202"},{"x":"2001-12-31 18:00","y":"85950015.631"},{"x":"2002-1-31 18:00","y":"85926472.426"},{"x":"2002-2-28 18:00","y":"85837510.913"},{"x":"2002-3-31 18:00","y":"85714492.014"},{"x":"2002-4-30 19:00","y":"85672389.639"},{"x":"2002-5-31 19:00","y":"85734921.558"},{"x":"2002-6-30 19:00","y":"85697702.938"},{"x":"2002-7-31 19:00","y":"85629971.826"},{"x":"2002-8-31 19:00","y":"85635159.105"},{"x":"2002-9-30 19:00","y":"85610567.927"},{"x":"2002-10-31 18:00","y":"85463221.022"},{"x":"2002-11-30 18:00","y":"85427542.206"},{"x":"2002-12-31 18:00","y":"85377867.975"},{"x":"2003-1-31 18:00","y":"85340866.194"},{"x":"2003-2-28 18:00","y":"85394881.216"},{"x":"2003-3-31 18:00","y":"85281012.929"},{"x":"2003-4-30 19:00","y":"85301017.281"},{"x":"2003-5-31 19:00","y":"85438602.927"},{"x":"2003-6-30 19:00","y":"85324072.275"},{"x":"2003-7-31 19:00","y":"85265140.604"},{"x":"2003-8-31 19:00","y":"85262364.357"},{"x":"2003-9-30 19:00","y":"85202799.831"},{"x":"2003-10-31 18:00","y":"85237487.186"},{"x":"2003-11-30 18:00","y":"85179813.879"},{"x":"2003-12-31 18:00","y":"85191817.608"},{"x":"2004-1-31 18:00","y":"85098234.13"},{"x":"2004-2-29 18:00","y":"85140543.602"},{"x":"2004-3-31 18:00","y":"85282058.195"},{"x":"2004-4-30 19:00","y":"85129628.752"},{"x":"2004-5-31 19:00","y":"84926462.514"},{"x":"2004-6-30 19:00","y":"84978868.275"},{"x":"2004-7-31 19:00","y":"84979516.15"},{"x":"2004-8-31 19:00","y":"84881282.88"},{"x":"2004-9-30 19:00","y":"84813060.211"},{"x":"2004-10-31 18:00","y":"84766904.645"},{"x":"2004-11-30 18:00","y":"84779649.359"},{"x":"2004-12-31 18:00","y":"84774670.119"},{"x":"2005-1-31 18:00","y":"84743082.944"},{"x":"2005-2-28 18:00","y":"84602515.09"},{"x":"2005-3-31 18:00","y":"84574720.778"},{"x":"2005-4-30 19:00","y":"84635392.271"},{"x":"2005-5-31 19:00","y":"84511587.981"},{"x":"2005-6-30 19:00","y":"84489950.12"},{"x":"2005-7-31 19:00","y":"84455430.452"},{"x":"2005-8-31 19:00","y":"84449762.405"},{"x":"2005-9-30 19:00","y":"84381256.781"},{"x":"2005-10-31 18:00","y":"84222674.74"},{"x":"2005-11-30 18:00","y":"84187685.627"},{"x":"2005-12-31 18:00","y":"84196148.207"},{"x":"2006-1-31 18:00","y":"84170759.626"},{"x":"2006-2-28 18:00","y":"84215267.15"},{"x":"2006-3-31 18:00","y":"84052349.551"},{"x":"2006-4-30 19:00","y":"84056356.482"},{"x":"2006-5-31 19:00","y":"84051718.245"},{"x":"2006-6-30 19:00","y":"83939483.173"},{"x":"2006-7-31 19:00","y":"83830945.489"},{"x":"2006-8-31 19:00","y":"83806370.735"},{"x":"2006-9-30 19:00","y":"83752730.056"},{"x":"2006-10-31 18:00","y":"83710607.141"},{"x":"2006-11-30 18:00","y":"83547075.735"},{"x":"2006-12-31 18:00","y":"83406752.493"},{"x":"2007-1-31 18:00","y":"83438676.599"},{"x":"2007-2-28 18:00","y":"83419210.555"},{"x":"2007-3-31 19:00","y":"83412522.861"},{"x":"2007-4-30 19:00","y":"83290353.604"},{"x":"2007-5-31 19:00","y":"83306286.308"},{"x":"2007-6-30 19:00","y":"83201168.333"},{"x":"2007-7-31 19:00","y":"83090716.625"},{"x":"2007-8-31 19:00","y":"83002742.948"},{"x":"2007-9-30 19:00","y":"83031827.046"},{"x":"2007-10-31 19:00","y":"83017891.142"},{"x":"2007-11-30 18:00","y":"82994832.63"},{"x":"2007-12-31 18:00","y":"82928748.373"},{"x":"2008-1-31 18:00","y":"82839767.382"},{"x":"2008-2-29 18:00","y":"82817448.662"},{"x":"2008-3-31 19:00","y":"82802738.61"},{"x":"2008-4-30 19:00","y":"82785661.781"},{"x":"2008-5-31 19:00","y":"82722216.426"},{"x":"2008-6-30 19:00","y":"82639456.659"},{"x":"2008-7-31 19:00","y":"82537545.518"},{"x":"2008-8-31 19:00","y":"82452262.771"},{"x":"2008-9-30 19:00","y":"82353217.237"},{"x":"2008-10-31 19:00","y":"82361952.594"},{"x":"2008-11-30 18:00","y":"82341937.938"},{"x":"2008-12-31 18:00","y":"82227860.579"},{"x":"2009-1-31 18:00","y":"82108455.134"},{"x":"2009-2-28 18:00","y":"82099672.213"},{"x":"2009-3-31 19:00","y":"82091134.151"},{"x":"2009-4-30 19:00","y":"82003055.991"},{"x":"2009-5-31 19:00","y":"81905668.502"},{"x":"2009-6-30 19:00","y":"81945037.028"},{"x":"2009-7-31 19:00","y":"81935537.495"},{"x":"2009-8-31 19:00","y":"81865283.599"},{"x":"2009-9-30 19:00","y":"81748969.609"},{"x":"2009-10-31 19:00","y":"81704724.035"},{"x":"2009-11-30 18:00","y":"81666051.604"},{"x":"2009-12-31 18:00","y":"81583684.952"},{"x":"2010-1-31 18:00","y":"81519763.713"},{"x":"2010-2-28 18:00","y":"81669655.227"},{"x":"2010-3-31 19:00","y":"81546600.888"},{"x":"2010-4-30 19:00","y":"81533661.267"},{"x":"2010-5-31 19:00","y":"81517839.274"},{"x":"2010-6-30 19:00","y":"81482968.72"},{"x":"2010-7-31 19:00","y":"81542063.086"},{"x":"2010-8-31 19:00","y":"81484017.776"},{"x":"2010-9-30 19:00","y":"81406027.889"},{"x":"2010-10-31 19:00","y":"81336000.427"},{"x":"2010-11-30 18:00","y":"81375555.31"},{"x":"2010-12-31 18:00","y":"81277958.237"},{"x":"2011-1-31 18:00","y":"81318085.431"},{"x":"2011-2-28 18:00","y":"80632961.25"},{"x":"2011-3-31 19:00","y":"80586048.318"},{"x":"2011-4-30 19:00","y":"80587408.536"},{"x":"2011-5-31 19:00","y":"80509001.875"},{"x":"2011-6-30 19:00","y":"80467921.44"},{"x":"2011-7-31 19:00","y":"80212076.485"},{"x":"2011-8-31 19:00","y":"81034535.55932"},{"x":"2011-9-30 19:00","y":"81124888.72916"},{"x":"2011-10-31 19:00","y":"81135468.45655"},{"x":"2011-11-30 18:00","y":"81062304.64325"},{"x":"2011-12-31 18:00","y":"80908487.56107"},{"x":"2012-1-31 18:00","y":"80804513.59095"},{"x":"2012-2-29 18:00","y":"80776856.28859"},{"x":"2012-3-31 19:00","y":"80784823.13103"},{"x":"2012-4-30 19:00","y":"80624670.08362"},{"x":"2012-5-31 19:00","y":"80632205.90609"},{"x":"2012-6-30 19:00","y":"80597165.39975"},{"x":"2012-7-31 19:00","y":"80411184.12935"},{"x":"2012-8-31 19:00","y":"80158297.63544"},{"x":"2012-9-30 19:00","y":"80176269.51101"},{"x":"2012-10-31 19:00","y":"80098724.51113"},{"x":"2012-11-30 18:00","y":"79856802.25197"},{"x":"2012-12-31 18:00","y":"79688452.98848"},{"x":"2013-1-31 18:00","y":"79633355.16082"},{"x":"2013-2-28 18:00","y":"79601730.73591"},{"x":"2013-3-31 19:00","y":"79628011.99532"},{"x":"2013-4-30 19:00","y":"79463597.9638"},{"x":"2013-5-31 19:00","y":"79206677.294"},{"x":"2013-6-30 19:00","y":"79159824.24538"},{"x":"2013-7-31 19:00","y":"79196513.55499"},{"x":"2013-8-31 19:00","y":"79019155.20935"},{"x":"2013-9-30 19:00","y":"79023190.70222"},{"x":"2013-10-31 19:00","y":"79033033.55398"},{"x":"2013-11-30 18:00","y":"78816456.59576"},{"x":"2013-12-31 18:00","y":"78514580.09063"},{"x":"2014-1-31 18:00","y":"78513200.63185"},{"x":"2014-2-28 18:00","y":"78518529.72286"},{"x":"2014-3-31 19:00","y":"78374562.99357"},{"x":"2014-4-30 19:00","y":"78399659.28984"},{"x":"2014-5-31 19:00","y":"78269888.17042"},{"x":"2014-6-30 19:00","y":"78134997.07118"},{"x":"2014-7-31 19:00","y":"78022619.62886"},{"x":"2014-8-31 19:00","y":"78035034.63296"},{"x":"2014-9-30 19:00","y":"77893606.18975"},{"x":"2014-10-31 19:00","y":"77789167.59069"},{"x":"2014-11-30 18:00","y":"77784153.98739"},{"x":"2014-12-31 18:00","y":"77584747.68592"},{"x":"2015-1-31 18:00","y":"77622227.88512"},{"x":"2015-2-28 18:00","y":"77542914.61816"},{"x":"2015-3-31 19:00","y":"77313194.16669"},{"x":"2015-4-30 19:00","y":"77268164.83309"},{"x":"2015-5-31 19:00","y":"77344742.90253"},{"x":"2015-6-30 19:00","y":"77191313.23223"},{"x":"2015-7-31 19:00","y":"77120538.16323"},{"x":"2015-8-31 19:00","y":"77224963.91679"},{"x":"2015-9-30 19:00","y":"77111763.13712"},{"x":"2015-10-31 19:00","y":"76853990.90111"},
        {"x":"2015-11-30 18:00","y":"76931438.55801"},{"x":"2015-12-31 18:00","y":"76971928.54496"},{"x":"2016-1-31 18:00","y":"76744097.00532"},{"x":"2016-2-29 18:00","y":"76651215.77526"},{"x":"2016-3-31 19:00","y":"76596027.83145"},{"x":"2016-4-30 19:00","y":"76473957.99801"},{"x":"2016-5-31 19:00","y":"76493794.8875"},{"x":"2016-6-30 19:00","y":"76570036.37256"},{"x":"2016-7-31 19:00","y":"76579771.9595"},{"x":"2016-8-31 19:00","y":"76458331.46038"},{"x":"2016-9-30 19:00","y":"76379726.87485"},{"x":"2016-10-31 19:00","y":"76322043.18749"},{"x":"2016-11-30 18:00","y":"76429068.10273"},{"x":"2016-12-31 18:00","y":"76461579.22068"},{"x":"2017-1-31 18:00","y":"76148679.65637"},{"x":"2017-2-28 18:00","y":"76006767.98088"},{"x":"2017-3-31 19:00","y":"76192204.4405"},{"x":"2017-4-30 19:00","y":"76336125.32596"},{"x":"2017-5-31 19:00","y":"76237615.35845"},{"x":"2017-6-30 19:00","y":"76223588.19542"},{"x":"2017-7-31 19:00","y":"76135618.5963"},{"x":"2017-8-31 19:00","y":"76058988.37343"},{"x":"2017-9-30 19:00","y":"75889616.23664"},{"x":"2017-10-31 19:00","y":"75878627.90705"},{"x":"2017-11-30 18:00","y":"75850588.70831"},{"x":"2017-12-31 18:00","y":"75775785.4944"},{"x":"2018-1-31 18:00","y":"75821654.90327"},{"x":"2018-2-28 18:00","y":"75897258.46906"},{"x":"2018-3-31 19:00","y":"75957596.95921"},{"x":"2018-4-30 19:00","y":"75789438.71359"},{"x":"2018-5-31 19:00","y":"75703415.93964"},{"x":"2018-6-30 19:00","y":"75656108.51203"},{"x":"2018-7-31 19:00","y":"75563531.86708"},{"x":"2018-8-31 19:00","y":"75501348.99017"},{"x":"2018-9-30 19:00","y":"75564108.97364"},{"x":"2018-10-31 19:00","y":"75550598.54162"},{"x":"2018-11-30 18:00","y":"75319152.63629"},{"x":"2018-12-31 18:00","y":"75272767.73636"},{"x":"2019-1-31 18:00","y":"75352808.46528"},{"x":"2019-2-28 18:00","y":"75426578.98983"},{"x":"2019-3-31 19:00","y":"75419531.87973"},{"x":"2019-4-30 19:00","y":"75361524.25622"},{"x":"2019-5-31 19:00","y":"75360389.38121"},{"x":"2019-6-30 19:00","y":"75312550.29754"},{"x":"2019-7-31 19:00","y":"75274807.59782"},{"x":"2019-8-31 19:00","y":"75304569.22662"},{"x":"2019-9-30 19:00","y":"75372917.70368"},{"x":"2019-10-31 19:00","y":"75185562.26686"},{"x":"2019-11-30 18:00","y":"75085992.19885"},{"x":"2019-12-31 18:00","y":"75089513.11043"},{"x":"2020-1-31 18:00","y":"75107983.08359"},{"x":"2020-2-29 18:00","y":"75053389.28522"},{"x":"2020-3-31 19:00","y":"74999842.0566"},{"x":"2020-4-30 19:00","y":"75043392.89173"},{"x":"2020-5-31 19:00","y":"75021104.4523"},{"x":"2020-6-30 19:00","y":"74904982.29916"},{"x":"2020-7-31 19:00","y":"74924176.4416"},{"x":"2020-8-31 19:00","y":"74910787.51532"},{"x":"2020-9-30 19:00","y":"74920028.31693"},{"x":"2020-10-31 19:00","y":"74997654.84582"},{"x":"2020-11-30 18:00","y":"74857145.7013"},{"x":"2020-12-31 18:00","y":"74877647.61755"},{"x":"2021-1-31 18:00","y":"74792436.54979"},{"x":"2021-2-28 18:00","y":"74581874.19195"},{"x":"2021-3-31 19:00","y":"74780129.93899"},{"x":"2021-4-30 19:00","y":"74725561.68961"},{"x":"2021-5-31 19:00","y":"74604721.79989"},{"x":"2021-6-30 19:00","y":"74718116.44967"},{"x":"2021-7-31 19:00","y":"74607776.58504"},{"x":"2021-8-31 19:00","y":"74347895.79663"},{"x":"2021-9-30 19:00","y":"74008446.44611"},{"x":"2021-10-31 19:00","y":"73996645.60197"},{"x":"2021-11-30 18:00","y":"74168747.33281"},{"x":"2021-12-31 18:00","y":"74094874.9968"},{"x":"2022-1-31 18:00","y":"74000975.23949"},{"x":"2022-2-28 18:00","y":"74032874.1261"},{"x":"2022-3-31 19:00","y":"74469468.908"},{"x":"2022-4-30 19:00","y":"74326431.9375"}]
      },
    ]);

  return <ReactApexChart options={options} series={series} type="area" height={100} />;
};

export default JapanLaborForceSizeChart;