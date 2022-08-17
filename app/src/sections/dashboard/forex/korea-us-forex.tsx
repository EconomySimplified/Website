import { useState, useEffect } from 'react';

// next
import dynamic from 'next/dynamic';

// material-ui
import { useTheme } from '@mui/material/styles';

// project import
import useConfig from 'hooks/useConfig';

// third-party
import { Props as ChartProps } from 'react-apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// ==============================|| MARKETING CARD CHART ||============================== //

const KoreaForexRateChart = () => {
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
            opacityTo: 1
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
          return `${val}`;
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
      name: 'Korean Won/US Dollar',
      data: [{"x":"2022-6-30","y":"1298.89"},{"x":"2022-7-2","y":"1298.9"},{"x":"2022-7-5","y":"1304.64"},{"x":"2022-7-7","y":"1294.68"},{"x":"2022-7-10","y":"1311"},{"x":"2022-7-11","y":"1306.23"},{"x":"2022-7-13","y":"1317.23"},{"x":"2022-7-14","y":"1326.81"},{"x":"2022-7-15","y":"1318.75"},{"x":"2022-7-16","y":"1318.43"},{"x":"2022-7-17","y":"1316.14"},{"x":"2022-7-18","y":"1306.57"},{"x":"2022-7-19","y":"1310.58"},{"x":"2022-7-20","y":"1312.95"},{"x":"2022-7-21","y":"1309.2"},{"x":"2022-7-22","y":"1310.5"},{"x":"2022-7-23","y":"1310.38"},{"x":"2022-7-24","y":"1311.5"},{"x":"2022-7-25","y":"1311.44"},{"x":"2022-7-26","y":"1313.96"},{"x":"2022-7-27","y":"1300.84"},{"x":"2022-7-28","y":"1306.37"},{"x":"2022-7-29","y":"1303.51"},{"x":"2022-7-30","y":"1303.5"},{"x":"2022-7-31","y":"1305.17"},{"x":"2022-8-1","y":"1313.96"},{"x":"2022-8-2","y":"1309.98"},{"x":"2022-8-3","y":"1305.56"},{"x":"2022-8-4","y":"1305.14"},{"x":"2022-8-5","y":"1302.49"},{"x":"2022-8-6","y":"1302.2"},{"x":"2022-8-7","y":"1300.77"},{"x":"2022-8-8","y":"1306.72"}]
    }
  ]);

  return <ReactApexChart options={options} series={series} type="area" height={100} />;
};

export default KoreaForexRateChart;