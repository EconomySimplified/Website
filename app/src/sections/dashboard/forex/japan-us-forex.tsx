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

const JapanForexRateChart = () => {
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
      name: 'Japanese Yen/US Dollar',
      data: [{"x":"2022-6-30","y":"135.23"},{"x":"2022-7-2","y":"135.25"},{"x":"2022-7-5","y":"135.89"},{"x":"2022-7-7","y":"136.22"},{"x":"2022-7-10","y":"137.34"},{"x":"2022-7-11","y":"136.86"},{"x":"2022-7-13","y":"138.98"},{"x":"2022-7-14","y":"138.7"},{"x":"2022-7-15","y":"138.53"},{"x":"2022-7-16","y":"138.55"},{"x":"2022-7-17","y":"138.14"},{"x":"2022-7-18","y":"138.24"},{"x":"2022-7-19","y":"138.18"},{"x":"2022-7-20","y":"137.96"},{"x":"2022-7-21","y":"136.14"},{"x":"2022-7-22","y":"136.12"},{"x":"2022-7-23","y":"136.1"},{"x":"2022-7-24","y":"136.78"},{"x":"2022-7-25","y":"136.64"},{"x":"2022-7-26","y":"137.32"},{"x":"2022-7-27","y":"134.45"},{"x":"2022-7-28","y":"133.27"},{"x":"2022-7-29","y":"133.23"},{"x":"2022-7-30","y":"133.29"},{"x":"2022-7-31","y":"131.76"},{"x":"2022-8-1","y":"132.97"},{"x":"2022-8-2","y":"134.22"},{"x":"2022-8-3","y":"133.29"},{"x":"2022-8-4","y":"135.36"},{"x":"2022-8-5","y":"135.02"},{"x":"2022-8-6","y":"134.98"},{"x":"2022-8-7","y":"134.76"},{"x":"2022-8-8","y":"134.97"}]
    }
  ]);

  return <ReactApexChart options={options} series={series} type="area" height={100} />;
};

export default JapanForexRateChart;
