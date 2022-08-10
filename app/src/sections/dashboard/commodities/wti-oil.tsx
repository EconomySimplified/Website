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

const WTIOilChart = () => {
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
      name: 'West Texas Intermediate Oil Price',
      data: [{"x":"2022-7-11 19:00","y":"95.58"},{"x":"2022-7-13 16:52","y":"96.35"},{"x":"2022-7-14 16:19","y":"96.45"},{"x":"2022-7-14 17:16","y":"96.21"},{"x":"2022-7-14 17:17","y":"96.21"},{"x":"2022-7-15 3:30","y":"95.11"},{"x":"2022-7-15 7:00","y":"97.24"},{"x":"2022-7-16 3:30","y":"97.59"},{"x":"2022-7-16 7:00","y":"97.59"},{"x":"2022-7-17 3:30","y":"97.59"},{"x":"2022-7-17 7:00","y":"97.59"},{"x":"2022-7-18 3:30","y":"99.81"},{"x":"2022-7-18 7:00","y":"98.6"},{"x":"2022-7-19 3:30","y":"102.95"},{"x":"2022-7-19 7:00","y":"100.22"},{"x":"2022-7-19 14:32","y":"103.98"},{"x":"2022-7-19 15:31","y":"104.1"},{"x":"2022-7-19 15:42","y":"103.91"},{"x":"2022-7-20 7:30","y":"102.6"},{"x":"2022-7-20 7:35","y":"102.61"},{"x":"2022-7-20 7:40","y":"102.24"},{"x":"2022-7-20 7:45","y":"102.33"},{"x":"2022-7-20 7:50","y":"102.33"},{"x":"2022-7-20 7:55","y":"102.25"},{"x":"2022-7-20 11:00","y":"103.25"},{"x":"2022-7-20 11:50","y":"103.43"},{"x":"2022-7-20 11:10","y":"103.5"},{"x":"2022-7-20 11:15","y":"103.5"},{"x":"2022-7-20 11:20","y":"103.52"},{"x":"2022-7-20 11:25","y":"103.93"},{"x":"2022-7-21 7:30","y":"95.21"},{"x":"2022-7-21 7:35","y":"95.61"},{"x":"2022-7-21 7:40","y":"96.09"},{"x":"2022-7-21 7:45","y":"95.91"},{"x":"2022-7-21 11:00","y":"96.33"},{"x":"2022-7-21 11:50","y":"96.59"},{"x":"2022-7-21 11:10","y":"97"},{"x":"2022-7-21 11:15","y":"97"},{"x":"2022-7-22 7:30","y":"95.36"},{"x":"2022-7-22 7:35","y":"95.65"},{"x":"2022-7-22 7:40","y":"95.81"},{"x":"2022-7-22 7:45","y":"95.84"},{"x":"2022-7-22 11:00","y":"96.93"},{"x":"2022-7-22 11:50","y":"96.99"},{"x":"2022-7-22 11:10","y":"97.04"},{"x":"2022-7-22 11:15","y":"97.33"},{"x":"2022-7-23 7:30","y":"94.7"},{"x":"2022-7-23 7:35","y":"94.7"},{"x":"2022-7-23 7:40","y":"94.7"},{"x":"2022-7-23 7:45","y":"94.7"},{"x":"2022-7-23 11:00","y":"94.7"},{"x":"2022-7-23 11:50","y":"94.7"},{"x":"2022-7-23 11:10","y":"94.7"},{"x":"2022-7-23 11:15","y":"94.7"},{"x":"2022-7-24 7:35","y":"94.7"},{"x":"2022-7-24 7:40","y":"94.7"},{"x":"2022-7-24 7:45","y":"94.7"},{"x":"2022-7-24 11:00","y":"94.7"},{"x":"2022-7-24 11:50","y":"94.7"},{"x":"2022-7-24 11:10","y":"94.7"},{"x":"2022-7-24 11:15","y":"94.7"},{"x":"2022-7-25 7:30","y":"96.19"},{"x":"2022-7-25 7:35","y":"96.29"},{"x":"2022-7-25 7:40","y":"96.21"},{"x":"2022-7-25 7:45","y":"96.15"},{"x":"2022-7-25 11:00","y":"96.58"},{"x":"2022-7-25 11:50","y":"96.47"},{"x":"2022-7-25 11:10","y":"96.44"},{"x":"2022-7-25 11:15","y":"96.37"},{"x":"2022-7-26 7:30","y":"98.56"},{"x":"2022-7-26 7:35","y":"98.56"},{"x":"2022-7-26 7:40","y":"98.56"},{"x":"2022-7-26 7:45","y":"98.27"},{"x":"2022-7-26 11:00","y":"95.68"},{"x":"2022-7-26 11:50","y":"95.54"},{"x":"2022-7-26 11:10","y":"95.47"},{"x":"2022-7-26 11:15","y":"95.46"},{"x":"2022-7-27 7:30","y":"95.92"},{"x":"2022-7-27 7:35","y":"95.95"},{"x":"2022-7-27 7:40","y":"95.92"},{"x":"2022-7-27 7:45","y":"95.98"}]
    },
  ]);

  return <ReactApexChart options={options} series={series} type="area" height={100} />;
};

export default WTIOilChart;
